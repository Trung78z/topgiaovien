import fs from "node:fs/promises";
import express from "express";
import { Transform } from "node:stream";
import { configDotenv } from "dotenv";
import path from "node:path";
configDotenv();
// Constants
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.VITE_PORT || 5173;
const base = process.env.BASE || "/";
const ABORT_DELAY = 10000;

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile("./dist/client/index.html", "utf-8")
  : "";
const ssrManifest = isProduction
  ? await fs.readFile("./dist/client/.vite/ssr-manifest.json", "utf-8")
  : undefined;

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(base, sirv("./dist/client", { extensions: [] }));
}
app.get("/sitemap.xml", async (req, res) => {
  try {
    const sitemap = await fs.readFile("./public/sitemap.xml", "utf-8");
    res.header("Content-Type", "application/xml");
    res.send(sitemap);
  } catch (error) {
    res.status(500).send("Error generating sitemap");
  }
});

// Serve robots.txt
app.get("/robots.txt", async (req, res) => {
  try {
    const robots = await fs.readFile("./public/robots.txt", "utf-8");
    res.header("Content-Type", "text/plain");
    res.send(robots);
  } catch (error) {
    res.status(500).send("Error generating robots.txt");
  }
});
app.get(
  [
    "/login",
    "/register",
    "/chinh-sua-thong-tin",
    "/them-chia-se",
    "/chinh-sua-chung-chi",
    "/doi-mat-khau",
    "/chinh-sua",
  ],
  async (req, res) => {
    try {
      const template = isProduction
        ? templateHtml
        : await fs.readFile("./index.html", "utf-8");

      if (!isProduction) {
        const transformedTemplate = await vite.transformIndexHtml(
          req.url,
          template,
        );
        res
          .status(200)
          .set({ "Content-Type": "text/html" })
          .end(transformedTemplate);
      } else {
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      }
    } catch (e) {
      if (!res.headersSent) {
        vite?.ssrFixStacktrace(e);
        res.status(500).end(e.stack);
      }
    }
  },
);
// Serve HTML
app.use("*", async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, "");

    let template;
    let render;
    if (!isProduction) {
      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
    } else {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    }

    let didError = false;

    const { pipe, abort } = render(url, ssrManifest, {
      onShellError() {
        if (!res.headersSent) {
          res
            .status(500)
            .set({ "Content-Type": "text/html" })
            .send("<h1>Something went wrong</h1>");
        }
      },
      onShellReady() {
        if (!res.headersSent) {
          res.status(didError ? 500 : 200).set({ "Content-Type": "text/html" });

          const transformStream = new Transform({
            transform(chunk, encoding, callback) {
              res.write(chunk, encoding);
              callback();
            },
          });

          const [htmlStart, htmlEnd] = template.split(`<!--app-html-->`);

          res.write(htmlStart);

          transformStream.on("finish", () => {
            res.end(htmlEnd);
          });

          pipe(transformStream);
        }
      },
      onError(error) {
        didError = true;
        console.error(error);
      },
    });

    setTimeout(() => {
      abort();
    }, ABORT_DELAY);
  } catch (e) {
    if (!res.headersSent) {
      vite?.ssrFixStacktrace(e);
      res.status(500).end(e.stack);
    }
  }
});

// Start HTTP server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

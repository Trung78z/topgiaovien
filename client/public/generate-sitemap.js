import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const routes = [
  "/",
  "/dang-ki",
  "/chinh-sua",
  "/doi-mat-khau",
  "/dang-nhap",
  "/chon-giao-vien",
  "/khoa-hoc",
  "/e-learning",
  "/gioi-thieu",
  "/lich-hoc-tin-tuc",
  "/tuyen-dung",
];

// Hàm để sinh ra tệp sitemap.xml
function generateSitemap() {
  const baseUrl = "https://topgiaovien.vn";

  const urls = routes
    .map((route) => {
      return `
      <url>
        <loc>${baseUrl}${route}</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
    `;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  fs.writeFileSync(path.resolve(__dirname, "public", "sitemap.xml"), sitemap);
}

generateSitemap();

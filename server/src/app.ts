import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import RootRouter from "./routes";
import { logger } from "./logger";
import path from "path";
import { configDotenv } from "dotenv";
import { vipUser } from "./models/data/vipuser";

configDotenv();
const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: [
      "https://topgiaovien.vn",
      "https://admin.topgiaovien.vn",
      "http://localhost:5173",
      "http://localhost:4000",
      "http://localhost:3000",
      "http://localhost:4173",
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
process.env.NODE_ENV === "production" && app.set("trust proxy", true);

app.use((req, res, next) => {
  logger.info(`Nhận yêu cầu từ ip: ${req.ip} method: ${req.method} ${req.url}`);

  next();
});
app.use(express.static(path.join(__dirname + "public")));
app.use("/api", RootRouter);

export default app;

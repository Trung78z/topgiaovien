import winston from "winston";

import { configDotenv } from "dotenv";
configDotenv();
export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename:
        process.env.NODE_ENV === "production"
          ? "dist/logs/combined.log"
          : "src/logs/combined.log",
    }),
    new winston.transports.File({
      filename:
        process.env.NODE_ENV === "production"
          ? "dist/logs/errors.log"
          : "src/logs/errors.log",
      level: "error",
    }),
  ],
});

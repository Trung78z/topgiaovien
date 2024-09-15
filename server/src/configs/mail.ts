import { createTransport } from "nodemailer";
import { configDotenv } from "dotenv";
configDotenv();
export const transporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  service: "Gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

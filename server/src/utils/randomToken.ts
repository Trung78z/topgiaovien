import { randomBytes } from "crypto";

export const generateRandomToken = () => {
  return randomBytes(32).toString("hex");
};

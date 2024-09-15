import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import { UserPayload } from "../types/user";
configDotenv();

const expiresIn = process.env.NODE_ENV === "development" ? "30d" : "2d";
export const generateAccessToken = (user: UserPayload) => {
  return jwt.sign(user, process.env.JWT_SECRET as string, {
    expiresIn: expiresIn,
  });
};

export const generateRefreshToken = (user: UserPayload) => {
  return jwt.sign(user, process.env.JWT_REFRESH_SECRET as string, {
    expiresIn: "7d",
  });
};

export const verifyRefreshToken = (token: string): UserPayload | null => {
  try {
    return jwt.verify(
      token,
      process.env.JWT_REFRESH_SECRET as string
    ) as UserPayload;
  } catch {
    return null;
  }
};

export const decodedTokenGoogle = (token: string): jwt.JwtPayload | null => {
  try {
    return jwt.decode(token, { complete: true }) as jwt.JwtPayload;
  } catch {
    return null;
  }
};

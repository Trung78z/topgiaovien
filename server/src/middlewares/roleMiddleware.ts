import { Request, Response, NextFunction } from "express";

const roleMiddleware = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || req.user.role !== role) {
      return res.status(200).json({ error: "Access denied" });
    }
    next();
  };
};

export default roleMiddleware;

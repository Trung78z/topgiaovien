import { Router } from "express";
import * as authController from "../controllers/authController";
import authMiddleware from "../middlewares/authMiddleware";
const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/login-google/:access_token", authController.getAuthorGoogle);
router.post("/login-facebook", authController.getAuthorFaceBook);
router.post("/forget-password", authController.forgetPassword);
router.post("/verify-token/:token", authController.verifyToken);
router.get("/refresh-token", authController.refreshToken);
router.get("/logout", authMiddleware, authController.logout);
router.put("/:id", authController.edit);

export default router;

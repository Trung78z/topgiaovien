import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware";
import * as reviewVideoController from "../controllers/reviewImageController";
import { upload } from "../helpers/multerHelper";
const router = Router();
router.put(
  "/",
  upload.single("review"),
  authMiddleware,
  reviewVideoController.editReviewImage
);
router.get("/", reviewVideoController.getReviewImages);

export default router;

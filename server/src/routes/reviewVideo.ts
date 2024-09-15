import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware";
import * as reviewVideoController from "../controllers/reviewVideoController";
import { upload } from "../helpers/multerHelper";
const router = Router();
router.post(
  "/",
  upload.single("review"),
  authMiddleware,
  reviewVideoController.createReviewVideo
);
router.get("/", reviewVideoController.getReviewVideos);
router.get("/by/:id", reviewVideoController.getReviewVideo);
router.put(
  "/:id",
  upload.single("review"),
  authMiddleware,
  reviewVideoController.editReviewVideo
);
router.delete("/:id", authMiddleware, reviewVideoController.deleteReviewVideo);

export default router;

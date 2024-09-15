import { Router } from "express";
import { upload } from "../helpers/multerHelper";
import * as likeCommentController from "../controllers/likeCommentController";
import authMiddleware from "../middlewares/authMiddleware";
const router = Router();
router.post(
  "/comment",
  upload.single("share"),
  authMiddleware,
  likeCommentController.createComment
);
router.delete(
  "/comment/:id",
  authMiddleware,
  likeCommentController.deleteComment
);
router.post("/like", authMiddleware, likeCommentController.createLike);
router.delete("/like/:id", authMiddleware, likeCommentController.deleteLike);

export default router;

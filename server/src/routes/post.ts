import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware";
import * as postController from "../controllers/postController";
import { upload } from "../helpers/multerHelper";
const router = Router();

router.post(
  "/",
  upload.single("post"),
  authMiddleware,
  postController.createPost
);
router.get("/", postController.getPosts);
router.get("/by/:slug", postController.getPost);
router.put(
  "/:id",
  upload.single("post"),
  authMiddleware,
  postController.editPost
);
router.delete("/:id", authMiddleware, postController.deletePost);

export default router;

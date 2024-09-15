import { Response, Request } from "express";
import * as likeCommentService from "../services/likeCommentService";

export const createLike = async (req: Request, res: Response) => {
  const { commentId } = req.body;

  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.json({ success: false, msg: "Vui lòng đăng nhập!" });
    }

    const existingLike = await likeCommentService.findLikeService(
      commentId,
      userId
    );

    if (existingLike) {
      await likeCommentService.deleteLikeService(existingLike.id, userId);
      res.status(200).json({ success: true, msg: "Đã bỏ thích bình luận" });
    } else {
      await likeCommentService.createLikeService(commentId, userId);
      res.status(201).json({ success: true, msg: "Đã thích bình luận" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteLike = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.json({ success: false, msg: "Hiện tại bạn chưa đăng nhập!" });
    }
    await likeCommentService.deleteLikeService(parseInt(id), userId);
    res.status(200).json({ success: true, msg: "Deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createComment = async (req: Request, res: Response) => {
  const { content, level, parentId, teacherId } = req.body;
  const image = req.file?.filename;

  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.json({ success: false, msg: "Vui lòng đăng nhập!" });
    }
    const data = await likeCommentService.createCommentService(
      content,
      level,
      image,
      parentId,
      teacherId,
      userId
    );
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await likeCommentService.deleteCommentService(parseInt(id));
    res.status(200).json({ success: true, msg: "Deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

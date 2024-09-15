import { Response, Request } from "express";
import * as postService from "../services/postService";
import * as categories from "../services/categoryService";
export const createPost = async (req: Request, res: Response) => {
  const { content, title, categoryId, subcategoryId } = req.body;
  const filename = req.file?.filename;
  const image = filename ? filename : "";
  try {
    if (!req.user?.id) {
      return res
        .status(200)
        .json({ success: false, message: "user not authenticated" });
    }

    const cate = await categories.getCategoryService(parseInt(categoryId));
    if (!cate) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại category!" });
    }

    const findByTitle = await postService.getPostByTitleService(
      `${cate.content} ${title}`
    );
    if (findByTitle) {
      return res
        .status(200)
        .json({ success: false, msg: "Đã tồn tại tiêu đề bài viết này!" });
    }

    const data = await postService.createPostService(
      content,
      image,
      title,
      parseInt(categoryId),
      subcategoryId,
      `${cate.content} ${title}`,
      req.user.id
    );
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getPosts = async (req: Request, res: Response) => {
  try {
    const data = await postService.getPostsService();
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getPost = async (req: Request, res: Response) => {
  const { slug } = req.params;
  try {
    const data = await postService.getPostService(slug);
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editPost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { content, slug, title, categoryId, subcategoryId } = req.body;
  const filename = req.file?.filename;
  const image = filename ? filename : "";
  try {
    const dataPostOld = await postService.getPostByEditService(parseInt(id));
    if (!dataPostOld) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại bài post!" });
    }
    const data = await postService.editPostService(
      content || dataPostOld.content,
      image || dataPostOld.image,
      slug || dataPostOld.slug,
      title || dataPostOld.title,
      parseInt(categoryId),
      subcategoryId || dataPostOld.subcategoryId,
      parseInt(id)
    );
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await postService.deletePostService(parseInt(id));
    res.status(200).json({ success: true, msg: "DeleteSuccessfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

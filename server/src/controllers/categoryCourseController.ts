import { Response, Request } from "express";
import * as categories from "../services/categoryCourseService";
export const createCourseCategory = async (req: Request, res: Response) => {
  const { content } = req.body;
  try {
    const dataOld = await categories.getCategoryContentService(content);
    if (dataOld) {
      return res
        .status(200)
        .json({ success: false, msg: "Đã tồn tại categories cho khóa học!" });
    }
    const data = await categories.createCategoryService(content);
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createSubCourseCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const dataOld = await categories.getSubCategoryContentService(content);
    if (dataOld) {
      return res
        .status(200)
        .json({ success: false, msg: "Đã tồn tại categories cho khóa học!" });
    }
    const data = await categories.createSubCategoryService(
      content,
      parseInt(id)
    );
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getCourseCategories = async (req: Request, res: Response) => {
  try {
    const data = await categories.getCategoriesService();
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getCourseCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await categories.getCategoryService(parseInt(id));
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editCourseCategory = async (req: Request, res: Response) => {
  const { content } = req.body;
  const { id } = req.params;
  try {
    const dataOld = await categories.getCategoryService(parseInt(id));
    if (!dataOld) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại category!" });
    }
    const data = await categories.editCategoryService(parseInt(id), content);
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteCourseCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await categories.deleteCategoryService(parseInt(id));
    res.status(200).json({ success: true, msg: "deleteSuccessfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteSubCourseCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await categories.deleteSubCategoryService(parseInt(id));
    res.status(200).json({ success: true, msg: "deleteSuccessfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

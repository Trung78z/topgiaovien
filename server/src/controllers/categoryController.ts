import { Response, Request } from "express";
import * as categories from "../services/categoryService";
export const createCategory = async (req: Request, res: Response) => {
  const { content, icon } = req.body;
  const updatedIcon = icon.replace(
    /xmlns="http:\/\/www.w3.org\/2000\/svg"/,
    'xmlns="http://www.w3.org/2000/svg" width="24" height="24"'
  );
  try {
    const data = await categories.createCategoryService(content, updatedIcon);
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createSubCategory = async (req: Request, res: Response) => {
  const { content } = req.body;
  const { id } = req.params;
  try {
    const data = await categories.getCategoryService(parseInt(id));
    if (!data) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại category!" });
    }
    await categories.createSubCategoryService(content, data.id);
    res.status(201).json({ success: true, msg: "created!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getCategories = async (req: Request, res: Response) => {
  try {
    const data = await categories.getCategoriesService();
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await categories.getCategoryService(parseInt(id));
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editCategory = async (req: Request, res: Response) => {
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
export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await categories.getCategoryService(parseInt(id));
    if (!data) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại category!" });
    }
    await categories.deleteCategoryService(parseInt(id));
    res.status(200).json({ success: true, msg: "deleteSuccessfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteSubCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await categories.getSubCategoryService(parseInt(id));
    if (!data) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại subCategory!" });
    }
    await categories.deleteSUbCategoryService(parseInt(id));
    res.status(200).json({ success: true, msg: "deleteSuccessfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createCategoryVip = async (req: Request, res: Response) => {
  const { content, icon, subcategory } = req.body;
  try {
    await categories.createCategoryServiceVip(content, subcategory, icon);
    res.status(201).json({ success: true, msg: "created!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

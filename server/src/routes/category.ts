import { Router } from "express";
import {
  createCategory,
  createCategoryVip,
  createSubCategory,
  deleteCategory,
  deleteSubCategory,
  editCategory,
  getCategories,
  getCategory,
} from "../controllers/categoryController";
const router = Router();

router.post("/", createCategory);
router.post("/sub/:id", createSubCategory);
router.get("/", getCategories);
router.get("/by/:id", getCategory);
router.put("/:id", editCategory);
router.delete("/:id", deleteCategory);
router.delete("/sub/:id", deleteSubCategory);
router.post("/vip", createCategoryVip);

export default router;

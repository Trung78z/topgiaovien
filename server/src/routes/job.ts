import { Router } from "express";
import * as jobController from "../controllers/jobController";
import { uploadPdf } from "../helpers/pdfMulterHelper";
const router = Router();

router.post("/", jobController.createJob);
router.get("/", jobController.getJobs);
router.get("/by/:slug", jobController.getJob);
router.get("/byId/:id", jobController.getByIdJob);
router.put("/:id", jobController.editJob);
router.delete("/:id", jobController.deleteJob);

router.post("/category", jobController.createCategory);
router.post("/category/sub/:id", jobController.createSubCategory);
router.get("/category/", jobController.getCategories);
router.get("/category/by/:id", jobController.getCategory);
router.put("/category/:id", jobController.editCategory);
router.delete("/category/:id", jobController.deleteCategory);
router.delete("/category/sub/:id", jobController.deleteSubCategory);

router.post(
  "/apply",
  uploadPdf.single("pdfFieldName"),
  jobController.createApply
);
router.get("/apply", jobController.getJobApply);

export default router;

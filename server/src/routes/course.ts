import { Router } from "express";
import * as courseController from "../controllers/courseController";
import * as courseCategoryController from "../controllers/categoryCourseController";
import { upload } from "../helpers/multerHelper";
import authMiddleware from "../middlewares/authMiddleware";
const router = Router();

router.post("/", courseController.createCourse);
router.post("/create-route/:slug", courseController.createRouteCourse);
router.get("/", courseController.getCourses);
router.get("/by/:slug", courseController.getCourse);
router.get("/byId/:id", courseController.getCourseById);
router.put("/:id", upload.single("course"), courseController.editCourse);
router.put("/by-step/:id", authMiddleware, courseController.editCourseByStep);
router.put(
  "/by-image/:id",
  upload.single("course"),
  courseController.editCourseImage
);
router.delete("/:id", courseController.deleteCourse);
router.delete("/route/:id", courseController.deleteRouteCourse);

router.get("/admin-get-chat", authMiddleware, courseController.getChatCourse);
router.put(
  "/admin-get-chat/:id",
  authMiddleware,
  courseController.editChatCourse
);

router.post("/category", courseCategoryController.createCourseCategory);
router.post(
  "/category/sub/:id",
  courseCategoryController.createSubCourseCategory
);
router.get("/category", courseCategoryController.getCourseCategories);
router.get("/category/by/:id", courseCategoryController.getCourseCategory);
router.put("/category/:id", courseCategoryController.editCourseCategory);
router.delete("/category/:id", courseCategoryController.deleteCourseCategory);
router.delete(
  "/category/sub/:id",
  courseCategoryController.deleteSubCourseCategory
);

export default router;

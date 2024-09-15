import { Router } from "express";
import {
  createCertificate,
  createEducation,
  createExperience,
  createNotify,
  createTeacher,
  deleteCertificate,
  deleteEducation,
  deleteExperience,
  deleteNotify,
  deleteTeacher,
  deleteTeacherByUserId,
  editCertified,
  editChatTeacher,
  editNullCertified,
  editTeacher,
  editTeacherByToken,
  editTeacherInfo,
  editTeacherInfoClient,
  editTeacherMomentImage,
  getChatTeacher,
  getMoment,
  getTeacher,
  getTeacherById,
  getTeacherByIdEditAdmin,
  getTeacherByIdEditClient,
  getTeacherByToken,
  getTeachers,
} from "../controllers/teacherController";
import { upload } from "../helpers/multerHelper";
import authMiddleware from "../middlewares/authMiddleware";
import roleMiddleware from "../middlewares/roleMiddleware";

const router = Router();
router.post("/", createTeacher);
router.post("/education", createEducation);
router.post("/certificate", createCertificate);
router.post("/experience", createExperience);
router.post("/notify", createNotify);
router.put(
  "/by/:id",
  upload.fields([
    { name: "imageTeacher", maxCount: 1 },
    { name: "imageTeacher2", maxCount: 1 },
    { name: "imageTeacher3", maxCount: 1 },
  ]),
  editTeacher
);
router.put(
  "/by-info/:id",
  authMiddleware,
  roleMiddleware("admin"),
  editTeacherInfo
);
router.put("/by-info", authMiddleware, editTeacherInfoClient);
router.put(
  "/",
  upload.fields([
    { name: "imageTeacher", maxCount: 1 },
    { name: "imageTeacher2", maxCount: 1 },
    { name: "imageTeacher3", maxCount: 1 },
  ]),
  authMiddleware,
  editTeacherByToken
);

router.get("/all-moment", getMoment);
router.get("/by-teacher", authMiddleware, getTeacherByToken);
router.get("/admin-get-chat", authMiddleware, getChatTeacher);
router.put("/admin-get-chat/:id", authMiddleware, editChatTeacher);

router.put(
  "/by-image-moment/:id",
  upload.single("moment"),
  editTeacherMomentImage
);
router.put(
  "/edit-image-ca",
  upload.fields([
    { name: "caIELTS", maxCount: 1 },
    { name: "caTOEIC", maxCount: 1 },
    { name: "caTOEFL", maxCount: 1 },
    { name: "caOther", maxCount: 1 },
  ]),
  authMiddleware,
  editCertified
);

router.put("/edit-image-ca-set-null", authMiddleware, editCertified);
router.put("/edit-image-null-ca", authMiddleware, editNullCertified);
router.get("/", getTeachers);
router.get("/by/:slug", getTeacher);
router.get("/byId/:id", getTeacherById);

router.get("/by-admin-edit/:id", getTeacherByIdEditAdmin);
router.get("/by-edit", authMiddleware, getTeacherByIdEditClient);

router.delete("/:id", deleteTeacher);
router.delete("/admin/:id", deleteTeacherByUserId);
router.delete("/education/:id", deleteEducation);
router.delete("/certificate/:id", deleteCertificate);
router.delete("/experience/:id", deleteExperience);
router.delete("/notify/:id", deleteNotify);

export default router;

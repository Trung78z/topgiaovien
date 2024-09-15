import { Router } from "express";
import {
  createShare,
  createShareTeacher,
  deleteShare,
  editShare,
  getShares,
} from "../controllers/shareController";
import authMiddleware from "../middlewares/authMiddleware";
import { upload } from "../helpers/multerHelper";
const router = Router();

router.post(
  "/",
  upload.fields([
    { name: "share", maxCount: 1 },
    { name: "imageUser", maxCount: 1 },
  ]),
  authMiddleware,
  createShare
);

router.post(
  "/teacher",
  upload.fields([
    { name: "share", maxCount: 1 },
    { name: "imageUser", maxCount: 1 },
  ]),
  authMiddleware,
  createShareTeacher
);

router.get("/", getShares);
router.put("/:id", authMiddleware, editShare);
router.delete("/:id", authMiddleware, deleteShare);

export default router;

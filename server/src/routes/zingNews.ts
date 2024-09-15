import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware";
import * as zingNewController from "../controllers/zingNewController";
import { upload } from "../helpers/multerHelper";
const router = Router();

router.post(
  "/",
  upload.single("review"),
  authMiddleware,
  zingNewController.createZingNew
);
router.get("/", zingNewController.getZingNews);
router.get("/by/:id", zingNewController.getZingNew);
router.put(
  "/:id",
  upload.single("review"),
  authMiddleware,
  zingNewController.editZingNew
);
router.delete("/:id", authMiddleware, zingNewController.deleteZingNew);

export default router;

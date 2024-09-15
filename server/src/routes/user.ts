import { Router } from "express";
import * as userController from "../controllers/userController";
import { upload } from "../helpers/multerHelper";
import authMiddleware from "../middlewares/authMiddleware";
import roleMiddleware from "../middlewares/roleMiddleware";
const router = Router();

router.post("/", upload.single("imageUser"), userController.createUser);
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  userController.getUsers
);
router.get("/get-edit", authMiddleware, userController.getUserEdit);

router.get("/by/:id", userController.getUser);
router.put(
  "/",
  authMiddleware,
  upload.single("imageUser"),
  userController.editUser
);
router.delete("/:id", userController.deleteUser);

export default router;

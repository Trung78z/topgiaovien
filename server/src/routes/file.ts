import { Router } from "express";
import { getImage } from "../controllers/imageController";

const router = Router();

router.get("/banner/:filename", getImage);
router.get("/teacher/:filename", getImage);
router.get("/post/:filename", getImage);
router.get("/moment/:filename", getImage);
router.get("/course/:filename", getImage);
router.get("/share/:filename", getImage);
router.get("/cv/:filename", getImage);
router.get("/review/:filename", getImage);
router.get("/user/:filename", getImage);
export default router;

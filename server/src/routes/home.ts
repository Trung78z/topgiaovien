import { Router } from "express";
import * as homeControl from "../controllers/homeConntroller";
import { upload } from "../helpers/multerHelper";
const router = Router();

router.get("/banner", homeControl.getBanner);
router.post("/banner", upload.single("banner"), homeControl.createImageBanner);
router.put("/banner/:id", upload.single("banner"), homeControl.editImageBanner);
router.delete("/banner/:id", homeControl.deleteImageBanner);

router.get("/time", homeControl.getTime);
router.post("/time", homeControl.createTime);
router.put("/time/:id", homeControl.editTime);
router.delete("/time/:id", homeControl.deleteTime);

router.post("/receive-consultation", homeControl.createReceive);
router.get("/receive-consultation", homeControl.getsReceive);
router.get("/receive-consultation/:id", homeControl.getReceive);
router.put("/receive-consultation/:id", homeControl.editReceive);
router.delete("/receive-consultation/:id", homeControl.deleteReceive);

export default router;

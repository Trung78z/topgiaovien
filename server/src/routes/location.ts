import { Router } from "express";
import { getLocation } from "../controllers/locationController";

const router = Router();

router.get("/", getLocation);

export default router;

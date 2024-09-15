import { Request, Response } from "express";
import * as locationService from "../services/locationService";
export const getLocation = async (req: Request, res: Response) => {
  try {
    const data = await locationService.getLocationService();
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

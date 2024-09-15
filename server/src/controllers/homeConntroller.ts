import { Request, Response } from "express";
import * as homeService from "../services/homeService";
import { TimeItem } from "../types/typeshome";

import * as userService from "../services/userService";
import * as courseService from "../services/courseService";
import { sendEmailNotification } from "../utils/smsEmail";
export const getBanner = async (req: Request, res: Response) => {
  try {
    const data = await homeService.findImageBannerService();
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createImageBanner = async (req: Request, res: Response) => {
  const { alt } = req.body;
  const filename = req.file?.filename;
  const url = filename ? filename : "";
  try {
    const data = await homeService.createImageBannerService(url, alt);
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editImageBanner = async (req: Request, res: Response) => {
  const { alt } = req.body;
  const { id } = req.params;

  try {
    const dataOld = await homeService.findImageIDBannerService(parseInt(id));
    if (!dataOld) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại banner!" });
    }
    const filename = req.file?.filename || (dataOld.image as string);

    const data = await homeService.editImageBannerService(
      parseInt(id),
      alt || dataOld.alt,
      filename
    );
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteImageBanner = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await homeService.deleteImageBannerService(parseInt(id));
    res.status(200).json({ success: true, msg: "Deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTime = async (req: Request, res: Response) => {
  try {
    const data = await homeService.findTimeService();
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createTime = async (req: Request, res: Response) => {
  const { alt } = req.body;
  const filename = req.file?.filename;
  const url = filename ? filename : "";
  try {
    const data = await homeService.createImageBannerService(url, alt);
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editTime = async (req: Request, res: Response) => {
  const { alt } = req.body;
  const { id } = req.params;

  try {
    const dataOld = await homeService.findImageIDBannerService(parseInt(id));
    if (!dataOld) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại banner!" });
    }
    const filename = req.file?.filename || (dataOld.image as string);

    const data = await homeService.editImageBannerService(
      parseInt(id),
      alt || dataOld.alt,
      filename
    );
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteTime = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await homeService.deleteImageBannerService(parseInt(id));
    res.status(200).json({ success: true, msg: "Deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createReceive = async (req: Request, res: Response) => {
  const { fullName, phone, time, courseCare, languageCare, userId, courseId } =
    req.body;
  let dataUser = null;
  let dataCourse = null;
  if (userId) {
    dataUser = await userService.findByIdUser(userId);
  }
  if (courseId) {
    dataCourse = await courseService.getCourseByIdService(parseInt(courseId));
  }
  const timeParse: TimeItem[] = JSON.parse(time);
  const TimeSend: string[] = timeParse.map((item: TimeItem) => item.time);

  try {
    await homeService.createReceiveService(
      fullName,
      phone,
      time,
      courseCare,
      languageCare,
      courseId || null,
      dataUser?.teacher?.id || undefined
    );

    sendEmailNotification(
      fullName,
      courseCare,
      languageCare,
      phone,
      TimeSend,
      dataUser?.email || undefined,
      dataUser?.fullName || undefined,
      dataUser?.phone || undefined,
      dataCourse?.title || undefined,
      dataCourse?.content || undefined,
      dataCourse?.courseCategory?.content || undefined,
      dataCourse?.courseSubCategory?.content || undefined
    );
    res.status(201).json({ success: true, msg: "Created!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getsReceive = async (req: Request, res: Response) => {
  try {
    const data = await homeService.getReceiveSService();
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getReceive = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await homeService.getReceiveService(parseInt(id));
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editReceive = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { fullName, phone, time, courseCare } = req.body;

  try {
    const dataOld = await homeService.getReceiveService(parseInt(id));
    if (!dataOld) {
      return res.status(200).json({ success: false, msg: "Không tồn tại!" });
    }

    const data = await homeService.editReceiveService(
      parseInt(id),
      fullName || dataOld.fullName,
      phone || dataOld.phone,
      time || dataOld.time,
      courseCare || dataOld.courseCare
    );
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteReceive = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await homeService.deleteReceiveService(parseInt(id));
    res.status(200).json({ success: true, msg: "Deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

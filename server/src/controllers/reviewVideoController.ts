import { Response, Request } from "express";
import * as reviewVideoService from "../services/reviewVideoService";
export const createReviewVideo = async (req: Request, res: Response) => {
  const { url } = req.body;
  const filename = req.file?.filename;
  const image = filename ? filename : "";
  try {
    if (!req.user?.id) {
      return res
        .status(200)
        .json({ success: false, message: "user not authenticated" });
    }

    const findByTitle = await reviewVideoService.getReviewVideoByTitleService(
      url
    );
    if (findByTitle) {
      return res
        .status(200)
        .json({ success: false, msg: "Đã tồn tại tiêu đề bài viết này!" });
    }

    const data = await reviewVideoService.createReviewVideoService(image, url);
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getReviewVideos = async (req: Request, res: Response) => {
  try {
    const data = await reviewVideoService.getReviewVideosService();
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getReviewVideo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await reviewVideoService.getReviewVideoById(parseInt(id));
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editReviewVideo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { url } = req.body;
  const filename = req.file?.filename;
  const image = filename ? filename : "";
  try {
    const dataReviewVideoOld = await reviewVideoService.getReviewVideoById(
      parseInt(id)
    );
    if (!dataReviewVideoOld) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại bài post!" });
    }
    const data = await reviewVideoService.editReviewVideoService(
      image || (dataReviewVideoOld.image as string),
      url || dataReviewVideoOld.url,
      parseInt(id)
    );
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteReviewVideo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await reviewVideoService.deleteReviewVideoService(parseInt(id));
    res.status(200).json({ success: true, msg: "DeleteSuccessfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

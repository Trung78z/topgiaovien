import { Response, Request } from "express";
import * as zingNewService from "../services/zingNewService";
export const createZingNew = async (req: Request, res: Response) => {
  const { title, description, url } = req.body;
  const filename = req.file?.filename;
  const image = filename ? filename : "";
  try {
    if (!req.user?.id) {
      return res
        .status(200)
        .json({ success: false, message: "user not authenticated" });
    }

    const findByTitle = await zingNewService.getZingNewByTitleService(title);
    if (findByTitle) {
      return res
        .status(200)
        .json({ success: false, msg: "Đã tồn tại tiêu đề bài viết này!" });
    }

    const data = await zingNewService.createZingNewService(
      title,
      description,
      image,
      url
    );
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getZingNews = async (req: Request, res: Response) => {
  try {
    const data = await zingNewService.getZingNewsService();
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getZingNew = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await zingNewService.getZingNewById(parseInt(id));
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editZingNew = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, url } = req.body;
  const filename = req.file?.filename;
  const image = filename ? filename : "";
  try {
    const dataZingNewOld = await zingNewService.getZingNewById(parseInt(id));
    if (!dataZingNewOld) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại bài post!" });
    }
    const data = await zingNewService.editZingNewService(
      title || dataZingNewOld.title,
      description || dataZingNewOld.description,
      image || (dataZingNewOld.image as string),
      url || dataZingNewOld.url,
      parseInt(id)
    );
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteZingNew = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await zingNewService.deleteZingNewService(parseInt(id));
    res.status(200).json({ success: true, msg: "DeleteSuccessfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

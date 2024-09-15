import { Response, Request } from "express";
import * as shareService from "../services/shareService";
import * as teacherService from "../services/teacherService";
interface MulterRequest extends Request {
  files: {
    [fieldname: string]: Express.Multer.File[];
  };
}

export const createShare = async (req: Request, res: Response) => {
  const { content, link, active = false, fullName } = req.body;
  const reqFiles = req as MulterRequest;
  let actives = false;
  if (active) {
    actives = active === "true" ? true : false;
  }
  const imageUser = reqFiles.files?.imageUser?.[0] || null;
  const shareImage = reqFiles.files?.share?.[0] || null;

  try {
    const data = await shareService.createShareService(
      content,
      link,
      actives,
      fullName,
      imageUser?.filename,
      shareImage?.filename
    );
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createShareTeacher = async (req: Request, res: Response) => {
  const { content, link, active = false, fullName } = req.body;
  const reqFiles = req as MulterRequest;
  let actives = false;
  if (active) {
    actives = active === "true" ? true : false;
  }
  const imageUser = reqFiles.files?.imageUser?.[0] || null;
  const shareImage = reqFiles.files?.share?.[0] || null;

  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.json({ success: false, msg: "Vui lòng đăng nhập!" });
    }
    const userTeacher = await teacherService.getTeacherByIdService(userId);
    if (!userTeacher) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại giáo viên!" });
    }

    const data = await shareService.createShareService(
      content,
      link,
      actives,
      fullName,
      imageUser?.filename,
      shareImage?.filename,
      userTeacher.id
    );
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getShares = async (req: Request, res: Response) => {
  try {
    const data = await shareService.getSharesService();
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const editShare = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { content, link, active = false, fullName } = req.body;
  let actives = false;
  if (active) {
    actives = active === "true" ? true : false;
  }

  try {
    if (!req.user?.id) {
      return res
        .status(401) // Use 401 for unauthorized access
        .json({ success: false, message: "User not authenticated" });
    }
    const data = await shareService.getShareService(parseInt(id));

    if (!data) {
      return res
        .status(404) // Use 404 for not found
        .json({ success: false, msg: "Không tồn tại bài chia sẻ!" });
    }

    const reqFiles = req as MulterRequest;
    const imageUser = reqFiles.files?.imageUser?.[0] || null;
    const shareImage = reqFiles.files?.share?.[0] || null;

    const msg = await shareService.editShareService(
      content || data.content,
      link || data.link,
      actives || data.active,
      fullName || data.fullName,
      parseInt(id),
      imageUser?.filename || (data.icon as string),
      shareImage?.filename || (data.image as string)
    );
    res.status(200).json({ success: true, msg: msg });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteShare = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await shareService.deleteShareService(parseInt(id));
    res.status(200).json({ success: true, msg: "Delete successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

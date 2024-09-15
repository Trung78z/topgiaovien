import { Request, Response } from "express";
import * as teacherService from "../services/teacherService";
import * as userService from "../services/userService";
interface MulterRequest extends Request {
  files: {
    [fieldname: string]: Express.Multer.File[];
  };
}

export const createTeacher = async (req: Request, res: Response) => {
  const {
    fullName,
    gender,
    email,
    phone,
    password,
    courseCategoryId,
    courseSubCategoryId,
    locationId,
    typeLearn,
  } = req.body;
  try {
    const user = await userService.findEmailOrPhone(email, phone);
    if (user) {
      return res.status(200).json({
        success: false,
        msg: "Email hoặc tài khoản của bạn đã tồn tại!",
      });
    }

    const data = await teacherService.createTeacherService(
      fullName,
      gender,
      email,
      phone,
      password,
      courseCategoryId,
      courseSubCategoryId,
      locationId,
      typeLearn
    );
    res.status(201).json({ success: true, msg: data.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editTeacherInfo = async (req: Request, res: Response) => {
  const {
    fullName,
    gender,
    email,
    phone,
    courseCategoryId,
    courseSubCategoryId,
    locationId,
    typeLearn,
  } = req.body;
  const { id } = req.params;
  try {
    const user = await userService.findByIdUser(id);
    if (!user) {
      return res.status(200).json({
        success: false,
        msg: "Tài khoản này không tồn tại!",
      });
    }
    const data = await teacherService.editTeacherInfoService(
      fullName,
      gender,
      email,
      phone,
      courseCategoryId,
      courseSubCategoryId,
      locationId,
      typeLearn,
      id
    );
    res.status(200).json({ success: true, msg: data.id });
  } catch (error: any) {
    if (error.message.includes("Unique constraint failed")) {
      return res.status(200).json({
        success: false,
        msg: "Đã tồn tại số điện thoại hoặc gmail này!",
      });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editTeacherInfoClient = async (req: Request, res: Response) => {
  const {
    fullName,
    gender,
    email,
    phone,
    courseCategoryId,
    courseSubCategoryId,
    locationId,
    typeLearn,
  } = req.body;

  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.json({ success: false, msg: "Vui lòng đăng nhập!" });
    }
    const user = await userService.findByIdUser(userId);
    if (!user) {
      return res.status(200).json({
        success: false,
        msg: "Tài khoản này không tồn tại!",
      });
    }
    const data = await teacherService.editTeacherInfoService(
      fullName,
      gender,
      email,
      phone,
      courseCategoryId,
      courseSubCategoryId,
      locationId,
      typeLearn,
      userId
    );
    res.status(200).json({ success: true, msg: data.id });
  } catch (error: any) {
    if (error.message.includes("Unique constraint failed")) {
      return res.status(200).json({
        success: false,
        msg: "Đã tồn tại số điện thoại hoặc gmail này!",
      });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createEducation = async (req: Request, res: Response) => {
  const { content = "Cử nhân ngôn ngữ Anh", teacherId } = req.body;
  try {
    const data = await teacherService.addEducationForTeacherService(
      content,
      teacherId
    );

    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createCertificate = async (req: Request, res: Response) => {
  const { content = "8.0 IELTS Overall", teacherId } = req.body;
  try {
    const data = await teacherService.addCertificateForTeacherService(
      content,
      teacherId
    );

    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createExperience = async (req: Request, res: Response) => {
  const {
    title = "Trên 2 năm kinh nghiệm dạy IELTS",
    content = "TALENT INSTITUTE / 10/2013 - 03/2018",
    description = "Teaching Communication English for adults (From Basic to Upper-Intermediate Level) Books: Face2Face, Tactics for Listening, American English File, Let's talk Planning, preparing and delivering lessons to a range of classes. Concentrating on pronunciation, listening, and speaking skills for daily topic. Marking and providing appropriate feedback on oral and written work. Devising, writing and producing new materials, including audio and visual resources.",
    teacherId,
  } = req.body;
  try {
    const data = await teacherService.addExperienceForTeacherService(
      title,
      content,
      description,
      teacherId
    );
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createNotify = async (req: Request, res: Response) => {
  const {
    title = "Khai giảng khóa IELTS cấp tốc",
    content = "Yes. It adheres to the WAI-ARIA design pattern.",
    teacherId,
  } = req.body;
  try {
    const data = await teacherService.addNotifyForTeacherService(
      title,
      content,
      teacherId
    );
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editTeacher = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    name,
    teacher,
    position,
    specialty,
    philosophy,
    commitment,
    linkPhilosophy,
    ca,
    levelCa,
    exp,
    optionExp,
    voucher,
    education,
    experience,
    certificate,
    teacherNotify,
    teacherForte,
    slogan,
  } = req.body;
  const filename = req as MulterRequest;
  const certificateParse = JSON.parse(certificate);
  const educationParse = JSON.parse(education);
  const experienceParse = JSON.parse(experience);
  const teacherNotifyParse = JSON.parse(teacherNotify);
  const teacherForteParse = JSON.parse(teacherForte);
  try {
    const userTeacher = await teacherService.findIdTeacher(id);
    if (!userTeacher) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại giáo viên!" });
    }
    const photoUrl = filename.files?.imageTeacher?.[0]?.filename
      ? filename.files?.imageTeacher?.[0]?.filename
      : (userTeacher.photoUrl as string);
    const photoUrl2 = filename.files?.imageTeacher2?.[0]?.filename
      ? filename.files?.imageTeacher2?.[0]?.filename
      : (userTeacher.photoUrl2 as string);
    const photoUrl3 = filename.files?.imageTeacher3?.[0]?.filename
      ? filename.files?.imageTeacher3?.[0]?.filename
      : linkPhilosophy;
    await teacherService.editTeacherService(
      name,
      teacher,
      position,
      specialty,
      photoUrl,
      philosophy,
      commitment,
      photoUrl3,
      ca,
      levelCa,
      exp,
      optionExp,
      voucher,
      slogan,
      photoUrl2,
      id
    );
    for (const item of educationParse) {
      await teacherService.editTeacherEducationService(
        item.content,
        item.id,
        item.teacherId
      );
    }
    for (const item of teacherNotifyParse) {
      await teacherService.editTeacherNotifyService(
        item.content,
        item.title,
        item.id,
        item.teacherId
      );
    }
    for (const item of teacherForteParse) {
      await teacherService.editTeacherTeacherForteService(
        item.id,
        item.teacherId,
        item.title
      );
    }
    for (const item of certificateParse) {
      await teacherService.editTeacherCertificateService(
        item.content,
        item.id,
        item.teacherId
      );
    }
    for (const item of experienceParse) {
      await teacherService.editTeacherExperienceService(
        item.title,
        item.content,
        item.description,
        item.id,
        item.teacherId
      );
    }
    res.status(200).json({ success: true, msg: "Chỉnh sửa thành công" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editTeacherByToken = async (req: Request, res: Response) => {
  const {
    name,
    teacher,
    position,
    specialty,
    philosophy,
    commitment,
    linkPhilosophy,
    ca,
    levelCa,
    exp,
    optionExp,
    voucher,
    education,
    experience,
    certificate,
    teacherNotify,
    teacherForte,
    slogan,
  } = req.body;
  const filename = req as MulterRequest;
  const certificateParse = JSON.parse(certificate);
  const educationParse = JSON.parse(education);
  const experienceParse = JSON.parse(experience);
  const teacherForteParse = JSON.parse(teacherForte);
  const teacherNotifyParse = JSON.parse(teacherNotify);
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
    const photoUrl = filename.files?.imageTeacher?.[0]?.filename
      ? filename.files?.imageTeacher?.[0]?.filename
      : (userTeacher.photoUrl as string);
    const photoUrl2 = filename.files?.imageTeacher2?.[0]?.filename
      ? filename.files?.imageTeacher2?.[0]?.filename
      : (userTeacher.photoUrl2 as string);
    const photoUrl3 = filename.files?.imageTeacher3?.[0]?.filename
      ? filename.files?.imageTeacher3?.[0]?.filename
      : linkPhilosophy;
    await teacherService.editTeacherService(
      name,
      teacher,
      position,
      specialty,
      photoUrl,
      philosophy,
      commitment,
      photoUrl3,
      ca,
      levelCa,
      exp,
      optionExp,
      voucher,
      slogan,
      photoUrl2,
      userTeacher.id
    );
    for (const item of educationParse) {
      await teacherService.editTeacherEducationService(
        item.content,
        item.id,
        item.teacherId
      );
    }
    for (const item of teacherNotifyParse) {
      await teacherService.editTeacherNotifyService(
        item.content,
        item.title,
        item.id,
        item.teacherId
      );
    }
    for (const item of teacherForteParse) {
      await teacherService.editTeacherTeacherForteService(
        item.id,
        item.teacherId,
        item.title
      );
    }
    for (const item of certificateParse) {
      await teacherService.editTeacherCertificateService(
        item.content,
        item.id,
        item.teacherId
      );
    }
    for (const item of experienceParse) {
      await teacherService.editTeacherExperienceService(
        item.title,
        item.content,
        item.description,
        item.id,
        item.teacherId
      );
    }
    res.status(200).json({ success: true, msg: "Chỉnh sửa thành công" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editTeacherMomentImage = async (req: Request, res: Response) => {
  const { teacherId } = req.body;
  const { id } = req.params;

  try {
    const dataOld = await teacherService.getTeacherImageMomentService(
      parseInt(id),
      teacherId
    );

    const image = req.file?.filename || dataOld?.image;

    const data = await teacherService.editTeacherImageMomentService(
      image as string,
      parseInt(id),
      teacherId
    );
    res.json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getTeachers = async (req: Request, res: Response) => {
  try {
    const data = await teacherService.getTeachersService();
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getMoment = async (req: Request, res: Response) => {
  try {
    const data = await teacherService.getMomentTeachersService();
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editCertified = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.json({ success: false, msg: "Vui lòng đăng nhập!" });
    }
    const ca = await teacherService.getCATeacherService(userId);
    const reqFiles = req as MulterRequest;
    const caIELTSFile =
      reqFiles.files?.caIELTS?.[0]?.filename || ca?.teacher?.caIELTS;
    const caTOEICFile =
      reqFiles.files?.caTOEIC?.[0]?.filename || ca?.teacher?.caTOEIC;
    const caTOEFLFile =
      reqFiles.files?.caTOEFL?.[0]?.filename || ca?.teacher?.caTOEFL;
    const caOtherFile =
      reqFiles.files?.caOther?.[0]?.filename || ca?.teacher?.caOther;
    const data = await teacherService.editCATeacherService(
      ca?.teacher?.id as string,
      caIELTSFile as string,
      caTOEICFile as string,
      caTOEFLFile as string,
      caOtherFile as string
    );
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editNullCertified = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.json({ success: false, msg: "Vui lòng đăng nhập!" });
    }
    const { caIELTS, caTOEIC, caTOEFL, caOther } = req.body;
    const ca = await teacherService.getCATeacherService(userId);
    const data = await teacherService.editNullCATeacherService(
      ca?.teacher?.id as string,
      caIELTS ?? null,
      caTOEIC ?? null,
      caTOEFL ?? null,
      caOther ?? null
    );
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getTeacher = async (req: Request, res: Response) => {
  const { slug } = req.params;

  try {
    const data = await teacherService.getTeacherService(slug);
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTeacherByToken = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.json({ success: false, msg: "Vui lòng đăng nhập!" });
    }
    const data = await teacherService.getTeacherByIdService(userId);
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getChatTeacher = async (req: Request, res: Response) => {
  try {
    const data = await teacherService.findChatsTeacher();
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editChatTeacher = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { linkChat } = req.body;
  try {
    const data = await teacherService.editChatTeacherService(id, linkChat);
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTeacherById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await teacherService.getTeacherByIdService(id);
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getTeacherByIdEditAdmin = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await teacherService.getTeacherByIdService(id);
    if (data) {
      return res.status(200).json({ success: true, msg: data });
    } else {
      const user = await userService.findByIdUser(id);
      if (user) {
        return res.status(200).json({ success: false, msg: user });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTeacherByIdEditClient = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.json({ success: false, msg: "Vui lòng đăng nhập!" });
    }

    const data = await teacherService.getTeacherByIdService(userId);
    if (data) {
      return res.status(200).json({ success: true, msg: data });
    } else {
      const user = await userService.findByIdUser(userId);
      if (user) {
        return res.status(200).json({ success: false, msg: user });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteTeacher = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await teacherService.deleteTeacherService(id);
    res.status(200).json({ success: true, msg: "Xoá thành công!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteTeacherByUserId = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await teacherService.deleteTeacherService(id);
    res.status(200).json({ success: true, msg: "Xoá thành công!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteEducation = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await teacherService.deleteEducationService(parseInt(id));
    res.status(200).json({ success: true, msg: "Xoá thành công!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteCertificate = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await teacherService.deleteCertificateService(parseInt(id));
    res.status(200).json({ success: true, msg: "Xoá thành công!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteExperience = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await teacherService.deleteExperienceService(parseInt(id));
    res.status(200).json({ success: true, msg: "Xoá thành công!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteNotify = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await teacherService.deleteNotifyService(parseInt(id));
    res.status(200).json({ success: true, msg: "Xoá thành công!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

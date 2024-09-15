import { Response, Request } from "express";
import * as categoriesJobService from "../services/jobService";
import { sendApplicationNotification } from "../utils/smsEmail";

export const createJob = async (req: Request, res: Response) => {
  const {
    title,
    responsibilities,
    requirements,
    benefits,
    recruitmentProcess,
    location,
    salary,
    position,
    jobType,
    jobRole,
    applicationDeadline,
    applicationCategoryId,
    applicationSubCategoryId,
  } = req.body;

  try {
    const cate = await categoriesJobService.getCategoryService(
      applicationCategoryId
    );
    if (!cate) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại category!" });
    }
    const slug = `${cate.content} ${title}`;
    const data = await categoriesJobService.createJobService(
      title,
      slug,
      responsibilities,
      requirements,
      benefits,
      recruitmentProcess,
      location,
      salary,
      position,
      jobType,
      jobRole,
      new Date(applicationDeadline),
      applicationCategoryId,
      applicationSubCategoryId
    );
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getJobs = async (req: Request, res: Response) => {
  try {
    const data = await categoriesJobService.getJobsService();
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getJob = async (req: Request, res: Response) => {
  const { slug } = req.params;
  try {
    const data = await categoriesJobService.getJobService(slug);
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getByIdJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await categoriesJobService.getJobByIdService(parseInt(id));
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const editJob = async (req: Request, res: Response) => {
  const { id } = req.params;

  const {
    title,
    slug,
    responsibilities,
    requirements,
    benefits,
    recruitmentProcess,
    location,
    salary,
    position,
    jobType,
    jobRole,
    applicationDeadline,
    applicationCategoryId,
    applicationSubCategoryId,
  } = req.body;
  console.log(responsibilities, requirements);
  try {
    const dataOld = await categoriesJobService.getJobByIdService(parseInt(id));
    if (!dataOld) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại bài viết ứng tuyển!" });
    }
    const data = await categoriesJobService.editJobService(
      parseInt(id),
      title || dataOld.title,
      slug || dataOld.slug,
      responsibilities || dataOld.responsibilities,
      requirements || dataOld.requirements,
      benefits || dataOld.benefits,
      recruitmentProcess || dataOld.recruitmentProcess,
      location || dataOld.location,
      salary || dataOld.salary,
      position || dataOld.position,
      jobType || dataOld.jobType,
      jobRole || dataOld.jobRole,
      applicationDeadline !== ""
        ? new Date(applicationDeadline)
        : dataOld.applicationDeadline,
      applicationCategoryId || dataOld.applicationCategoryId,
      applicationSubCategoryId || dataOld.applicationSubCategoryId
    );
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await categoriesJobService.deleteJobService(parseInt(id));
    res.status(200).json({ success: true, msg: "deleteSuccessfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createApply = async (req: Request, res: Response) => {
  const { email, fullName, phone, position, applicationId } = req.body;
  const filename = req.file?.filename;
  const url = filename ? filename : "";
  try {
    const dataApplication = await categoriesJobService.getJobByIdService(
      parseInt(applicationId)
    );
    const data = await categoriesJobService.createApplyService(
      email,
      fullName,
      phone,
      position,
      url,
      parseInt(applicationId)
    );
    sendApplicationNotification(
      fullName,
      position,
      phone,
      email,
      new Date().toLocaleDateString("vi-VN"),
      url,
      dataApplication?.slug || undefined
    );
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  const { content } = req.body;

  try {
    const data = await categoriesJobService.createCategoryService(content);
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createSubCategory = async (req: Request, res: Response) => {
  const { content } = req.body;
  const { id } = req.params;
  try {
    const dataOld = await categoriesJobService.getCategoryService(parseInt(id));
    if (!dataOld) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại category!" });
    }
    const data = await categoriesJobService.createSubCategoryService(
      content,
      dataOld.id
    );
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getCategories = async (req: Request, res: Response) => {
  try {
    const data = await categoriesJobService.getCategoriesService();
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getJobApply = async (req: Request, res: Response) => {
  try {
    const data = await categoriesJobService.getApplyService();
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await categoriesJobService.getCategoryService(parseInt(id));
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const editCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const data = await categoriesJobService.editCategoryService(
      parseInt(id),
      content
    );
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await categoriesJobService.deleteCategoryService(parseInt(id));
    res.status(200).json({ success: true, msg: "deleteSuccessfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteSubCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await categoriesJobService.deleteSUbCategoryService(parseInt(id));
    res.status(200).json({ success: true, msg: "deleteSuccessfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

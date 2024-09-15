import { Response, Request } from "express";
import * as courseService from "../services/courseService";
import * as categoryCourseService from "../services/categoryCourseService";
export const createCourse = async (req: Request, res: Response) => {
  const {
    title,
    content,
    courseCategoryId,
    courseSubCategoryId,
    locationId,
    typeLearn,
  } = req.body;
  try {
    const dataCate = await categoryCourseService.getCategoryService(
      courseCategoryId
    );
    if (!dataCate) {
      return res
        .status(200)
        .json({ success: false, msg: "category của course không tồn tại!" });
    }
    const findByTitle = await courseService.getCourseByTitleService(
      title,
      dataCate.content
    );
    if (findByTitle) {
      return res
        .status(200)
        .json({ success: false, msg: "Tựa đề khóa học này đã tồn tại!" });
    }
    const data = await courseService.createCourseService(
      title,
      content,
      dataCate.content,
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
export const createRouteCourse = async (req: Request, res: Response) => {
  const { slug } = req.params;
  const {
    content = "IELTS 3.0 - 5.0",
    GoalLearn = "Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)",
    SubjectOfStudy = "100 buổi Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc ",
  } = req.body;
  try {
    const data = await courseService.getCourseByIdService(parseInt(slug));
    if (!data) {
      return res
        .status(200)
        .json({ success: false, msg: "Khóa học này không tồn tại!" });
    }
    const resData = await courseService.createRoutesCourseService(
      content,
      GoalLearn,
      SubjectOfStudy,
      data.id
    );
    res.status(201).json({ success: true, msg: resData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getCourses = async (req: Request, res: Response) => {
  try {
    const data = await courseService.getCoursesService();
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getCourse = async (req: Request, res: Response) => {
  const { slug } = req.params;
  try {
    const data = await courseService.getCourseService(slug);
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getCourseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await courseService.getCourseByIdService(parseInt(id));
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editCourseByStep = async (req: Request, res: Response) => {
  const {
    title,
    content,
    courseCategoryId,
    courseSubCategoryId,
    locationId,
    typeLearn,
  } = req.body;
  const { id } = req.params;

  try {
    const dataCate = await categoryCourseService.getCategoryService(
      courseCategoryId
    );
    if (!dataCate) {
      return res
        .status(200)
        .json({ success: false, msg: "category của course không tồn tại!" });
    }
    const findByTitle = await courseService.getCourseByTitleService(
      title,
      dataCate.content
    );
    if (findByTitle) {
      return res
        .status(200)
        .json({ success: false, msg: "Tựa đề khóa học này đã tồn tại!" });
    }
    const findById = await courseService.getCourseByIdService(parseInt(id));
    if (!findById) {
      return res
        .status(200)
        .json({ success: false, msg: "Khóa học này không tồn tại!" });
    }

    await courseService.editCourseServiceByStep(
      parseInt(id),
      title,
      content,
      dataCate.content,
      courseCategoryId,
      courseSubCategoryId,
      locationId,
      typeLearn
    );

    res.status(201).json({ success: true, msg: "updated!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editCourse = async (req: Request, res: Response) => {
  const {
    title,
    content,
    urlChoice,
    review,
    goal,
    satisfied,
    differentTitle1,
    differentContent1,
    differentTitle2,
    differentContent2,
    differentTitle3,
    differentContent3,
    reviewCourseTitle1,
    reviewCourseImage1,
    reviewCourseTitle2,
    reviewCourseImage2,
    reviewCourseTitle3,
    reviewCourseImage3,
    reviewCourseTitle4,
    reviewCourseImage4,
    routeDetail,
  } = req.body;
  const { id } = req.params;
  const routeDetailsParse = JSON.parse(routeDetail);
  try {
    const findById = await courseService.getCourseByIdService(parseInt(id));
    if (!findById) {
      return res
        .status(200)
        .json({ success: false, msg: "Khóa học này không tồn tại!" });
    }
    const image = req.file?.filename || (findById.image as string);
    await courseService.editCourseService(
      parseInt(id),
      title || findById.title,
      content || findById.content,
      image,
      review || findById.review,
      goal || findById.goal,
      satisfied || findById.satisfied,
      differentTitle1 || findById.differentTitle1,
      differentContent1 || findById.differentContent1,
      differentTitle2 || findById.differentTitle2,
      differentContent2 || findById.differentContent2,
      differentTitle3 || findById.differentTitle3,
      differentContent3 || findById.differentContent3,
      reviewCourseTitle1 || findById.reviewCourseTitle1,
      reviewCourseImage1 || findById.reviewCourseImage1,
      reviewCourseTitle2 || findById.reviewCourseTitle2,
      reviewCourseImage2 || findById.reviewCourseImage2,
      reviewCourseTitle3 || findById.reviewCourseTitle3,
      reviewCourseImage3 || findById.reviewCourseImage3,
      reviewCourseTitle4 || findById.reviewCourseTitle4,
      reviewCourseImage4 || findById.reviewCourseImage4,
      urlChoice
    );
    for (const item of routeDetailsParse) {
      await courseService.editCourseRouteService(
        parseInt(item.id),
        parseInt(id),
        item.content,
        item.goalLearn,
        item.subjectOfStudy
      );
    }
    res.status(201).json({ success: true, msg: "updated!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const editCourseImage = async (req: Request, res: Response) => {
  const {
    reviewCourseImage1,
    reviewCourseImage2,
    reviewCourseImage3,
    reviewCourseImage4,
  } = req.body;
  const image = req.file?.filename;
  const { id } = req.params;

  try {
    const findById = await courseService.getCourseByIdService(parseInt(id));
    if (!findById) {
      return res
        .status(200)
        .json({ success: false, msg: "Khóa học này không tồn tại!" });
    }
    const courseImage1 = reviewCourseImage1 && (image as string);
    const courseImage2 = reviewCourseImage2 && (image as string);
    const courseImage3 = reviewCourseImage3 && (image as string);
    const courseImage4 = reviewCourseImage4 && (image as string);

    const data = await courseService.editCourseImageService(
      parseInt(id),
      courseImage1 || (findById.reviewCourseImage1 as string),
      courseImage2 || findById.reviewCourseImage2,
      courseImage3 || findById.reviewCourseImage3,
      courseImage4 || findById.reviewCourseImage4
    );
    res.status(201).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await courseService.deleteCourseService(parseInt(id));
    res.status(200).json({ success: true, msg: "Deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteRouteCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await courseService.deleteCourseRouteService(parseInt(id));
    res.status(200).json({ success: true, msg: "Deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getChatCourse = async (req: Request, res: Response) => {
  try {
    const data = await courseService.findChatsCourseService();
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editChatCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { linkChat } = req.body;
  try {
    const data = await courseService.editChatCourseService(
      parseInt(id),
      linkChat
    );
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

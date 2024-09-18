import prisma from "../configs/db";
import { typeLearn } from "../types/teacher";
import { createSlug } from "../utils/loashCover";
export const createCourseService = async (
  title: string,
  content: string,
  dataCate: string,
  courseCategoryId: number,
  courseSubCategoryId: number,
  locationId: number,
  typeLearn: typeLearn
) => {
  const slug = createSlug(`${dataCate} ${title}`);
  return await prisma.course.create({
    data: {
      title,
      slug,
      content,
      image: "course1.png",
      locationId,
      review: "1000",
      typeLearn,
      goal: "95",
      satisfied: "98",
      differentTitle1: "Lớp học quá đông và khó đảm bảo được chất lượng",
      differentContent1:
        "Bạn từng thấy nhiều lớp học IELTS với số lượng từ 15 – 30 học viên và giáo viên không đủ thời gian để quan tâm, tương tác đến từng bạn.",
      differentTitle2: "Cấp gấp bằng IELTS trong thời gian ngắn",
      differentContent2:
        "Tự học IELTS thường khiến bạn dễ mất định hướng do không có phương pháp học tập hiệu quả hay một người thầy chuyên môn để trao đổi, sửa lỗi và hướng dẫn cho bạn.",
      differentTitle3:
        "Chương trình học không phù hợp với trình độ của bản thân",
      differentContent3:
        "Học nhóm không hiệu quả, bạn cần một lộ trình học được thiết kế chuyên biệt với phương pháp học IELTS dành riêng cho nhu cầu và trình độ cá nhân của mình.",
      reviewCourseTitle1: "Chấm chữa bài và luyện tập 1 kèm 1 với giáo viên",
      reviewCourseImage1: "course1.png",
      reviewCourseTitle2: "Thi thử không giới hạn số lần",
      reviewCourseImage2: "course1.png",
      reviewCourseTitle3: "Vô số tài liệu học tập từ giảng viên của trung tâm",
      reviewCourseImage3: "course1.png",
      reviewCourseTitle4:
        "30 khóa học đã mở và nhận về đánh giá tích cực từ học viên",
      reviewCourseImage4: "course1.png",
      courseCategoryId,
      courseSubCategoryId,
    },
  });
};
export const createRoutesCourseService = async (
  content: string,
  goalLearn: string,
  subjectOfStudy: string,
  courseId: number
) => {
  return await prisma.routeDetail.create({
    data: {
      content,
      subjectOfStudy,
      goalLearn,
      courseId,
    },
  });
};
export const getCoursesService = async () => {
  return await prisma.course.findMany({
    include: {
      routeDetail: true,
      courseCategory: true,
      courseSubCategory: true,
    },
  });
};
export const getCourseService = async (slug: string) => {
  return await prisma.course.findUnique({
    where: { slug },
    include: {
      routeDetail: true,
      courseCategory: true,
      courseSubCategory: true,
    },
  });
};
export const getCourseByIdService = async (id: number) => {
  return await prisma.course.findUnique({
    where: { id },
    include: {
      routeDetail: true,
      courseCategory: true,
      courseSubCategory: true,
    },
  });
};
export const getCourseByTitleService = async (
  title: string,
  dataCate: string
) => {
  const slug = createSlug(`${dataCate} ${title}`);
  return await prisma.course.findUnique({
    where: { slug },
  });
};

export const getCourseByIdTitleService = async (
  id: number,
  title: string,
  dataCate: string
) => {
  const slug = createSlug(`${dataCate} ${title}`);
  return await prisma.course.findUnique({
    where: { slug, NOT: { id } },
  });
};

export const editCourseService = async (
  id: number,
  title: string,
  content: string,
  image: string,
  review: string,
  goal: string,
  satisfied: string,
  differentTitle1: string,
  differentContent1: string,
  differentTitle2: string,
  differentContent2: string,
  differentTitle3: string,
  differentContent3: string,
  reviewCourseTitle1: string,
  reviewCourseImage1: string,
  reviewCourseTitle2: string,
  reviewCourseImage2: string,
  reviewCourseTitle3: string,
  reviewCourseImage3: string,
  reviewCourseTitle4: string,
  reviewCourseImage4: string,
  urlChoice?: string
) => {
  return await prisma.course.update({
    where: { id },
    data: {
      title,
      content,
      urlChoice,
      image,
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
    },
  });
};
export const editCourseServiceByStep = async (
  id: number,
  title: string,
  content: string,
  dataCate: string,
  courseCategoryId: number,
  courseSubCategoryId: number,
  locationId: number,
  typeLearn: typeLearn
) => {
  const slug = createSlug(`${dataCate} ${title}`);
  return await prisma.course.update({
    where: { id },
    data: {
      title,
      content,
      slug,
      courseCategoryId,
      courseSubCategoryId,
      locationId,
      typeLearn,
    },
  });
};
export const editCourseRouteService = async (
  id: number,
  courseId: number,
  content: string,
  goalLearn: string,
  subjectOfStudy: string
) => {
  return await prisma.routeDetail.update({
    where: { id, courseId },
    data: {
      content,
      goalLearn,
      subjectOfStudy,
    },
  });
};

export const editCourseImageService = async (
  id: number,
  reviewCourseImage1: string,
  reviewCourseImage2: string,
  reviewCourseImage3: string,
  reviewCourseImage4: string
) => {
  return await prisma.course.update({
    where: { id },
    data: {
      reviewCourseImage1,
      reviewCourseImage2,
      reviewCourseImage3,
      reviewCourseImage4,
    },
    select: {
      reviewCourseImage1: true,
      reviewCourseImage2: true,
      reviewCourseImage3: true,
      reviewCourseImage4: true,
    },
  });
};
export const deleteCourseService = async (id: number) => {
  return await prisma.course.delete({ where: { id } });
};
export const deleteCourseRouteService = async (id: number) => {
  return await prisma.routeDetail.delete({ where: { id } });
};

export const findChatsCourseService = async () => {
  return await prisma.course.findMany({
    select: {
      title: true,
      id: true,
      linkChat: true,
      slug: true,
      courseCategory: { select: { content: true } },
      courseSubCategory: true,
    },
  });
};
export const editChatCourseService = async (id: number, linkChat: string) => {
  return await prisma.course.update({
    where: { id },
    data: { linkChat },
  });
};

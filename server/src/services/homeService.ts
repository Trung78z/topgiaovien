import prisma from "../configs/db";

export const findImageBannerService = async () => {
  return await prisma.banner.findMany();
};
export const findImageIDBannerService = async (id: number) => {
  return await prisma.banner.findUnique({ where: { id } });
};

export const createImageBannerService = async (image: string, alt: string) => {
  return await prisma.banner.create({ data: { image, alt } });
};
export const editImageBannerService = async (
  id: number,
  alt: string,
  image: string
) => {
  return await prisma.banner.update({ where: { id }, data: { image, alt } });
};
export const deleteImageBannerService = async (id: number) => {
  return await prisma.banner.delete({ where: { id } });
};

export const findTimeService = async () => {
  return await prisma.time.findMany({ include: { timeLine: true } });
};
export const findIDTimeService = async (id: number) => {
  return await prisma.time.findUnique({ where: { id } });
};

export const createTimeService = async (title: string) => {
  return await prisma.time.create({ data: { title } });
};
export const editTimeService = async (id: number, title: string) => {
  return await prisma.time.update({ where: { id }, data: { title } });
};
export const deleteTimeService = async (id: number) => {
  return await prisma.time.delete({ where: { id } });
};

export const createReceiveService = async (
  fullName: string,
  phone: string,
  time: string,
  courseCare?: string,
  languageCare?: string,
  courseId?: number,
  teacherId?: string
) => {
  return await prisma.careCourse.create({
    data: {
      fullName,
      phone,
      time,
      courseCare,
      languageCare,
      courseId,
      teacherId: teacherId || null,
    },
  });
};
export const getReceiveSService = async () => {
  return await prisma.careCourse.findMany({
    include: {
      course: {
        select: {
          title: true,
          slug: true,
          courseCategory: true,
          courseSubCategory: true,
        },
      },
      teacher: {
        select: {
          name: true,
          slug: true,
          id: true,
          courseCategory: true,
          courseSubCategory: true,
        },
      },
    },
  });
};
export const getReceiveService = async (id: number) => {
  return await prisma.careCourse.findUnique({
    where: { id },
  });
};
export const editReceiveService = async (
  id: number,
  fullName: string,
  phone: string,
  time: string,
  courseCare: string
) => {
  return await prisma.careCourse.update({
    where: { id },
    data: {
      fullName,
      phone,
      time,
      courseCare,
    },
  });
};
export const deleteReceiveService = async (id: number) => {
  return await prisma.careCourse.delete({ where: { id } });
};

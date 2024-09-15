import prisma from "../configs/db";
import { createSlug } from "../utils/loashCover";

export const createJobService = async (
  title: string,
  slug: string,
  responsibilities: string,
  requirements: string,
  benefits: string,
  recruitmentProcess: string,
  location: string,
  salary: string,
  position: string,
  jobType: string,
  jobRole: string,
  applicationDeadline: Date,
  applicationCategoryId: number,
  applicationSubCategoryId: number
) => {
  const createSlugS = createSlug(slug);
  return await prisma.application.create({
    data: {
      title,
      slug: createSlugS,
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
    },
  });
};

export const getJobsService = async () => {
  return await prisma.application.findMany({
    include: { applicationCategory: true, applicationSubCategory: true },
  });
};
export const getJobService = async (slug: string) => {
  return await prisma.application.findUnique({
    where: { slug },
    include: { applicationCategory: true, applicationSubCategory: true },
  });
};

export const getJobByIdService = async (id: number) => {
  return await prisma.application.findUnique({
    where: { id },
    include: { applicationCategory: true, applicationSubCategory: true },
  });
};

export const editJobService = async (
  id: number,
  title: string,
  slug: string,
  responsibilities: string,
  requirements: string,
  benefits: string,
  recruitmentProcess: string,
  location: string,
  salary: string,
  position: string,
  jobType: string,
  jobRole: string,
  applicationDeadline: Date,
  applicationCategoryId: number,
  applicationSubCategoryId: number
) => {
  const createSlugS = createSlug(slug);
  return await prisma.application.update({
    where: { id },
    data: {
      title,
      slug: createSlugS,
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
    },
  });
};
export const deleteJobService = async (id: number) => {
  return await prisma.application.delete({ where: { id } });
};

export const createCategoryService = async (content: string) => {
  return await prisma.applicationCategory.create({
    data: { content },
  });
};

export const createApplyService = async (
  email: string,
  fullName: string,
  phone: string,
  position: string,
  file: string,
  applicationId: number
) => {
  return await prisma.jobApply.create({
    data: { email, fullName, phone, position, file, applicationId },
  });
};

export const getApplyService = async () => {
  return await prisma.jobApply.findMany({ include: { application: true } });
};
export const createSubCategoryService = async (
  content: string,
  applicationCategoryId: number
) => {
  return await prisma.applicationSubCategory.create({
    data: { content, applicationCategoryId },
  });
};

export const getCategoriesService = async () => {
  return await prisma.applicationCategory.findMany({
    include: { applicationSubCategory: true },
  });
};
export const getCategoryService = async (id: number) => {
  return await prisma.applicationCategory.findUnique({
    where: { id },
    include: { applicationSubCategory: true },
  });
};

export const editCategoryService = async (id: number, content: string) => {
  return await prisma.applicationCategory.update({
    where: { id },
    data: { content },
  });
};
export const deleteCategoryService = async (id: number) => {
  return await prisma.applicationCategory.delete({ where: { id } });
};
export const deleteSUbCategoryService = async (id: number) => {
  return await prisma.applicationSubCategory.delete({ where: { id } });
};

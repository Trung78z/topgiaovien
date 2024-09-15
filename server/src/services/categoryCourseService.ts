import prisma from "../configs/db";
export const createCategoryService = async (content: string) => {
  return await prisma.courseCategory.create({
    data: { content },
  });
};
export const createSubCategoryService = async (
  content: string,
  courseCategoryId: number
) => {
  return await prisma.courseSubCategory.create({
    data: { content, courseCategoryId },
  });
};
export const getCategoriesService = async () => {
  return await prisma.courseCategory.findMany({
    include: { courseSubCategory: true },
  });
};
export const getCategoryService = async (id: number) => {
  return await prisma.courseCategory.findUnique({
    where: { id },
    include: { courseSubCategory: true },
  });
};
export const getCategoryContentService = async (content: string) => {
  return await prisma.courseCategory.findFirst({
    where: { content },
    include: { courseSubCategory: true },
  });
};
export const getSubCategoryContentService = async (content: string) => {
  return await prisma.courseSubCategory.findFirst({
    where: { content },
  });
};
export const editCategoryService = async (id: number, content: string) => {
  return await prisma.courseCategory.update({
    where: { id },
    data: { content },
  });
};
export const deleteCategoryService = async (id: number) => {
  return await prisma.courseCategory.delete({ where: { id } });
};
export const deleteSubCategoryService = async (id: number) => {
  return await prisma.courseSubCategory.delete({ where: { id } });
};

import prisma from "../configs/db";
export const createCategoryService = async (content: string, icon?: string) => {
  return await prisma.category.create({
    data: { content, icon },
  });
};
export const createSubCategoryService = async (
  content: string,
  categoryId: number
) => {
  return await prisma.subcategory.create({
    data: { content, categoryId },
  });
};

export const getCategoriesService = async () => {
  return await prisma.category.findMany({ include: { subcategory: true } });
};
export const getCategoryService = async (id: number) => {
  return await prisma.category.findUnique({
    where: { id },
    include: { subcategory: true },
  });
};
export const getSubCategoryService = async (id: number) => {
  return await prisma.subcategory.findUnique({
    where: { id },
  });
};
export const editCategoryService = async (id: number, content: string) => {
  return await prisma.category.update({ where: { id }, data: { content } });
};
export const deleteCategoryService = async (id: number) => {
  return await prisma.category.delete({ where: { id } });
};
export const deleteSUbCategoryService = async (id: number) => {
  return await prisma.subcategory.delete({ where: { id } });
};
export const createCategoryServiceVip = async (
  content: string,
  subcategory: [],
  icon: string
) => {
  return await prisma.category.create({
    data: { content, subcategory: { createMany: { data: subcategory } }, icon },
  });
};

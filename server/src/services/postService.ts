import prisma from "../configs/db";
import { createSlug } from "../utils/loashCover";
export const createPostService = async (
  content: string,
  image: string,
  title: string,
  categoryId: number,
  subcategoryId: number,
  slugId: string,
  userId: string
) => {
  const slug = createSlug(slugId);
  return await prisma.post.create({
    data: { content, image, slug, title, categoryId, subcategoryId, userId },
  });
};
export const getPostsService = async () => {
  return await prisma.post.findMany({
    include: {
      category: { select: { id: true, content: true } },
      subcategory: true,
      user: { select: { fullName: true, image: true } },
    },
    orderBy: { updatedAt: "asc" },
  });
};
export const getPostByTitleService = async (title: string) => {
  const slug = createSlug(title);
  return await prisma.post.findUnique({ where: { slug } });
};
export const getPostService = async (slug: string) => {
  return await prisma.post.findUnique({
    where: { slug },
    include: {
      category: { select: { id: true, content: true } },
      subcategory: true,
      user: { select: { fullName: true, image: true } },
    },
  });
};
export const getPostByEditService = async (id: number) => {
  return await prisma.post.findUnique({
    where: { id },
  });
};
export const editPostService = async (
  content: string,
  image: string,
  slug: string,
  title: string,
  categoryId: number,
  subcategoryId: number,
  id: number
) => {
  return await prisma.post.update({
    where: { id },
    data: { content, image, slug, title, categoryId, subcategoryId },
  });
};
export const deletePostService = async (id: number) => {
  return await prisma.post.delete({ where: { id } });
};

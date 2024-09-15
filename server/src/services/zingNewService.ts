import prisma from "../configs/db";
export const createZingNewService = async (
  title: string,
  description: string,
  image: string,
  url: string
) => {
  return await prisma.zingNews.create({
    data: { title, description, image, url },
  });
};
export const getZingNewsService = async () => {
  return await prisma.zingNews.findMany({
    orderBy: { updatedAt: "asc" },
  });
};
export const getZingNewByTitleService = async (title: string) => {
  return await prisma.zingNews.findUnique({ where: { title } });
};

export const getZingNewById = async (id: number) => {
  return await prisma.zingNews.findUnique({
    where: { id },
  });
};
export const editZingNewService = async (
  title: string,
  description: string,
  image: string,
  url: string,
  id: number
) => {
  return await prisma.zingNews.update({
    where: { id },
    data: { title, description, image, url },
  });
};
export const deleteZingNewService = async (id: number) => {
  return await prisma.zingNews.delete({ where: { id } });
};

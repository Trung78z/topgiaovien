import prisma from "../configs/db";
export const createReviewVideoService = async (image: string, url: string) => {
  return await prisma.videoModel.create({
    data: { image, url },
  });
};

export const getReviewVideosService = async () => {
  return await prisma.videoModel.findMany({
    orderBy: { updatedAt: "asc" },
  });
};
export const getReviewVideoByTitleService = async (url: string) => {
  return await prisma.videoModel.findFirst({ where: { url } });
};

export const getReviewVideoById = async (id: number) => {
  return await prisma.videoModel.findUnique({
    where: { id },
  });
};
export const editReviewVideoService = async (
  image: string,
  url: string,
  id: number
) => {
  return await prisma.videoModel.update({
    where: { id },
    data: { image, url },
  });
};
export const deleteReviewVideoService = async (id: number) => {
  return await prisma.videoModel.delete({ where: { id } });
};

import prisma from "../configs/db";
export const createShareService = async (
  content: string,
  link: string,
  active: boolean,
  fullName: string,
  icon?: string,
  image?: string,
  teacherId?: string
) => {
  return await prisma.share.create({
    data: {
      content,
      link,
      active,
      fullName,
      icon,
      image,
      teacherId,
    },
  });
};
export const getSharesService = async () => {
  return await prisma.share.findMany({
    include: { teacher: { select: { name: true } } },
  });
};
export const getShareService = async (id: number) => {
  return await prisma.share.findUnique({
    where: { id },
  });
};
export const editShareService = async (
  content: string,
  link: string,
  active: boolean,
  fullName: string,
  id: number,
  icon?: string,
  image?: string
) => {
  return await prisma.share.update({
    where: { id },
    data: { content, link, active, fullName, icon, image },
  });
};
export const deleteShareService = async (id: number) => {
  return await prisma.share.delete({ where: { id } });
};

import prisma from "../configs/db";
export const createCommentService = async (
  content: string,
  level: string,
  image?: string,
  parentId?: number,
  teacherId?: string,
  userId?: string
) => {
  return await prisma.comment.create({
    data: {
      content,
      level,
      image,
      parentId,
      teacherId,
      userId,
    },
  });
};
export const createLikeService = async (
  commentId?: number,
  userId?: string
) => {
  return await prisma.commentLike.create({
    data: {
      commentId,
      userId,
    },
  });
};

export const findLikeService = async (commentId: number, userId: string) => {
  return await prisma.commentLike.findFirst({
    where: { commentId, userId },
  });
};
export const deleteCommentService = async (id: number) => {
  return await prisma.comment.delete({ where: { id } });
};
export const deleteLikeService = async (id: number, userId: string) => {
  return await prisma.commentLike.delete({ where: { id, userId } });
};

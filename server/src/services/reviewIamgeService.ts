import prisma from "../configs/db";
export const editImageService = async (
  image1: string,
  image2: string,
  image3: string,
  image4: string,
  student1: string,
  student2: string,
  student3: string,
  student4: string,
  student5: string
) => {
  return await prisma.review.update({
    where: { id: 1 },
    data: {
      image1,
      image2,
      image3,
      image4,
      student1,
      student2,
      student3,
      student4,
      student5,
    },
  });
};

export const getImageService = async () => {
  return await prisma.review.findUnique({ where: { id: 1 } });
};

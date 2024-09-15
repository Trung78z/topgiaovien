import prisma from "../configs/db";
export const getLocationService = async () => {
  return await prisma.location.findMany();
};

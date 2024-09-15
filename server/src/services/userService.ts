import prisma from "../configs/db";
import { roleUser } from "../types/user";
import { generateRandomToken } from "../utils/randomToken";

export const createUser = async (
  fullName: string,
  gender: string,
  role: roleUser,
  email: string,
  phone: string,
  password: string,
  image?: string
) => {
  return await prisma.user.create({
    data: { fullName, gender, role, email, phone, password, image },
  });
};
export const findEmailUser = async (email: string) => {
  return await prisma.user.findFirst({ where: { email } });
};
export const findPhoneUser = async (phone: string) => {
  return await prisma.user.findFirst({ where: { phone } });
};
export const findByIdUser = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
    include: { teacher: true },
  });
};
export const findEmailOrPhone = async (email?: string, phone?: string) => {
  return await prisma.user.findFirst({
    where: {
      OR: [{ email: email || undefined }, { phone: phone || undefined }],
    },
  });
};

export const getUsersService = async () => {
  return await prisma.user.findMany({
    where: { email: { not: "topgiaovien@gmail.com" } },
    orderBy: { createdAt: "asc" },
    include: { teacher: { select: { id: true } } },
  });
};
export const deleteUsersService = async (id: string) => {
  return await prisma.user.delete({ where: { id } });
};

export const registerService = async (
  password?: string,
  email?: string,
  phone?: string,
  image?: string,
  fullName?: string,
  id?: string
) => {
  return await prisma.user.create({
    data: {
      email,
      password,
      phone,
      image,
      fullName,
      id,
    },
  });
};
export const editUserService = async (
  id: string,
  password?: string,
  phone?: string,
  fullName?: string,
  role?: roleUser,
  image?: string,
  gender?: string,
  email?: string
) => {
  return await prisma.user.update({
    where: { id },
    data: {
      phone,
      password,
      fullName,
      image,
      gender,
      role,
      email,
    },
  });
};
export const createPasswordResetToken = async (userId: string) => {
  const token = generateRandomToken();
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000);

  await prisma.userReset.create({
    data: {
      userId,
      token,
      expiresAt,
    },
  });

  return token;
};
export const verifyResetToken = async (token: string) => {
  return await prisma.userReset.findUnique({
    where: { token },
  });
};
export const updatePassword = async (id: string, password: string) => {
  return await prisma.user.update({
    where: { id },
    data: { password },
  });
};
export const deleteResetToken = async (token: string) => {
  await prisma.userReset.delete({
    where: { token },
  });
};

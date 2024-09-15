import prisma from "../configs/db";
import bcrypt from "bcrypt";
import { createSlug } from "../utils/loashCover";
import { vipTeacher } from "../models/data/vipuser";
import { generateUniqueShortUuidTeacher } from "../utils/uuidShort";
import { typeLearn } from "../types/teacher";

export const createTeacherService = async (
  fullName: string,
  gender: string,
  email: string,
  phone: string,
  password: string,
  courseCategoryId: number,
  courseSubCategoryId: number,
  locationId: number,
  typeLearn: typeLearn
) => {
  const id = await generateUniqueShortUuidTeacher();
  const slug = createSlug(fullName);

  return await prisma.$transaction(async (prisma) => {
    const user = await prisma.user.create({
      data: {
        email,
        fullName,
        password: bcrypt.hashSync(password, 10),
        phone,
        gender,
        role: "teacher",
        teacher: {
          create: {
            id,
            name: fullName,
            slug: slug,
            courseCategoryId,
            courseSubCategoryId,
            locationId,
            typeLearn,
            position: vipTeacher[0].position,
            specialty: "Sở trường các lớp tiếng Trung từ 0-HSK4",
            photoUrl: "MR LAM.JPEG",
            philosophy: vipTeacher[0].philosophy,
            commitment: vipTeacher[0].commitment,
            ca: vipTeacher[0].ca,
            levelCa: vipTeacher[0].levelCa,
            exp: vipTeacher[0].exp,
            optionExp: vipTeacher[0].optionExp,
            voucher: vipTeacher[0].voucher,
            slogan: "Be the change you want to see in the world",
            linkPhilosophy: vipTeacher[0].linkPhilosophy,
            teacherForte: {
              createMany: {
                data: [
                  {
                    title: "IELTS nâng cao",
                  },
                  {
                    title: "Giao tiếp",
                  },
                  {
                    title: "TOEIC",
                  },
                ],
              },
            },
            teacherNotify: {
              createMany: { data: [] },
            },
            education: {
              createMany: {
                data: [
                  {
                    content: "Cử nhân ĐH Ngoại Thương TPHCM",
                  },
                ],
              },
            },
            certificate: {
              createMany: {
                data: [
                  {
                    content: "IELTS 7.0",
                  },
                  {
                    content: "Chứng chỉ TESOL",
                  },
                ],
              },
            },
            experience: {
              createMany: {
                data: [
                  {
                    title: "2 năm kinh nghiệm dạy IELTS đủ level",
                    content: "TALENT INSTITUTE / 10/2013 - 03/2018",
                    description:
                      "Teaching Communication English for adults (From Basic to Upper-Intermediate Level) Books: Face2Face, Tactics for Listening, American English File, Let's talk Planning, preparing and delivering lessons to a range of classes. Concentrating on pronunciation, listening, and speaking skills for daily topic. Marking and providing appropriate feedback on oral and written work. Devising, writing and producing new materials, including audio and visual resources.",
                  },
                ],
              },
            },
            imageMoment: {
              createMany: {
                data: [
                  {
                    image: "moment-1724079700262-455784078.jpg",
                  },
                  {
                    image: "moment-1724079702472-364541598.jpg",
                  },
                  {
                    image: "khoanh-khac-3.png",
                  },
                  {
                    image: "khoanh-khac-4.png",
                  },
                  {
                    image: "khoanh-khac-5.png",
                  },
                ],
              },
            },
          },
        },
      },
    });

    return user;
  });
};

export async function addEducationForTeacherService(
  content: string,
  teacherId: string
) {
  return await prisma.education.create({
    data: { content, teacherId },
  });
}

export async function addCertificateForTeacherService(
  content: string,
  teacherId: string
) {
  return await prisma.certificate.create({
    data: { content, teacherId },
  });
}
export async function addNotifyForTeacherService(
  title: string,
  content: string,
  teacherId: string
) {
  return await prisma.teacherNotify.create({
    data: { title, content, teacherId },
  });
}

export async function addExperienceForTeacherService(
  title: string,
  content: string,
  description: string,
  teacherId: string
) {
  return await prisma.experience.create({
    data: { title, content, description, teacherId },
  });
}
export const editTeacherService = async (
  name: string,
  teacher: string,
  position: string,
  specialty: string,
  photoUrl: string,
  philosophy: string,
  commitment: string,
  linkPhilosophy: string,
  ca: string,
  levelCa: string,
  exp: string,
  optionExp: string,
  voucher: string,
  slogan: string,
  photoUrl2: string,
  id: string
) => {
  const idTeacher = (await generateUniqueShortUuidTeacher()) as string;
  const slug = createSlug(name);
  return await prisma.teacher.upsert({
    where: { id },
    update: {
      name,
      slug,
      position,
      specialty,
      photoUrl,
      philosophy,
      commitment,
      linkPhilosophy,
      ca,
      levelCa,
      exp,
      optionExp,
      voucher,
      slogan,
      photoUrl2,
    },
    create: {
      id: idTeacher,
      name,
      slug: slug,
      position: vipTeacher[0].position,
      specialty: "Sở trường các lớp tiếng Trung từ 0-HSK4",
      photoUrl: "MR LAM.JPEG",
      philosophy: vipTeacher[0].philosophy,
      commitment: vipTeacher[0].commitment,
      slogan: "Be the change you want to see in the world",
      ca: vipTeacher[0].ca,
      levelCa: vipTeacher[0].levelCa,
      exp: vipTeacher[0].exp,
      optionExp: vipTeacher[0].optionExp,
      voucher: vipTeacher[0].voucher,
      linkPhilosophy: vipTeacher[0].linkPhilosophy,
      imagePhilosophy: "MR LAM.JPEG",
      teacherNotify: {
        createMany: { data: [] },
      },
      education: {
        createMany: {
          data: [
            {
              content: "Cử nhân ĐH Ngoại Thương TPHCM",
            },
          ],
        },
      },
      certificate: {
        createMany: {
          data: [
            {
              content: "IELTS 7.0",
            },
            {
              content: "Chứng chỉ TESOL",
            },
          ],
        },
      },
      experience: {
        createMany: {
          data: [
            {
              title: "2 năm kinh nghiệm dạy IELTS đủ level",
              content: "TALENT INSTITUTE / 10/2013 - 03/2018",
              description:
                "Teaching Communication English for adults (From Basic to Upper-Intermediate Level) Books: Face2Face, Tactics for Listening, American English File, Let's talk Planning, preparing and delivering lessons to a range of classes. Concentrating on pronunciation, listening, and speaking skills for daily topic. Marking and providing appropriate feedback on oral and written work. Devising, writing and producing new materials, including audio and visual resources.",
            },
          ],
        },
      },
      teacherForte: {
        createMany: {
          data: [
            {
              title: "IELTS nâng cao",
            },
            {
              title: "Giao tiếp",
            },
            {
              title: "TOEIC",
            },
          ],
        },
      },
      imageMoment: {
        createMany: {
          data: [
            {
              image: "moment-1724079700262-455784078.jpg",
            },
            {
              image: "moment-1724079702472-364541598.jpg",
            },
            {
              image: "khoanh-khac-3.png",
            },
            {
              image: "khoanh-khac-4.png",
            },
            {
              image: "khoanh-khac-5.png",
            },
          ],
        },
      },
    },
  });
};

export const editTeacherInfoService = async (
  fullName: string,
  gender: string,
  email: string,
  phone: string,
  courseCategoryId: number,
  courseSubCategoryId: number,
  locationId: number,
  typeLearn: typeLearn,
  id: string
) => {
  try {
    const idBem = await generateUniqueShortUuidTeacher();
    const slug = createSlug(fullName);
    return await prisma.user.update({
      where: { id },
      data: {
        fullName,
        email,
        gender,
        phone,
        teacher: {
          upsert: {
            update: {
              courseCategoryId: courseCategoryId,
              courseSubCategoryId: courseSubCategoryId,
              locationId,
              typeLearn,
            },
            create: {
              id: idBem,
              slug,
              name: fullName,
              courseCategoryId: courseCategoryId,
              courseSubCategoryId: courseSubCategoryId,
              locationId,
              typeLearn,
              position: vipTeacher[0].position,
              specialty: "Sở trường các lớp tiếng Trung từ 0-HSK4",
              photoUrl: "MR LAM.JPEG",
              philosophy: vipTeacher[0].philosophy,
              commitment: vipTeacher[0].commitment,
              ca: vipTeacher[0].ca,
              levelCa: vipTeacher[0].levelCa,
              exp: vipTeacher[0].exp,
              optionExp: vipTeacher[0].optionExp,
              voucher: vipTeacher[0].voucher,
              linkPhilosophy: vipTeacher[0].linkPhilosophy,
              teacherForte: {
                createMany: {
                  data: [
                    {
                      title: "IELTS nâng cao",
                    },
                    {
                      title: "Giao tiếp",
                    },
                    {
                      title: "TOEIC",
                    },
                  ],
                },
              },
              teacherNotify: {
                createMany: { data: [] },
              },
              education: {
                createMany: {
                  data: [
                    {
                      content: "Cử nhân ĐH Ngoại Thương TPHCM",
                    },
                  ],
                },
              },
              certificate: {
                createMany: {
                  data: [
                    {
                      content: "IELTS 7.0",
                    },
                    {
                      content: "Chứng chỉ TESOL",
                    },
                  ],
                },
              },
              experience: {
                createMany: {
                  data: [
                    {
                      title: "2 năm kinh nghiệm dạy IELTS đủ level",
                      content: "TALENT INSTITUTE / 10/2013 - 03/2018",
                      description:
                        "Teaching Communication English for adults (From Basic to Upper-Intermediate Level) Books: Face2Face, Tactics for Listening, American English File, Let's talk Planning, preparing and delivering lessons to a range of classes. Concentrating on pronunciation, listening, and speaking skills for daily topic. Marking and providing appropriate feedback on oral and written work. Devising, writing and producing new materials, including audio and visual resources.",
                    },
                  ],
                },
              },
              imageMoment: {
                createMany: {
                  data: [
                    {
                      image: "moment-1724079700262-455784078.jpg",
                    },
                    {
                      image: "moment-1724079702472-364541598.jpg",
                    },
                    {
                      image: "khoanh-khac-3.png",
                    },
                    {
                      image: "khoanh-khac-4.png",
                    },
                    {
                      image: "khoanh-khac-5.png",
                    },
                  ],
                },
              },
            },
          },
        },
      },
    });
  } catch (error: any) {
    if (error.code) {
      throw new Error(
        "Unique constraint failed. Please check the email and phone number."
      );
    }
    throw error; // Ném lỗi khác để xử lý ở nơi khác}
  }
};

export const editTeacherExperienceService = async (
  title: string,
  content: string,
  description: string,
  id: number,
  teacherId: string
) => {
  return await prisma.experience.update({
    where: { id, teacherId },
    data: {
      title,
      content,
      description,
    },
  });
};
export const editTeacherTeacherForteService = async (
  id: number,
  teacherId: string,
  title?: string
) => {
  return await prisma.teacherForte.update({
    where: { id, teacherId },
    data: {
      title,
    },
  });
};
export async function editTeacherNotifyService(
  title: string,
  content: string,
  id: number,
  teacherId: string
) {
  return await prisma.teacherNotify.update({
    where: { id, teacherId },
    data: { title, content },
  });
}

export const editTeacherEducationService = async (
  content: string,
  id: number,
  teacherId: string
) => {
  return await prisma.education.update({
    where: { id, teacherId },
    data: {
      content,
    },
  });
};
export const editTeacherCertificateService = async (
  content: string,
  id: number,
  teacherId: string
) => {
  return await prisma.certificate.update({
    where: { id, teacherId },
    data: {
      content,
    },
  });
};

export const editTeacherImageMomentService = async (
  image: string,
  id: number,
  teacherId: string
) => {
  return await prisma.imageMoment.update({
    where: { id, teacherId },
    data: { image },
  });
};
export const getTeacherImageMomentService = async (
  id: number,
  teacherId: string
) => {
  return await prisma.imageMoment.findUnique({
    where: { id, teacherId },
  });
};

export const getTeachersService = async () => {
  return await prisma.teacher.findMany({
    where: { user: { role: "teacher" } },
    include: {
      certificate: true,
      education: true,
      experience: true,
      imageMoment: true,
      teacherNotify: true,
      teacherForte: true,
      courseCategory: true,
      share: true,
      comment: {
        include: {
          _count: { select: { commentLike: true } },
          user: { select: { fullName: true, image: true } },
          commentLike: { select: { userId: true } },
        },
      },
    },
    orderBy: { createdAt: "asc" },
  });
};
export const getMomentTeachersService = async () => {
  return await prisma.imageMoment.findMany();
};
export const getTeacherByIdService = async (userId: string) => {
  return await prisma.teacher.findFirst({
    where: { userId, user: { role: "teacher" } },
    include: {
      certificate: true,
      education: true,
      experience: true,
      teacherNotify: true,
      teacherForte: true,
      courseCategory: true,
      share: true,
      comment: {
        include: {
          _count: { select: { commentLike: true } },
          user: { select: { fullName: true, image: true } },
          commentLike: { select: { userId: true } },
        },
      },
      imageMoment: true,
    },
  });
};
export const getTeacherService = async (id: string) => {
  return await prisma.teacher.findUnique({
    where: { id, user: { role: "teacher" } },
    include: {
      certificate: true,
      education: true,
      experience: true,
      teacherNotify: true,
      teacherForte: true,
      courseCategory: true,
      user: { select: { gender: true } },
      share: true,
      comment: {
        include: {
          _count: { select: { commentLike: true } },
          user: { select: { fullName: true, image: true } },
          commentLike: { select: { userId: true } },
        },
      },
      imageMoment: true,
    },
  });
};
export const findIdTeacher = async (id: string) => {
  return await prisma.teacher.findUnique({
    where: { id, user: { role: "teacher" } },
  });
};
export const findChatsTeacher = async () => {
  return await prisma.teacher.findMany({
    where: { user: { role: "teacher" } },
    select: {
      linkChat: true,
      id: true,
      slug: true,
      name: true,
      user: { select: { phone: true, email: true, gender: true } },
    },
  });
};
export const editChatTeacherService = async (id: string, linkChat: string) => {
  return await prisma.teacher.update({
    where: { id },
    data: { linkChat },
  });
};
export const editCATeacherService = async (
  id: string,
  caIELTS?: string,
  caTOEIC?: string,
  caTOEFL?: string,
  caOther?: string
) => {
  return await prisma.teacher.update({
    where: { id },
    data: { caIELTS, caTOEFL, caOther, caTOEIC },
  });
};
export const getCATeacherService = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      teacher: {
        select: {
          caIELTS: true,
          caOther: true,
          caTOEFL: true,
          caTOEIC: true,
          id: true,
        },
      },
    },
  });
};

export const editNullCATeacherService = async (
  id: string,
  caIELTS?: string | null,
  caTOEIC?: string | null,
  caTOEFL?: string | null,
  caOther?: string | null
) => {
  return await prisma.teacher.update({
    where: { id },
    data: {
      caIELTS: caIELTS ?? undefined, // Sử dụng undefined để không cập nhật trường nếu giá trị là null
      caTOEIC: caTOEIC ?? undefined,
      caTOEFL: caTOEFL ?? undefined,
      caOther: caOther ?? undefined,
    },
  });
};
export const deleteTeacherService = async (id: string) => {
  return await prisma.teacher.delete({ where: { id } });
};

export async function deleteEducationService(id: number) {
  return await prisma.education.delete({
    where: { id },
  });
}

export async function deleteCertificateService(id: number) {
  return await prisma.certificate.delete({
    where: { id },
  });
}

export async function deleteExperienceService(id: number) {
  return await prisma.experience.delete({
    where: { id },
  });
}
export async function deleteNotifyService(id: number) {
  return await prisma.teacherNotify.delete({
    where: { id },
  });
}

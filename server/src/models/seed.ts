import prisma from "../configs/db";
import { roleUser } from "../types/user";
import { vipCourse } from "./data/vipCourse";
import { vipApplication, vipApplicationCategory } from "./data/vipJob";
import { vipBanner, vipShareFacebook, vipTime } from "./data/vipother";
import { vipShareCate, vipSharePost } from "./data/vipShare";
import { vipTeacher, vipUser } from "./data/vipuser";

async function main() {
  await createTime();
  await createJob();
  await createBanner();
  await createUser();
  await createPostCategory();
  await createPost();
  await createCourse();
  await createTeacher();
  await createShareFacebook();
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

async function createTime() {
  for (const item of vipTime) {
    await prisma.time.create({
      data: {
        title: item.title,
        timeLine: { createMany: { data: item.timeLine } },
      },
    });
  }
}
async function createJob() {
  for (const item of vipApplicationCategory) {
    await prisma.applicationCategory.create({
      data: {
        content: item.content,
        applicationSubCategory: {
          createMany: { data: item.applicationSubCategory },
        },
      },
    });
  }
  for (const item of vipApplication) {
    await prisma.application.createMany({
      data: item,
    });
  }
}
async function createBanner() {
  for (const item of vipBanner) {
    await prisma.banner.createMany({
      data: item,
    });
  }
}
async function createUser() {
  for (const item of vipUser) {
    await prisma.user.create({
      data: {
        id: item.id,
        email: item.email || null,
        phone: item.phone,
        gender: item.gender || null,
        password: item.password || null,
        fullName: item.fullName || null,
        image: item.image || null,
        role: item.role as roleUser,
        commentLike: { createMany: { data: item.commentLike } },
      },
    });
  }
}

async function createPostCategory() {
  for (const item of vipShareCate) {
    await prisma.category.create({
      data: {
        content: item.content,
        icon: item.icon,
        subcategory: { createMany: { data: item.subcategory } },
      },
    });
  }
}
async function createPost() {
  for (const item of vipSharePost) {
    await prisma.post.createMany({
      data: item,
    });
  }
}
async function createCourse() {
  for (const item of vipCourse) {
    await prisma.courseCategory.create({
      data: {
        content: item.content,
        course: { createMany: { data: item.course } },
      },
    });
  }
}
async function createShareFacebook() {
  for (const item of vipShareFacebook) {
    await prisma.share.createMany({
      data: item,
    });
  }
}
async function createTeacher() {
  for (const item of vipTeacher) {
    await prisma.teacher.create({
      data: {
        id: item.id,
        name: item.name,
        slug: item.slug,
        ca: item.ca,

        careCourse: { createMany: { data: item.careCourse } },
        certificate: { createMany: { data: item.certificate } },
        comment: { createMany: { data: item.comment } },
        commitment: item.commitment,
        education: { createMany: { data: item.education } },
        experience: { createMany: { data: item.experience } },
        // caIELTS: item.caIELTS,
        // caTOEIC: item.caTOEIC,
        // caTOEFL: item.caTOEFL,

        courseCategoryId: item.courseCategoryId,
        // caOther: item.caOther,
        exp: item.exp,
        levelCa: item.levelCa,
        linkPhilosophy: item.linkPhilosophy,
        photoUrl: item.photoUrl as string,
        optionExp: item.optionExp,

        imageMoment: { createMany: { data: item.imageMoment } },
        position: item.position,
        philosophy: item.philosophy,
        specialty: item.specialty,
        teacherNotify: { createMany: { data: item.teacherNotify } },
        teacherForte: { createMany: { data: item.teacherForte } },
        voucher: item.voucher,
        userId: item.userId,
      },
    });
  }
}

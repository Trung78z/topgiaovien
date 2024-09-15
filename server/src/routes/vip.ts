import { Request, Response, Router } from "express";
import prisma from "../configs/db";
const router = Router();
router.get("/homes", async (req: Request, res: Response) => {
  try {
    const data = await prisma.banner.findMany();
    res.json({ msg: data });
  } catch (error) {
    console.log(error);
  }
});

router.get("/users", async (req: Request, res: Response) => {
  try {
    const data = await prisma.user.findMany({
      include: {
        commentLike: true,
      },
    });
    res.json({ msg: data });
  } catch (error) {
    console.log(error);
  }
});
router.get("/tuyen-dung", async (req: Request, res: Response) => {
  try {
    const data = await prisma.applicationCategory.findMany({
      include: {
        applicationSubCategory: true,
      },
    });
    const dataApplication = await prisma.application.findMany({});
    res.json({ msg: data, dataApplication: dataApplication });
  } catch (error) {
    console.log(error);
  }
});

router.get("/post-category", async (req: Request, res: Response) => {
  try {
    const data = await prisma.category.findMany({
      include: {
        subcategory: true,
      },
    });
    res.json({ msg: data });
  } catch (error) {
    console.log(error);
  }
});
router.get("/share-post", async (req: Request, res: Response) => {
  try {
    const data = await prisma.post.findMany({});
    res.json({ msg: data });
  } catch (error) {
    console.log(error);
  }
});
router.get("/course", async (req: Request, res: Response) => {
  try {
    const data = await prisma.courseCategory.findMany({
      include: {
        course: true,
      },
    });
    res.json({ msg: data });
  } catch (error) {
    console.log(error);
  }
});
router.get("/teacher", async (req: Request, res: Response) => {
  try {
    const data = await prisma.teacher.findMany({
      include: {
        careCourse: true,
        comment: true,
        education: true,
        certificate: true,
        experience: true,
        imageMoment: true,
        teacherNotify: true,
        teacherForte: true,
      },
    });
    res.json({ msg: data });
  } catch (error) {
    console.log(error);
  }
});
router.get("/time", async (req: Request, res: Response) => {
  try {
    const data = await prisma.time.findMany({
      include: {
        timeLine: true,
      },
    });
    res.json({ msg: data });
  } catch (error) {
    console.log(error);
  }
});
router.get("/share", async (req: Request, res: Response) => {
  try {
    const data = await prisma.share.findMany({});
    res.json({ msg: data });
  } catch (error) {
    console.log(error);
  }
});
export default router;

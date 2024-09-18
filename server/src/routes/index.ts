import express from "express";
import authRoute from "./auth";
import userRoute from "./user";
import homeRoute from "./home";
import fileRoute from "./file";
import teacherRoute from "./teacher";
import categoryRoute from "./category";
import shareRoute from "./share";
import postRoute from "./post";
import courseRoute from "./course";
import jobRoute from "./job";
import likeCommentRoute from "./likeComment";
import vipRoute from "./vip";
import locationRoute from "./location";
import reviewVideoRoute from "./reviewVideo";
import zingNewsRoute from "./zingNews";
import reviewImagefrom from "./reviewImage";
const RootRouter = express();

RootRouter.use("/auth", authRoute);
RootRouter.use("/user", userRoute);
RootRouter.use("/home", homeRoute);
RootRouter.use("/file", fileRoute);
RootRouter.use("/teacher", teacherRoute);
RootRouter.use("/categories", categoryRoute);
RootRouter.use("/share", shareRoute);
RootRouter.use("/post", postRoute);
RootRouter.use("/course", courseRoute);
RootRouter.use("/job", jobRoute);
RootRouter.use("/like-comment", likeCommentRoute);
RootRouter.use("/vip", vipRoute);
RootRouter.use("/location", locationRoute);
RootRouter.use("/review-video", reviewVideoRoute);
RootRouter.use("/zing-new", zingNewsRoute);
RootRouter.use("/review-image", reviewImagefrom);

RootRouter.get("/", (req, res) => {
  res.json({ exp: Math.floor(Date.now() / 1000) });
});

export default RootRouter;

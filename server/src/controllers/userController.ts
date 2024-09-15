import { Request, Response } from "express";
import * as userService from "../services/userService";
import bcrypt from "bcrypt";

// import client from "../configs/redisClient";
export const createUser = async (req: Request, res: Response) => {
  const { fullName, gender, role, email, phone, password } = req.body;
  try {
    const image = req.file?.filename || "";

    const user = await userService.findEmailOrPhone(email, phone);

    if (user) {
      return res.status(200).json({
        success: false,
        msg: "Tài khoản của bạn đã tồn tại!",
      });
    }
    const data = await userService.createUser(
      fullName,
      gender,
      role,
      email,
      phone,
      bcrypt.hashSync(password, 10),
      image
    );
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const editUser = async (req: Request, res: Response) => {
  const { fullName, gender, role, email, phone, password } = req.body;
  const image = req.file?.filename;

  try {
    if (!req.user?.id) {
      return res
        .status(200)
        .json({ success: false, message: "user not authenticated" });
    }
    let passwordNew = "";
    if (password) {
      passwordNew = bcrypt.hashSync(password, 10);
    }
    const user = await userService.findByIdUser(req.user.id);
    if (!user) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại tài khoản này!" });
    }
    const data = await userService.editUserService(
      req.user.id,
      passwordNew || (user.password as string),
      phone || user.phone,
      fullName || user.fullName,
      role || user.role,
      image || (user?.image as string),
      gender || user.gender,
      email || user.email
    );

    res.status(200).json({ success: true, msg: data.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editUserByAdmin = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { fullName, gender, role, email, phone, password } = req.body;
  const image = req.file?.filename;
  try {
    let passwordNew = "";
    if (password) {
      passwordNew = bcrypt.hashSync(password, 10);
    }
    const user = await userService.findByIdUser(id);
    if (!user) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại tài khoản này!" });
    }
    const data = await userService.editUserService(
      id,
      passwordNew || (user.password as string),
      phone || user.phone,
      fullName || user.fullName,
      role || user.role,
      image || (user?.image as string),
      gender || user.gender,
      email || user.email
    );
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getUsers = async (req: Request, res: Response) => {
  try {
    const data = await userService.getUsersService();
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await userService.findByIdUser(id);
    if (!user) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại tài khoản này!" });
    }
    res.status(200).json({ success: true, msg: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getUserTeacher = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await userService.findByIdUser(id);
    if (!user) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại tài khoản này!" });
    }
    res.status(200).json({ success: true, msg: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getUserEdit = async (req: Request, res: Response) => {
  try {
    if (!req.user?.id) {
      return res
        .status(200)
        .json({ success: false, message: "user not authenticated" });
    }
    const user = await userService.findByIdUser(req.user?.id);
    if (!user) {
      return res
        .status(200)
        .json({ success: false, msg: "Không tồn tại tài khoản này!" });
    }
    res.status(200).json({ success: true, msg: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const userForgetPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const user = await userService.findEmailOrPhone(email);
    if (!user) {
      return res.status(200).json({
        success: false,
        msg: "Tài khoản không tồn tại trong hệ thống chúng tôi!",
      });
    }
    res.status(200).json({ success: true, msg: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await userService.deleteUsersService(id);
    res.status(200).json({ success: true, msg: "Xóa thành công!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

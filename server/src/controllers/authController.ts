import { Request, Response } from "express";
import * as authService from "../services/userService";
import bcrypt from "bcrypt";
import {
  decodedTokenGoogle,
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../helpers/tokenHelpers";
import axios from "axios";
import * as fs from "fs";
import * as path from "path";
import { sendPasswordResetEmail } from "../utils/smsEmail";

const downloadImage = async (imageUrl: string, outputLocationPath: string) => {
  const writer = fs.createWriteStream(outputLocationPath);

  try {
    const response = await axios({
      url: imageUrl,
      method: "GET",
      responseType: "stream",
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
  } catch (error) {
    console.error("Error downloading the image:", error);
  }
};
const isBcryptHash = (hash: string): boolean => {
  return /^(\$2[aby]?\$)[0-9]{2}\$[./A-Za-z0-9]{53}$/.test(hash);
};
export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  let email = null;
  let phone = null;
  if (/^\d+$/.test(username)) {
    phone = username;
  } else if (/^\S+@\S+\.\S+$/.test(username)) {
    email = username;
  } else {
    return res.status(200).json({
      success: false,
      msg: "Định dạng email hoặc số điện thoại không hợp lệ.",
    });
  }
  try {
    const user = await authService.findEmailOrPhone(email, phone);
    if (user) {
      return res.status(200).json({
        success: false,
        msg: "Tài khoản của bạn đã tồn tại!",
      });
    }
    const passwordHash = bcrypt.hashSync(password, 10);
    await authService.registerService(passwordHash, email, phone);
    return res
      .status(201)
      .json({ success: true, msg: "Bạn đã tạo tài khoản thành công!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  let email = null;
  let phone = null;
  try {
    if (/^\d+$/.test(username)) {
      phone = username;
    } else if (/^\S+@\S+\.\S+$/.test(username)) {
      email = username;
    } else {
      return res.status(200).json({
        success: false,
        msg: "Định dạng email hoặc số điện thoại không hợp lệ.",
      });
    }

    const user = await authService.findEmailOrPhone(email, phone);
    if (!user) {
      return res.status(200).json({
        success: false,
        msg: "Tài khoản của bạn không tồn tại hoặc chưa có trong hệ thống của chúng tôi!",
      });
    }
    if (user.password) {
      const comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
        return res.status(200).json({
          success: false,
          msg: "Mật khẩu của bạn không chính xác vui lòng thử lại!",
        });
      }
    }

    const accessToken = generateAccessToken({
      id: user.id,
      role: user.role,
      image: user.image as string,
    });
    const refreshToken = generateRefreshToken({
      id: user.id,
      role: user.role,
      image: user.image as string,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      msg: {
        accessToken: accessToken,
        id: user.id,
        role: user.role,
        image: user.image,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAuthorGoogle = async (req: Request, res: Response) => {
  const { access_token } = req.params;

  try {
    const decode = decodedTokenGoogle(access_token);

    if (decode && typeof decode !== "string" && "payload" in decode) {
      const { payload } = decode;
      if (payload.email) {
        const email = payload.email;

        const findByEmail = await authService.findEmailOrPhone(email);

        if (findByEmail) {
          const accessToken = generateAccessToken({
            id: findByEmail.id,
            role: findByEmail.role,
            image: findByEmail.email as string,
          });

          const refreshToken = generateRefreshToken({
            id: findByEmail.id,
            role: findByEmail.role,
            image: findByEmail.email as string,
          });

          // Gửi cookie với token làm mới
          res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 ngày
          });

          return res.json({
            msg: {
              success: true,
              accessToken,
              id: findByEmail.id,
              role: findByEmail.role,
              image: findByEmail.image as string,
            },
          });
        } else {
          const passwordHash = bcrypt.hashSync("WelcomeTopgiaovien", 10);
          const uniqueSuffix =
            Date.now() + "-" + Math.round(Math.random() * 1e9);
          const outputLocationPath = path.resolve(
            __dirname + "../../../public/files/user",
            payload.name + uniqueSuffix + ".jpg"
          );
          downloadImage(payload.picture, outputLocationPath);
          const msg = await authService.registerService(
            passwordHash,
            email,
            "",
            payload.name + uniqueSuffix + ".jpg",
            payload.name || ""
          );

          const accessToken = generateAccessToken({
            id: msg.id,
            role: msg.role,
            image: msg.image as string,
          });

          const refreshToken = generateRefreshToken({
            id: msg.id,
            role: msg.role,
            image: msg.image as string,
          });

          res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 ngày
          });

          return res.json({
            msg: {
              success: true,
              accessToken,
              id: msg.id,
              role: msg.role,
              image: msg.image,
            },
          });
        }
      } else {
        return res.status(400).json({
          success: false,
          error: "Token không chứa email",
        });
      }
    } else {
      // Xử lý khi decode không phải là đối tượng hợp lệ
      return res.status(400).json({
        success: false,
        error: "Token không hợp lệ",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Đã xảy ra lỗi",
    });
  }
};
export const getAuthorFaceBook = async (req: Request, res: Response) => {
  const { email, name, picture, id } = req.body;
  console.log(email, name, picture, id);
  try {
    const findId = await authService.findByIdUser(id);

    if (findId) {
      const accessToken = generateAccessToken({
        id: findId.id,
        role: findId.role,
        image: findId.email as string,
      });

      const refreshToken = generateRefreshToken({
        id: findId.id,
        role: findId.role,
        image: findId.email as string,
      });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 ngày
      });

      return res.json({
        msg: {
          success: true,
          accessToken,
          id: findId.id,
          role: findId.role,
          image: findId.image as string,
        },
      });
    } else {
      const passwordHash = bcrypt.hashSync("WelcomeTopgiaovien", 10);
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const outputLocationPath = path.resolve(
        __dirname + "../../../public/files/user",
        name + uniqueSuffix + ".jpg"
      );
      downloadImage(picture.data.url, outputLocationPath);
      const msg = await authService.registerService(
        passwordHash,
        email,
        "",
        name + uniqueSuffix + ".jpg",
        name || "",
        id
      );

      const accessToken = generateAccessToken({
        id: msg.id,
        role: msg.role,
        image: msg.image as string,
      });

      const refreshToken = generateRefreshToken({
        id: msg.id,
        role: msg.role,
        image: msg.image as string,
      });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 ngày
      });

      return res.json({
        msg: {
          success: true,
          accessToken,
          id: msg.id,
          role: msg.role,
          image: msg.image,
        },
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Đã xảy ra lỗi",
    });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;
  const payload = verifyRefreshToken(refreshToken);
  try {
    if (!payload) {
      return res.status(200).json({
        success: false,
        msg: "refreshToken đã hết hạn hoặc bị mất vui lòng thử lại!",
      });
    }
    const user = await authService.findByIdUser(payload.id);
    if (!user) {
      return res
        .status(401) // Use 401 for unauthorized access
        .json({ success: false, message: "User not authenticated" });
    }
    const accessToken = generateAccessToken({
      id: user.id,
      role: user.role,
      image: user.image as string,
    });
    return res.json({
      success: true,
      msg: {
        id: user.id,
        accessToken: accessToken,
        role: user.role,
        image: user.image,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("refreshToken");
    return res.status(200).json({ success: true });
  } catch (error) {
    res.status(401).json({ success: false, error: error });
  }
};

export const edit = async (req: Request, res: Response) => {
  const { phone, password, fullName, image, gender, role, email } = req.body;

  const { id } = req.params;
  try {
    const dataOld = await authService.findByIdUser(id);
    let passwordHash = dataOld?.password;
    if (isBcryptHash(password)) {
      passwordHash = dataOld?.password;
    } else {
      if (password) {
        passwordHash = bcrypt.hashSync(password, 10);
      }
    }
    const data = await authService.editUserService(
      id,
      passwordHash as string,
      phone || dataOld?.phone,
      fullName || dataOld?.fullName,
      role || dataOld?.role,
      image || dataOld?.image,
      gender || dataOld?.gender,
      email || dataOld?.email
    );
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    res.status(401).json({ success: false, error: error });
  }
};

export const editAdmin = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { phone, password, fullName, image, gender, role } = req.body;
  try {
    const dataOld = await authService.findByIdUser(id);
    let passwordHash = dataOld?.password;
    if (isBcryptHash(password)) {
      passwordHash = dataOld?.password;
    } else {
      if (password) {
        passwordHash = bcrypt.hashSync(password, 10);
      }
    }
    const data = await authService.editUserService(
      id,
      passwordHash as string,
      phone || dataOld?.phone,
      fullName || dataOld?.fullName,
      role || dataOld?.role,
      image || dataOld?.image,
      gender || dataOld?.gender
    );
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    res.status(401).json({ success: false, error: error });
  }
};

export const forgetPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const user = await authService.findEmailOrPhone(email);
    if (!user) {
      return res.status(200).json({
        success: false,
        msg: "Tài khoản không tồn tại trong hệ thống chúng tôi!",
      });
    }
    const token = await authService.createPasswordResetToken(user.id);
    sendPasswordResetEmail(email, token, user.fullName as string);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const verifyToken = async (req: Request, res: Response) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    if (!token) {
      return res.status(200).json({
        success: false,
        msg: "Token không hợp lệ!",
      });
    }
    const verify = await authService.verifyResetToken(token);
    if (!verify) {
      return res.status(200).json({
        success: false,
        msg: "Token không hợp lệ!",
      });
    }
    if (verify.expiresAt < new Date()) {
      return res.status(200).json({
        success: false,
        msg: "Token đã hết hạn",
      });
    }

    await authService.updatePassword(verify.userId, password);
    await authService.deleteResetToken(token);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

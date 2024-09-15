import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { authRegister } from "@/services/authService";
import { Input } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { z } from "zod";

const loginSchema = z
  .object({
    username: z
      .string()
      .min(1, "Vui lòng nhập email hoặc số điện thoại")
      .refine((value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{9,15}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }, "Email hoặc số điện thoại không hợp lệ"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    confirmPassword: z
      .string()
      .min(6, "Xác nhận mật khẩu phải có ít nhất 6 ký tự"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // Thông báo lỗi sẽ hiển thị dưới trường confirmPassword
    message: "Mật khẩu và xác nhận mật khẩu không khớp",
  });
export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await authRegister(data);
      if (res.success == false) {
        return Swal.fire({
          icon: "error",
          html: `<b>Rất tiếc! </b> <br />Bạn đăng kí không thành công <br /> Vì ${res.msg}`,
          showConfirmButton: false,
          timer: 3000,
        });
      }
      Swal.fire({
        icon: "success",
        html: "Chúc mừng bạn!  <br />Bạn đã đăng kí thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Topgiaovien | Đăng kí</title>
        <link rel="canonical" href="http://localhost:3000/dang-ki" />
      </Helmet>
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="flex flex-col space-y-4">
          <h1 className="py-10 text-center text-xl font-medium">Đăng kí</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <Input
                {...register("username")}
                className="w-[300px] rounded-[8px] border px-3 py-2.5"
                placeholder="Email hoặc số điện thoại"
              />
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </div>
            <div>
              <div className="relative">
                <Input
                  {...register("password")}
                  type={showPassword ? "password" : "text"}
                  className="w-[300px] rounded-[8px] border px-3 py-2.5"
                  placeholder="Mật khẩu"
                />
                <button
                  className={cn("absolute right-4 top-1/2 -translate-y-1/2")}
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div>
              <div className="relative">
                <Input
                  {...register("confirmPassword")}
                  type={showPassword ? "password" : "text"}
                  className="w-[300px] rounded-[8px] border px-3 py-2.5"
                  placeholder="Xác nhận mật khẩu"
                />
                <button
                  className={cn("absolute right-4 top-1/2 -translate-y-1/2")}
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>
            <Button
              type="submit"
              className="block h-10 w-full border-blue-900 bg-blue-900 px-1 py-1 text-white hover:bg-blue-900/90 hover:text-white"
              variant="outline"
            >
              Đăng kí
            </Button>
          </form>
          <div className="h-3"></div>
          <div className="relative">
            <p className="line-container text-center">hoặc</p>
          </div>
          <div className="w-full space-y-2 pt-8">
            <div>
              <GoogleLogin
                size="large"
                width="300px"
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </div>
          <div className="text-center">
            <h4>
              Bạn đã có tài khoản?
              <Link
                to="/dang-nhap"
                className="text-blue-500 hover:text-blue-600"
              >
                Đăng nhập
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

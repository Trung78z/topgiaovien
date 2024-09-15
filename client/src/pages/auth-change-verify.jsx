import { Button } from "@/components/ui/button";
import useScrollToTop from "@/components/useScrollToTop";
import useQuery from "@/hooks/useQuery";
import { cn } from "@/lib/utils";
import { updatePassword } from "@/services/userService";
import { Input } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { z } from "zod";

const loginSchema = z
  .object({
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    confirmPassword: z
      .string()
      .min(6, "Xác nhận mật khẩu phải có ít nhất 6 ký tự"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // Thông báo lỗi sẽ hiển thị dưới trường confirmPassword
    message: "Mật khẩu và xác nhận mật khẩu không khớp",
  });
export default function VerifyToken() {
  useScrollToTop();
  const [showPassword, setShowPassword] = useState(false);
  const query = useQuery();
  const token = query.get("token");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await updatePassword(token, data);
      if (res.success == false) {
        return Swal.fire({
          icon: "error",
          html: `<b>Rất tiếc! </b> <br />Bạn đổi mật khẩu không thành công <br /> Vì ${res.msg}`,
          showConfirmButton: false,
          timer: 3000,
        });
      }
      Swal.fire({
        icon: "success",
        html: "Chúc mừng bạn!  <br />Bạn đã tạo mật khẩu thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const title = `Xác thực | Top Giáo Viên ${new Date().getFullYear()} - Đánh Giá & Danh
          Sách Tốt Nhất`;
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col space-y-4">
          <h1 className="py-10 text-center text-xl font-medium">
            Tạo mật khẩu mới
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <div className="relative">
                <Input
                  {...register("password")}
                  type={showPassword ? "password" : "text"}
                  className="w-[300px] rounded-[8px] border px-3 py-2.5"
                  placeholder="Mật khẩu mới"
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
                  placeholder="Xác nhận mật khẩu mới"
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
              Xác nhận đổi mật khẩu
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

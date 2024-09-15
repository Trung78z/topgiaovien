import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "@/features/auth/authSlice";
import { authLogin } from "@/services/authService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { z } from "zod";
const loginSchema = z.object({
  username: z
    .string()
    .min(1, "Vui lòng nhập email hoặc số điện thoại")
    .refine((value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{9,15}$/;
      return emailRegex.test(value) || phoneRegex.test(value);
    }, "Email hoặc số điện thoại không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const onSubmit = async (data) => {
    dispatch(loginRequest());

    try {
      const res = await authLogin(data);
      if (res.success === false) {
        dispatch(loginFailure(res.msg));
        return Swal.fire({
          icon: "error",
          html: `${res.msg}`,
          showConfirmButton: false,
          timer: 3000,
        });
      }

      if (res.msg.role !== "admin") {
        dispatch(loginFailure(res.msg));
        return Swal.fire({
          icon: "error",
          html: `Bạn không có quyền truy cập vào trang này!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      Swal.fire({
        icon: "success",
        html: `Đăng nhập thành công!`,
        showConfirmButton: false,
        timer: 1500,
      });

      sessionStorage.setItem("accessToken", res.msg.accessToken);
      navigate("/");
      dispatch(loginSuccess(res.msg));
    } catch (error) {
      console.log(error);
      dispatch(loginFailure(error.message));
    }
  };
  return (
    <>
      <div className="mx-auto flex items-center justify-center">
        <div className="flex h-full flex-col justify-around bg-background p-4 md:p-20">
          <h1 className="text-center text-[36px] font-semibold text-primary-500">
            Chào mừng, Đăng nhập vào tài khoản của bạn
          </h1>
          <div className="mx-auto mt-10 flex max-w-72 flex-col items-center justify-center gap-y-4 md:mt-40">
            <h2 className="text-center text-[16px] font-medium">
              Chúng tôi rất vui mừng khi có bạn trên tàu!
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full space-y-5"
            >
              <div className="w-full">
                <Input
                  placeholder="Enter the name of school"
                  {...register("username")}
                ></Input>
                {errors.username && (
                  <p className="text-red-500">{errors.username.message}</p>
                )}
              </div>
              <div className="w-full">
                {" "}
                <Input
                  placeholder="Enter Password"
                  {...register("password")}
                  type="password"
                ></Input>{" "}
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <Button
                disabled={loading}
                className="w-full bg-[#2D88D4] hover:bg-[#2D88D4]/80"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

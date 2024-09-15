import { Button } from "@/components/ui/button";
import { GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { authLogin } from "@/services/authService";
import { useDispatch, useSelector } from "react-redux";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../features/auth/authSlice";
import Swal from "sweetalert2";

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

export default function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const dispatch = useDispatch();
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

  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Topgiaovien | Đăng nhập</title>
        <link rel="canonical" href="http://localhost:3000/dang-nhap" />
      </Helmet>

      <div className="flex flex-col space-y-5">
        <h1 className="py-10 text-center text-xl font-medium">Đăng nhập</h1>
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
            <Input
              {...register("password")}
              type="password"
              className="w-[300px] rounded-[8px] border px-3 py-2.5"
              placeholder="Mật khẩu"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="relative flex flex-1 items-center justify-start gap-x-2 px-2">
              <div>
                <Input
                  type="checkbox"
                  id="saveInfo"
                  {...register("saveInfo")}
                  className="h-4 py-0 text-start"
                />
              </div>
              <label
                htmlFor="saveInfo"
                className="absolute -top-1 left-3 flex w-full flex-1 translate-x-3 pt-0 text-[14px] text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[12px] peer-focus:text-gray-700"
              >
                Lưu thông tin
              </label>
            </div>
            <Link to="/">Quên mật khẩu?</Link>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="block h-8 w-full border-blue-900 bg-blue-900 px-1 py-1 text-white hover:bg-blue-900/90 hover:text-white"
            variant="outline"
          >
            Đăng nhập
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
          <div>
            <FacebookLogin
              appId="873424277963451"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              icon="fa-facebook"
              cssClass="px-2 w-full bg-blue-600 text-white font-medium py-2 rounded-sm "
            />
          </div>
        </div>
        <div className="text-center">
          <h4>
            Chưa có tài khoản?
            <Link to="/dang-ki" className="text-blue-500 hover:text-blue-600">
              Đăng kí
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import useScrollToTop from "@/components/useScrollToTop";
import { authForget } from "@/services/authService";
import { Input } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";

const schema = z.object({
  email: z
    .string({ required_error: "Vui lòng nhập email" })
    .email({ message: "Email không đúng định dạng" })
    .min(1, { message: "Vui lòng nhập email của bạn!" }),
});

export default function ForgetPassword() {
  useScrollToTop();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await authForget(data);
      if (res.success == false) {
        setLoading(false);
        return Swal.fire({
          icon: "error",
          html: `<b>Rất tiếc! </b> <br />Thực hiện không thành công <br /> Vì ${res.msg}`,
          showConfirmButton: false,
          timer: 3000,
        });
      }
      Swal.fire({
        icon: "success",
        html: "Chúc mừng!  <br />Chúng tôi vừa gửi email cho bạn để đổi mật khẩu! <br/> Vui lòng kiểm tra email!",
        showConfirmButton: false,
        timer: 4000,
      });
      setLoading(false);
      reset();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const title = `Quên mật khẩu | Top Giáo Viên ${new Date().getFullYear()} - Đánh Giá &
          Danh Sách Tốt Nhất`;
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col space-y-4">
          <h1 className="py-10 text-center text-xl font-medium">
            Quên mật khẩu
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <div className="relative">
                <Input
                  {...register("email")}
                  type="email"
                  className="w-[300px] rounded-[8px] border px-3 py-2.5"
                  placeholder="Nhập email"
                />
              </div>
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="block h-10 w-full border-blue-900 bg-blue-900 px-1 py-1 text-white hover:bg-blue-900/90 hover:text-white"
              variant="outline"
            >
              Xác nhận đổi
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

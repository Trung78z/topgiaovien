import { Button } from "@/components/ui/button";
import { API_URL } from "@/services/apiService";
import { getUserEdit, updateUser } from "@/services/userService";
import { Input } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { z } from "zod";

const loginSchema = z.object({
  fullName: z.string().min(1, { message: "Vui lòng nhập tên của bạn!" }),
  gender: z.enum(["nam", "nữ", "khác"], {
    message: "Vui lòng chọn giới tính!",
  }),
  email: z
    .string()
    .email({ message: "Email không đúng định dạng" })
    .min(1, { message: "Vui lòng nhập email của bạn!" }),
  phone: z
    .string()
    .min(10, { message: "Có lẽ đây không phải là số điện thoại!" })
    .max(14, { message: "Có lẽ đây không phải là số điện thoại!" }),
  imageUser: z.instanceof(File, { message: "Vui lòng hình ảnh!" }).optional(),
});
export default function EditProfile() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getUserEdit();
        setData(res.msg);
        for (const item in res.msg) {
          setValue(item, res.msg[item]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [setValue]);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      setValue("imageUser", file, { shouldValidate: true });
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const onSubmit = async (data) => {
    const formData = new FormData();

    for (const item in data) {
      formData.append(item, data[item]);
    }

    try {
      const res = await updateUser(formData);
      if (res.success == false) {
        return Swal.fire({
          icon: "error",
          html: `<b>Rất tiếc! </b> <br />Bạn đổi thông tin không thành công <br /> Vì ${res.msg}`,
          showConfirmButton: false,
          timer: 3000,
        });
      }

      Swal.fire({
        icon: "success",
        html: "Chúc mừng bạn!  <br />Bạn đã đổi mật khẩu thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Helmet>
        <title>
          {`Thay đổi thông tin | Top Giáo Viên ${new Date().getFullYear()} - Đánh
          Giá & Danh Sách Tốt Nhất`}
        </title>
      </Helmet>
      <div className="flex items-center justify-center px-2">
        <div className="flex flex-col space-y-4">
          <h1 className="py-10 text-center text-xl font-medium">
            Thay đổi trang cá nhân
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-x-2 gap-y-6 sm:gap-10"
          >
            <div className="col-span-2 w-full sm:col-span-1">
              <Input
                {...register("fullName")}
                type={"text"}
                className="w-full rounded-[8px] border px-3 py-2.5"
                placeholder="Nhập tên của bạn"
              />

              {errors.fullName && (
                <p className="text-red-500">{errors.fullName.message}</p>
              )}
            </div>
            <div className="col-span-2 w-full sm:col-span-1">
              <Input
                {...register("phone")}
                type={"text"}
                className="w-full rounded-[8px] border px-3 py-2.5"
                placeholder="Số điện thoại của bạn"
              />

              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <select
                id="gender"
                {...register("gender")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Lựa chọn giới tính</option>
                {[
                  { value: "nam", content: "Nam" },
                  { value: "nữ", content: "Nữ" },
                  { value: "khác", content: "Khác" },
                ].map((item) => (
                  <option key={item?.value} value={item?.value}>
                    {item?.content}
                  </option>
                ))}
              </select>
              {errors.gender && (
                <p className="text-sm text-red-600">{errors.gender.message}</p>
              )}
            </div>
            <div className="col-span-2 w-full sm:col-span-1">
              <Input
                {...register("email")}
                type={"text"}
                className="w-full rounded-[8px] border px-3 py-2.5"
                placeholder="Số điện thoại của bạn"
              />

              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="relative col-span-2 flex flex-wrap sm:col-span-1 sm:flex-nowrap">
              <label
                htmlFor="imageUser"
                className="block text-sm font-medium text-gray-700"
              >
                File hình ảnh cá nhân <span className="text-red-500">* </span>
                <span>kích thước hình ảnh 48x48</span>
              </label>
              <input
                type="file"
                id="imageUser"
                onChange={handleFileChange}
                className="hidden"
                accept=" .png, .jpeg, .jpg"
              />
              <div className="flex justify-end gap-4">
                {image || data?.image ? (
                  <div className="flex max-h-14 min-h-14 min-w-14 max-w-14 items-center justify-center rounded-full bg-slate-100">
                    <img
                      loading="lazy"
                      src={image || `${API_URL}/api/file/user/${data?.image}`}
                      width={44}
                      height={44}
                      className="max-h-11 min-h-11 min-w-11 max-w-11 rounded-full object-cover"
                      alt="User avatar"
                    />
                  </div>
                ) : (
                  <p className="text-sm text-red-600">Bạn chưa có ảnh</p>
                )}
                <Button
                  type="button"
                  onClick={() => document.getElementById("imageUser").click()}
                  className="w-max bg-green-500 hover:bg-green-600"
                >
                  Tải lên
                </Button>
              </div>
              {errors.imageUser && (
                <p className="text-sm text-red-600">
                  {errors.imageUser.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="col-span-2 mx-auto block h-10 w-max border-blue-900 bg-blue-900 px-1 py-1 text-white hover:bg-blue-900/90 hover:text-white"
              variant="outline"
            >
              Xác nhận thay đổi
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

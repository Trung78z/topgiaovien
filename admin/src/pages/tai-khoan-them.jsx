import { createUser } from "@/services/userService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(1, { message: "Vui lòng nhập tên của bạn!" }),
  gender: z.enum(["Nam", "Nữ", "Khác"], {
    message: "Vui lòng chọn giới tính!",
  }),
  role: z.enum(["admin", "teacher", "user", "student"], {
    message: "Vui lòng chọn loại tài khoản!",
  }),
  email: z
    .string()
    .email({ message: "Email không đúng định dạng" })
    .min(1, { message: "Vui lòng nhập email của bạn!" }),
  phone: z
    .string({ invalid_type_error: "Vui lòng nhập số" })
    .regex(/^(?:\+84|0)[0-9]{9}$/)
    .min(10, { message: "Số điện thoại phải có ít nhất 10 chữ số!" })
    .max(15, { message: "Số điện thoại không thể vượt quá 15 chữ số!" }),
  password: z
    .string()
    .min(8, { message: "Vui lòng nhập ít nhất 8 kí tự!" })
    .max(20, { message: "Vui lòng nhập nhiều nhất 20 kí tự!" })
    .regex(/[a-z]/, {
      message: "Vui lòng nhập ít nhất 1 chữ số viết thường!",
    })
    .regex(/[A-Z]/, {
      message: "Vui lòng nhập ít nhất 1 chữ số viết hoa!",
    })
    .regex(/[0-9]/, { message: "Vui lòng nhập ít nhất 1 chữ số!" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Vui lòng nhập ít nhất 1 kí tự đặc biệt!",
    }),
});

export default function AddTeacher() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = async (data) => {
    try {
      const res = await createUser(data);
      if (res.success === false) {
        return Swal.fire({
          icon: "error",
          title: res.msg,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      Swal.fire({
        icon: "success",
        title: "Tạo tài khoản thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      navigate(`/tai-khoan`);
    } catch (error) {
      console.log(error);
      return Swal.fire({
        icon: "error",
        title: "Đã có lỗi xảy ra!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex min-h-[70vh] items-center justify-center"
      >
        <div className="container grid grid-cols-1 items-center gap-4 px-2 sm:max-w-screen-md sm:px-10 md:grid-cols-2">
          <div className="col-span-1">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              fullName
            </label>
            <input
              type="text"
              id="fullName"
              {...register("fullName")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your fullName"
            />
            {errors.fullName && (
              <p className="text-sm text-red-600">{errors.fullName.message}</p>
            )}
          </div>
          <div className="col-span-1 grid grid-cols-2 gap-2">
            {" "}
            <div className="col-span-1">
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
                {["Nam", "Nữ", "Khác"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              {errors.gender && (
                <p className="text-sm text-red-600">{errors.gender.message}</p>
              )}
            </div>
            <div className="col-span-1">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Loai tài khoản
              </label>
              <select
                id="role"
                {...register("role")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Lựa loai tài khoản</option>
                {[
                  { value: "admin", content: "Admin" },
                  { value: "teacher", content: "Giáo viên" },
                  { value: "user", content: "Cá nhân" },
                  { value: "student", content: "Học viên" },
                ].map((item) => (
                  <option key={item?.value} value={item?.value}>
                    {item?.content}
                  </option>
                ))}
              </select>
              {errors.role && (
                <p className="text-sm text-red-600">{errors.role.message}</p>
              )}
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              {...register("password")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>
          <div className="col-span-1 flex flex-1 items-center justify-end md:col-span-2">
            <button
              type="submit"
              className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

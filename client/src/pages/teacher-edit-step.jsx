import useScrollToTop from "@/components/useScrollToTop";
import { typeCourse } from "@/lib/data";
import { getCourseCategory } from "@/services/courseService";
import { getLocation } from "@/services/locationService";
import { editInfoTeacher } from "@/services/teacherService";
import { getUserEdit } from "@/services/userService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(1, { message: "Vui lòng nhập tên của bạn!" }),
  gender: z.enum(["Nam", "Nữ", "Khác"], {
    message: "Vui lòng chọn giới tính!",
  }),
  email: z
    .string()
    .email({ message: "Email không đúng định dạng" })
    .min(1, { message: "Vui lòng nhập email của bạn!" }),
  phone: z
    .string()
    .min(10, { message: "Số điện thoại phải có ít nhất 10 chữ số!" })
    .max(15, { message: "Số điện thoại không thể vượt quá 15 chữ số!" }),
  courseCategoryId: z
    .number()
    .int()
    .positive("Vui lòng chọn một danh mục ngôn ngữ dạy."),
  courseSubCategoryId: z
    .number()
    .int()
    .positive("Vui lòng chọn một danh mục khóa học."),
  specialty: z
    .string()
    .min(1, { message: "Vui lòng nhập sở trường của bạn!" })
    .max(150, { message: "Vui lòng nhập ít kí tự hơn!" }),
  locationId: z.number().int().positive("Vui lòng chọn địa điểm cho khóa học!"),
  typeLearn: z.string().min(1, { message: "Vui lòng chọn hình thức dạy!" }),
});

export default function EditTeacherStep() {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [location, setLocation] = useState();
  useScrollToTop();
  const { user } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    setValue,
  } = useForm({ resolver: zodResolver(schema) });
  useEffect(() => {
    const fetch = async () => {
      try {
        const resCate = await getCourseCategory();
        const resLocation = await getLocation();
        setLocation(resLocation.msg);

        setCategory(resCate.msg);
        const res = await getUserEdit();

        const checkUpdate = resCate.msg.find(
          (item) => item.id === res.msg.teacher.courseCategoryId,
        );
        setSubCategory(checkUpdate.courseSubCategory);

        setValue("gender", res.msg.gender);
        setValue("locationId", res.msg.teacher.locationId);
        setValue("phone", res.msg.phone);
        setValue("email", res.msg.email);
        setValue("specialty", res.msg.teacher.specialty);
        setValue("fullName", res.msg.fullName);
        setValue("courseCategoryId", res.msg.teacher.courseCategoryId);
        setValue("courseSubCategoryId", res.msg.teacher.courseSubCategoryId);
        setValue("typeLearn", res.msg.teacher.typeLearn);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [user?.id, setValue]);
  const onSubmit = async (data) => {
    try {
      const res = await editInfoTeacher(user?.id, data);
      if (res.success === false) {
        return Swal.fire({
          icon: "error",
          title: res.msg,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      let timerInterval;
      Swal.fire({
        title: "Chuyển hướng trang!",
        html: "Chúng tôi sẽ chuyển hướng trang đến chỉnh sửa chi tiết sau<b></b> giây.",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
          }, 1000);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
      reset();
      setTimeout(() => {
        navigate(`/chinh-sua-profile`);
      }, 1500);
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

  const handleChangeSelect = (e) => {
    setValue("courseCategoryId", parseInt(e.target.value));
    setValue("courseSubCategoryId", 0);

    const update = category.find(
      (item) => item.id === parseInt(e.target.value),
    );
    setSubCategory(update.courseSubCategory);
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
          <div className="col-span-1">
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
          <div className="col-span-1">
            <label
              htmlFor="courseCategoryId"
              className="block text-sm font-medium text-gray-700"
            >
              Ngôn ngữ
            </label>
            <select
              id="courseCategoryId"
              onChange={handleChangeSelect}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option value={0}>Chọn ngôn ngữ</option>
              {category?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.content}
                </option>
              ))}
            </select>

            {errors.courseCategoryId && (
              <p className="text-sm text-red-600">
                {errors.courseCategoryId.message}
              </p>
            )}
          </div>
          <div className="col-span-1">
            <label
              htmlFor="courseSubCategoryId"
              className="block text-sm font-medium text-gray-700"
            >
              Loại khóa học
            </label>
            <Controller
              name="courseSubCategoryId"
              control={control}
              defaultValue={0}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <select
                  id="courseSubCategoryId"
                  onChange={(e) => onChange(Number(e.target.value))}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value={0}>Lựa chọn category khóa học</option>
                  {subcategory?.map((item) => (
                    <option key={item?.id} value={item?.id}>
                      {item?.content}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.courseSubCategoryId && (
              <p className="text-sm text-red-600">
                {errors.courseSubCategoryId.message}
              </p>
            )}
          </div>{" "}
          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="specialty"
              className="block text-sm font-medium text-gray-700"
            >
              Sở trường
            </label>

            <input
              type="tel"
              id="specialty"
              {...register("specialty")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your specialty"
            />
            {errors.specialty && (
              <p className="text-sm text-red-600">{errors.specialty.message}</p>
            )}
          </div>
          <div className="col-span-1">
            <label
              htmlFor="locationId"
              className="block text-sm font-medium text-gray-700"
            >
              Địa điểm
            </label>
            <select
              id="locationId"
              {...register("locationId")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Chọn địa điểm</option>
              {location?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.content}
                </option>
              ))}
            </select>

            {errors.locationId && (
              <p className="text-sm text-red-600">
                {errors.locationId.message}
              </p>
            )}
          </div>{" "}
          <div className="col-span-1">
            <label
              htmlFor="typeLearn"
              className="block text-sm font-medium text-gray-700"
            >
              Hình thức dạy
            </label>
            <select
              id="typeLearn"
              {...register("typeLearn")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Chọn hình thức</option>
              {typeCourse.map((category) => (
                <option key={category.type} value={category.type}>
                  {category.type}
                </option>
              ))}
            </select>

            {errors.typeLearn && (
              <p className="text-sm text-red-600">{errors.typeLearn.message}</p>
            )}
          </div>
          <div className="col-span-1 flex flex-1 items-center justify-end md:col-span-2">
            <button
              type="submit"
              className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Xác nhận
            </button>
          </div>
        </div>
      </form>
      <div className="flex items-center justify-center">
        <h3 className="max-w-screen-md text-center text-xl font-medium text-primary-500">
          Đây chỉ là 1 trong những đối tượng thông tin của giáo viên sau khi tạo
          chúng tôi sẽ chuyển hướng tới trang chỉnh sửa tổng quan
        </h3>
      </div>
    </>
  );
}

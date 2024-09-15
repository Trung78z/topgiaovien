import { dataProvince, typeCourse } from "@/lib/data";
import { createCourse, getCourseCategory } from "@/services/courseService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, { message: "Vui lòng nhập tiêu đề cho khóa học!" }),
  courseCategoryId: z
    .number()
    .int()
    .positive("Vui lòng chọn một danh mục khóa học."),
  content: z
    .string()
    .min(1, { message: "Vui lòng nhập content cho khóa học!" }),
  location: z.enum(dataProvince, {
    message: "Vui lòng chọn địa điểm cho khóa học!",
  }),
  typeLearn: z.string().min(1, { message: "Vui lòng chọn hình thức dạy!" }),
});

export default function AddCourse() {
  const navigate = useNavigate();
  const [subcategory, setSubCategory] = useState([]);
  const [category, setCategory] = useState([]);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setValue,
  } = useForm({ resolver: zodResolver(schema) });
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getCourseCategory();
        setCategory(res.msg);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  const onSubmit = async (data) => {
    const result = await Swal.fire({
      icon: "warning",
      title: "Bạn có chắc chắn muốn tạo thông tin này?",
      text: "Thao tác này sẽ tạo mới thông tin.",
      showCancelButton: true,
      confirmButtonText: "Thêm",
      cancelButtonText: "Hủy",
    });
    if (result.isConfirmed) {
      try {
        const res = await createCourse(data);

        Swal.fire({
          icon: "success",
          html: "Tạo tài khoá học thành công!<br>Chúng tôi sẽ chuyển hướng bạn đến trang chỉnh sửa tổng quan!",
          showConfirmButton: false,
          timer: 1500,
        });

        reset({
          title: "",
          courseCategoryId: "",
          content: "",
        });
        setTimeout(() => {
          navigate(`/khoa-hoc/chinh-sua/${res.msg}`);
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
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your title"
            />
            {errors.title && (
              <p className="text-sm text-red-600">{errors.title.message}</p>
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
          </div>
          <div className="col-span-1">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Địa điểm
            </label>
            <select
              id="location"
              {...register("location")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Chọn địa điểm</option>
              {dataProvince.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {errors.location && (
              <p className="text-sm text-red-600">{errors.location.message}</p>
            )}
          </div>
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
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <input
              type="text"
              id="content"
              {...register("content")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your content address"
            />
            {errors.content && (
              <p className="text-sm text-red-600">{errors.content.message}</p>
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
      <div className="flex items-center justify-center">
        <h3 className="max-w-screen-md text-center text-xl font-medium text-primary-500">
          Đây chỉ là 1 trong những đối tượng thông tin của khóa học sau khi tạo
          chúng tôi sẽ chuyển hướng tới trang chỉnh sửa tổng quan
        </h3>
      </div>
    </>
  );
}

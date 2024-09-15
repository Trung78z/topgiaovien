import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { getCourseCategory } from "@/services/courseService";
import { createReceive, getTime } from "@/services/homeService";
import Swal from "sweetalert2";
const schema = z.object({
  fullName: z
    .string()
    .min(8, { message: "Vui lòng cung cấp thêm thông tin của bạn!" }),
  phone: z
    .string()
    // Kiểm tra xem chuỗi có phải là số điện thoại hợp lệ (bắt đầu bằng +84 hoặc 0 và theo sau là 9 chữ số)
    .regex(/^(?:\+84|0)[0-9]{9}$/, "Số điện thoại không hợp lệ")
    // Kiểm tra độ dài của chuỗi
    .min(10, "Số điện thoại quá ngắn")
    .max(11, "Số điện thoại quá dài")
    // Kiểm tra không chứa khoảng trắng
    .refine(
      (val) => !/\s/.test(val),
      "Số điện thoại không được chứa khoảng trắng",
    ),
  time: z.string().min(8, {
    message: "Vui lòng cung cấp thêm thông tin về thời gian bạn muốn nhận!",
  }),
});
export default function NhanTuVanPageCourseTeacher({
  props,
  setCategoryCourse,
}) {
  const [timeCourse, setTimeCourse] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getCourseCategory();
        const resTime = await getTime();
        setTimeCourse(resTime.msg);

        setCategoryCourse(res.msg);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [setCategoryCourse]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    let dataSend = {};
    if (props?.name) {
      dataSend = { ...data, userId: props?.userId };
    } else if (props?.id) {
      dataSend = { ...data, courseId: props?.id };
    } else {
      dataSend = data;
    }

    const result = await Swal.fire({
      title: "Bạn có chắn muốn quan tâm khóa học này?",
      text: "Hành động này không thể hoàn tác!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#2B346F",
      cancelButtonColor: "#d33",
      confirmButtonText: "Chấp nhận",
      cancelButtonText: "Hủy",
      reverseButtons: true,
    });
    if (result.isConfirmed) {
      try {
        await createReceive(dataSend);
        Swal.fire({
          icon: "success",
          html: "Chúc mừng bạn!  <br />Bạn đã cung cấp thông tin thành công!",
          showConfirmButton: false,
          timer: 3000,
        });
        reset();

        const updateTimeCourse = timeCourse.map((course) => ({
          ...course,
          timeLine: course.timeLine.map((time) => ({
            ...time,
            active: false,
          })),
        }));

        setTimeCourse(updateTimeCourse);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChangeActive = (itemId, rowId) => {
    const updatedTimeCourse = timeCourse.map((item) => {
      if (item.id === itemId) {
        const updatedTimeLine = item.timeLine.map((row) =>
          row.id === rowId ? { ...row, active: !row.active } : row,
        );
        return { ...item, timeLine: updatedTimeLine };
      }
      return item;
    });
    const dataSend = updatedTimeCourse.reduce((acc, category) => {
      const subCategories = category.timeLine.map((sub) => ({
        id: category.id,
        time: sub.title,
        active: sub.active,
      }));
      return acc.concat(subCategories);
    }, []);
    setValue(
      "time",
      JSON.stringify(dataSend.filter((item) => item.active === true)),
    );
    setTimeCourse(updatedTimeCourse);
  };
  return (
    <>
      <div className="container mx-auto max-w-[1100px] space-y-3 px-2 py-4">
        <h2 className="text-[ #333333] text-center text-[28px] font-semibold">
          {props?.name
            ? `Đăng ký học với ${props?.user?.gender === "Nam" ? "thầy " : "cô "}`
            : "Nhận tư vấn miễn phí"}
          <span className="text-surface">{props?.name}</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 rounded-xl py-4 shadow-xl md:grid-cols-2">
          <div className="col-span-1 h-full w-full">
            <img
              loading="lazy"
              src="/Tư vấn miễn phí (1).png"
              alt="Nhận tư vấn ngày hè"
              width={1920}
              height={1080}
              className="h-60 w-full rounded-r-md object-cover md:h-[420px] md:rounded-l-md md:rounded-r-none"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="col-span-1 grid grid-cols-1 gap-6 pt-10 sm:pt-0 md:max-w-[80%] md:grid-cols-2"
          >
            <div className="col-span-1 md:col-span-2">
              <div className="relative flex flex-1 items-center">
                <input
                  placeholder=" "
                  id="fullName"
                  {...register("fullName")}
                  className="peer h-10 w-full rounded-lg border px-3"
                />
                <label
                  htmlFor="fullName"
                  className="absolute left-3 top-2 text-[14px] text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[12px] peer-focus:text-gray-700"
                >
                  Tên của bạn <span className="text-red-500">*</span>
                </label>
              </div>
              {errors.fullName && (
                <p className="text-sm text-red-600">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="col-span-1 md:col-span-2">
              <div className="relative flex flex-1 items-center">
                <input
                  placeholder=""
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="peer h-10 w-full rounded-lg border px-3"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-3 top-2 text-[14px] text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[12px] peer-focus:text-gray-700"
                >
                  Số điện thoại của bạn
                  <span className="text-red-500">*</span>
                </label>
              </div>
              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
            <div className="col-span-1 md:col-span-2">
              {" "}
              <h3 className="pl-3 text-[16px] font-medium">
                Thời gian bạn muốn nhận tư vấn
              </h3>
              <div className="space-y-3">
                {timeCourse.map((item) => (
                  <div className="flex items-center gap-x-2 pl-3" key={item.id}>
                    <h4>{item?.title}</h4>
                    {item?.timeLine.map((row) => {
                      return (
                        <Button
                          className={cn(
                            row?.active &&
                              "bg-primary-500 text-white hover:bg-primary-400 hover:text-white",
                          )}
                          variant="outline"
                          size="sm"
                          type="button"
                          key={row.id}
                          onClick={() => handleChangeActive(item.id, row.id)}
                        >
                          {row?.title}
                        </Button>
                      );
                    })}
                  </div>
                ))}
              </div>
              {errors.time && (
                <p className="text-center text-sm text-red-600">
                  {errors.time.message}
                </p>
              )}
            </div>

            <div className="col-span-1 flex items-center gap-2 pl-2 md:col-span-2">
              <Button
                className={cn("w-max text-[14px]")}
                size="sm"
                type="submit"
              >
                Đăng ký học
              </Button>
              <a
                href={
                  props?.linkChat
                    ? props?.linkChat
                    : "https://zalo.me/g/bfzbij560"
                }
                target="_blank"
              >
                <Button
                  className={cn("w-max text-[14px]")}
                  variant="outline"
                  type="button"
                  size="sm"
                >
                  Chat trực tiếp với Giảng viên
                </Button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

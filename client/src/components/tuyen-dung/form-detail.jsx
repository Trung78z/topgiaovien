import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { useState } from "react";
import { createApply } from "@/services/jobService";
import Swal from "sweetalert2";

const schema = z.object({
  fullName: z
    .string()
    .min(8, { message: "Vui lòng điền đầy đủ thông tin của bạn!" }),
  phone: z
    .string()
    .min(10, { message: "Có lẽ đây không phải là số điện thoại!" })
    .max(14, { message: "Có lẽ đây không phải là số điện thoại!" }),
  email: z
    .string()
    .email({ message: "Email không đúng định dạng" })
    .min(1, { message: "Vui lòng nhập email của bạn!" }),
  position: z
    .string()
    .min(1, { message: "Vui lòng nhập vị trí bạn muốn ứng tuyển!" }),
  cv: z.instanceof(File, { message: "Vui lòng thêm cv của bạn!" }),
});

export default function FormDetailApply({ props }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setValue("cv", file, { shouldValidate: true });
    }
  };
  const onSubmit = async (data) => {
    const result = await Swal.fire({
      title: "Bạn có chắn muốn nộp đơn ứng tuyển này?",
      text: "Hành động này không thể hoàn tác!",
      icon: "info",
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Hủy",
    });
    if (result.isConfirmed) {
      try {
        const formData = new FormData();
        for (const item in data) {
          if (item !== "cv") {
            formData.append(item, data[item]);
          } else {
            formData.append("pdfFieldName", data[item]);
          }
        }
        formData.append("applicationId", props.id);
        await createApply(formData);
        Swal.fire({
          icon: "success",
          html: "Chúc mừng bạn!  <br />Bạn đã nộp đơn ứng tuyển thành công!",
          showConfirmButton: false,
          timer: 3000,
        });
        reset();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Đã có lỗi xảy ra!",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    }
  };
  return (
    <div className="bg-primary-50 p-2 sm:p-10">
      <div className="mx-auto max-w-screen-md bg-background p-2 sm:p-10">
        <h4 className="w-full text-center text-[28px] font-semibold">
          Nộp hồ sơ trực tuyến
        </h4>
        <p className="w-full text-center text-[16px]">
          Vui lòng điền đầy đủ thông tin của bạn
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2"
        >
          <div className="col-span-1 space-y-6">
            <div>
              <div className="relative flex items-center">
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
                  Họ và tên<span className="text-red-500">*</span>
                </label>
              </div>
              {errors.fullName && (
                <p className="text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <div className="relative flex items-center">
                <input
                  placeholder=" "
                  id="email"
                  {...register("email")}
                  className="peer h-10 w-full rounded-lg border px-3"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-2 text-[14px] text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[12px] peer-focus:text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="col-span-1 space-y-6">
            <div>
              <div className="relative flex items-center">
                <input
                  placeholder=""
                  id="phone"
                  {...register("phone")}
                  className="peer h-10 w-full rounded-lg border px-3"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-3 top-2 text-[14px] text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[12px] peer-focus:text-gray-700"
                >
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
              </div>
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <div className="relative flex items-center">
                <input
                  placeholder=""
                  id="position"
                  {...register("position")}
                  className="peer h-10 w-full rounded-lg border px-3"
                />
                <label
                  htmlFor="position"
                  className="absolute left-3 top-2 text-[14px] text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[12px] peer-focus:text-gray-700"
                >
                  Vị trí ứng tuyển <span className="text-red-500">*</span>
                </label>
              </div>
              {errors.position && (
                <p className="text-sm text-red-500">
                  {errors.position.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-span-2 space-y-6">
            <div className="relative flex flex-col gap-2 pl-2 pt-4">
              <label
                htmlFor="upload"
                className="text-[14px] text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[12px] peer-focus:text-gray-700"
              >
                File CV của bạn <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                id="upload"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf"
                // {...register("cv")}
              />
              <Button
                type="button"
                onClick={() => document.getElementById("upload").click()}
                className="w-max bg-surface px-10"
              >
                Tải lên
              </Button>

              {errors.cv && (
                <p className="text-sm text-red-500">{errors.cv.message}</p>
              )}
            </div>
          </div>
          <div className="col-span-2 flex flex-1 items-center justify-end sm:col-span-2">
            <Button type="submit">Ứng tuyển ngay</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

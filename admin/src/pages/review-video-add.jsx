import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { createReviewVideo } from "@/services/review-video";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { z } from "zod";

const schema = z.object({
  url: z
    .string({
      invalid_type_error: "Vui lòng nhập link liên kết!",
      required_error: "Vui lòng nhập link liên kết!",
    })
    .url()
    .min(1, { message: "Vui lòng nhập link liên kết!" })
    .max(500, { message: "Vui lòng nhập rút gọn link liên kết!" }),
  review: z.instanceof(File, { message: "Vui lòng thêm hình ảnh review!" }),
});

export default function AddReviewVideo() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setValue("review", file, { shouldValidate: true });
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const item in data) {
      if (item !== "review") {
        formData.append(item, data[item]);
      } else {
        formData.append("review", data[item]);
      }
    }
    try {
      await createReviewVideo(formData);
      Swal.fire({
        icon: "success",
        title: "Tạo thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      setTimeout(() => {
        navigate(`/reviews/video`);
      }, 1500);
    } catch (error) {
      console.error("Error creating job:", error);
      Swal.fire({
        icon: "error",
        title: "Đã có lỗi xảy ra!",
        text: "Không thể tạo công việc. Vui lòng thử lại.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <h1 className="flex items-center justify-center text-2xl font-semibold">
        Thêm bài review từ các video
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex min-h-[70vh] items-center justify-center"
      >
        <div className="container grid grid-cols-1 items-center gap-4 px-2 sm:max-w-screen-lg sm:grid-cols-2 sm:px-10">
          <div className="col-span-1">
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              url
            </label>
            <input
              type="text"
              id="url"
              {...register("url")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter url"
            />
            {errors.url && (
              <p className="text-sm text-red-600">{errors.url.message}</p>
            )}
          </div>
          <div className="col-span-1 space-y-6">
            <div className="relative flex flex-col gap-2 pl-2 pt-4">
              <label
                htmlFor="upload"
                className="text-[14px] text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[12px] peer-focus:text-gray-700"
              >
                File ảnh minh họa review từ video
                <span className="text-red-500">* 200x200</span>
              </label>

              <input
                type="file"
                id="upload"
                onChange={handleFileChange}
                className={cn(watch("review") === undefined ? "hidden" : "")}
                accept=".png, .jpg, .jpeg"
              />
              <Button
                type="button"
                onClick={() => document.getElementById("upload").click()}
                className="w-max bg-surface px-10"
              >
                Tải lên
              </Button>

              {errors.review && (
                <p className="text-sm text-red-500">{errors.review.message}</p>
              )}
            </div>
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

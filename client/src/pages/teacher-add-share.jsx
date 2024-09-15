import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { createShare } from "@/services/shareService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatContent } from "@/lib/utils";
import useScrollToTop from "@/components/useScrollToTop";

const schema = z.object({
  content: z
    .string()
    .min(8, { message: "Vui lòng điền đầy đủ thông tin của bạn!" }),
  link: z
    .string()
    .min(8, { message: "Vui lòng điền đầy đủ thông tin của bạn!" }),
  fullName: z
    .string()
    .min(8, { message: "Vui lòng điền đầy đủ thông tin của bạn!" }),

  share: z.instanceof(File, { message: "Vui lòng hình ảnh!" }),
  imageUser: z.instanceof(File, { message: "Vui lòng hình ảnh!" }),
});

export default function FormDetailApply() {
  useScrollToTop();
  const [image, setImage] = useState(null);
  const [imageIcon, setImageIcon] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      setValue("share", file, { shouldValidate: true });
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFileChangeIcon = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      setValue("imageUser", file, { shouldValidate: true });
      reader.onloadend = () => {
        setImageIcon(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const result = await Swal.fire({
      title: "Bạn có chắn muốn thêm bài chia sẻ này này?",
      text: "Bài chia sẻ sẽ xuất hiện với tên của bạn!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Hủy",
    });
    if (result.isConfirmed) {
      try {
        const formData = new FormData();
        for (const item in data) {
          formData.append(item, data[item]);
        }
        formData.append("active", true);

        await createShare(formData);
        Swal.fire({
          icon: "success",
          html: "Chúc mừng bạn!  <br />Chia sẻ thành công!",
          showConfirmButton: false,
          timer: 3000,
        });
        navigate("/");
      } catch (error) {
        console.log(error);
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
          Thêm bài chia sẻ từ <span className="text-yellow-500">Top</span>
          GiaoVien
        </h4>
        <p className="w-full text-center text-[16px]">
          Vui lòng điền đầy đủ thông tin
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2"
        >
          <div className="col-span-1 space-y-6 sm:col-span-2">
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
                  Tên tài khoản <span className="text-red-500">*</span>
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
                  id="link"
                  {...register("link")}
                  className="peer h-10 w-full rounded-lg border px-3"
                />
                <label
                  htmlFor="link"
                  className="absolute left-3 top-2 text-[14px] text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[12px] peer-focus:text-gray-700"
                >
                  Link từ facebook <span className="text-red-500">*</span>
                </label>
              </div>
              {errors.link && (
                <p className="text-sm text-red-500">{errors.link.message}</p>
              )}
            </div>
            <div>
              <div className="relative flex items-center">
                <textarea
                  placeholder=" "
                  id="content"
                  {...register("content")}
                  className="peer h-10 min-h-20 w-full rounded-lg border px-3"
                />

                <label
                  htmlFor="content"
                  className="absolute left-3 top-2 text-[14px] text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[12px] peer-focus:text-gray-700"
                >
                  Content bài chia sẻ<span className="text-red-500">*</span>
                </label>
              </div>
              {errors.content && (
                <p className="text-sm text-red-500">{errors.content.message}</p>
              )}
            </div>
          </div>
          <div className="col-span-2 flex items-center justify-between space-y-6">
            <div className="relative flex flex-1 flex-col gap-2 pl-2 pt-4">
              <label
                htmlFor="upload-icon"
                className="cursor-pointer text-[14px] text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[12px] peer-focus:text-gray-700"
              >
                File icon hình ảnh <span className="text-red-500">* </span>
                <span>kích thước hình ảnh 44x44</span>
              </label>
              <input
                type="file"
                id="upload-icon"
                onChange={handleFileChangeIcon}
                className="hidden"
                accept=" .png, .jpeg, .jpg"
              />
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  onClick={() => document.getElementById("upload-icon").click()}
                  className="w-max bg-green-500 px-4"
                >
                  Thêm
                </Button>
              </div>
              {errors.imageUser && (
                <p className="text-sm text-red-500">
                  {errors.imageUser.message}
                </p>
              )}
            </div>
            {imageIcon && (
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-200">
                <img
                  loading="lazy"
                  src={imageIcon}
                  className="max-h-11 min-h-11 min-w-11 max-w-11 rounded-full"
                  width={44}
                  height={44}
                ></img>
              </div>
            )}
          </div>
          <div className="col-span-2 space-y-6">
            <div className="relative flex flex-col gap-2 pl-2 pt-4">
              <label
                htmlFor="upload"
                className="cursor-pointer text-[14px] text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[12px] peer-focus:text-gray-700"
              >
                File hình ảnh bài share <span className="text-red-500">* </span>
                <span>kích thước hình ảnh 390x240</span>
              </label>
              <input
                type="file"
                id="upload"
                onChange={handleFileChange}
                className="hidden"
                accept=" .png, .jpeg, .jpg"
              />
              {errors.share && (
                <p className="text-sm text-red-500">{errors.share.message}</p>
              )}
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  onClick={() => document.getElementById("upload").click()}
                  className="w-max bg-surface px-10"
                >
                  Tải lên
                </Button>

                <Dialog>
                  <DialogTrigger>
                    <Button
                      type="button"
                      className="w-max bg-green-500 px-10 hover:bg-green-500/90"
                    >
                      Xem trước bài chia sẻ
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="min-h-[400px] w-full">
                    <DialogHeader>
                      <DialogTitle>Thông tin bài chia sẻ</DialogTitle>
                      <DialogDescription className="content-scroll flex max-h-[80vh] flex-col items-center space-y-6 overflow-y-auto pt-10">
                        <div className="max-w-[390px] space-y-2 rounded-lg border-2 bg-background pb-2 shadow-xl hover:shadow-2xl">
                          <div className="relative w-full">
                            {image && (
                              <img
                                loading="lazy"
                                src={`${image}`}
                                alt="Hình ảnh feedback"
                                height={240}
                                width={400}
                                className="h-60 max-h-60 w-full rounded-sm"
                              />
                            )}
                          </div>

                          <div className="flex items-center gap-x-2 px-3">
                            <div className="space-y-1">
                              <h4 className="text-[20px] font-medium">
                                {watch("fullName")}
                              </h4>
                            </div>
                          </div>
                          <p className="px-3 text-justify">
                            {watch("content") &&
                              formatContent(watch("content"), 100)}
                          </p>
                          <div className="flex items-center justify-between p-2">
                            <Button variant="outline">
                              Xem đánh giá trên Facebook
                            </Button>

                            <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M24 12C24 17.9897 19.6116 22.9542 13.875 23.8542V15.4688H16.6711L17.2031 12H13.875V9.74906C13.875 8.79984 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9703 4.6875 14.6573 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C4.38844 22.9542 0 17.9897 0 12C0 5.37281 5.37281 0 12 0C18.6272 0 24 5.37281 24 12Z"
                                  fill="#1877F2"
                                />
                                <path
                                  d="M16.6711 15.4688L17.2031 12H13.875V9.74902C13.875 8.80003 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.736 23.95 11.3621 24 12 24C12.6379 24 13.264 23.95 13.875 23.8542V15.4688H16.6711Z"
                                  fill="white"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="relative min-h-[60vh] max-w-[390px] gap-2 space-y-2 rounded-lg border-2 bg-background pt-2 shadow-xl hover:shadow-2xl">
                          <div className="flex items-center gap-x-2 px-3">
                            {imageIcon && (
                              <div className="icon">
                                <img
                                  loading="lazy"
                                  src={imageIcon}
                                  alt="avatar feedback"
                                  className="max-h-11 min-h-11 min-w-11 max-w-11 rounded-full object-cover"
                                />
                              </div>
                            )}

                            <div className="space-y-1">
                              <h4 className="text-[20px] font-medium">
                                {watch("fullName")}
                              </h4>
                              <p>{new Date().toLocaleDateString("vi-VN")}</p>
                            </div>
                          </div>
                          <p className="px-3 text-justify">
                            {watch("content") &&
                              formatContent(watch("content"), 230)}
                          </p>
                          {image && (
                            <div className="absolute bottom-0 w-full">
                              <img
                                loading="lazy"
                                src={image}
                                alt="Hình ảnh feedback"
                                className="max-h-60 min-h-60 min-w-full rounded-sm object-cover"
                              />
                            </div>
                          )}
                        </div>
                        <DialogClose>
                          <Button>Đóng</Button>
                        </DialogClose>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-1 items-center justify-end sm:col-span-2">
            <Button type="submit">Thêm bài viết ngay</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

import CardDanhGia from "./card-danh-gia";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import { createShareComment } from "@/services/likeComment";
import { FaRegImages } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
const schema = z.object({
  level: z
    .number({ required_error: "Vui lòng nhập đánh giá!" })
    .min(1, { message: "Vui lòng nhập đánh giá!" }),
  content: z
    .string()
    .min(1, { message: "Vui lòng nhập content cho đánh giá!" }),
  share: z.instanceof(File, { message: "Vui lòng hình ảnh!" }).optional(),
});

export default function ChiTietDanhGia({ props }) {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [total, setTotal] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (props?.comment === undefined) {
      return setTotal(4);
    }
    const totalSum = props.comment.reduce((sum, comment) => {
      return sum + parseInt(comment.level);
    }, 0);
    setTotal((totalSum / props.comment.length).toFixed(1));
  }, [props]);

  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const handleRating = (value) => {
    setRating(value);
    setValue("level", value);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      setValue("share", file, { shouldValidate: true });
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
    formData.append("teacherId", props.id);
    setLoading(true);
    try {
      const res = await createShareComment(formData);

      if (res.success === false) {
        return Swal.fire({
          icon: "error",
          html: res.msg,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      Swal.fire({
        icon: "success",
        html: "Cám ơn bạn đã đánh giá!",
        showConfirmButton: false,
        timer: 1500,
      });

      reset();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
      <div className="container mx-auto space-y-6 px-2">
        <div className="space-y-1">
          <h2 className="text-center text-[28px] font-semibold text-[#333333]">
            Xếp hạng và đánh giá
          </h2>
          <p className="w-full text-center">
            Chỉ học viên đăng ký học và cấp tài khoản mới để lại được feedback
          </p>
        </div>
        <div className="grid-col-span-1 grid gap-x-4 md:grid-cols-2">
          <div className="content-scroll col-span-1 max-h-[330px] space-y-5 overflow-hidden overflow-y-auto">
            {props?.comment.length > 0 ? (
              props?.comment?.map((item, index) => (
                <div key={index}>
                  <CardDanhGia props={item} />
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center text-red-500">
                <p>Chưa có đánh giá nào</p>
              </div>
            )}
          </div>
          <div className="col-span-1 space-y-3 py-4">
            <div className="flex items-center gap-x-6 px-2">
              <div>
                <h2 className="text-lg font-semibold">
                  {total} <span className="text-sm font-medium"> trên 5</span>
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="16"
                  viewBox="0 0 96 16"
                  fill="none"
                >
                  <path
                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                    fill="#FFDC3A"
                  />
                  <path
                    d="M28 0L29.7961 5.52786H35.6085L30.9062 8.94427L32.7023 14.4721L28 11.0557L23.2977 14.4721L25.0938 8.94427L20.3915 5.52786H26.2039L28 0Z"
                    fill="#FFDC3A"
                  />
                  <path
                    d="M48 0L49.7961 5.52786H55.6085L50.9062 8.94427L52.7023 14.4721L48 11.0557L43.2977 14.4721L45.0938 8.94427L40.3915 5.52786H46.2039L48 0Z"
                    fill="#FFDC3A"
                  />
                  <path
                    d="M68 0L69.7961 5.52786H75.6085L70.9062 8.94427L72.7023 14.4721L68 11.0557L63.2977 14.4721L65.0938 8.94427L60.3915 5.52786H66.2039L68 0Z"
                    fill="#FFDC3A"
                  />
                  <path
                    d="M88 0L89.7961 5.52786H95.6085L90.9062 8.94427L92.7023 14.4721L88 11.0557L83.2977 14.4721L85.0938 8.94427L80.3915 5.52786H86.2039L88 0Z"
                    fill="#CED4DA"
                  />
                </svg>
              </div>
              <div>
                <Button variant="outline" size="small" className="px-2 py-1">
                  Tất cả
                </Button>
                <Button variant="outline" size="small" className="px-2 py-1">
                  Từ Fanpage
                </Button>
                <Button variant="outline" size="small" className="px-2 py-1">
                  Từ group reviews
                </Button>
              </div>
            </div>
            <h3>Thêm đánh giá mới</h3>
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center gap-x-2">
                <h4>Đánh giá: </h4>
                <span id="rating-stars flex">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <svg
                      key={value}
                      onClick={() => handleRating(value)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="star inline-flex cursor-pointer"
                    >
                      <path
                        d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                        fill={value <= rating ? "#FFD700" : "#CED4DA"} // Đổi màu tùy vào số sao được chọn
                      />
                    </svg>
                  ))}
                </span>
                {errors.level && (
                  <p className="text-sm text-red-600">{errors.level.message}</p>
                )}
              </div>

              <div className="relative flex w-full flex-col gap-y-2">
                <label htmlFor="feel">Viết cảm nhận *</label>

                <div className="relative min-w-full">
                  <textarea
                    name="feel"
                    id="feel"
                    placeholder="cảm nhận"
                    {...register("content")}
                    className="min-h-28 min-w-full rounded-md border p-4"
                  ></textarea>
                  {errors.content && (
                    <p className="text-sm text-red-600">
                      {errors.content.message}
                    </p>
                  )}
                  <div className="absolute bottom-4 right-4">
                    <button
                      type="button"
                      className="z-10 cursor-pointer"
                      onClick={() => document.getElementById("image").click()}
                      disabled={
                        isAuthenticated === false
                          ? true
                          : user?.role !== "user"
                            ? true
                            : false || loading
                      }
                    >
                      <FaRegImages />
                    </button>
                  </div>
                </div>

                <input
                  id="image"
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  className={cn(image ? "" : "hidden")}
                  onChange={handleImageChange}
                />
                <div className="w-full text-right">
                  <Button
                    className="bg-primary-500 px-10"
                    type="submit"
                    disabled={
                      isAuthenticated === false
                        ? true
                        : user?.role !== "student"
                          ? true
                          : false || loading
                    }
                  >
                    Gửi
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

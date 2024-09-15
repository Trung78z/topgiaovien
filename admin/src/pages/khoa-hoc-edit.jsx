import BannerELearning from "@/components/course-detail/banner";
import KhoKhan from "@/components/course-detail/kho-khan";
import WhyYouChoice from "@/components/course-detail/why-you-choice";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  createPostRoute,
  deleteRouteCourse,
  editCourse,
  editCourseImage,
  getCourseDetail,
} from "@/services/courseService";
import { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditCourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [embedUrl, setEmbedUrl] = useState(null);
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [active, setActive] = useState(1);
  const [dataActive, setDataActive] = useState({});
  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    review: "",
    goal: "",
    satisfied: "",
    differentTitle1: "",
    differentContent1: "",
    differentTitle2: "",
    differentContent2: "",
    differentTitle3: "",
    differentContent3: "",
    reviewCourseTitle1: "",
    reviewCourseImage1: "",
    reviewCourseTitle2: "",
    reviewCourseImage2: "",
    reviewCourseTitle3: "",
    reviewCourseImage3: "",
    reviewCourseTitle4: "",
    reviewCourseImage4: "",
    routeDetail: [
      {
        id: 0,
        content: "",
        subjectOfStudy: "",
        goalLearn: "",
        courseId: 0,
      },
    ],
  });
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getCourseDetail(slug);
        setForm(res.msg);
        if (res.msg.routeDetail?.length > 0) {
          setDataActive(res.msg.routeDetail[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    Swal.fire({
      icon: "info",
      title: "Chỉnh sửa thông tin và nhấn nút xác nhận bên dưới!",
      showConfirmButton: true,
    });
  }, [slug]);
  const handleChange = (e) => {
    const { id, value, name } = e.target;

    if (id === "urlChoice") {
      const videoId = value.match(/[?&]v=([^&]+)/)[1];

      setForm({ ...form, [id]: videoId });

      if (videoId) {
        setEmbedUrl(videoId);
      } else {
        setEmbedUrl(null);
      }
    } else if (
      id === "subjectOfStudy" ||
      id === "goalLearn" ||
      id === "routeDetailContent"
    ) {
      const updatedName = id === "routeDetailContent" ? "content" : id;

      setForm((prevForm) => ({
        ...prevForm,
        routeDetail: prevForm.routeDetail.map((item) => {
          if (item.id === parseInt(name)) {
            return { ...item, [updatedName]: value };
          }
          return item;
        }),
      }));
      setDataActive((prevDataActive) => ({
        ...prevDataActive,
        [updatedName]: value, // Cập nhật thuộc tính tương ứng trong dataActive
      }));
    } else {
      setForm({ ...form, [id]: value });
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      setFile(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleChangeStep = (data) => {
    setActive(data);
    const update = form.routeDetail?.find((item, index) => index === data - 1);
    setDataActive(update);
  };

  const handleAddRoute = async () => {
    try {
      const res = await createPostRoute(form.id);
      setForm((prev) => ({
        ...prev,
        routeDetail: [...(prev.routeDetail || []), res.msg],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteRoute = async (id) => {
    const result = await Swal.fire({
      title: "Bạn có chắc chắn muốn xóa lộ này?",
      text: "Hành động này không thể hoàn tác!",
      icon: "warning",
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    });
    if (result.isConfirmed) {
      try {
        await deleteRouteCourse(id);
        setForm((prev) => ({
          ...prev,
          routeDetail: prev.routeDetail?.filter((item) => item.id !== id),
        }));
        const update = dataActive.id === id ? {} : dataActive;
        setDataActive(update);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleImageChangeReview = async (e) => {
    const { id } = e.target;
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("course", file);
      formData.append(id, id);
      try {
        const res = await editCourseImage(form.id, formData);
        setForm((prev) => ({
          ...prev,
          [id]: res.msg[id],
        }));
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleSubmit = async () => {
    try {
      const result = await Swal.fire({
        icon: "warning",
        title: "Bạn có chắc chắn muốn chỉnh sửa thông tin này?",
        text: "Thao tác này sẽ cập nhật thông tin hiện tại.",
        showCancelButton: true,
        confirmButtonText: "Chỉnh sửa",
        cancelButtonText: "Hủy",
      });

      if (result.isConfirmed) {
        const formData = new FormData();
        for (const key in form) {
          if (Array.isArray(form[key])) {
            formData.append(key, JSON.stringify(form[key]));
          } else {
            formData.append(key, form[key]);
          }
        }
        formData.append("course", file);
        await editCourse(form.id, formData);

        Swal.fire({
          icon: "success",
          title: "Chỉnh sửa thông tin thành công!",
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(() => {
          navigate("/khoa-hoc");
        }, 2000);
      } else {
        Swal.fire({
          icon: "info",
          title: "Đã hủy chỉnh sửa.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Đã có lỗi xảy ra!",
        text: `Vui lòng thử lại. Chi tiết lỗi: ${error.message}`,
        showConfirmButton: true,
        confirmButtonText: "Đóng",
        timer: 5000,
      });
    }
  };

  return (
    <>
      <div className="space-y-6 sm:space-y-20">
        <BannerELearning
          props={form}
          image={image}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
        />
        <KhoKhan props={form} handleChange={handleChange} />
        <WhyYouChoice
          props={form}
          handleChange={handleChange}
          handleImageChangeReview={handleImageChangeReview}
          setForm={setForm}
        />

        <div className="relative bg-[#EAEBF1] py-10">
          <div className="container space-y-6 rounded-lg bg-background p-2 px-2 sm:p-10">
            <h2 className="w-full text-center text-[28px] font-semibold text-[#333333]">
              Chi tiết lộ trình học
            </h2>
            <div>
              <div className="flex flex-col items-center md:p-4">
                <div className="w-full max-w-4xl">
                  <div
                    className={cn(
                      `relative grid w-full grid-cols-2 md:grid-cols-5`,
                      form?.routeDetail?.length === 4 && "md:grid-cols-4",
                      form?.routeDetail?.length === 3 && "md:grid-cols-3",
                      form?.routeDetail?.length === 2 && "md:grid-cols-2",
                    )}
                  >
                    <Button
                      size="small "
                      disabled={form?.routeDetail?.length === 5 ? true : false}
                      variant="outline"
                      className="absolute -bottom-20 right-1/2 translate-x-1/2 border-none p-4 text-green-500 hover:text-green-600 sm:bottom-0 sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-1/2"
                      onClick={handleAddRoute}
                    >
                      <IoMdAddCircle className="h-6 w-6" />
                    </Button>
                    <div className="absolute bottom-0 left-1/2 h-full w-2 bg-gray-300 md:left-0 md:h-1 md:w-full md:-translate-y-2"></div>
                    {form?.routeDetail?.map((item, index) => (
                      <div
                        className="relative z-10 flex h-32 w-full flex-row items-center justify-between odd:-translate-x-2 odd:translate-y-1/2 odd:flex-row-reverse even:translate-x-4 sm:flex-col sm:odd:translate-x-0 sm:odd:translate-y-0 sm:odd:flex-col sm:even:translate-x-0"
                        key={item?.id}
                      >
                        <div className="absolute -translate-y-6 sm:top-0">
                          <Button
                            size="small "
                            variant="outline"
                            className="border-none text-red-500 hover:text-red-600"
                            onClick={() => handleDeleteRoute(item.id)}
                          >
                            <MdDelete className="h-6 w-6" />
                          </Button>
                        </div>

                        <button
                          onClick={() => handleChangeStep(index + 1)}
                          className={cn(
                            "flex flex-col items-center justify-center rounded-md px-2 py-2",

                            index + 1 === active
                              ? "bg-primary-500 text-white"
                              : "text-neutral-CED4DA",
                          )}
                        >
                          <div className="mt-2 text-[16px]">{`Chặng ${index + 1}`}</div>

                          <div>
                            <input
                              type="text"
                              id="routeDetailContent"
                              value={item?.content}
                              name={item?.id}
                              className={cn(
                                "editText w-full text-[20px] font-semibold",
                                "text-center text-black",
                              )}
                              onChange={handleChange}
                            />
                          </div>
                        </button>
                        <div
                          className={cn(
                            "bottom-0 h-6 w-6 rounded-full",
                            index + 1 === active
                              ? "bg-blue-600"
                              : "bg-gray-300",
                          )}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-10 sm:hidden"></div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-10">
              <div className="col-span-1 min-h-full sm:col-span-2">
                <ul className="col-span-1 list-inside list-disc rounded-lg border border-primary-500 p-4 sm:col-span-2">
                  {dataActive?.subjectOfStudy
                    ?.trim()
                    .split("\n")
                    .map((line, index) => (
                      <li key={index} className="mb-1">
                        {line}
                      </li>
                    ))}
                </ul>
                <textarea
                  id="subjectOfStudy"
                  name={dataActive.id}
                  value={dataActive?.subjectOfStudy}
                  className="editText content-scroll min-h-24 w-full p-2"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-span-1 sm:col-span-3">
                <div className="space-y-2">
                  <ul className="list-inside list-disc rounded-lg border border-primary-500 p-4">
                    {dataActive?.goalLearn
                      ?.trim()
                      .split("\n")
                      .map((line, index) => (
                        <li key={index} className="mb-1">
                          {line}
                        </li>
                      ))}
                  </ul>
                  <textarea
                    id="goalLearn"
                    name={dataActive?.id}
                    className="editText content-scroll min-h-24 w-full p-2"
                    value={dataActive?.goalLearn}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <LoTrinhCourse
          props={form}
          handleChange={handleChange}
          setForm={setForm}
        /> */}
      </div>
      <div className="flex justify-center">
        <Button
          className="bg-green-500 hover:bg-green-600"
          onClick={handleSubmit}
        >
          Hoàn tất chỉnh sửa!
        </Button>
      </div>
    </>
  );
}

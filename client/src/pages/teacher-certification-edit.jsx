import { API_URL } from "@/services/apiService";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  editTeacherCA,
  editTeacherCASetNull,
  getTeacherDetailEdit,
} from "@/services/teacherService";
import { Input } from "@/components/ui/input";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import useScrollToTop from "@/components/useScrollToTop";
const initialData = [
  { id: 1, title: "IELTS", active: true, image: "/MS PHƯƠNG.jpg" },
  { id: 2, title: "TOEIC", active: false, image: "/MS UYÊN.jpg" },
  { id: 3, title: "TOEFL", active: false, image: "/c1.png" },
  { id: 4, title: "OTHER", active: false, image: "/c1.png" },
];
export default function EditCertification() {
  useScrollToTop();
  const [data, setData] = useState(initialData);
  const navigate = useNavigate();
  const [dataActive, setDataActive] = useState(initialData[0]);
  const [dataTeacher, setDataTeacher] = useState();
  const [upload, setUpload] = useState(false);
  const [files, setFiles] = useState({
    caIELTS: null,
    caTOEIC: null,
    caTOEFL: null,
    caOther: null,
  });
  const [previewUrls, setPreviewUrls] = useState({
    caIELTS: "",
    caTOEIC: "",
    caTOEFL: "",
    caOther: "",
  });

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    const file = files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrls((prevUrls) => ({
        ...prevUrls,
        [name]: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
      setFiles((prevFiles) => ({
        ...prevFiles,
        [name]: file,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(files).forEach((key) => {
      if (files[key]) {
        formData.append(key, files[key]);
      }
    });
    try {
      await editTeacherCA(formData);
      Swal.fire({
        icon: "success",
        title: "Chỉnh sủa thành công!",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Đã có lỗi xảy ra!",
        text: `Vui lòng thử lại. Chi tiết lỗi: ${error.message}`,
        showConfirmButton: true,
        confirmButtonText: "Đóng",
        timer: 5000, // Popup sẽ tự động đóng sau 5 giây
      });
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await getTeacherDetailEdit();
      setDataTeacher(res.msg);
    };
    fetch();
  }, []);
  const handleDelete = async (data) => {
    try {
      await editTeacherCASetNull(data);
      Swal.fire({
        icon: "success",
        title: "Chỉnh sửa thành công!",
        text: "Bạn đã sửa thông tin thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Đã có lỗi xảy ra!",
        text: "Xin lỗi đã có lỗi xảy ra vui lòng thử lại sau!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handleActive = (id) => {
    const updatedData = data.map((item) => ({
      ...item,
      active: item.id === id,
    }));
    const activeItem = updatedData.find((item) => item.id === id);
    setDataActive(activeItem);
    setData(updatedData);
  };
  return (
    <>
      <h1 className="mb-8 flex-shrink-0 text-center text-3xl font-semibold text-primary-500">
        Bằng cấp, chứng chỉ của bạn!
      </h1>

      {upload ? (
        <div className="flex w-full items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-lg bg-white p-4 shadow-lg sm:max-w-screen-sm sm:p-20"
          >
            {Object.keys(files).map((field) => (
              <div key={field} className="space-y-2">
                <label
                  htmlFor={field}
                  className="block font-medium text-gray-700"
                >
                  Upload {field.replace("ca", "")}:
                </label>
                <Input
                  type="file"
                  name={field}
                  id={field}
                  accept=".png, .jpg, .jpeg"
                  onChange={handleFileChange}
                  className="block w-full cursor-pointer rounded-lg border border-gray-300 text-sm text-gray-900 focus:border-primary-500 focus:outline-none"
                />
              </div>
            ))}
            <div className="mt-6 flex justify-end gap-3">
              <Dialog className="w-full">
                <DialogTrigger>
                  <Button variant="outline" type="button">
                    <p className="w-full text-center">Xem trước</p>
                  </Button>
                </DialogTrigger>
                <DialogContent className="min-h-[90vh] min-w-full -translate-y-[40%] overflow-y-auto px-10 sm:min-w-[800px]">
                  <DialogHeader>
                    <DialogTitle>
                      <h2 className="text-center text-4xl font-semibold">
                        Bằng cấp, chứng chỉ
                      </h2>
                    </DialogTitle>
                    <DialogDescription className="flex flex-col sm:flex-row sm:gap-10">
                      <div className="flex flex-col items-center gap-4 p-4 sm:p-10">
                        {data.map((item, key) => (
                          <Button
                            key={`${item.id}+${key}`}
                            onClick={() => handleActive(item.id)}
                            className={cn(
                              "py-2 text-sm sm:px-10",
                              item.active
                                ? "bg-primary-500 text-white"
                                : "rounded-md border-2 bg-background text-black hover:bg-slate-300",
                            )}
                          >
                            {item.title}
                          </Button>
                        ))}
                      </div>
                      <div className="flex h-full w-full flex-1">
                        <div className="flex h-full w-full flex-1 items-center justify-center">
                          {dataActive.title === "IELTS" &&
                          previewUrls.caIELTS ? (
                            <img
                              loading="lazy"
                              src={previewUrls.caIELTS}
                              alt="Chứng chỉ IELTS"
                              className="max-h-[85vh] max-w-full rounded-xl object-cover"
                            />
                          ) : dataActive.title === "TOEIC" &&
                            previewUrls.caTOEIC ? (
                            <img
                              loading="lazy"
                              src={previewUrls.caTOEIC}
                              alt="Chứng chỉ TOEIC"
                              className="max-h-[85vh] max-w-full rounded-xl object-cover"
                            />
                          ) : dataActive.title === "TOEFL" &&
                            previewUrls.caTOEFL ? (
                            <img
                              loading="lazy"
                              src={previewUrls.caTOEFL}
                              alt="Chứng chỉ TOEFL"
                              className="max-h-[85vh] max-w-full rounded-xl object-cover"
                            />
                          ) : dataActive.title === "OTHER" &&
                            previewUrls.caOther ? (
                            <img
                              loading="lazy"
                              src={previewUrls.caOther}
                              alt="Chứng chỉ khác"
                              className="max-h-[85vh] max-w-full rounded-xl object-cover"
                            />
                          ) : (
                            <p className="text-center text-red-600">
                              Chứng chỉ không có hoặc không tồn tại.
                            </p>
                          )}
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Button
                type="submit"
                className="rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-primary-600"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex max-h-[60vh] min-h-[60vh] flex-col items-center justify-center gap-5">
          <Dialog className="w-full">
            <DialogTrigger>
              <Button>
                <p className="w-full text-center text-xl">
                  Xem chứng chỉ hiện đã thêm
                </p>
              </Button>
            </DialogTrigger>
            <DialogContent className="content-scroll max-h-[90vh] min-h-[90vh] min-w-full -translate-y-[40%] overflow-y-auto px-10 sm:min-w-[800px]">
              <DialogHeader>
                <DialogTitle>
                  <h2 className="text-center text-4xl font-semibold">
                    Bằng cấp, chứng chỉ
                  </h2>
                </DialogTitle>
                <DialogDescription className="flex flex-col sm:min-w-[650px] sm:flex-row sm:gap-10">
                  <div className="flex max-w-10 flex-row items-center gap-4 p-10 sm:flex-col">
                    {data.map((item, key) => (
                      <Button
                        key={`${item.id}+${key}`}
                        onClick={() => handleActive(item.id)}
                        className={cn(
                          "sm:px-10",
                          item.active
                            ? "bg-primary-500"
                            : "rounded-md border-2 bg-background text-black hover:bg-slate-300",
                        )}
                      >
                        {item.title}
                      </Button>
                    ))}
                  </div>
                  <div className="flex h-full w-full flex-1">
                    <div className="mt-4 flex h-full w-full flex-1">
                      {dataActive.title === "IELTS" && dataTeacher?.caIELTS ? (
                        <div className="relative">
                          <span className="absolute -right-3 top-0 text-red-500">
                            <button
                              onClick={() => handleDelete({ caIELTS: "" })}
                            >
                              <MdDelete className="h-6 w-6" />
                            </button>
                          </span>{" "}
                          <img
                            loading="lazy"
                            src={`${API_URL}/api/file/cv/${dataTeacher?.caIELTS}`}
                            alt="Chứng chỉ IELTS"
                            width={1920}
                            height={1080}
                            className="ml-auto min-w-full max-w-[550px] object-contain sm:max-h-[85vh] sm:min-h-[85vh] sm:min-w-[550px]"
                          />
                        </div>
                      ) : dataActive.title === "TOEIC" &&
                        dataTeacher?.caTOEIC ? (
                        <div className="relative">
                          <span className="absolute -right-3 top-0 text-red-500">
                            <button
                              onClick={() => handleDelete({ caTOEIC: "" })}
                            >
                              <MdDelete className="h-6 w-6" />
                            </button>
                          </span>{" "}
                          <img
                            loading="lazy"
                            src={`${API_URL}/api/file/cv/${dataTeacher?.caTOEIC}`}
                            alt="Chứng chỉ TOEIC"
                            width={1920}
                            height={1080}
                            className="ml-auto min-w-full max-w-[550px] object-contain sm:max-h-[85vh] sm:min-h-[85vh] sm:min-w-[550px]"
                          />
                        </div>
                      ) : dataActive.title === "TOEFL" &&
                        dataTeacher?.caTOEFL ? (
                        <div className="relative">
                          <span className="absolute -right-3 top-0 text-red-500">
                            <button
                              onClick={() => handleDelete({ caTOEFL: "" })}
                            >
                              <MdDelete className="h-6 w-6" />
                            </button>
                          </span>{" "}
                          <img
                            loading="lazy"
                            src={`${API_URL}/api/file/cv/${dataTeacher?.caTOEFL}`}
                            alt="Chứng chỉ TOEFL"
                            width={1920}
                            height={1080}
                            className="ml-auto min-w-full max-w-[550px] object-contain sm:max-h-[85vh] sm:min-h-[85vh] sm:min-w-[550px]"
                          />
                        </div>
                      ) : dataActive.title === "OTHER" &&
                        dataTeacher?.caOther ? (
                        <div className="relative">
                          <span className="absolute -right-3 top-0 text-red-500">
                            <button
                              onClick={() => handleDelete({ caOther: "" })}
                            >
                              <MdDelete className="h-6 w-6" />
                            </button>
                          </span>{" "}
                          <img
                            loading="lazy"
                            src={`${API_URL}/api/file/cv/${dataTeacher?.caOther}`}
                            alt="Chứng chỉ khác"
                            width={1920}
                            height={1080}
                            className="ml-auto min-w-full max-w-[550px] object-contain sm:max-h-[85vh] sm:min-h-[85vh] sm:min-w-[550px]"
                          />
                        </div>
                      ) : (
                        <p className="text-center text-red-600">
                          Chứng chỉ không có hoặc không tồn tại.
                        </p>
                      )}
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Button
            onClick={() => {
              setUpload(true);
            }}
            className="rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-primary-600"
          >
            Tải ảnh
          </Button>
        </div>
      )}
    </>
  );
}

import QuillEditor from "@/components/quillEditor";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { API_URL } from "@/services/apiService";
import {
  editPost,
  getPostCategories,
  getPostDetail,
} from "@/services/postService";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditZingNew() {
  const { slug } = useParams();
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [dataPost, setDataPost] = useState({});
  const [showHideImage, setShowHideImage] = useState(false);
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({ title: "", content: "", categoryId: 1 });
  const navigate = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      const res = await getPostCategories();
      const resPost = await getPostDetail(slug);
      setDataPost(resPost.msg);
      setForm((prevForm) => ({
        ...prevForm,
        categoryId: resPost.msg.categoryId,
        content: resPost.msg.content,
        title: resPost.msg.title,
      }));
      setCategories(res.msg);
    };
    fetch();
    Swal.fire({
      icon: "info",
      title: "Chỉnh sửa thông tin và nhấn nút xác nhận bên dưới!",
      showConfirmButton: true,
    });
  }, [slug]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      setFile(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
      setShowHideImage(true);
      reader.readAsDataURL(file);
    }
  };
  const handleDelete = () => {
    setImage(null);
    setDataPost((prev) => ({ ...prev, image: "" }));
  };

  const handleChangeShowHide = () => {
    setShowHideImage((prev) => !prev);
  };

  const handleChangeCate = (data) => {
    const id = categories.find((item) => item.content === data);
    setForm((prevForm) => ({
      ...prevForm,
      categoryId: id.id,
    }));
  };
  const handleChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      title: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }

    if (form.content === "") {
      Swal.fire({
        title: "Vui lòng thêm đầy đủ thông tin!",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
        reverseButtons: true,
        confirmButtonColor: "#3085d6", // màu nút xác nhận
        confirmButtonText: "Xác nhận",
      });
    }
    formData.append("post", file);

    try {
      const res = await editPost(dataPost?.id, formData);
      if (res.success === false) {
        return Swal.fire({
          title: "Đã có lỗi xảy ra",
          text: res.msg,
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
          },
          reverseButtons: true,
          confirmButtonColor: "#3085d6", // màu nút xác nhận
          confirmButtonText: "Xin lỗi vì sự bất tiện này!",
        });
      }
      setForm({ title: "", content: "", categoryId: 1 });
      setImage("");
      Swal.fire({
        icon: "success",
        title: "Chỉnh sửa bài viết thành công!",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        navigate("/tin-tuc");
      }, 2000);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Đã có lỗi xảy ra",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
        reverseButtons: true,
        confirmButtonColor: "#3085d6", // màu nút xác nhận
        confirmButtonText: "Xin lỗi vì sự bất tiện này!",
      });
    }
  };
  return (
    <>
      <form className="space-y-4 px-2" onSubmit={handleSubmit}>
        <h1 className="title text-center">Thêm bài viết của TopGiaoVien</h1>
        <div className="flex items-center justify-around gap-6">
          <div className="flex w-full flex-col space-y-2">
            <label htmlFor="title" className="cursor-pointer">
              Tự đề bài viết <span className="text-red-500">*</span>
            </label>
            <textarea
              id="title"
              placeholder="Enter title..."
              className="max-h-16 rounded-md border border-primary-500 p-2"
              value={form.title}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="w-full space-y-4">
            <label htmlFor="">
              Lựa chọn doanh mục <span className="text-red-500">*</span>
            </label>
            <Select
              onValueChange={handleChangeCate}
              defaultValue={dataPost.category?.content}
            >
              <SelectTrigger className="z-10 w-full">
                <SelectValue placeholder={dataPost.category?.content} />
              </SelectTrigger>
              <SelectContent className="z-10 bg-white">
                {categories.map((item) => (
                  <SelectItem value={item?.content} key={item?.id}>
                    {item?.content}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div
          className={cn(
            "relative flex w-full flex-col justify-center rounded-md border",
            showHideImage === true && image !== null ? "" : "min-h-10",
          )}
        >
          {image || dataPost?.image ? (
            <div className="relative max-h-[600px] w-full">
              {showHideImage && (
                <>
                  <img
                    src={image || `${API_URL}/api/file/post/${dataPost?.image}`}
                    alt="Uploaded"
                    width={1920}
                    height={1080}
                    className="max-h-[500px] min-h-[500px] w-full rounded-sm object-fill"
                  />
                  <Button
                    className={cn(
                      "absolute right-0 top-0 bg-red-500 hover:bg-red-600",
                    )}
                    type="button"
                    onClick={handleDelete}
                  >
                    Xoá hình ảnh
                  </Button>
                </>
              )}
              <Button
                className={cn(
                  showHideImage === true ? "absolute top-0" : "relative",
                )}
                type="button"
                onClick={handleChangeShowHide}
              >
                {showHideImage === true ? "Hidden" : "Show Image"}
              </Button>
            </div>
          ) : (
            <label className="flex min-h-40 cursor-pointer flex-col items-center justify-center">
              <FaPlus className="text-4xl text-gray-400" />
              <span className="mt-2 text-gray-500">Thêm ảnh</span>
              <span>Kích thước phù hợp 1920x600</span>
              <input
                type="file"
                className="hidden"
                accept=".png, .jpg, .jpeg"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>
        <QuillEditor setForm={setForm} form={form} />
        <div className="flex items-center justify-end">
          <Button className="bg-green-500 hover:bg-green-600" type="submit">
            Chỉnh sửa bài post
          </Button>
        </div>
      </form>
    </>
  );
}

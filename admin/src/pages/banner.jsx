import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { API_URL } from "@/services/apiService";
import {
  createImageBanner,
  deleteImageBanner,
  editImageBanner,
  getImageBanner,
} from "@/services/homeService";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Banner() {
  const [data, setData] = useState([]);
  const [image, setImage] = useState(null);
  const [alt, setAlt] = useState("");
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getImageBanner();
        setData(res.msg);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Bạn có chắc chắn muốn xóa?",
      text: "Hành động này không thể hoàn tác!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      reverseButtons: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    });
    if (result.isConfirmed) {
      try {
        await deleteImageBanner(id);
        Swal.fire({
          icon: "success",
          title: "Xóa thành công!",
          showConfirmButton: false,
          timer: 1000,
        });
        const update = data.filter((item) => item.id !== id);
        setData(update);
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
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("banner", file);
      formData.append("alt", alt);
      const data = await createImageBanner(formData);
      Swal.fire({
        icon: "success",
        title: "Thêm thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
      setAlt("");
      setFile(null);
      setImage(null);
      setOpen(false);
      setData((prev) => [...prev, data.msg]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="space-y-4 px-2">
        <h1 className="title text-center text-2xl text-primary-500">
          Danh sách banner của <span className="text-yellow-500">Top</span>
          GiaoVien
        </h1>
        <div className="flex items-center justify-end gap-x-2">
          <Dialog open={open} onOpenChange={(e) => setOpen(e)}>
            <DialogTrigger>
              <Button>Thêm</Button>
            </DialogTrigger>
            <DialogContent className="w-full">
              <DialogHeader>
                <DialogTitle>Thêm hình ảnh</DialogTitle>
                <DialogDescription className="space-y-6">
                  Vui lòng thêm ảnh kích thước khoảng
                  <span className="text-red-500">1920x600</span>
                  {image && (
                    <img
                      src={image}
                      width={1920}
                      height={440}
                      alt="error"
                      className="h-[200px] sm:h-[200px]"
                    />
                  )}
                  {image && (
                    <div className="space-y-2">
                      <label htmlFor="image">
                        Nhập từ khóa cho ảnh:
                        <Input
                          type="text"
                          value={alt}
                          onChange={(e) => setAlt(e.target.value)}
                        />
                      </label>
                    </div>
                  )}
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleImageChange}
                  />
                  <div className="flex items-center justify-end gap-6">
                    <DialogClose>Hủy</DialogClose>
                    <Button onClick={handleSubmit}>Thêm</Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="content-scroll relative max-h-[60vh] min-h-[60vh] overflow-y-auto">
          <Table>
            <TableCaption>A list of your teacher TopGiaoVien .</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[16px] font-medium">ID</TableHead>
                <TableHead className="text-[16px] font-medium">
                  Tên File
                </TableHead>
                <TableHead className="text-[16px] font-medium">
                  Từ khóa
                </TableHead>
                <TableHead className="text-[16px] font-medium">Image</TableHead>
                <TableHead className="text-[16px] font-medium">
                  Option
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="max-h-[65vh]">
              {data.map((item, key) => (
                <TableRow key={item?.id}>
                  <TableCell className="font-medium">{key + 1}</TableCell>
                  <TableCell className="font-medium">{item?.image}</TableCell>
                  <TableCell className="font-medium">{item?.alt}</TableCell>
                  <TableCell className="font-medium">
                    <a
                      href={`${API_URL}/api/file/banner/${item?.image}`}
                      target="_blank"
                    >
                      Hình ảnh
                    </a>
                  </TableCell>
                  <TableCell className="flex flex-shrink-0 items-center gap-1 font-medium">
                    <EditBanner item={item} setData={setData} />
                    <FaDeleteLeft
                      className="h-4 w-4 cursor-pointer text-red-500"
                      onClick={() => handleDelete(item.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
const EditBanner = ({ item, setData }) => {
  const [image, setImage] = useState(null);
  const [alt, setAlt] = useState(item.alt);
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
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
  const handleSubmitEdit = async (id) => {
    try {
      const formData = new FormData();
      formData.append("banner", file);
      formData.append("alt", alt);
      const data = await editImageBanner(id, formData);
      if (data.success === false) {
        return Swal.fire({
          icon: "error",
          title: "Đã có lỗi xảy ra!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      Swal.fire({
        icon: "success",
        title: "Sửa hình ảnh thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
      setAlt("");
      setFile(null);
      setImage(null);
      setOpen(false);
      setData((prev) =>
        prev.map((item) => (item.id === id ? { ...item, ...data.msg } : item)),
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {" "}
      <Dialog open={open} onOpenChange={(e) => setOpen(e)}>
        <DialogTrigger>
          <FaEdit className="h-4 w-4 cursor-pointer text-green-500" />
        </DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa hình ảnh</DialogTitle>
            <DialogDescription className="space-y-6">
              Vui lòng chỉnh sửa ảnh kích thước khoảng
              <span className="text-red-500">1920x600</span>
              <img
                src={image || `${API_URL}/api/file/banner/${item?.image}`}
                width={1920}
                height={440}
                alt="error"
                className="h-[200px] sm:h-[200px]"
              />
              <div className="space-y-2">
                <label htmlFor="image">
                  Nhập từ khóa cho ảnh:
                  <div>
                    <Input
                      type="text"
                      value={alt}
                      onChange={(e) => setAlt(e.target.value)}
                    />
                  </div>
                </label>
              </div>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={handleImageChange}
              />
              <div className="flex items-center justify-end gap-6">
                <DialogClose>Hủy</DialogClose>
                <Button onClick={() => handleSubmitEdit(item.id)}>
                  Chỉnh sửa
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

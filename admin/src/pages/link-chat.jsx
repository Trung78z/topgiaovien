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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { deletePost } from "@/services/postService";
import { editChatTeacher, getAllChatTeacher } from "@/services/teacherService";
import { useEffect, useState } from "react";
import { FaEdit, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Input } from "@/components/ui/input";
import { editChatCourse, getAllChatCourse } from "@/services/courseService";

export default function Linkchat() {
  const [data, setData] = useState([]);
  const [dataCourse, setDataCourse] = useState([]);
  const [dataBtn, setDataBtn] = useState([
    { id: 1, title: "Giáo viên", active: true },
    { id: 2, title: "Khóa học", active: false },
  ]);
  useEffect(() => {
    const fetch = async () => {
      const res = await getAllChatTeacher();
      const resCourse = await getAllChatCourse();
      setData(res.msg);
      setDataCourse(resCourse.msg);
    };
    fetch();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      Swal.fire({
        icon: "success",
        title: "Xóa bài viết thành công!",
        showConfirmButton: false,
        timer: 1000,
      });
      const update = data.filter((item) => item.id !== id);
      setData(update);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (id) => {
    setDataBtn((prevDataBtn) =>
      prevDataBtn.map((btn) =>
        btn.id === id ? { ...btn, active: true } : { ...btn, active: false },
      ),
    );
  };
  return (
    <>
      <div className="space-y-6 px-2 sm:space-y-10">
        <h1 className="title text-center text-2xl text-primary-500">
          Danh sách chat của <span className="text-yellow-500">Top</span>
          GiaoVien
        </h1>
        <div className="space-x-2">
          {dataBtn.map((item) => (
            <Button
              key={item}
              variant={item.active ? "" : "outline"}
              onClick={() => handleChange(item.id)}
            >
              {item.title}
            </Button>
          ))}
        </div>

        <div className="content-scroll max-h-[60vh] overflow-y-auto">
          {dataBtn[0].active ? (
            <Table>
              <TableCaption>A list of your post .</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="">ID</TableHead>
                  <TableHead className="">Tên</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="">Phone</TableHead>
                  <TableHead className="">Link chat</TableHead>
                  <TableHead className="">Loại giáo viên</TableHead>
                  <TableHead className="">Xem trang</TableHead>
                  <TableHead className="">Option</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item, key) => (
                  <TableRow key={item?.id}>
                    <TableCell className="font-medium">{key + 1}</TableCell>
                    <TableCell className="font-medium">{item?.name}</TableCell>
                    <TableCell className="font-medium">
                      {item?.user?.email}
                    </TableCell>
                    <TableCell className="cursor-pointer font-medium">
                      {item?.user?.phone}
                    </TableCell>
                    <TableCell className="font-medium">
                      {item?.linkChat ? (
                        <a href={item?.linkChat} target="_blank">
                          Kiểm tra
                        </a>
                      ) : (
                        "Chưa có"
                      )}
                    </TableCell>
                    <TableCell className="font-medium">
                      {item?.teacher}
                    </TableCell>
                    <TableCell className="font-medium">
                      <div className="text-center">
                        <Link
                          to={`${import.meta.env.VITE_API_URL_WEB}/giao-vien/giao-vien-${item.id}+${item.slug}`}
                          target="_blank"
                        >
                          <FaRegEye />
                        </Link>
                      </div>
                    </TableCell>
                    <TableCell className="flex flex-shrink-0 items-center gap-1 font-medium">
                      <EditLink setData={setData} props={item} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Table>
              <TableCaption>A list of your post .</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="">ID</TableHead>
                  <TableHead className="">Tên khóa học</TableHead>
                  <TableHead>Địa chỉ</TableHead>
                  <TableHead className="">Loại khóa học</TableHead>
                  <TableHead className="">Link chat</TableHead>
                  <TableHead className="">Xem trang</TableHead>
                  <TableHead className="">Option</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {dataCourse.map((item, key) => (
                  <TableRow key={item?.id}>
                    <TableCell className="font-medium">{key + 1}</TableCell>
                    <TableCell className="font-medium">{item?.title}</TableCell>
                    <TableCell className="font-medium">
                      {item?.location}
                    </TableCell>
                    <TableCell className="cursor-pointer font-medium">
                      {item?.courseCategory?.content}
                    </TableCell>
                    <TableCell className="font-medium">
                      {item?.linkChat ? item?.linkChat : "Chưa có"}
                    </TableCell>

                    <TableCell className="font-medium">
                      <div className="text-center">
                        <Link
                          to={`${import.meta.env.VITE_API_URL_WEB}/khoa-hoc/${item.slug}`}
                          target="_blank"
                        >
                          <FaRegEye />
                        </Link>
                      </div>
                    </TableCell>
                    <TableCell className="flex flex-shrink-0 items-center gap-1 font-medium">
                      <EditLinkCourse setData={setDataCourse} props={item} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </>
  );
}
const EditLink = ({ props, setData }) => {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState(props?.linkChat);
  const [loading, setLoading] = useState(false);
  const handleSubmitEdit = async (id) => {
    setLoading(true);
    try {
      const data = await editChatTeacher(props.id, { linkChat: link });
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
        title: "Sửa thành công!",
        showConfirmButton: false,
        timer: 1500,
      });

      setOpen(false);
      setData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, linkChat: link } : item,
        ),
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={(e) => setOpen(e)}>
        <DialogTrigger>
          <FaEdit className="h-4 w-4 cursor-pointer text-green-500" />
        </DialogTrigger>
        <DialogContent className="w-full space-y-6">
          <DialogHeader>
            <DialogTitle>Chỉnh link chat</DialogTitle>
          </DialogHeader>
          <DialogDescription className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="linkChat" className="cursor-pointer">
                Thêm link chat
              </label>
              <Input
                placeholder="Thêm đường link chat"
                id="linkChat"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              ></Input>
            </div>

            <div className="flex items-center justify-end gap-6">
              <DialogClose>Hủy</DialogClose>
              <Button
                onClick={() => handleSubmitEdit(props.id)}
                disabled={loading}
              >
                Chỉnh sửa
              </Button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};
const EditLinkCourse = ({ props, setData }) => {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState(props?.linkChat);
  const [loading, setLoading] = useState(false);
  const handleSubmitEdit = async (id) => {
    setLoading(true);
    try {
      const data = await editChatCourse(props.id, { linkChat: link });
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
        title: "Sửa thành công!",
        showConfirmButton: false,
        timer: 1500,
      });

      setOpen(false);
      setData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, linkChat: link } : item,
        ),
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={(e) => setOpen(e)}>
        <DialogTrigger>
          <FaEdit className="h-4 w-4 cursor-pointer text-green-500" />
        </DialogTrigger>
        <DialogContent className="w-full space-y-6">
          <DialogHeader>
            <DialogTitle>Chỉnh link chat</DialogTitle>
          </DialogHeader>
          <DialogDescription className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="linkChat" className="cursor-pointer">
                Thêm link chat
              </label>
              <Input
                placeholder="Thêm đường link chat"
                id="linkChat"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              ></Input>
            </div>

            <div className="flex items-center justify-end gap-6">
              <DialogClose>Hủy</DialogClose>
              <Button
                onClick={() => handleSubmitEdit(props.id)}
                disabled={loading}
              >
                Chỉnh sửa
              </Button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

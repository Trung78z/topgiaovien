import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { deleteCourse, getAllCourse } from "@/services/courseService";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Course() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [dataOld, setDataOld] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getAllCourse();
        setData(res.msg);
        setDataOld(res.msg);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handleEdit = async (slug) => {
    navigate(`/khoa-hoc/chinh-sua-step/${slug}`);
  };
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
        await deleteCourse(id);
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
  const handleCourse = (e) => {
    const update = dataOld.filter((item) => {
      const title = item.title
        ? item.title.toLowerCase().includes(e.target.value.toLowerCase())
        : false;
      const content = item.content
        ? item.content.toLowerCase().includes(e.target.value.toLowerCase())
        : false;
      const courseCategory = item.courseCategory.content
        ? item.courseCategory.content
            .toLowerCase()
            .includes(e.target.value.toLowerCase().toLowerCase())
        : false;

      return title || content || courseCategory;
    });
    setData(update);
  };
  return (
    <>
      <div className="space-y-4 px-2">
        <h1 className="title text-center text-2xl text-primary-500">
          Danh sách khóa học của <span className="text-yellow-500">Top</span>
          GiaoVien
        </h1>{" "}
        <div className="flex items-center justify-end gap-2">
          <div>
            <Input
              className=""
              placeholder="Nhập thông tin tìm kiếm"
              onChange={handleCourse}
            ></Input>
          </div>{" "}
          <div>
            <Link to="/khoa-hoc/them">
              <Button>Thêm khóa học</Button>
            </Link>
          </div>
        </div>
        <div className="content-scroll relative max-h-[60vh] min-h-[60vh] overflow-y-auto">
          <Table>
            <TableCaption>A list of your teacher TopGiaoVien .</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[16px] font-medium">
                  Tiêu đề
                </TableHead>
                <TableHead className="text-[16px] font-medium">
                  Category
                </TableHead>
                <TableHead className="text-[16px] font-medium">
                  Content
                </TableHead>
                <TableHead className="text-[16px] font-medium">Image</TableHead>
                <TableHead className="text-[16px] font-medium">
                  Option
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="max-h-[65vh]">
              {data.map((item) => (
                <TableRow key={item?.id}>
                  <TableCell className="font-medium">{item?.title}</TableCell>
                  <TableCell className="font-medium">
                    {item?.courseCategory.content}
                  </TableCell>
                  <TableCell className="font-medium">{item?.content}</TableCell>
                  <TableCell className="font-medium">
                    {" "}
                    <a
                      href={`${API_URL}/api/file/course/${item?.image}`}
                      target="_blank"
                    >
                      Hình ảnh
                    </a>
                  </TableCell>
                  <TableCell className="flex flex-shrink-0 items-center gap-1 font-medium">
                    <FaEdit
                      className="h-4 w-4 cursor-pointer text-green-500"
                      onClick={() => handleEdit(item.id)}
                    />
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

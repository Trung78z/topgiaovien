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
import { deleteUser, getUsers } from "@/services/userService";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Student() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [dataOld, setDataOld] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getUsers();
        const update = res.msg.filter((item) => {
          console.log(item);
          return item.role === "student";
        });

        setData(update);
        setDataOld(update);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handleEdit = async (slug) => {
    navigate(`/giao-vien/chinh-sua/${slug}`);
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
        await deleteUser(id);
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

  const handleSearcher = (e) => {
    const update = dataOld.filter((item) => {
      const email = item.email
        ? item.email.toLowerCase().includes(e.target.value.toLowerCase())
        : false;
      const fullName = item.fullName
        ? item.fullName.toLowerCase().includes(e.target.value.toLowerCase())
        : false;
      const phone = item.phone
        ? item.phone.toLowerCase().includes(e.target.value.toLowerCase())
        : false;

      return email || fullName || phone;
    });
    setData(update);
  };
  return (
    <>
      <div className="space-y-4 px-2">
        <h1 className="title text-center text-2xl text-primary-500">
          Danh sách học viên của <span className="text-yellow-500">Top</span>
          GiaoVien
        </h1>
        <div className="flex items-center justify-end gap-2">
          <div>
            <Input
              className=""
              placeholder="Nhập thông tin tìm kiếm"
              onChange={handleSearcher}
            ></Input>
          </div>{" "}
        </div>
        <div className="content-scroll relative max-h-[60vh] min-h-[60vh] overflow-y-auto">
          <Table className="max-h-[100vh]">
            <TableCaption>A list of your teacher TopGiaoVien .</TableCaption>
            <TableHeader>
              <TableRow className="sticky top-0">
                <TableHead className="text-[16px] font-medium">ID</TableHead>
                <TableHead className="text-[16px] font-medium">Email</TableHead>
                <TableHead className="text-[16px] font-medium">Phone</TableHead>
                <TableHead className="text-[16px] font-medium">
                  Full Name
                </TableHead>
                <TableHead className="text-[16px] font-medium">Role</TableHead>
                <TableHead className="text-[16px] font-medium">
                  Option
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="max-h-[65vh]">
              {data.map((item, key) => (
                <TableRow key={item?.id}>
                  <TableCell className="font-medium">{key + 1}</TableCell>
                  <TableCell className="font-medium">{item?.email}</TableCell>
                  <TableCell className="font-medium">{item?.phone}</TableCell>
                  <TableCell className="font-medium">
                    {item?.fullName}
                  </TableCell>
                  <TableCell className="font-medium">{item?.role}</TableCell>
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

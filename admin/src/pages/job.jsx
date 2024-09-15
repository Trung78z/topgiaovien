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
import { formatContent } from "@/lib/utils";
import { deleteJob, getAllJob } from "@/services/jobService";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Job() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await getAllJob();
      setData(res.msg);
    };
    fetch();
  }, []);

  const handleEdit = async (slug) => {
    navigate(`/cong-viec/tuyen-nhan-vien/chinh-sua/${slug}`);
  };
  const handleDelete = async (id) => {
    try {
      await deleteJob(id);
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

  return (
    <>
      <div className="space-y-4 px-2">
        <h1 className="title text-center text-2xl text-primary-500">
          Danh bài viết của tuyển dụng{" "}
          <span className="text-yellow-500">Top</span>
          GiaoVien
        </h1>
        <div className="flex items-center justify-end">
          {" "}
          <Link to="/cong-viec/tuyen-nhan-vien/them">
            <Button>Thêm mới</Button>
          </Link>
        </div>
        <Table>
          <TableCaption>A list of your post .</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">ID</TableHead>
              <TableHead className="">Tiêu đề</TableHead>
              <TableHead className="">Nhiệm vụ</TableHead>
              <TableHead>Yêu cầu</TableHead>
              <TableHead className="">Quyền lợi</TableHead>
              <TableHead className="">Địa điểm</TableHead>
              <TableHead className="">Lương</TableHead>{" "}
              <TableHead className="">Hạn nộp</TableHead>{" "}
              <TableHead className="text-[16px] font-medium">Option</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, key) => (
              <TableRow key={item?.id}>
                <TableCell className="font-medium">{key + 1}</TableCell>
                <TableCell className="font-medium">
                  {formatContent(item?.title, 30)}
                </TableCell>{" "}
                <TableCell className="font-medium">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: formatContent(
                        item?.responsibilities.replace(/<\/?[^>]+>/gi, ""),
                        30,
                      ),
                    }}
                  ></div>
                </TableCell>{" "}
                <TableCell className="font-medium">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: formatContent(
                        item?.requirements.replace(/<\/?[^>]+>/gi, ""),
                        30,
                      ),
                    }}
                  ></div>
                </TableCell>{" "}
                <TableCell className="font-medium">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: formatContent(
                        item?.benefits.replace(/<\/?[^>]+>/gi, ""),
                        30,
                      ),
                    }}
                  ></div>
                </TableCell>{" "}
                <TableCell className="font-medium">
                  {formatContent(item?.location, 30)}
                </TableCell>{" "}
                <TableCell className="font-medium">
                  {formatContent(item?.salary, 30)}
                </TableCell>{" "}
                <TableCell className="font-medium">
                  {new Date(item?.applicationDeadline).toLocaleDateString(
                    "vi-VN",
                  )}
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
    </>
  );
}

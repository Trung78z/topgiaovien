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

import { useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";

import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "@/services/apiService";
import { FaEdit } from "react-icons/fa";
import { deleteReviewVideo, getReviewVideo } from "@/services/review-video";

export default function ReviewVideo() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getReviewVideo();
        setData(res.msg);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  const handleEdit = async (slug) => {
    navigate(`/reviews/video/chinh-sua/${slug}`);
  };
  const handleDelete = async (id) => {
    console.log(id);

    const result = await Swal.fire({
      title: "Bạn có chắc chắn muốn xóa bài viết này?",
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
        await deleteReviewVideo(id);
        Swal.fire({
          icon: "success",
          title: "Xóa thành công!",
          showConfirmButton: false,
          timer: 1000,
        });
        const update = data.filter((item) => item.id !== id);
        setData(update);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="space-y-4 px-2">
        <h1 className="title text-center text-2xl text-primary-500">
          Danh sách video review của
          <span className="text-yellow-500">Top</span>
          GiaoVien
        </h1>
        <div className="flex items-center justify-end gap-x-2">
          <Link to="/reviews/video/them">
            <Button>Thêm</Button>
          </Link>
        </div>

        <Table>
          <TableCaption>A list of your review TopGiaoVien .</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[16px] font-medium">ID</TableHead>
              <TableHead className="text-[16px] font-medium">Image</TableHead>
              <TableHead className="text-[16px] font-medium">Link</TableHead>
              <TableHead className="text-[16px] font-medium">Option</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="max-h-[65vh]">
            {data.map((item, key) => (
              <TableRow key={item?.id}>
                <TableCell className="font-medium">{key + 1}</TableCell>
                <TableCell className="font-medium">
                  <Link
                    to={`${API_URL}/api/file/review/${item?.image}`}
                    target="_blank"
                  >
                    {item?.image}
                  </Link>
                </TableCell>{" "}
                <TableCell className="font-medium">
                  <Link to={item?.url} target="_blank">
                    {item?.url}
                  </Link>
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

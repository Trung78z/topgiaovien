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
import { API_URL } from "@/services/apiService";
import { deletePost, getAllPost } from "@/services/postService";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function ZingNews() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await getAllPost();
      setData(res.msg);
    };
    fetch();
  }, []);

  const handleEdit = async (slug) => {
    navigate(`/tin-tuc/chinh-sua/${slug}`);
  };
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

  return (
    <>
      <div className="space-y-4 px-2">
        <h1 className="title text-center text-2xl text-primary-500">
          Danh bài viết của <span className="text-yellow-500">Top</span>
          GiaoVien
        </h1>
        <Link to="/tin-tuc/them" className="flex items-center justify-end">
          <Button>Thêm mới</Button>
        </Link>
        <Table>
          <TableCaption>A list of your post .</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Title</TableHead>
              <TableHead className="">Category</TableHead>
              <TableHead>Content</TableHead>

              <TableHead className="">Image</TableHead>
              <TableHead className="">Option</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item?.id}>
                <TableCell className="font-medium">
                  {formatContent(item?.title, 50)}
                </TableCell>
                <TableCell className="font-medium">
                  {formatContent(item?.category.content, 50)}
                </TableCell>
                <TableCell className="font-medium">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: formatContent(
                        item?.content.replace(/<\/?[^>]+>/gi, ""),
                        50,
                      ),
                    }}
                  ></div>
                </TableCell>
                <TableCell className="cursor-pointer font-medium">
                  <a
                    href={`${API_URL}/api/file/post/${item?.image}`}
                    target="_blank"
                  >
                    Hình ảnh
                  </a>
                </TableCell>
                <TableCell className="flex flex-shrink-0 items-center gap-1 font-medium">
                  <FaEdit
                    className="h-4 w-4 cursor-pointer text-green-500"
                    onClick={() => handleEdit(item.slug)}
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

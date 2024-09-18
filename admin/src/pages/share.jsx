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
import { useEffect, useState } from "react";

import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";

import { deleteShare, getShares } from "@/services/shareService";
import { formatContent } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ShareWithFacebook() {
  const [data, setData] = useState([
    {
      id: 1,
      content:
        "𝐓𝐨̂̉ 𝐂𝐡𝐮̛́𝐜 𝐓𝐢𝐞̂𝐧 𝐏𝐡𝐨𝐧𝐠 𝐓𝐫𝐨𝐧𝐠 𝐃𝐢̣𝐜𝐡 𝐕𝐮̣ 𝐆𝐢𝐚́𝐨 𝐃𝐮̣𝐜 𝐂𝐡𝐚̂́𝐭 𝐋𝐮̛𝐨̛̣𝐧𝐠 𝐕𝐨̛́𝐢 𝟏 𝐓𝐫𝐢𝐞̣̂𝐮 𝐇𝐨̣𝐜 𝐕𝐢𝐞̂𝐧 𝐇𝐚̀𝐢 𝐋𝐨̀𝐧𝐠 𝐓𝐨𝐩𝐠𝐢𝐚𝐨𝐯𝐢𝐞𝐧 tự hào là tổ chức tiên phong trong việc cung cấ ong giảng dạy và dịch vụ khách hàng. Chúng tôi không ngừng nỗ lực để cải tiến",
      image: null,
      link: "https://www.facebook.com/share/p/zgSBwDyAT1Gg6eyX/",
      active: false,
      createdAt: "2024-08-23T05:39:28.967Z",
      updatedAt: "2024-08-23T05:39:28.967Z",
      userId: "9f9a17c5-e75f-4c7b-9408-44b404b7d197",
      User: {
        fullName: "Đỗ Tường Phương Uyên",
      },
    },
  ]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getShares();
        setData(res.msg);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Bạn có chắc chắn muốn xóa bài này?",
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
        await deleteShare(id);
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
          Danh sách share của <span className="text-yellow-500">Top</span>
          GiaoVien
        </h1>{" "}
        <div className="flex items-center justify-end">
          <Link to="/share-facebook/them">
            <Button>Thêm bài chia sẻ</Button>
          </Link>
        </div>
        <div className="content-scroll relative max-h-[60vh] min-h-[60vh] overflow-y-auto">
          <Table>
            <TableCaption>A list of your share TopGiaoVien .</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[16px] font-medium">ID</TableHead>
                <TableHead className="text-[16px] font-medium">Title</TableHead>
                <TableHead className="text-[16px] font-medium">
                  Link bài share
                </TableHead>
                <TableHead className="text-[16px] font-medium">
                  Hình ảnh
                </TableHead>{" "}
                <TableHead className="text-[16px] font-medium">
                  Trạng thái
                </TableHead>{" "}
                <TableHead className="text-[16px] font-medium">
                  Giáo viên
                </TableHead>
                <TableHead className="text-[16px] font-medium">
                  Option
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="max-h-[65vh]">
              {data.map((item, key) => (
                <TableRow key={item?.id}>
                  <TableCell className="font-medium">{key + 1}</TableCell>
                  <TableCell className="font-medium">
                    {formatContent(item?.content, 20)}
                  </TableCell>
                  <TableCell className="font-medium">
                    {formatContent(item?.link, 20)}
                  </TableCell>
                  <TableCell className="font-medium">
                    {item?.image ? (
                      <a
                        href={`${API_URL}/api/file/share/${item?.image}`}
                        target="_blank"
                      >
                        Hình ảnh
                      </a>
                    ) : (
                      "Chưa có hình ảnh"
                    )}
                  </TableCell>{" "}
                  <TableCell className="font-medium">
                    {item?.active === true ? "Đã kích hoạt" : "Chưa kích hoạt"}
                  </TableCell>{" "}
                  <TableCell className="font-medium">
                    {item.teacher ? item.teacher.name : <>Tất cả</>}
                  </TableCell>
                  <TableCell className="flex flex-shrink-0 items-center gap-1 font-medium">
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

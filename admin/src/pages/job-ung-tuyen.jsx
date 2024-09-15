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
import { getsApply } from "@/services/jobService";

import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ApplyCation() {
  const [data, setData] = useState([]);
  const [dataOld, setDataOld] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getsApply();
        console.log(res.msg);

        setData(res.msg);
        setDataOld(res.msg);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handleSearcher = (e) => {
    const update = dataOld.filter((item) => {
      const fullName = item.fullName
        ? item.fullName.toLowerCase().includes(e.target.value.toLowerCase())
        : false;
      const phone = item.phone
        ? item.phone.toLowerCase().includes(e.target.value.toLowerCase())
        : false;

      return fullName || phone;
    });
    setData(update);
  };
  return (
    <>
      <div className="space-y-4 px-2">
        <h1 className="title text-center text-2xl text-primary-500">
          Danh sách ứng tuyển của <span className="text-yellow-500">Top</span>
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
                <TableHead className="text-[16px] font-medium">ID</TableHead>{" "}
                <TableHead className="text-[16px] font-medium">
                  Full Name
                </TableHead>
                <TableHead className="text-[16px] font-medium">Phone</TableHead>
                <TableHead className="text-[16px] font-medium">
                  Position
                </TableHead>
                <TableHead className="text-[16px] font-medium">
                  Profile
                </TableHead>{" "}
                <TableHead className="text-[16px] font-medium">
                  BLog Job
                </TableHead>
                <TableHead className="text-[16px] font-medium">
                  Create date
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="max-h-[65vh]">
              {data.map((item, key) => (
                <TableRow key={item?.id}>
                  <TableCell className="font-medium">{key + 1}</TableCell>
                  <TableCell className="font-medium">
                    {item?.fullName}
                  </TableCell>
                  <TableCell className="font-medium">{item?.phone}</TableCell>{" "}
                  <TableCell className="font-medium">
                    {item?.position}
                  </TableCell>
                  <TableCell className="font-medium">
                    {" "}
                    <div className="flex justify-center text-center">
                      <Link
                        to={`${API_URL}/api/file/cv/${item?.file}`}
                        target="_blank"
                        className="text-green-500 hover:text-green-600"
                      >
                        <FaRegEye />
                      </Link>
                    </div>
                  </TableCell>{" "}
                  <TableCell className="relative font-medium">
                    <div className="flex justify-center text-center">
                      <Link
                        to={`${import.meta.env.VITE_API_URL_WEB}/tuyen-dung/${item.application.slug}`}
                        target="_blank"
                        className="text-green-500 hover:text-green-600"
                      >
                        <FaRegEye />
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {new Date(item?.createdAt).toLocaleDateString("vi-VN")}
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

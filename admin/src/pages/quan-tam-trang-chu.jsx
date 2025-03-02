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
import { getCareHome } from "@/services/homeService";

import { useEffect, useState } from "react";

export default function CareHome() {
  const [data, setData] = useState([]);
  const [dataOld, setDataOld] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getCareHome();

        const update = res.msg.filter(
          (item) => !item.courseId && !item.teacherId,
        );

        setData(update);
        setDataOld(update);
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
          Danh sách học viên quan tâm của{" "}
          <span className="text-yellow-500">Top</span>
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
                <TableHead className="text-[16px] font-medium">Phone</TableHead>
                <TableHead className="text-[16px] font-medium">
                  Full Name
                </TableHead>
                <TableHead className="text-[16px] font-medium">
                  Care Course
                </TableHead>
                <TableHead className="text-[16px] font-medium">Time</TableHead>
                <TableHead className="text-[16px] font-medium">
                  Create date
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="max-h-[65vh]">
              {data.map((item, key) => (
                <TableRow key={item?.id}>
                  <TableCell className="font-medium">{key + 1}</TableCell>
                  <TableCell className="font-medium">{item?.phone}</TableCell>
                  <TableCell className="font-medium">
                    {item?.fullName}
                  </TableCell>{" "}
                  <TableCell className="font-medium">
                    {item?.courseCare}
                  </TableCell>
                  <TableCell className="font-medium">
                    {JSON.parse(item?.time)
                      .map((timeItem) => timeItem.time)
                      .join(" | ")}
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

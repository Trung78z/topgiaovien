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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaEdit } from "react-icons/fa";
import {
  createCourseCategory,
  deleteCourseCategory,
  editCourseCategory,
  getCourseCategory,
} from "@/services/courseService";
import { getTime } from "@/services/homeService";
const schema = z.object({
  content: z
    .string()
    .min(1, { message: "Vui lòng nhập title cho category bài chia sẽ!" }),
});
export default function HomeTime() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Trưa",
      timeLine: [
        {
          id: 1,
          title: "14h - 15h",
          timeId: 1,
        },
        {
          id: 2,
          title: "15h - 16h",
          timeId: 1,
        },
        {
          id: 3,
          title: "16h - 17h",
          timeId: 1,
        },
      ],
    },
  ]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getTime();
        setData(res.msg);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <div className="space-y-4 px-2">
        <h1 className="title text-center text-2xl text-primary-500">
          Danh sách thời gian nhận tư vấn trên
          <span className="text-yellow-500"> Top</span>
          GiaoVien
        </h1>

        <div className="mx-auto flex max-w-screen-md flex-wrap items-center justify-center gap-10 sm:flex-nowrap">
          {data.map((item) => (
            <div key={item?.id} className="flex flex-1 flex-col items-center">
              <div className="flex flex-col items-center space-y-3 rounded-lg border p-4 shadow-xl sm:p-10">
                <h2 className="text-3xl font-semibold">{item?.title}</h2>
                {item?.timeLine.map((row) => (
                  <div key={row.id}>{row.title}</div>
                ))}
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </>
  );
}

import nhantuvan from "@/assets/image-home/nhantuvan.png";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
const schema = z.object({
  fullName: z
    .string()
    .min(8, { message: "Vui lòng điền đầy đủ thông tin của bạn!" }),
  phone: z
    .string()
    .min(10, { message: "Có lẽ đây không phải là số điện thoại!" })
    .max(14, { message: "Có lẽ đây không phải là số điện thoại!" }),
});
export default function NhanTuVanPage({
  title = "Nhận tư vấn miễn phí",
  teacher,
}) {
  const [listMorning, setListMorning] = useState([
    { id: 1, title: "9h - 10h", active: false },
    { id: 2, title: "10h - 11h", active: true },
    { id: 3, title: "11h - 12h", active: false },
  ]);
  const [listDinner, setListDinner] = useState([
    { id: 1, title: "14h - 15h", active: false },
    { id: 2, title: "15h - 16h", active: true },
    { id: 3, title: "16h - 17h", active: false },
  ]);
  const [listAfternoon, setListAfternoon] = useState([
    { id: 1, title: "19h - 20h", active: false },
    { id: 2, title: "20h - 21h", active: true },
    { id: 3, title: "21h - 22h", active: false },
  ]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const handleActiveMorning = (id) => {
    const update = listMorning.map((item) =>
      item.id === id ? { ...item, active: !item.active } : item,
    );
    setListMorning(update);
  };
  const handleActiveDinner = (id) => {
    const update = listDinner.map((item) =>
      item.id === id ? { ...item, active: !item.active } : item,
    );
    setListDinner(update);
  };
  const handleActiveAfternoon = (id) => {
    const update = listAfternoon.map((item) =>
      item.id === id ? { ...item, active: !item.active } : item,
    );
    setListAfternoon(update);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container mx-auto max-w-[1100px] space-y-3 px-2 py-4"
    >
      <h2 className="text-[ #333333] text-center text-[28px] font-semibold">
        {title} <span className="text-surface">{teacher}</span>
      </h2>
      <div className="grid grid-cols-1 gap-x-2 rounded-xl py-4 shadow-xl md:grid-cols-2">
        <div className="col-span-1 h-full w-full">
          <img
            src={nhantuvan}
            alt="Nhận tư vấn ngày hè"
            className="h-80 w-full rounded-r-xl md:h-[400px] md:rounded-r-none"
          />
        </div>
        <div className="col-span-1 flex flex-col space-y-4 md:max-w-[80%]">
          <div className="relative flex items-center">
            <input
              placeholder=" "
              id="fullName"
              {...register("fullName")}
              className="peer h-10 w-full rounded-lg border px-3"
            />
            <label
              htmlFor="fullName"
              className="absolute left-3 top-2 text-[14px] text-gray-500 transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[12px] peer-focus:text-gray-700"
            >
              Tên của bạn <span className="text-red-500">*</span>
            </label>
          </div>{" "}
          <div className="relative flex items-center">
            <input
              placeholder=""
              id="phone"
              {...register("phone")}
              className="peer h-10 w-full rounded-lg border px-3"
            />
            <label
              htmlFor="phone"
              className="absolute left-3 top-2 text-[14px] text-gray-500 transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-[12px] peer-focus:text-gray-700"
            >
              Số điện thoại của bạn <span className="text-red-500">*</span>
            </label>
          </div>
          <Select>
            <SelectTrigger className="z-10 w-full">
              <SelectValue placeholder="Lý do học IELTS của bạn" />
            </SelectTrigger>
            <SelectContent className="z-10 bg-white">
              <SelectItem value="light">Toeic Reading & Listening</SelectItem>
              <SelectItem value="dark">Toeic Writing & Speaking</SelectItem>
              <SelectItem value="system">English Ielts</SelectItem>
            </SelectContent>
          </Select>
          <h3 className="pl-3 text-[16px] font-medium">
            Thời gian bạn muốn nhận tư vấn
          </h3>
          <div className="flex items-center gap-x-2 pl-3">
            <h4>Sáng</h4>
            {listMorning.map((item) => {
              return (
                <Button
                  className={cn(
                    item.active &&
                      "bg-primary-500 text-white hover:bg-primary-400 hover:text-white",
                  )}
                  variant="outline"
                  size="sm"
                  key={item.id}
                  onClick={() => handleActiveMorning(item.id)}
                >
                  {item.title}
                </Button>
              );
            })}
          </div>{" "}
          <div className="flex items-center gap-x-2 pl-3">
            <h4>Chiều</h4>
            {listDinner.map((item) => {
              return (
                <Button
                  className={cn(
                    item.active &&
                      "bg-primary-500 text-white hover:bg-primary-400 hover:text-white",
                  )}
                  variant="outline"
                  size="sm"
                  key={item.id}
                  onClick={() => handleActiveDinner(item.id)}
                >
                  {item.title}
                </Button>
              );
            })}
          </div>{" "}
          <div className="flex items-center gap-x-2 pl-3">
            <h4>Tối</h4>
            {listAfternoon.map((item) => {
              return (
                <Button
                  className={cn(
                    item.active &&
                      "bg-primary-500 text-white hover:bg-primary-400 hover:text-white",
                  )}
                  variant="outline"
                  size="sm"
                  key={item.id}
                  onClick={() => handleActiveAfternoon(item.id)}
                >
                  {item.title}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </form>
  );
}

NhanTuVanPage.propTypes = {
  title: PropTypes.string.isRequired,
  teacher: PropTypes.string,
};

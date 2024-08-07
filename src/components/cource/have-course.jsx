import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import CardCourse from "./card-course";
const btnData = [
  { id: 1, title: "IELTS" },
  { id: 2, title: "Tiếng Anh giao tiếp" },
  { id: 3, title: "Tiếng Trung" },
  { id: 4, title: "Khác" },
];
const props = [
  {
    title: "IELTS premium (3.0-7.5+)",
    desc: "Cam kết tăng ít nhất 1.0-1.5 band score sau 1 khóa học",
  },
  {
    title: "IELTS General (3-5.5+)",
    desc: "Chỉ 1 thầy 1 trò – Tiết kiệm GẤP 2 thời gian học IELTS",
  },
  {
    title: "Xây dựng nền tảng (Ielts Foundation)",
    desc: "Chinh phục giấc mơ định cư và làm việc tại nước ngoài",
  },
  {
    title: "IELTS 1 kèm 1",
    desc: "Chỉ 1 thầy 1 trò – Tiết kiệm GẤP 2 thời gian học IELTS",
  },
  {
    title: "IELTS 1 kèm 2",
    desc: "Trọng tâm 10 buổi, tăng 1.0 band score kỹ năng IELTS speaking",
  },
  {
    title: "IELTS 1 kèm 3",
    desc: "CAM KẾT TỐI THIỂU đầu ra IELTS 6.5 dành riêng cho học sinh cấp 2",
  },
];
export default function CoursesTopGiaoVien() {
  const [active, setActive] = useState(1);
  const handleSeletion = (data) => {
    setActive(data);
  };
  return (
    <>
      <div className="container mx-auto space-y-6 px-2">
        <div className="space-y-1">
          <h2 className="text-center text-[28px] font-semibold text-[#333333]">
            Xếp hạng và đánh giá
          </h2>
          <p className="w-full text-center">
            Các khóa học IELTS tại TopGiaoVien được nghiên cứu, thiết kế riêng
            biệt bởi đội ngũ giáo viên nhiều năm kinh nghiệm, được sắp xếp phù
            hợp với từng đối tượng, nhằm đảm bảo và cam kết chất lượng đầu ra.
          </p>
        </div>
        <div className="">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap">
            {btnData.map((item) => (
              <Button
                key={item.id}
                onClick={() => {
                  handleSeletion(item.id);
                }}
                className={cn(
                  ``,
                  active === item.id
                    ? ""
                    : "border-2 bg-white text-primary-500 hover:bg-slate-50",
                )}
              >
                {" "}
                {item.title}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
          {props.map((_, index) => (
            <CardCourse key={index} props={_} />
          ))}
        </div>
      </div>
    </>
  );
}

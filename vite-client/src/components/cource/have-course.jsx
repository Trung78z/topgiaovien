import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import CardCourse from "./card-course";
const btnData = [
  { id: 1, title: "IELTS" },
  { id: 2, title: "TOEIC" },
  { id: 3, title: "Tiếng Anh giao tiếp" },
  { id: 4, title: "Tiếng Trung" },
];

export default function CoursesTopGiaoVien({ props }) {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 md:grid-cols-3">
          {props
            .sort(() => 0.5 - Math.random())
            .slice(0, 6)
            .map((_, index) => (
              <CardCourse key={index} props={_} />
            ))}
        </div>
      </div>
    </>
  );
}

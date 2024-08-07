import LoTrinhCourse from "@/components/cource/lo-trinh-course";
import BannerELearning from "@/components/e-learning/banner";
import KhoKhan from "@/components/e-learning/kho-khan";
import WhyYouChoice from "@/components/e-learning/why-you-choice";
import NhanTuVanPage from "@/components/home/nhan-tu-van";
import { convertToSlug } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
export default function CourseDetail() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState({});
  useEffect(() => {
    const update = props.find((item) => convertToSlug(item.title) === id);
    setData(update);
  }, [id]);
  return (
    <div>
      <div className="space-y-6 sm:space-y-20">
        <BannerELearning props={data} />
        <KhoKhan />
        <WhyYouChoice />
        <LoTrinhCourse />
        <NhanTuVanPage />
      </div>
    </div>
  );
}

import { lazy, Suspense, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Helmet } from "react-helmet";

import SectionBanner from "@/components/section-banner";
import { Button } from "@/components/ui/button";
import { getCourseCategory } from "@/services/courseService";
import { useNavigate } from "react-router-dom";
import { convertToSlug } from "@/lib/utils";
const TopGiaoVienHave = lazy(
  () => import("@/components/home/top-giao-vien-co-gi"),
);
const DoiNguTop = lazy(() => import("@/components/home/doi-ngu"));
const GiaoVienTinhHoa = lazy(
  () => import("@/components/home/giao-vien-tinh-hoa"),
);
const MoHinhPage = lazy(() => import("@/components/home/mo-hinh"));
const ReviewCourse = lazy(() => import("@/components/home/review-cource"));
const NhanTuVanPage = lazy(() => import("@/components/home/nhan-tu-van"));

const dataProvince = [
  { direct: "Quận Bình Thạnh" },
  { direct: "Quận 1" },
  { direct: "Quận 2" },
  { direct: "Quận Gò Vấp" },
];

export default function HomePage() {
  const [categoryCourse, setCategoryCourse] = useState([]);

  const navigate = useNavigate();
  const [formCourse, setFormCourse] = useState({ location: "", topic: "" });
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getCourseCategory();
        setCategoryCourse(res.msg);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  const handleChange = (data) => {
    console.log(data);
    setFormCourse((prev) => ({ ...prev, topic: data }));
  };
  const handleChangeProvince = (data) => {
    console.log(data);
    setFormCourse((prev) => ({ ...prev, location: data }));
  };
  const handleClickSelect = () => {
    console.log(formCourse);
    navigate(
      `/khoa-hoc?${
        formCourse.topic
          ? `loai-khoa-hoc=${convertToSlug(formCourse.topic)}`
          : ""
      }${formCourse.topic && formCourse.location ? "&" : ""}${
        formCourse.location
          ? `dia-diem=${convertToSlug(formCourse.location)}`
          : ""
      }`,
    );
  };

  return (
    <div className="space-y-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Top Giáo Viên Tốt Nhất 2024 - Danh Sách và Đánh Giá</title>
        <meta
          name="description"
          content="Khám phá danh sách top giáo viên tốt nhất năm 2024 với đánh giá chi tiết và thông tin liên hệ. Tìm kiếm giáo viên chất lượng cao để nâng cao trình độ học tập của bạn."
        />

        <meta
          name="keywords"
          content="luật sư, dịch vụ pháp lý, tư vấn pháp luật, công ty luật"
        />

        <link rel="canonical" href="https://topgiaovien.vn/" />
        <meta property="og:title" content="Top Giáo Viên Tốt Nhất 2024" />
        <meta
          property="og:description"
          content="Khám phá danh sách top giáo viên tốt nhất năm 2024 với đánh giá chi tiết và thông tin liên hệ."
        />
        <meta property="og:image" content="https://example.com/giao-vien.jpg" />
        <meta property="og:url" content="https://example.com/top-giao-vien" />
      </Helmet>
      <SectionBanner />
      <div className="container mx-auto space-y-6 px-2 py-10 md:pr-10">
        <h1 className="text-center text-[40px] font-normal leading-[40px] text-primary md:text-start md:leading-[56px]">
          <span className="font-semibold text-yellow-400">TopGiaoVien</span>
          <> </>
          tự hào là mô hình cho bạn chủ động chọn giáo viên top 1% để học tập
          đầu tiên ở Việt Nam
        </h1>
        <p className="text-primary">
          Dù là
          <span className="text-secondary"> online</span> hay
          <span className="text-secondary"> offline</span> , đội ngũ TopGiaoVien
          đều được kiểm định, có background và đánh giá tốt sẽ giúp sự học của
          bạn được nâng lên một tầm cao mới. Chỉ với một vài thông tin bên dưới,
          chúng tôi sẽ gợi ý ngay cho bạn những lựa chọn tốt nhất!
        </p>
        <div className="flex flex-wrap gap-2 sm:flex-nowrap">
          <Select onValueChange={handleChange}>
            <SelectTrigger className="z-10 w-[300px]">
              <SelectValue placeholder="Môn học bạn quan tâm" />
            </SelectTrigger>

            <SelectContent className="z-10 bg-white">
              {categoryCourse?.map((item, index) => (
                <SelectItem
                  value={item.content}
                  key={`${item.content}+${index}`}
                >
                  {item.content}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={handleChangeProvince}>
            <SelectTrigger className="z-10 w-[300px] bg-white">
              <SelectValue placeholder="Khu vực ưu tiên" />
            </SelectTrigger>
            <SelectContent className="z-10 bg-white">
              {dataProvince.map((item, index) => (
                <SelectItem key={`${item.direct}+${index}`} value={item.direct}>
                  {item.direct}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={handleClickSelect} type="button">
            Tìm kiếm
          </Button>
        </div>
      </div>

      <Suspense className="space-y-5" fallback={<>loading...</>}>
        <DoiNguTop />
        <div className="sm:pt-80 md:pt-60 lg:pt-48">
          <GiaoVienTinhHoa props={{ giaoVien: "Giáo viên tinh hoa" }} />
        </div>
        <TopGiaoVienHave />
        <MoHinhPage />
        <ReviewCourse inView={6} />
        <NhanTuVanPage
          inView={6}
          categoryCourse={categoryCourse}
          setCategoryCourse={setCategoryCourse}
        />
      </Suspense>
    </div>
  );
}

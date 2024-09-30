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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import LoadingPage from "@/components/loading";
const TopGiaoVienHave = lazy(
  () => import("@/components/home/top-giao-vien-co-gi"),
);
const DoiNguTop = lazy(() => import("@/components/home/doi-ngu"));
const GiaoVienTinhHoa = lazy(
  () => import("@/components/home/giao-vien-tinh-hoa"),
);
const MoHinhPage = lazy(() => import("@/components/home/mo-hinh"));
const ReviewCourse = lazy(() => import("@/components/home/share-review"));
const NhanTuVanPage = lazy(() => import("@/components/home/nhan-tu-van"));
const typeCourse = [
  { type: "Online", value: "Online" },
  { type: "Offline", value: "Offline" },
  { type: "Tất cả", value: "All" },
];
const schema = z.object({
  location: z
    .string({ required_error: "Vui lòng chọn địa điểm bạn muốn học" })
    .min(1, "Vui lòng chọn địa điểm bạn muốn học"),
  topic: z
    .string({ required_error: "Vui lòng chọn khóa học bạn quan tâm" })
    .min(1, "Vui lòng chọn khóa học bạn quan tâm"),
});
export default function HomePage() {
  const [categoryCourse, setCategoryCourse] = useState([]);
  const [allSubCategoryCourse, setAllSubCategoryCourse] = useState([]);
  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getCourseCategory();

        const allSubCategories = res.msg
          .map((category) => category.courseSubCategory)
          .reduce((acc, subArray) => acc.concat(subArray), []);
        setAllSubCategoryCourse(allSubCategories);
        setCategoryCourse(res.msg);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  const handleChange = (data) => {
    setValue("topic", data);
  };
  const handleChangeProvince = (data) => {
    setValue("location", data);
  };
  const handleClickSelect = (data) => {
    navigate(
      `/khoa-hoc?${
        data.topic ? `loai-khoa-hoc=${convertToSlug(data.topic)}` : ""
      }${data.topic && data.location ? "&" : ""}${
        data.location ? `hinh-thuc=${convertToSlug(data.location)}` : ""
      }`,
    );
  };
  const title = `Trang Chủ | Top Giáo Viên ${new Date().getFullYear()} - Đánh Giá & Danh
          Sách Tốt Nhất`;
  return (
    <div className="space-y-4">
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={`Tìm kiếm giáo viên chất lượng hàng đầu tại Việt Nam. Khám phá danh sách giáo viên tốt nhất ${new Date().getFullYear()} tại TopGiaoVien.vn. Đánh giá chi tiết, thông tin liên hệ rõ ràng.`}
        />
      </Helmet>

      <div className="pt-2"></div>
      <SectionBanner />
      <div className="container mx-auto space-y-6 px-2 py-6 md:pr-10">
        <div className="flex text-2xl text-primary-500 md:text-4xl">
          <h1 className="inline-block">
            <span className="font-semibold text-yellow-400">Top Giáo Viên</span>
            <> </>
            tự hào là mô hình cho bạn chủ động chọn giáo viên top 1% để học tập
            đầu tiên ở Việt Nam
          </h1>
        </div>
        <p className="text-primary">
          Dù là
          <span className="text-justify text-secondary"> online</span> hay
          <span className="text-justify text-secondary"> offline</span> , đội
          ngũ top giáo viên đều được kiểm định, có background và đánh giá tốt sẽ
          giúp việc học của bạn được nâng lên một tầm cao mới. Chỉ với một vài
          thông tin bên dưới, chúng tôi sẽ gợi ý ngay cho bạn những lựa chọn tốt
          nhất!
        </p>
        <form
          onSubmit={handleSubmit(handleClickSelect)}
          className="flex flex-wrap gap-2 sm:flex-nowrap"
        >
          <div>
            <Select onValueChange={handleChange}>
              <SelectTrigger className="z-10 w-[300px]">
                <SelectValue placeholder="Khóa học bạn quan tâm" />
              </SelectTrigger>

              <SelectContent className="z-10 bg-white">
                {allSubCategoryCourse?.map((item, index) => (
                  <SelectItem
                    value={item.content}
                    key={`${item.content}+${index}`}
                  >
                    {item.content}
                  </SelectItem>
                ))}
              </SelectContent>
              {errors.topic && (
                <p className="text-red-500">{errors.topic.message}</p>
              )}
            </Select>
          </div>
          <div>
            {/* <Select onValueChange={handleChangeProvince}>
              <SelectTrigger className="z-10 w-[300px] bg-white">
                <SelectValue placeholder="Khu vực ưu tiên" />
              </SelectTrigger>
              <SelectContent className="z-10 bg-white">
                {dataProvince.map((item, index) => (
                  <SelectItem
                    key={`${item.direct}+${index}`}
                    value={item.direct}
                  >
                    {item.direct}
                  </SelectItem>
                ))}
              </SelectContent>
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </Select> */}
            <Select onValueChange={handleChangeProvince}>
              <SelectTrigger className="z-10 w-[300px] bg-white">
                <SelectValue placeholder="Hình thức khóa học" />
              </SelectTrigger>
              <SelectContent className="z-10 bg-white">
                {typeCourse.map((item, index) => (
                  <SelectItem key={`${item.type}+${index}`} value={item.value}>
                    {item.type}
                  </SelectItem>
                ))}
              </SelectContent>
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </Select>
          </div>
          <Button type="submit">Tìm kiếm</Button>
        </form>
      </div>

      <Suspense className="space-y-5" fallback={<LoadingPage />}>
        <DoiNguTop />
        <div className="sm:pt-80 md:pt-60 lg:pt-48">
          <GiaoVienTinhHoa dataSearch={categoryCourse} />
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

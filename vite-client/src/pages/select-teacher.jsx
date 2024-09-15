import { Helmet } from "react-helmet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@headlessui/react";
import { lazy, Suspense, useEffect, useState } from "react";
import SectionBanner from "@/components/section-banner";
import { getCourseCategory } from "@/services/courseService";
const GiaoVienTinhHoa = lazy(
  () => import("@/components/home/giao-vien-tinh-hoa"),
);
const NhanTuVanPage = lazy(() => import("@/components/home/nhan-tu-van"));

export default function SelectTeacher() {
  const [categoryCourse, setCategoryCourse] = useState([]);

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

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Topgiaovien | Chọn giáo viên</title>
        <link rel="canonical" href="http://localhost:3000/dang-ki" />
      </Helmet>
      <div className="space-y-14">
        <SectionBanner />
        <div className="container px-0">
          <div className="mx-auto grid grid-cols-2 gap-3 sm:max-w-screen-sm sm:grid-cols-4">
            <Select>
              <SelectTrigger className="z-10 w-[150px]">
                <SelectValue placeholder="Môn học bạn quan tâm" />
              </SelectTrigger>

              <SelectContent className="z-10 bg-white" as="div">
                <div>
                  <SelectItem value="light">
                    Toeic Reading & Listening
                  </SelectItem>
                  <SelectItem value="dark">Toeic Writing & Speaking</SelectItem>
                  <SelectItem value="system">English Ielts</SelectItem>
                </div>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="z-10 w-[150px] bg-white">
                <SelectValue placeholder="Khu vực ưu tiên" />
              </SelectTrigger>
              <SelectContent className="z-10 bg-white">
                <SelectItem value="light">Quận 9</SelectItem>
                <SelectItem value="dark">Quận 10</SelectItem>
                <SelectItem value="system">Quận Gò Vấp</SelectItem>
              </SelectContent>
            </Select>
            <div className="col-span-2 mx-auto sm:col-span-1">
              <Select className="w-full">
                <SelectTrigger className="z-10 w-[150px] bg-white">
                  <SelectValue placeholder="Hình thức" />
                </SelectTrigger>
                <SelectContent className="z-10 col-span-2 bg-white sm:col-span-1">
                  <SelectItem value="light">Quận 9</SelectItem>
                  <SelectItem value="dark">Quận 10</SelectItem>
                  <SelectItem value="system">Quận Gò Vấp</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              className="col-span-2 mx-auto block w-max rounded-md border-blue-900 bg-blue-900 px-6 py-2 text-white hover:bg-blue-900/90 hover:text-white sm:col-span-1"
              variant="outline"
            >
              Tìm kiếm
            </Button>
          </div>
        </div>
        <Suspense fallback={<>Loading...</>}>
          <GiaoVienTinhHoa props={{ giaoVien: "Giáo viên" }} />
          <NhanTuVanPage
            categoryCourse={categoryCourse}
            setCategoryCourse={setCategoryCourse}
          />
        </Suspense>
      </div>
    </>
  );
}

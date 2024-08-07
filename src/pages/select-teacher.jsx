import { Helmet } from "react-helmet";
import banner1 from "../assets/image-home/banner1.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@headlessui/react";
import { lazy, Suspense } from "react";
const GiaoVienTinhHoa = lazy(
  () => import("@/components/home/giao-vien-tinh-hoa"),
);
const NhanTuVanPage = lazy(() => import("@/components/home/nhan-tu-van"));

export default function SelectTeacher() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Topgiaovien | Chọn giáo viên</title>
        <link rel="canonical" href="http://localhost:3000/dang-ki" />
      </Helmet>
      <div className="space-y-14">
        <div className="relative flex w-full">
          <img
            src={banner1}
            className="h-[200px] min-w-full flex-1 object-center md:h-[440px] md:object-fill"
            alt="banner top giao vien"
          />
        </div>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2 sm:flex-nowrap">
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
            <Button
              className="block rounded-md border-blue-900 bg-blue-900 px-6 py-2 text-white hover:bg-blue-900/90 hover:text-white"
              variant="outline"
            >
              Tìm kiếm
            </Button>
          </div>
        </div>{" "}
        <Suspense fallback={<>Loading...</>}>
          <GiaoVienTinhHoa props={{ giaoVien: "Giáo viên" }} />
          <NhanTuVanPage />
        </Suspense>
      </div>
    </>
  );
}

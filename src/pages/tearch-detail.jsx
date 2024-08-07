import BannerDetail from "@/components/detail/banner";
import ChiTietDanhGia from "@/components/detail/chi-tiet-danh-gia";
import ExperienceTeacher from "@/components/detail/experience";
import KhoanhKhacGiaoVien from "@/components/detail/khoanh-khac";
import LoiHuaGiaoVien from "@/components/detail/loi-hua-tu-giao-vien";
import TrietLyGiaoDuc from "@/components/detail/triet-ly";
import NhanTuVanPage from "@/components/home/nhan-tu-van";
import ReviewCourse from "@/components/home/review-cource";
import { data_giao_vien_tinh_hoa } from "@/lib/data-giao-vien-tinh-hoa";
import { data_detail } from "@/lib/detail-giao-vien";
import { convertToSlug } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TeacherDetail() {
  const { id } = useParams();
  const slug = id.split("giao-vien-")[1];
  console.log(slug);
  const [data, setData] = useState();
  useEffect(() => {
    const update = data_giao_vien_tinh_hoa.find(
      (item) => convertToSlug(item.name) === slug,
    );
    setData(update);
    console.log(update);
  }, []);
  return (
    <>
      <div className="space-y-20">
        <BannerDetail props={data} />
        <div className="sm:pt-20">
          <TrietLyGiaoDuc />
        </div>
        <ExperienceTeacher />
        <LoiHuaGiaoVien />
        <KhoanhKhacGiaoVien />
        <NhanTuVanPage props={{ inView: 3 }} />
        <ChiTietDanhGia />
        <NhanTuVanPage title="Đăng ký học với cô " teacher="Trần Thanh Giang" />
      </div>
    </>
  );
}

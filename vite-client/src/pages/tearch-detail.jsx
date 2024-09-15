import BannerDetail from "@/components/detail/banner";
import ChiTietDanhGia from "@/components/detail/chi-tiet-danh-gia";
import ExperienceTeacher from "@/components/detail/experience";
import KhoanhKhacGiaoVien from "@/components/detail/khoanh-khac";
import LoiHuaGiaoVien from "@/components/detail/loi-hua-tu-giao-vien";
import TrietLyGiaoDuc from "@/components/detail/triet-ly";
import NhanTuVanPage from "@/components/home/nhan-tu-van";
import { getTeacherDetail } from "@/services/teacherService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TeacherDetail() {
  const { id } = useParams();
  const slug = id.split("giao-vien-")[1];
  const number = slug.split("+")[0];
  const [data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      const data = await getTeacherDetail(number);
      setData(data.msg);
    };
    fetch();
  }, [number]);

  return (
    <>
      <div className="space-y-20">
        <BannerDetail props={data} />
        <div className="sm:pt-20">
          <TrietLyGiaoDuc data={data} />
        </div>
        <ExperienceTeacher props={data} />
        <LoiHuaGiaoVien props={data} />
        <KhoanhKhacGiaoVien />
        <ChiTietDanhGia />
        {data?.name && (
          <NhanTuVanPage title="Đăng ký học với cô " props={data} />
        )}
      </div>
    </>
  );
}

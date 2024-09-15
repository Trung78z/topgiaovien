import BannerDetail from "@/components/detail/banner";
import ChiTietDanhGia from "@/components/detail/chi-tiet-danh-gia";
import ExperienceTeacher from "@/components/detail/experience";
import KhoanhKhacGiaoVien from "@/components/detail/khoanh-khac";
import LoiHuaGiaoVien from "@/components/detail/loi-hua-tu-giao-vien";
import ShareReview from "@/components/detail/share-review";
import TrietLyGiaoDuc from "@/components/detail/triet-ly";
import NhanTuVanPageCourseTeacher from "@/components/home/nhan-tu-van-teacher-course";
import useScrollToTop from "@/components/useScrollToTop";
import { getCourseCategory } from "@/services/courseService";
import { getTeacherDetail } from "@/services/teacherDetailService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TeacherDetail() {
  useScrollToTop();
  const { id } = useParams();
  const slug = id.split("giao-vien-")[1];
  const number = slug.split("+")[0];
  const [data, setData] = useState();
  const [categoryCourse, setCategoryCourse] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getTeacherDetail(number);
      setData(data.msg);
      const resCate = await getCourseCategory();
      setCategoryCourse(resCate.msg);
    };
    fetch();
  }, [number]);

  return (
    <>
      <div className="space-y-6 sm:space-y-20">
        <BannerDetail props={data} />
        <div className="sm:pt-20">
          <TrietLyGiaoDuc data={data} />
        </div>
        <ExperienceTeacher props={data} />
        <LoiHuaGiaoVien props={data} />
        <KhoanhKhacGiaoVien props={data} />
        <ShareReview props={data} />
        <ChiTietDanhGia props={data} />
        {data?.name && (
          <NhanTuVanPageCourseTeacher
            props={data}
            categoryCourse={categoryCourse}
            setCategoryCourse={setCategoryCourse}
          />
        )}
      </div>
    </>
  );
}

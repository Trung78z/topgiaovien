import RouteCourse from "@/components/cource/lo-trinh-course-fetch";
import BannerELearning from "@/components/course-detail/banner";
import KhoKhan from "@/components/course-detail/kho-khan";
import WhyYouChoice from "@/components/course-detail/why-you-choice";
import NhanTuVanPageCourseTeacher from "@/components/home/nhan-tu-van-teacher-course";
import useScrollToTop from "@/components/useScrollToTop";
import {
  getCourseBySlugDetail,
  getCourseCategory,
} from "@/services/courseService";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function CourseDetail() {
  const [categoryCourse, setCategoryCourse] = useState([]);
  const { id } = useParams();
  const [data, setData] = useState({});
  useScrollToTop();

  useEffect(() => {
    const fetch = async () => {
      const res = await getCourseBySlugDetail(id);
      setData(res.msg);
      const resCate = await getCourseCategory();
      setCategoryCourse(resCate.msg);
    };
    fetch();
  }, [id]);
  const targetRef = useRef(null);
  const scrollToTarget = () => {
    if (targetRef.current) {
      const navbarHeight = 15;

      // Tính toán vị trí cuộn với khoảng cách thêm 20vh
      const topOffset =
        targetRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight -
        window.innerHeight * 0.2;

      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="space-y-6 sm:space-y-20">
        <BannerELearning props={data} scrollToTarget={scrollToTarget} />
        <KhoKhan props={data} />
        <WhyYouChoice props={data} />
        <RouteCourse props={data} />

        <div ref={targetRef}>
          <NhanTuVanPageCourseTeacher
            props={data}
            categoryCourse={categoryCourse}
            setCategoryCourse={setCategoryCourse}
          />
        </div>
      </div>
    </div>
  );
}

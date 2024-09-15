import RouteCourse from "@/components/cource/lo-trinh-course-fetch";
import BannerELearning from "@/components/course-detail/banner";
import KhoKhan from "@/components/course-detail/kho-khan";
import WhyYouChoice from "@/components/course-detail/why-you-choice";
import NhanTuVanPage from "@/components/home/nhan-tu-van";
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
      targetRef.current.scrollIntoView({ behavior: "smooth" });
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
          <NhanTuVanPage
            props={data}
            categoryCourse={categoryCourse}
            setCategoryCourse={setCategoryCourse}
          />
        </div>
      </div>
    </div>
  );
}

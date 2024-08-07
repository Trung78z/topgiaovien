import BannerCourse from "@/components/cource/banner";
import CoursesTopGiaoVien from "@/components/cource/have-course";
import LoTrinhCourse from "@/components/cource/lo-trinh-course";
import ReviewCourses from "@/components/cource/review-cource";
import NhanTuVanPage from "@/components/home/nhan-tu-van";

export default function CourseTopTeacher() {
  return (
    <>
      <div className="space-y-20">
        <BannerCourse />
        <CoursesTopGiaoVien />
        <LoTrinhCourse />
        <ReviewCourses />
        <NhanTuVanPage />
      </div>
    </>
  );
}

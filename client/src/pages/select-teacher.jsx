import { Helmet } from "react-helmet";
import { Suspense, useEffect, useState, lazy } from "react";
import SectionBanner from "@/components/section-banner";
import { getCourseCategory } from "@/services/courseService";

import { getAllTeacher } from "@/services/teacherDetailService";
import LoadingPage from "@/components/loading";
import useScrollToTop from "@/components/useScrollToTop";
import { getRandomAllItems } from "@/lib/utils";

const NhanTuVanPage = lazy(() => import("@/components/home/nhan-tu-van"));
const ReviewCourse = lazy(() => import("@/components/home/share-review"));

const TeacherEnglish = lazy(
  () => import("@/components/teacher/TeacherEnglish"),
);
const TeacherChina = lazy(() => import("@/components/teacher/TeacherChina"));
const TeacherOther = lazy(() => import("@/components/teacher/TeacherOther"));

export default function SelectTeacher() {
  useScrollToTop();
  const [categoryCourse, setCategoryCourse] = useState([]);
  const [data, setData] = useState([]);
  const [dataCN, setDataCN] = useState([]);
  const [dataOther, setDataOther] = useState([]);
  const [subCategoryCourseEN, setSubCategoryCourseEN] = useState([]);
  const [subCategoryCourseCN, setSubCategoryCourseCN] = useState([]);
  const [subCategoryCourseOther, setSubCategoryCourseOther] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getCourseCategory();
        const filterCateEN = res.msg.find((item) => item.id === 1);

        setCategoryCourse(res.msg);
        setSubCategoryCourseEN(filterCateEN);
        const filterCateCN = res.msg.find((item) => item.id === 2);
        setSubCategoryCourseCN(filterCateCN);
        const filterCateOther = res.msg.find(
          (item) => item.id !== 1 && item.id !== 2,
        );
        setSubCategoryCourseOther(filterCateOther);
        const data = await getAllTeacher();
        const filter = data.msg.filter((item) => item.courseCategoryId === 1);
        const randomData = getRandomAllItems(filter);
        setData(randomData);

        const filter2 = data.msg.filter((item) => item.courseCategoryId === 2);
        const randomData2 = getRandomAllItems(filter2);
        setDataCN(randomData2);
        const filter3 = data.msg.filter((item) => item.courseCategoryId === 3);
        const randomData3 = getRandomAllItems(filter3);
        setDataOther(randomData3);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {`Chọn giáo viên | Top Giáo Viên ${new Date().getFullYear()} - Đánh Giá
          & Danh Sách Tốt Nhất`}
        </title>
        <meta
          name="description"
          content="Lựa chọn giáo viên phù hợp nhất cho nhu cầu học tập của bạn. Khám phá danh sách giáo viên hàng đầu và nhận xét chi tiết tại TopGiaoVien.vn."
        />
      </Helmet>
      <div className="space-y-6">
        <h1 className="sr-only">Chọn giáo viên tốt nhất tại TopGiaoVien.vn</h1>
        <SectionBanner />
        <Suspense fallback={<LoadingPage />}>
          <TeacherEnglish
            categoryCourseParent={subCategoryCourseEN.courseSubCategory}
            dataParent={data}
          />
        </Suspense>
        <Suspense fallback={<LoadingPage />}>
          <TeacherChina
            categoryCourseParent={subCategoryCourseCN?.courseSubCategory}
            dataParent={dataCN}
          />
        </Suspense>
        <Suspense fallback={<LoadingPage />}>
          <TeacherOther
            categoryCourseParent={subCategoryCourseOther?.courseSubCategory}
            dataParent={dataOther}
          />
        </Suspense>
        <Suspense fallback={<LoadingPage />}>
          <ReviewCourse />
        </Suspense>
        <Suspense fallback={<LoadingPage />}>
          <NhanTuVanPage
            categoryCourse={categoryCourse}
            setCategoryCourse={setCategoryCourse}
          />
        </Suspense>
      </div>
    </>
  );
}

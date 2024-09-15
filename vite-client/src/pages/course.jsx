import CoursesTopGiaoVien from "@/components/cource/have-course";
import LoTrinhCourse from "@/components/cource/lo-trinh-course";
import ReviewCourses from "@/components/cource/review-cource";
import NhanTuVanPage from "@/components/home/nhan-tu-van";
import { Button } from "@/components/ui/button";
import useQuery from "@/hooks/useQuery";
import { convertToSlug } from "@/lib/utils";
import { getAllCourse, getCourseCategory } from "@/services/courseService";
import { useEffect, useRef, useState } from "react";

export default function CourseTopTeacher() {
  const [categoryCourse, setCategoryCourse] = useState([]);
  const targetRef = useRef(null);
  const query = useQuery();

  // Example: Get specific query parameters
  const topic = query.get("loai-khoa-hoc");
  const location = query.get("dia-diem");

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getAllCourse();
        const resCate = await getCourseCategory();
        setCategoryCourse(resCate.msg);
        if (topic) {
          const filtered = res.msg.filter((item) =>
            convertToSlug(item.courseCategory.content).includes(topic),
          );
          setData(filtered);
        } else {
          setData(res.msg);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [topic]);

  // Hàm để cuộn đến mục tiêu
  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="space-y-20">
        <div className="relative bg-[#EAEBF1]">
          <div className="container flex flex-wrap items-center justify-evenly gap-x-2 px-2 pt-10 md:flex-nowrap">
            <div className="flex flex-col items-center space-y-6 sm:w-[750px] sm:items-start">
              <h1 className="flex flex-col text-[48px] font-semibold text-primary-500">
                Học kèm
                <span className="text-[32px]">Hiệu quả mà linh hoạt</span>
              </h1>
              <ul className="list-disc pl-0 sm:pl-10">
                <li className="text-primary-500">
                  Topgiaovien phát triển lớp kèm và các lớp học nhóm nhỏ
                </li>
                <li className="text-primary-500">
                  Chủ động tìm hiểu giáo viên để lựa chọn học tập phù hợp với
                  nhu cầu của mình
                </li>
              </ul>

              <div className="flex items-center gap-x-10">
                <Button
                  className="bg-primary-500 text-white hover:bg-primary-400"
                  onClick={scrollToTarget}
                >
                  Nhận tư vấn
                </Button>
                <Button
                  variant="outline"
                  className="border border-primary-500 text-primary-500 hover:bg-gray-100"
                >
                  Test trình độ
                </Button>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-2 pt-6 sm:max-w-80 sm:grid-cols-2 sm:gap-4 sm:pt-0">
              <div className="relative col-span-1 flex flex-col items-center gap-2 sm:gap-4">
                <img
                  src="/assets/course/banner1.png"
                  alt=""
                  className="h-[200px] w-full object-cover sm:h-full"
                />
                <img
                  src="/assets/course/banner3.png"
                  alt=""
                  className="h-[200px] w-full object-cover sm:h-full"
                />
              </div>{" "}
              <div className="col-span-1 hidden flex-col items-center gap-2 sm:flex sm:gap-4">
                <img
                  src="/assets/course/banner2.png"
                  alt=""
                  className="object-cover"
                />
                <img
                  src="/assets/course/banner4.png"
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="container relative mx-auto mt-10 flex flex-wrap items-center justify-around gap-x-2 gap-y-4 rounded-[14px] bg-neutral p-4 shadow-lg sm:translate-y-1/2 sm:flex-nowrap sm:gap-x-10 md:p-4">
            <div className="col-span-1 flex items-center gap-x-2 md:p-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M28.0901 36.25C27.6084 36.25 27.1251 36.135 26.6767 35.9L20.1968 32.5083C20.0735 32.4433 19.9267 32.4433 19.8034 32.5083L13.3284 35.8967C12.2967 36.4367 11.0702 36.3467 10.1269 35.66C9.18852 34.975 8.72515 33.84 8.92182 32.695L10.1568 25.5266C10.1801 25.3916 10.135 25.255 10.0384 25.16L4.63675 19.9167C3.83508 19.1384 3.55017 17.9933 3.89517 16.9283C4.24017 15.8633 5.14336 15.1016 6.25336 14.94L13.7235 13.86C13.8601 13.84 13.9768 13.755 14.0368 13.6333L17.2751 7.10337C17.7918 6.06171 18.8351 5.41504 19.9985 5.41504C21.1618 5.41504 22.2052 6.06171 22.7219 7.10337L25.9584 13.6317C26.02 13.755 26.1368 13.84 26.2735 13.86L33.7434 14.94C34.8534 15.1 35.7568 15.8616 36.1018 16.9283C36.4468 17.9933 36.1617 19.1384 35.36 19.9167L29.96 25.1583C29.86 25.255 29.8169 25.3916 29.8402 25.5266L31.0751 32.6984C31.2718 33.8417 30.8117 34.9767 29.8717 35.66C29.3417 36.0517 28.7168 36.25 28.0901 36.25ZM20.0001 29.96C20.4651 29.96 20.9318 30.07 21.3551 30.2916L27.8352 33.6834C28.0935 33.82 28.3034 33.715 28.4034 33.6417C28.5034 33.57 28.6617 33.405 28.6134 33.125L27.3784 25.9516C27.2151 25.0016 27.5317 24.035 28.2234 23.365L33.6217 18.125C33.7834 17.9683 33.7567 17.7916 33.7267 17.7016C33.6967 17.61 33.6134 17.45 33.3884 17.4167L25.9185 16.3367C24.9668 16.2 24.1452 15.6033 23.7202 14.7433L20.4851 8.21665C20.3568 7.95665 20.1267 7.91829 20.0017 7.91829C19.8767 7.91829 19.6469 7.95665 19.5185 8.21665L16.2818 14.745C15.8585 15.6033 15.0369 16.2 14.0852 16.3367L6.6151 17.4167C6.3901 17.45 6.30509 17.6083 6.27676 17.7016C6.24676 17.7933 6.22174 17.9683 6.38174 18.125L11.7817 23.3667C12.4717 24.035 12.7884 25.0016 12.625 25.9516L11.3901 33.12C11.3417 33.4017 11.5019 33.5667 11.6019 33.64C11.7052 33.7134 11.9084 33.8166 12.1734 33.6816L18.6484 30.2934C19.0684 30.0717 19.5351 29.96 20.0001 29.96Z"
                    fill="#2B346F"
                  />
                </svg>
              </div>
              <div className="">
                <h3 className="flex-shrink-0 text-[20px] font-semibold text-primary-500">
                  1000+ review
                </h3>
                <p>Đến từ học viên</p>
              </div>
            </div>
            <div className="col-span-1 flex items-center gap-x-2 md:p-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M36.25 16.1597C36.25 14.4313 35.3432 12.9046 33.8265 12.0762L23.04 6.19121C21.1383 5.15454 18.8667 5.15288 16.96 6.19121L6.1735 12.0762C4.65684 12.9046 3.75 14.4313 3.75 16.1597C3.75 17.888 4.65684 19.4146 6.1735 20.2429L8.75 21.648V27.8312C8.75 29.4246 9.56673 30.888 10.9351 31.7497C13.9434 33.6413 16.9717 34.588 20 34.588C23.0283 34.588 26.0583 33.643 29.0649 31.7497C30.4316 30.8897 31.25 29.4246 31.25 27.8312V21.648L33.75 20.2846V26.6663C33.75 27.3563 34.31 27.9163 35 27.9163C35.69 27.9163 36.25 27.3563 36.25 26.6663V16.6663C36.25 16.5963 36.2201 16.5329 36.2101 16.4663C36.2168 16.3613 36.25 16.2663 36.25 16.1597ZM28.75 27.8312C28.75 28.5479 28.3619 29.2396 27.7352 29.633C22.5319 32.9046 17.4735 32.9063 12.2668 29.633C11.6402 29.2396 11.2516 28.5479 11.2516 27.8312V23.0113L16.9617 26.1263C17.9133 26.6463 18.9566 26.9063 20.0016 26.9063C21.0466 26.9063 22.0899 26.6463 23.0416 26.1263L28.7516 23.0113V27.8312H28.75ZM32.6282 18.0495L21.8416 23.9345C20.69 24.5645 19.3084 24.5645 18.1567 23.9345L7.3702 18.0495C6.66687 17.6662 6.24837 16.9613 6.24837 16.1613C6.24837 15.3613 6.66687 14.6562 7.3702 14.2729L18.1567 8.38787C18.7334 8.07453 19.3667 7.91627 19.9984 7.91627C20.63 7.91627 21.265 8.07453 21.84 8.38787L32.6265 14.2729C33.3299 14.6562 33.7484 15.3613 33.7484 16.1613C33.7484 16.9613 33.3315 17.6662 32.6282 18.0495Z"
                    fill="#2B346F"
                  />
                </svg>
              </div>
              <div className="">
                <h3 className="flex-shrink-0 text-[20px] font-semibold text-primary-500">
                  95% học viên
                </h3>
                <p>Đạt mục tiêu học tập</p>
              </div>
            </div>
            <div className="col-span-1 flex items-center gap-x-2 md:p-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M35.2934 16.0137C34.55 14.9803 32.9984 13.7504 29.8401 13.7504H24.5801V9.60537C24.5801 7.51204 23.54 5.56871 21.7983 4.40538C20.8033 3.74204 19.5801 3.572 18.4434 3.93866C17.3034 4.30533 16.4099 5.15701 15.9749 6.32534L12.4284 17.0837H7.50163C5.43497 17.0837 3.75163 18.7654 3.75163 20.8337V32.5004C3.75163 34.5687 5.43497 36.2504 7.50163 36.2504H26.5084C30.6684 36.2504 31.6867 34.2287 32.4384 31.977L35.7701 21.977C36.5484 19.637 36.3784 17.5187 35.2934 16.0137ZM6.25001 32.5004V20.8337C6.25001 20.1437 6.81167 19.5837 7.50001 19.5837H10.8333V33.7504H7.50001C6.81167 33.7504 6.25001 33.1904 6.25001 32.5004ZM33.395 21.1854L30.0633 31.1854C29.4716 32.9637 29.1001 33.7504 26.5068 33.7504H13.3333V19.5837C13.8733 19.5837 14.3501 19.237 14.5184 18.7253L18.3301 7.15705C18.4817 6.75538 18.8 6.45039 19.2084 6.31873C19.6167 6.1854 20.0533 6.24869 20.41 6.48535C21.455 7.18202 22.0783 8.3487 22.0783 9.60537V15.0004C22.0783 15.6904 22.6383 16.2504 23.3283 16.2504H29.8383C30.9983 16.2504 32.535 16.462 33.265 17.4753C33.8583 18.2987 33.9083 19.652 33.395 21.1854Z"
                    fill="#2B346F"
                  />
                </svg>
              </div>
              <div className="">
                <h3 className="flex-shrink-0 text-[20px] font-semibold text-primary-500">
                  98% học viên
                </h3>
                <p className="">hài lòng với chất lượng đào tạo</p>
              </div>
            </div>
          </div>
        </div>
        <CoursesTopGiaoVien props={data} />
        <LoTrinhCourse props={data} />
        <ReviewCourses props={data} />
        <div ref={targetRef}>
          <NhanTuVanPage
            categoryCourse={categoryCourse}
            setCategoryCourse={setCategoryCourse}
          />
        </div>
      </div>
    </>
  );
}

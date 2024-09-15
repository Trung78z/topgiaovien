import MoHinhPage from "@/components/home/mo-hinh";
import NhanTuVanPage from "@/components/home/nhan-tu-van";
import ReasonAndPeaceOfMind from "@/components/introduce/reason-peace-of-mind";
import ShareFromFounder from "@/components/introduce/share-from-founder";
import LogoTopTeacher from "@/components/logo";
import { getCourseCategory } from "@/services/courseService";
import { useEffect, useState } from "react";

export default function Introduce() {
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
      <div className="space-y-6 sm:space-y-20">
        <div className="flex w-full flex-col items-center gap-4 bg-primary-50 p-4 sm:gap-8 sm:p-20">
          <div className="">
            <LogoTopTeacher />
          </div>
          <p className="max-w-screen-md text-justify">
            Được thành lập từ năm 2021, TopGiaoVien hân hạnh là đơn vị uy tín
            tại Hồ Chí Minh, đồng hành cùng Quý phụ huynh, Quý học viên và các
            đối tác trong lĩnh vực chuyên đào tạo chứng chỉ Toeic, chứng chỉ
            IELTS Academic (Học thuật), chứng chỉ IELTS General (Tổng quát),
            Tiếng Anh giao tiếp, chứng chỉ HSK, Tiếng Trung giao tiếp theo mô
            hình nhóm nhỏ, đáp ứng đầy đủ cho nhu cầu du học - làm việc và định
            cư nước ngoài của học viên.
          </p>
        </div>
        <div className="container mx-auto px-0">
          <div className="grid grid-cols-1 px-0 sm:grid-cols-5 sm:gap-10">
            <div className="col-span-1 sm:col-span-2">
              <div className="relative">
                <div className="relative flex items-center justify-center">
                  <img
                    src="/assets/introduce/founder.png"
                    className="z-20 h-96 sm:min-h-[360px]"
                    alt="founder in topgiaovien"
                  />
                </div>
                <div className="relative">
                  {" "}
                  <div className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 fill-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-80 min-w-full sm:h-[400px] sm:w-[400px]"
                      viewBox="0 0 401 425"
                      fill="none"
                    >
                      <path
                        d="M0 46.606C0 33.9324 9.8542 23.4432 22.5031 22.6527L375.503 0.593331C389.32 -0.270091 401 10.703 401 24.5466V401C401 414.255 390.255 425 377 425H24C10.7452 425 0 414.255 0 401V46.606Z"
                        fill="url(#paint0_linear_857_2246)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_857_2246"
                          x1="200.5"
                          y1="24.0588"
                          x2="200.5"
                          y2="425"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#BDC0D2" />
                          <stop offset="1" stopColor="#2B346F" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 z-10 -translate-x-[50%] fill-none sm:-translate-x-[48%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:h-[400px] sm:w-[400px]"
                    viewBox="0 0 400 424"
                    fill="none"
                  >
                    <path
                      d="M0 46.547C0 33.8735 9.85408 23.3843 22.5029 22.5937L374.503 0.59358C388.32 -0.269973 400 10.7031 400 24.5468V400C400 413.255 389.255 424 376 424H24C10.7452 424 0 413.255 0 400V46.547Z"
                      fill="url(#paint0_linear_857_2245)"
                      fillOpacity="0.2"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_857_2245"
                        x1="200"
                        y1="24"
                        x2="200"
                        y2="424"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#BDC0D2" />
                        <stop offset="1" stopColor="#2B346F" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex w-full items-center justify-center pt-10 sm:col-span-3 sm:pt-0">
              <div className="rounded-lg bg-primary-50 p-2 sm:h-max sm:w-max sm:p-10">
                <h2 className="text-[28px] font-semibold">
                  Lời chào từ Founder
                </h2>
                <div className="h-1 w-20 bg-primary-500"></div>
                <h2 className="text-[28px] font-semibold text-primary-500">
                  Mr. Chieu Phan
                </h2>
                <p className="text-[16px]">Founder và CEO tại TopGiaoVien</p>

                <div className="relative flex items-center justify-between p-8 sm:p-10">
                  <div className="absolute top-2 -translate-x-[70%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M29.1668 5C34.2294 5 38.3335 9.10405 38.3335 14.1667C38.3335 17.906 36.3869 21.524 33.4816 22.2222C32.3609 22.4915 31.4684 23.9296 31.6602 25.5714C31.9169 27.7689 33.9041 29.989 37.8387 31.7385C38.7148 32.1281 38.3479 33.446 37.3966 33.3269C27.1423 32.0431 20.0343 25.3579 20.0002 15.8997C20.0001 9.39508 23.8431 5 29.1668 5Z"
                        fill="#2B346F"
                      />
                      <path
                        d="M9.16655 5C14.2292 5 18.3332 9.10405 18.3332 14.1667C18.3332 17.906 16.3866 21.524 13.4813 22.2222C12.3607 22.4915 11.4682 23.9296 11.6599 25.5714C11.9166 27.7689 13.9038 29.989 17.8385 31.7385C18.7145 32.1281 18.3477 33.446 17.3964 33.3269C7.14208 32.0431 0.0341 25.3579 2.94371e-09 15.8997C-0.000122814 9.39508 3.84286 5 9.16655 5Z"
                        fill="#2B346F"
                      />
                    </svg>
                  </div>
                  <p>
                    Vai trò của giáo viên không phải là chia sẽ kiến thức mà
                    chính là người đồng hành hướng dẫn phương pháp học, chỉ cho
                    học trò những điểm đúng - sai. Đồng thời tạo động lực và cả
                    sự kỷ luật cho học viên.
                  </p>
                  <div className="absolute bottom-4 right-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M10.8335 5C5.77084 5 1.66678 9.10406 1.66678 14.1667C1.66678 17.906 3.61336 21.524 6.51867 22.2222C7.63934 22.4915 8.53183 23.9296 8.34006 25.5714C8.08339 27.7689 6.09618 29.989 2.16154 31.7386C1.28546 32.1281 1.65229 33.446 2.60364 33.3269C12.8579 32.0431 19.9659 25.3579 20 15.8997C20.0001 9.39508 16.1571 5 10.8335 5Z"
                        fill="#2B346F"
                      />
                      <path
                        d="M30.8335 5C25.7708 5 21.6668 9.10406 21.6668 14.1667C21.6668 17.906 23.6134 21.524 26.5187 22.2222C27.6393 22.4915 28.5318 23.9296 28.3401 25.5714C28.0834 27.7689 26.0962 29.989 22.1615 31.7386C21.2855 32.1281 21.6523 33.446 22.6036 33.3269C32.8579 32.0431 39.9659 25.3579 40 15.8997C40.0001 9.39508 36.1571 5 30.8335 5Z"
                        fill="#2B346F"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MoHinhPage />
        <ReasonAndPeaceOfMind />
        <ShareFromFounder />
        <NhanTuVanPage
          categoryCourse={categoryCourse}
          setCategoryCourse={setCategoryCourse}
        />
      </div>
    </>
  );
}

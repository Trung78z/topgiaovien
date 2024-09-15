import FormDetailApply from "@/components/tuyen-dung/form-detail";
import { Button } from "@/components/ui/button";
import useScrollToTop from "@/components/useScrollToTop";
import { getJobBySlugDetail } from "@/services/jobService";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function ApplicationTeacherDetail() {
  useScrollToTop();
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getJobBySlugDetail(id);
        setData(res.msg);
      } catch (error) {
        console.log(error);
      }
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
    <>
      <div className="space-y-4">
        <div className="relative h-full w-full">
          <img
            loading="lazy"
            src="/assets/tuyen-dung/bg-tuyen-dung.png"
            alt="Top giáo viên"
            width={1920}
            height={200}
            className="min-h-[00px] w-full"
          />
          <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold text-background sm:text-[48px]">
            Tuyển dụng
          </h2>
        </div>
        <div className="container space-x-3 px-2 sm:pt-10">
          <div className="card rounded-md p-4 shadow-lg sm:p-10">
            <div className="flex flex-col justify-between gap-6 sm:flex-row">
              <h2 className="text-[28px] font-semibold">{data?.title}</h2>
              <Button className="text-[14px]" onClick={scrollToTarget}>
                Gửi hồ sơ ứng tuyển
              </Button>
            </div>
            {/* <div className="flex w-full flex-col items-center gap-4 pt-10 sm:flex-row">
              <div className="w-max space-y-3">
                <div className="flex items-center">
                  <div className="flex w-max items-center gap-2">
                    <div className="relative h-10 w-10 rounded-full bg-slate-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                      >
                        <path
                          d="M12 2.5C7.313 2.5 3.5 6.313 3.5 11C3.5 15.983 8.129 19.041 11.192 21.064L11.722 21.416C11.806 21.472 11.903 21.5 11.999 21.5C12.095 21.5 12.192 21.472 12.276 21.416L12.806 21.064C15.869 19.041 20.498 15.983 20.498 11C20.5 6.313 16.687 2.5 12 2.5ZM12 13.5C10.619 13.5 9.5 12.381 9.5 11C9.5 9.619 10.619 8.5 12 8.5C13.381 8.5 14.5 9.619 14.5 11C14.5 12.381 13.381 13.5 12 13.5Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <circle cx="20" cy="20" r="20" fill="#2B346F" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[14px]">Địa điểm</h3>
                      <h4 className="text-[14px]">{data?.location}</h4>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex w-max items-center gap-2">
                    <div className="relative h-10 w-10 rounded-full bg-slate-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                      >
                        <path
                          d="M21 8V9.25H3V8C3 6 4 5 6 5H18C20 5 21 6 21 8ZM21 10.75V16C21 18 20 19 18 19H6C4 19 3 18 3 16V10.75H21ZM10.75 15C10.75 14.586 10.414 14.25 10 14.25H7C6.586 14.25 6.25 14.586 6.25 15C6.25 15.414 6.586 15.75 7 15.75H10C10.414 15.75 10.75 15.414 10.75 15Z"
                          fill="white"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <circle cx="20" cy="20" r="20" fill="#2B346F" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[14px]">Mức lương</h3>
                      <h4 className="text-[14px]">{data?.salary}</h4>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex w-max items-center gap-2">
                    <div className="relative h-10 w-10 rounded-full bg-slate-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                      >
                        <path
                          d="M18 6H16.75V4.5C16.75 3.54 15.96 2.75 15 2.75H9C8.03 2.75 7.25 3.54 7.25 4.5V6H6C4 6 3 7 3 9V9.95996C3 10.89 3.55 11.71 4.41 12.04C5.79 12.59 7.21999 13.0101 8.64999 13.3101C8.75999 13.3301 8.86 13.25 8.92 13.16C9.64 12.08 10.8 11.4301 12 11.4301C13.21 11.4301 14.36 12.08 15.09 13.16C15.15 13.25 15.25 13.3301 15.36 13.3101C16.79 13.0101 18.21 12.59 19.59 12.05C20.45 11.71 21 10.89 21 9.95996V9C21 7 20 6 18 6ZM8.75 6V4.5C8.75 4.36 8.86 4.25 9 4.25H15C15.14 4.25 15.25 4.36 15.25 4.5V6H8.75ZM15.66 14.78C15.55 14.8 15.43 14.8101 15.32 14.8101C14.74 14.8101 14.19 14.51 13.84 13.99C13.4 13.33 12.71 12.9301 12 12.9301C11.3 12.9301 10.61 13.33 10.17 13.99C9.75 14.61 9.04001 14.92 8.35001 14.78C6.83001 14.47 5.32 14.0199 3.86 13.4399C3.55 13.3199 3.26 13.16 3 12.95V18C3 20 4 21 6 21H18C20 21 21 20 21 18V12.96C20.74 13.16 20.45 13.3199 20.14 13.4399C18.68 14.0199 17.17 14.47 15.66 14.78ZM12.002 16C11.451 16 11 15.552 11 15C11 14.448 11.443 14 11.994 14H12.002C12.553 14 13 14.448 13 15C13 15.552 12.553 16 12.002 16Z"
                          fill="white"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <circle cx="20" cy="20" r="20" fill="#2B346F" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[14px]">Cấp bậc</h3>
                      <h4 className="text-[14px]">{data?.position}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-max space-y-3">
                <div className="flex items-center">
                  <div className="flex w-max items-center gap-2">
                    <div className="relative h-10 w-10 rounded-full bg-slate-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                      >
                        <path
                          d="M19.96 15.21L15.2 19.98C13.83 21.34 12.4201 21.34 11.0601 19.98L10.256 19.167C10.139 19.05 10.139 18.86 10.256 18.743L18.7321 10.267C18.8491 10.15 19.039 10.15 19.156 10.267L19.959 11.07C21.37 12.48 21.32 13.84 19.96 15.21ZM17.698 9.23199L9.22205 17.708C9.10505 17.825 8.91497 17.825 8.79797 17.708L3.85999 12.77C3.30899 12.219 3 11.473 3 10.694V4.95001C3 3.87301 3.87295 3 4.94995 3H10.687C11.465 3 12.211 3.30899 12.76 3.85999L17.698 8.80798C17.815 8.92498 17.815 9.11499 17.698 9.23199ZM8 7C8 6.448 7.55395 6 7.00195 6H6.99194C6.44194 6 5.99902 6.448 5.99902 7C5.99902 7.552 6.45098 8 7.00098 8C7.55398 8 8 7.552 8 7Z"
                          fill="white"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <circle cx="20" cy="20" r="20" fill="#2B346F" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[14px]">Hình thức</h3>
                      <h4 className="text-[14px]">{data?.jobType}</h4>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex w-max items-center gap-2">
                    <div className="relative h-10 w-10 rounded-full bg-slate-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.00903 6.5C8.00903 4.294 9.80303 2.5 12.009 2.5C14.215 2.5 16.009 4.294 16.009 6.5C16.009 8.706 14.215 10.5 12.009 10.5C9.80303 10.5 8.00903 8.706 8.00903 6.5ZM14 12.5H10C5.94 12.5 4.5 15.473 4.5 18.019C4.5 20.296 5.71105 21.5 8.00305 21.5H15.9969C18.2889 21.5 19.5 20.296 19.5 18.019C19.5 15.473 18.06 12.5 14 12.5Z"
                          fill="white"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <circle cx="20" cy="20" r="20" fill="#2B346F" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[14px]">Loại công việc</h3>
                      <h4 className="text-[14px]">{data?.jobRole}</h4>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex w-max items-center gap-2">
                    <div className="relative h-10 w-10 rounded-full bg-slate-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.52981 3.52981L3.52981 5.52981C3.38381 5.67581 3.19178 5.74978 2.99978 5.74978C2.80778 5.74978 2.61575 5.67681 2.46975 5.52981C2.17675 5.23681 2.17675 4.76177 2.46975 4.46877L4.46975 2.46877C4.76275 2.17577 5.23779 2.17577 5.53079 2.46877C5.82379 2.76177 5.82281 3.23681 5.52981 3.52981ZM21.5247 4.46377L19.5247 2.50381C19.2287 2.21381 18.7547 2.21879 18.4627 2.51479C18.1737 2.81079 18.1789 3.28583 18.4739 3.57583L20.4739 5.53579C20.6199 5.67879 20.8098 5.74978 20.9988 5.74978C21.1928 5.74978 21.3877 5.6748 21.5347 5.5248C21.8247 5.2288 21.8197 4.75377 21.5247 4.46377ZM16.6028 18.5369L18.5318 20.4707C18.8238 20.7637 18.8238 21.2388 18.5298 21.5318C18.3838 21.6778 18.1918 21.7508 18.0008 21.7508C17.8088 21.7508 17.6158 21.6768 17.4698 21.5298L15.2517 19.3057C14.2577 19.7487 13.1597 19.9998 12.0017 19.9998C10.8437 19.9998 9.74573 19.7487 8.75173 19.3057L6.53274 21.5298C6.38674 21.6758 6.19373 21.7498 6.00173 21.7498C5.81073 21.7498 5.61868 21.6768 5.47268 21.5308C5.17868 21.2388 5.17873 20.7627 5.47073 20.4697L7.39968 18.5369C5.34668 17.0889 4.00271 14.7028 4.00271 11.9998C4.00271 7.58178 7.58471 3.99978 12.0027 3.99978C16.4207 3.99978 20.0027 7.58178 20.0027 11.9998C19.9997 14.7028 18.6548 17.0889 16.6028 18.5369ZM14.5298 13.5098L12.7498 11.7298V8.04079C12.7498 7.62679 12.4138 7.29079 11.9998 7.29079C11.5858 7.29079 11.2498 7.62679 11.2498 8.04079V12.0408C11.2498 12.2398 11.3288 12.4308 11.4698 12.5708L13.4698 14.5708C13.6158 14.7168 13.8078 14.7908 13.9998 14.7908C14.1918 14.7908 14.3838 14.7178 14.5298 14.5708C14.8228 14.2768 14.8228 13.8028 14.5298 13.5098Z"
                          fill="white"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <circle cx="20" cy="20" r="20" fill="#2B346F" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[14px]">Hạn nộp hồ sơ</h3>
                      <h4 className="text-[14px]">
                        {new Date(data?.applicationDeadline).toLocaleDateString(
                          "vi-VN",
                        )}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="mt-10 max-w-full sm:max-w-[80%]">
            <div className="my-8 flex flex-col sm:flex-row">
              <h2 className="mb-4 min-w-72 max-w-72 text-xl font-semibold">
                Nhiệm vụ công việc
              </h2>
              <div
                className="rich-text pl-2"
                dangerouslySetInnerHTML={{ __html: data?.responsibilities }}
              ></div>
              {/* <div>
                
                <p>1/ Giảng dạy lớp IELTS Academic và General:</p>
                <ul className="mb-4 list-disc pl-6">
                  <li>
                    Sĩ số Học viên: Lớp nhóm dưới 12 Học viên & lớp kèm riêng.
                  </li>
                  <li>Hình thức lớp: Offline hoặc online.</li>
                  <li>Lịch học 3 buổi/tuần (thứ 2,4,6 và thứ 3,5,7).</li>
                  <li>
                    Ưu tiên nhận lớp tại chi nhánh Thầy Cô thuận tiện di chuyển.
                  </li>
                </ul>
                <p>
                  2/ Các công tác chuyên môn khác theo nguyện vọng phát triển và
                  thế mạnh của cá nhân Thầy Cô, được tính theo thù lao làm việc
                  riêng.
                </p>
              </div> */}
            </div>
            <hr />
            <div className="my-8 flex flex-col sm:flex-row">
              <h2 className="mb-4 min-w-72 max-w-72 text-xl font-semibold">
                Yêu cầu
              </h2>

              <div
                className="rich-text pl-2"
                dangerouslySetInnerHTML={{ __html: data?.requirements }}
              ></div>
              {/* <div>
                
                <p>1/ Chuyên môn/kinh nghiệm:</p>
                <ul className="mb-4 list-disc pl-6">
                  <li>
                    Chuyên ngành Sư phạm Anh hoặc chuyên ngành khác có chứng chỉ
                    giảng dạy TESOL/CELTA.
                  </li>
                  <li>
                    IELTS 8.0 trở lên, trong đó kỹ năng Writing từ 7.5 trở lên.
                  </li>
                  <li>
                    Kinh nghiệm ít nhất 02 năm giảng dạy IELTS Academic và IELTS
                    General với các hình thức nhóm & kèm riêng.
                  </li>
                </ul>
                <p>
                  2/ Kỹ năng: Thiết kế bài giảng có tích hợp công nghệ và phù
                  hợp với từng đối tượng học viên, linh hoạt trong việc giảng
                  bài.
                </p>
                <p>
                  3/ Con người: Nghiêm túc, có trách nhiệm và có tâm với công
                  tác giảng dạy.
                </p>
              </div> */}
            </div>
            <hr />
            <div className="my-8 flex flex-col sm:flex-row">
              <h2 className="mb-4 min-w-72 max-w-72 text-xl font-semibold">
                Quyền lợi nhân sự
              </h2>
              <div
                className="rich-text pl-2"
                dangerouslySetInnerHTML={{ __html: data?.benefits }}
              ></div>
              {/* <div>
                <ul className="mb-4 list-disc pl-6">
                  <li>
                    Thù lao theo bậc chuyên môn và tính chất lớp giảng dạy:
                    230.000 VND - 450.000 VND/giờ (Thu nhập trung bình
                    20.000.000đ - 40.000.000đ). Có chế thưởng hiệu quả theo
                    chính sách nội bộ hiện hành.
                  </li>
                  <li>
                    Chính sách học phí riêng biệt dành cho người thân khi tham
                    gia khóa học tại Công ty.
                  </li>
                  <li>Đào tạo nội bộ, đào tạo với đối tác BC, IDP.</li>
                  <li>
                    Định hướng phát triển theo thế mạnh cá nhân (chuyên môn,
                    content, học thuật, quản lý).
                  </li>
                </ul>
              </div> */}
            </div>
            <hr />
            <div className="my-8 flex flex-col sm:flex-row">
              <h2 className="mb-4 min-w-72 max-w-72 text-xl font-semibold">
                Quy trình tuyển dụng
              </h2>

              <div
                className="rich-text pl-2"
                dangerouslySetInnerHTML={{ __html: data?.recruitmentProcess }}
              ></div>
              {/* <div>
                <ul className="mb-4 list-decimal pl-6">
                  <li>
                    Ứng viên gửi thông tin ứng tuyển (CV, bắt buộc kèm bằng
                    IELTS và các bằng cấp chuyên môn).
                  </li>
                  <li>Tham gia demo chuyên môn cùng Phòng Đào tạo.</li>
                  <li>
                    Nhận 2-3 lớp giảng dạy trong thời gian 02 tháng thử việc.
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div ref={targetRef}>
        <FormDetailApply props={data} />
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function ShareFromFounder() {
  return (
    <>
      <div className="space-y-6">
        <div className="container mx-auto space-y-6 px-2">
          <h2 className="text-center text-[28px] font-semibold text-[#333333]">
            Chia sẽ từ Founder về hành trình khởi nghiệp
          </h2>
          <iframe
            className="min-h-60 w-full sm:min-h-[500px]"
            src="https://www.youtube.com/embed/DM2ChbGOjKE?autoplay=1&mute=1"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h2 className="text-center text-[28px] font-semibold text-[#333333]">
          Hành trình 3 năm của Top Giáo Viên
        </h2>
        <div className="bg-primary-50">
          <div className="container px-2 py-10">
            <div className="container mx-auto p-4">
              <div className="relative flex flex-col items-center justify-between md:flex-row">
                <div className="absolute left-0 h-full w-1 bg-primary-500 sm:-translate-y-5 md:h-1 md:w-full"></div>
                <div className="mb-4 flex flex-col items-center md:mb-0">
                  <div className="flex flex-col gap-y-2 text-center sm:gap-y-6 md:text-left">
                    <h4 className="flex items-center text-lg font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M19.9999 4.1665C12.1883 4.1665 5.83325 10.5215 5.83325 18.3332C5.83325 26.6382 13.5483 31.7348 18.6533 35.1064L19.5366 35.6932C19.6766 35.7865 19.8382 35.8332 19.9982 35.8332C20.1582 35.8332 20.3199 35.7865 20.4599 35.6932L21.3433 35.1064C26.4482 31.7348 34.1633 26.6382 34.1633 18.3332C34.1666 10.5215 27.8116 4.1665 19.9999 4.1665ZM19.9999 22.4998C17.6983 22.4998 15.8333 20.6348 15.8333 18.3332C15.8333 16.0315 17.6983 14.1665 19.9999 14.1665C22.3016 14.1665 24.1666 16.0315 24.1666 18.3332C24.1666 20.6348 22.3016 22.4998 19.9999 22.4998Z"
                          fill="#2B346F"
                        />
                      </svg>
                      2022
                    </h4>
                    <p className="max-w-xs px-2 sm:mt-2">
                      Cơ sở đầu tiên được thành lập tại Quận 1, với mong muốn
                      tạo ra các lớp học IELTS giá rẻ và thực chiến cho học viên
                    </p>
                  </div>
                </div>

                <div className="mb-4 flex flex-col items-center md:mb-0">
                  <div className="flex flex-col gap-y-2 text-center sm:gap-y-6 md:text-left">
                    <h4 className="flex items-center text-lg font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M19.9999 4.1665C12.1883 4.1665 5.83325 10.5215 5.83325 18.3332C5.83325 26.6382 13.5483 31.7348 18.6533 35.1064L19.5366 35.6932C19.6766 35.7865 19.8382 35.8332 19.9982 35.8332C20.1582 35.8332 20.3199 35.7865 20.4599 35.6932L21.3433 35.1064C26.4482 31.7348 34.1633 26.6382 34.1633 18.3332C34.1666 10.5215 27.8116 4.1665 19.9999 4.1665ZM19.9999 22.4998C17.6983 22.4998 15.8333 20.6348 15.8333 18.3332C15.8333 16.0315 17.6983 14.1665 19.9999 14.1665C22.3016 14.1665 24.1666 16.0315 24.1666 18.3332C24.1666 20.6348 22.3016 22.4998 19.9999 22.4998Z"
                          fill="#2B346F"
                        />
                      </svg>
                      2023
                    </h4>
                    <p className="max-w-xs px-2 sm:mt-2">
                      Mở cơ sở mới tại 540/24 CMT8, Quận 3, đạt mốc 500 học viên
                      theo học, phát triển thêm mảng đào tạo tiếng Trung
                    </p>
                  </div>
                </div>
                <div className="mb-4 flex flex-col items-center md:mb-0">
                  <div className="flex flex-col gap-y-2 text-center sm:translate-y-6 sm:gap-y-6 md:text-left">
                    <h4 className="flex items-center text-lg font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M19.9999 4.1665C12.1883 4.1665 5.83325 10.5215 5.83325 18.3332C5.83325 26.6382 13.5483 31.7348 18.6533 35.1064L19.5366 35.6932C19.6766 35.7865 19.8382 35.8332 19.9982 35.8332C20.1582 35.8332 20.3199 35.7865 20.4599 35.6932L21.3433 35.1064C26.4482 31.7348 34.1633 26.6382 34.1633 18.3332C34.1666 10.5215 27.8116 4.1665 19.9999 4.1665ZM19.9999 22.4998C17.6983 22.4998 15.8333 20.6348 15.8333 18.3332C15.8333 16.0315 17.6983 14.1665 19.9999 14.1665C22.3016 14.1665 24.1666 16.0315 24.1666 18.3332C24.1666 20.6348 22.3016 22.4998 19.9999 22.4998Z"
                          fill="#2B346F"
                        />
                      </svg>
                      2024 - Hiện tại
                    </h4>
                    <p className="max-w-xs px-2 sm:mt-2">
                      Hoàn chỉnh platform online giúp cho học viên chủ động tìm
                      hiểu và lựa chọn giáo viên hàng đầu và phù hợp với nhu cầu
                      học tập. Khai trương chi nhánh mới tại Bình Thạnh. Đạt mốc
                      1000 hv theo học.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center text-[28px] font-semibold text-[#333333]">
          Gặp chúng mình ở cơ sở gần bạn nhất nhé
        </h2>
        <div className="container px-2">
          <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-x-10">
            <div className="card-hover col-span-1 space-y-3">
              <img
                loading="lazy"
                src="/assets/introduce/zoomOnline.png"
                className="h-44 w-full rounded-xl object-cover"
                alt="Địa điểm học Học online qua Google Meet"
                width={1920}
                height={1080}
              />
              <h2 className="text-[20px] font-medium text-primary-500">
                Học online qua Google Meet
              </h2>
              <Link to="meet.google.com" target="_blank">
                meet.google.com
              </Link>
            </div>
            <div className="card-hover col-span-1 space-y-3">
              <img
                loading="lazy"
                src="/assets/introduce/q3.png"
                className="h-44 w-full rounded-xl object-cover"
                alt="Địa điểm học 540/24 Cách Mạng Tháng 8, Phường 11, Quận 3"
                width={1920}
                height={1080}
              />
              <h2 className="text-[20px] font-medium text-primary-500">
                Quận 3
              </h2>
              <p>540/24 Cách Mạng Tháng 8, Phường 11, Quận 3</p>
              <Button
                variant="outline"
                className="flex items-center gap-x-2 hover:bg-slate-50"
              >
                <a
                  href="https://maps.app.goo.gl/txMPgUpipWDdPrB9A"
                  className="flex min-w-28 items-center gap-x-2 transition-transform duration-500 ease-linear hover:min-w-32 hover:justify-between"
                  target="_blank"
                  width={1920}
                  height={1080}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M10.2639 8.86807L6.80119 11.788C6.21919 12.2787 5.33325 11.8627 5.33325 11.0987V4.90144C5.33325 4.13744 6.21985 3.72148 6.80119 4.21215L10.2639 7.13207C10.8006 7.58474 10.8006 8.41541 10.2639 8.86807Z"
                      fill="#2B346F"
                    />
                  </svg>
                  Xem bản đồ
                </a>
              </Button>
            </div>
            <div className="card-hover col-span-1 space-y-3">
              <img
                loading="lazy"
                src="/assets/introduce/binhthanh.png"
                className="h-44 w-full rounded-xl object-cover"
                alt="Địa điểm học 168/20 Nguyễn Gia Trí, phường 25, quận Bình Thạnh"
                width={1920}
                height={1080}
              />
              <h2 className="text-[20px] font-medium text-primary-500">
                Quận Bình Thạnh
              </h2>
              <p>168/20 Nguyễn Gia Trí, phường 25, quận Bình Thạnh</p>
              <Button
                variant="outline"
                className="flex items-center gap-x-2 hover:bg-slate-50"
              >
                <a
                  href="https://maps.app.goo.gl/PLnX5vitNw8vK6UN6"
                  className="flex min-w-28 items-center gap-x-2 transition-transform duration-500 ease-linear hover:min-w-32 hover:justify-between"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M10.2639 8.86807L6.80119 11.788C6.21919 12.2787 5.33325 11.8627 5.33325 11.0987V4.90144C5.33325 4.13744 6.21985 3.72148 6.80119 4.21215L10.2639 7.13207C10.8006 7.58474 10.8006 8.41541 10.2639 8.86807Z"
                      fill="#2B346F"
                    />
                  </svg>
                  Xem bản đồ
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 p-2">
          <div className="space-y-4 p-4 sm:p-10">
            <div className="space-y-1">
              <h2 className="text-center text-[28px] font-semibold text-[#333333]">
                Đối tác đồng hành cùng IELTS Top Giáo Viên
              </h2>
              <p className="text-center">
                Top Giáo Viên tự hào đã và đang đồng hành cùng các đơn vị, tổ
                chức giáo dục uy tín.
              </p>
            </div>
          </div>
          <div className="container w-full rounded-sm bg-background p-4 py-8 sm:p-20">
            <div className="flex flex-wrap justify-around gap-2 rounded-sm px-2 sm:flex-nowrap">
              <div className="flex flex-col items-center">
                <img
                  loading="lazy"
                  src="/assets/introduce/certifica.png"
                  alt="Chứng chỉ top giáo viên"
                  className="rounded-md"
                  width={384}
                  height={283}
                />
                <h2 className="text-center text-[28px] font-semibold text-primary-500">
                  Đối tác bạch kim IDP
                </h2>
                <p>(Đơn vị đồng sáng lập và tổ chức kỳ thi IELTS)</p>
              </div>
              <div className="flex flex-col items-center gap-y-10">
                <img
                  loading="lazy"
                  src="/assets/introduce/idp.png"
                  alt="Chứng chỉ top giáo viên"
                  className="rounded-md"
                />
                <div className="flex items-center gap-x-6">
                  <img
                    loading="lazy"
                    src="/assets/introduce/ielts.png"
                    alt="Chứng chỉ top giáo viên"
                    className="rounded-md"
                  />
                  <img
                    loading="lazy"
                    src="/assets/introduce/china.png"
                    alt="Chứng chỉ top giáo viên"
                    className="rounded-md"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6 sm:flex-nowrap">
                  <img
                    loading="lazy"
                    src="/assets/introduce/invest.png"
                    alt="Chứng chỉ top giáo viên"
                    className="rounded-md"
                  />
                  <img
                    loading="lazy"
                    src="/assets/introduce/lets.png"
                    alt="Chứng chỉ top giáo viên"
                    className="rounded-md"
                  />
                  <img
                    loading="lazy"
                    src="/assets/introduce/uci.png"
                    alt="Chứng chỉ top giáo viên"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

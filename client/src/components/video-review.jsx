import { API_URL } from "@/services/apiService";
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
export default function ReviewVideo({ data }) {
  return (
    <>
      <div className="relative flex w-full min-w-full">
        <Swiper
          loop
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            400: {
              spaceBetween: 2,
              slidesPerView: 1,
            },
            640: {
              spaceBetween: 40,
              slidesPerView: 3,
            },
          }}
          className="space-x-6"
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id} className="relative">
              <Link to={item?.url} target="_blank">
                <img
                  loading="lazy"
                  src={`${API_URL}/api/file/review/${item.image}`}
                  width={1920}
                  height={500}
                  className="h-[200px] w-full flex-1 rounded-lg border-2 border-primary-500 object-cover object-center"
                  alt={"Review tại top giáo viên"}
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/35 p-1">
                  <FaCirclePlay className="h-14 w-14 fill-primary-500 text-gray-400" />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

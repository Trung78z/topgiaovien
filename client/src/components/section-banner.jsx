import { getImageBanner } from "@/services/homeService";
import { API_URL } from "@/services/apiService";
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
export default function SectionBanner() {
  const [images, setImages] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const data = await getImageBanner();
        setImages(data.msg);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetch();
  }, []);
  return (
    <>
      {loading ? (
        <div className="animate-pulse">
          <div className="animate-pulse space-y-4">
            <div className="h-[200px] rounded bg-gray-100 md:h-[500px]"></div>
          </div>
        </div>
      ) : (
        <div className="relative flex w-full min-w-full">
          <Swiper
            loop
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            spaceBetween={0}
            slidesPerView={1}
            // pagination={{ clickable: true }}
          >
            {images?.map((item) => (
              <SwiperSlide className="min-w-full" key={item.id}>
                <img
                  loading="lazy"
                  src={`${API_URL}/api/file/banner/${item.image}`}
                  width={1920}
                  height={500}
                  className="w-full flex-1 object-contain object-center sm:object-cover md:h-[500px]"
                  alt={item?.alt || "banner top giao vien"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}

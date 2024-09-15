import { getImageBanner } from "@/services/homeService";
import { API_URL } from "@/services/apiService";
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
export default function SectionBanner() {
  const [images, setImages] = useState();
  useEffect(() => {
    const fetch = async () => {
      const data = await getImageBanner();
      setImages(data.msg);
    };
    fetch();
  }, []);
  return (
    <>
      <div className="relative flex w-full">
        <Swiper
          loop
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          slidesPerView={1}
          // pagination={{ clickable: true }}
        >
          {images?.map((item) => (
            <SwiperSlide className="min-w-full" key={item.id}>
              <img
                src={`${API_URL}/api/file/banner/${item.image}`}
                width={1440}
                height={44}
                loading="lazy"
                className="h-[200px] min-w-full flex-1 object-center md:h-[440px] md:object-fill"
                alt="banner top giao vien"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

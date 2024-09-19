import { Suspense, useEffect, useState } from "react";
import { getShare } from "@/services/shareService";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardReview from "../card-review";
import LoadingPage from "../loading";
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Hoán đổi các phần tử
  }
  return array;
}
function getRandomItems(array, numberOfItems) {
  const shuffled = shuffleArray(array.slice()); // Tạo bản sao của danh sách và trộn nó
  return shuffled.slice(0, numberOfItems); // Chọn số mục mong muốn
}

export default function ReviewShareCourse() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getShare();
      setData(res.msg.filter((item) => item.active === true));
    };
    fetch();
  }, []);
  return (
    <>
      <div className="container mx-auto space-y-6 px-2">
        <h2 className="text-center text-[28px] font-semibold text-[#333333]">
          Những chia sẻ từ học viên của Top Giáo Viên
        </h2>
        {/* <Suspense fallback={<LoadingPage></LoadingPage>}>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3">
            {getRandomItems(data, 6).map((item, index) => (
              <CardReview key={index} data={item} />
            ))}
          </div>
        </Suspense> */}
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000, // 3000 milliseconds = 3 seconds
            disableOnInteraction: false, // Tùy chọn: cho phép autoplay tiếp tục sau khi người dùng tương tác
          }}
          breakpoints={{
            400: {
              spaceBetween: 2,
              slidesPerView: 1,
            },
            // Có thể thêm nhiều breakpoints khác
            640: {
              spaceBetween: 10,
              slidesPerView: 3,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <CardReview data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

import { Suspense, useEffect, useState } from "react";
import { Button } from "../ui/button";
import PropTypes from "prop-types";
import { API_URL } from "@/services/apiService";
import { getShare } from "@/services/shareService";
import { formatContent, getRandomItems } from "@/lib/utils";
import { Link } from "react-router-dom";
import LoadingPage from "../loading";

export default function ReviewCourses() {
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
      <div className="container mx-auto space-y-6 px-2 py-2">
        <div className="w-full space-y-3">
          <h2 className="text-center text-[28px] font-semibold text-[#333333]">
            Những yêu thương từ TopGiaoVien
          </h2>
          <p className="text-center text-[16px]">
            Những chia sẻ của Vietopies về trải nghiệm học tập và hành trình
            chinh phục điểm IELTS tại TopGiaoVien.
          </p>
        </div>
        <Suspense fallback={<LoadingPage></LoadingPage>}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-10">
            {getRandomItems(data, 3).map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </Suspense>
      </div>
    </>
  );
}

function Card({ data }) {
  return (
    <div className="card-hover col-span-1 max-h-[430px] min-h-[430px] max-w-[390px] space-y-2 overflow-hidden rounded-lg border-2 bg-background pb-2 shadow-xl transition-shadow duration-300 ease-in-out hover:shadow-2xl">
      <div className="relative w-full">
        <Link to={data?.link} target="_blank">
          <img
            loading="lazy"
            src={`${API_URL}/api/file/share/${data?.image}`}
            alt="Hình ảnh feedback"
            height={240}
            width={400}
            className="h-60 max-h-60 w-full rounded-sm object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </Link>
      </div>
      <div className="flex items-center gap-x-2 px-3">
        <div className="space-y-1">
          <h4 className="text-[20px] font-semibold">
            {data?.fullName || "Ẩn danh"}
          </h4>
        </div>
      </div>
      <p className="px-3">{formatContent(data.content, 100)}</p>
      <div className="flex items-center justify-between p-2">
        <Link to={data?.link} target="_blank">
          <Button variant="outline">Xem đánh giá trên Facebook</Button>
        </Link>
        <Link to={data?.link} target="_blank">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M24 12C24 17.9897 19.6116 22.9542 13.875 23.8542V15.4688H16.6711L17.2031 12H13.875V9.74906C13.875 8.79984 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9703 4.6875 14.6573 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C4.38844 22.9542 0 17.9897 0 12C0 5.37281 5.37281 0 12 0C18.6272 0 24 5.37281 24 12Z"
                fill="#1877F2"
              />
              <path
                d="M16.6711 15.4688L17.2031 12H13.875V9.74902C13.875 8.80003 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.736 23.95 11.3621 24 12 24C12.6379 24 13.264 23.95 13.875 23.8542V15.4688H16.6711Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string,
    updatedAt: PropTypes.string,
    icon: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

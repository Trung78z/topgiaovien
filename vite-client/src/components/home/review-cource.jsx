import { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getShare } from "@/services/shareService";
import { formatContent } from "@/lib/utils";
import { API_URL } from "@/services/apiService";
import { Link } from "react-router-dom";
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

export default function ReviewCourse() {
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
          Những chia sẻ từ học viên của TopGiaoVien
        </h2>
        <Suspense fallback={<p>loading...</p>}>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3">
            {getRandomItems(data, 6).map((data, index) => (
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
    <div className="relative min-h-[60vh] gap-2 space-y-2 rounded-lg border-2 bg-background pt-2 shadow-xl hover:shadow-2xl">
      <div className="flex items-center gap-x-2 px-3">
        <div className="icon">
          <img
            src="/assets/feedback1.png"
            alt="avatar feedback"
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
        <div className="space-y-1">
          <h4>{data?.user.fullName || "Nguyễn Minh Hiếu"}</h4>
          <p>{new Date(data?.updatedAt).toLocaleDateString("vi-VN")}</p>
        </div>
      </div>
      <p className="px-3 text-justify">{formatContent(data.content, 230)}</p>
      <Link to={data?.link} target="_blank">
        <div className="absolute bottom-0 w-full">
          <img
            src={
              `${API_URL}/api/file/share/${data?.image}` ||
              "/assets/feedback1.png"
            }
            alt="Hình ảnh feedback"
            loading="lazy"
            className="max-h-60 min-h-60 w-full rounded-sm object-cover"
          />
        </div>
      </Link>
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

// Card.propTypes = {
//   username: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired
// };

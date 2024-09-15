import { Suspense, useEffect, useState } from "react";
import { getShare } from "@/services/shareService";

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

export default function ShareReview({ props }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props?.share);
  }, [props]);

  return (
    <>
      <div className="container mx-auto space-y-6 px-2">
        <h2 className="text-center text-[28px] font-semibold text-[#333333]">
          Review giáo viên
        </h2>
        <Suspense fallback={<LoadingPage></LoadingPage>}>
          {data?.length > 0 ? (
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3">
              {getRandomItems(data, 3)?.map((data, index) => (
                <CardReview key={index} data={data} />
              ))}
            </div>
          ) : (
            <div className="item-content flex justify-center">
              Chưa có đánh giá
            </div>
          )}
        </Suspense>
      </div>
    </>
  );
}

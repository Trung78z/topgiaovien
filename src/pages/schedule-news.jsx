import NhanTuVanPage from "@/components/home/nhan-tu-van";
import CardNews from "@/components/news/card-new";
import { Button } from "@headlessui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
const data = [
  {
    img: "/public/assets/post/english-books-resting-table-working-space 1.png",
    title: "Lộ trình học tiếng anh cho người mất gốc từ A - Z",
    content:
      "Bạn là học sinh cấp 3? Bạn chìm trong mớ hỗn độn bài vở, deadline, thi cử? Áp lực học tập đè nặng khiến bạn stress, “burn out” dù chẳng gần lửa? Thấu hiểu điều này,",
  },
  {
    img: "/public/assets/post/post2.png",
    title:
      "Cùng TopGiaoVien “sạc” đầu năng lượng tại workshop “Recharge to restart”",
    content:
      "Bạn là học sinh cấp 3? Bạn chìm trong mớ hỗn độn bài vở, deadline, thi cử? Áp lực học tập đè nặng khiến bạn stress, “burn out” dù chẳng gần lửa? Thấu hiểu điều này,",
  },
  {
    img: "/public/assets/post/post2.png",
    title:
      "Cùng TopGiaoVien “sạc” đầu năng lượng tại workshop “Recharge to restart”",
    content:
      "Bạn là học sinh cấp 3? Bạn chìm trong mớ hỗn độn bài vở, deadline, thi cử? Áp lực học tập đè nặng khiến bạn stress, “burn out” dù chẳng gần lửa? Thấu hiểu điều này,",
  },
  {
    img: "/public/assets/post/post2.png",
    title:
      "Cùng TopGiaoVien “sạc” đầu năng lượng tại workshop “Recharge to restart”",
    content:
      "Bạn là học sinh cấp 3? Bạn chìm trong mớ hỗn độn bài vở, deadline, thi cử? Áp lực học tập đè nặng khiến bạn stress, “burn out” dù chẳng gần lửa? Thấu hiểu điều này,",
  },
  {
    img: "/public/assets/post/post2.png",
    title:
      "Cùng TopGiaoVien “sạc” đầu năng lượng tại workshop “Recharge to restart”",
    content:
      "Bạn là học sinh cấp 3? Bạn chìm trong mớ hỗn độn bài vở, deadline, thi cử? Áp lực học tập đè nặng khiến bạn stress, “burn out” dù chẳng gần lửa? Thấu hiểu điều này,",
  },
  {
    img: "/public/assets/post/post2.png",
    title:
      "Cùng TopGiaoVien “sạc” đầu năng lượng tại workshop “Recharge to restart”",
    content:
      "Bạn là học sinh cấp 3? Bạn chìm trong mớ hỗn độn bài vở, deadline, thi cử? Áp lực học tập đè nặng khiến bạn stress, “burn out” dù chẳng gần lửa? Thấu hiểu điều này,",
  },
  {
    img: "/public/assets/post/post2.png",
    title:
      "Cùng TopGiaoVien “sạc” đầu năng lượng tại workshop “Recharge to restart”",
    content:
      "Bạn là học sinh cấp 3? Bạn chìm trong mớ hỗn độn bài vở, deadline, thi cử? Áp lực học tập đè nặng khiến bạn stress, “burn out” dù chẳng gần lửa? Thấu hiểu điều này,",
  },
  {
    img: "/public/assets/post/post2.png",
    title:
      "Cùng TopGiaoVien “sạc” đầu năng lượng tại workshop “Recharge to restart”",
    content:
      "Bạn là học sinh cấp 3? Bạn chìm trong mớ hỗn độn bài vở, deadline, thi cử? Áp lực học tập đè nặng khiến bạn stress, “burn out” dù chẳng gần lửa? Thấu hiểu điều này,",
  },
  {
    img: "/public/assets/post/post2.png",
    title:
      "Cùng TopGiaoVien “sạc” đầu năng lượng tại workshop “Recharge to restart”",
    content:
      "Bạn là học sinh cấp 3? Bạn chìm trong mớ hỗn độn bài vở, deadline, thi cử? Áp lực học tập đè nặng khiến bạn stress, “burn out” dù chẳng gần lửa? Thấu hiểu điều này,",
  },
  {
    img: "/public/assets/post/post2.png",
    title:
      "Cùng TopGiaoVien “sạc” đầu năng lượng tại workshop “Recharge to restart”",
    content:
      "Bạn là học sinh cấp 3? Bạn chìm trong mớ hỗn độn bài vở, deadline, thi cử? Áp lực học tập đè nặng khiến bạn stress, “burn out” dù chẳng gần lửa? Thấu hiểu điều này,",
  },
  {
    img: "/public/assets/post/post2.png",
    title:
      "Cùng TopGiaoVien “sạc” đầu năng lượng tại workshop “Recharge to restart”",
    content:
      "Bạn là học sinh cấp 3? Bạn chìm trong mớ hỗn độn bài vở, deadline, thi cử? Áp lực học tập đè nặng khiến bạn stress, “burn out” dù chẳng gần lửa? Thấu hiểu điều này,",
  },
  {
    img: "/public/assets/post/post2.png",
    title:
      "Cùng TopGiaoVien “sạc” đầu năng lượng tại workshop “Recharge to restart”",
    content:
      "Bạn là học sinh cấp 3? Bạn chìm trong mớ hỗn độn bài vở, deadline, thi cử? Áp lực học tập đè nặng khiến bạn stress, “burn out” dù chẳng gần lửa? Thấu hiểu điều này,",
  },
  {
    img: "/public/assets/post/post2.png",
    title:
      "Cùng TopGiaoVien “sạc” đầu năng lượng tại workshop “Recharge to restart”",
    content:
      "Bạn là học sinh cấp 3? Bạn chìm trong mớ hỗn độn bài vở, deadline, thi cử? Áp lực học tập đè nặng khiến bạn stress, “burn out” dù chẳng gần lửa? Thấu hiểu điều này,",
  },
  {
    img: "/public/assets/post/post2.png",
    title:
      "Cùng TopGiaoVien “sạc” đầu năng lượng tại workshop “Recharge to restart”",
    content:
      "Bạn là học sinh cấp 3? Bạn chìm trong mớ hỗn độn bài vở, deadline, thi cử? Áp lực học tập đè nặng khiến bạn stress, “burn out” dù chẳng gần lửa? Thấu hiểu điều này,",
  },
];
export default function ScheduleNews() {
  const [show, setShow] = useState(6);
  const seeMore = () => {
    setShow((prev) => prev + 6);
  };
  return (
    <>
      <div className="space-y-6">
        <div className="flex min-h-40 items-center justify-center bg-primary-50">
          <div className="space-y-2">
            <h2 className="text-center text-4xl font-semibold text-primary-500">
              BLog
            </h2>
            <h1 className="max-w-screen-sm text-center text-sm text-neutral-555F6D">
              Cập nhật các thông tin sự kiện mới nhất của trung tâm luyện thi
              IELTS Vietop về các chương trình ưu đãi hoặc thông báo chính thức
              do IELTS Vietop tổ chức, đồng hành và tài trợ.
            </h1>
          </div>
        </div>
        <div className="container px-2">
          <div className="grid grid-cols-1 gap-x-4 py-10 md:grid-cols-4">
            <ul className="hidden h-max space-y-3 rounded-md border p-4 md:col-span-1 md:block">
              <Button className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2 6C2 5.448 2.448 5 3 5H21C21.552 5 22 5.448 22 6C22 6.552 21.552 7 21 7H3C2.448 7 2 6.552 2 6ZM21 11H3C2.448 11 2 11.448 2 12C2 12.552 2.448 13 3 13H21C21.552 13 22 12.552 22 12C22 11.448 21.552 11 21 11ZM21 17H3C2.448 17 2 17.448 2 18C2 18.552 2.448 19 3 19H21C21.552 19 22 18.552 22 18C22 17.448 21.552 17 21 17Z"
                    fill="#333333"
                  />
                </svg>
                Chương trình ưu đãi
              </Button>
              <Button className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.0359 4.18235C21.0349 4.18235 21.0349 4.18238 21.0339 4.18138C19.3329 3.37438 17.446 3.09136 15.425 3.33836C13.971 3.51736 12.741 4.34831 12 5.51231C11.258 4.34931 10.029 3.51736 8.57397 3.33836C6.55097 3.09136 4.66706 3.37438 2.96606 4.18138C2.96606 4.18138 2.96609 4.18138 2.96509 4.18138C2.53109 4.38738 2.25 4.83429 2.25 5.32029V18.3253C2.25 18.7193 2.4299 19.0804 2.7439 19.3174C3.0569 19.5544 3.4711 19.6313 3.8501 19.5223C6.7591 18.6963 9.21501 19.0464 11.583 20.6234C11.593 20.6304 11.605 20.6323 11.615 20.6383C11.626 20.6443 11.634 20.6544 11.646 20.6604C11.657 20.6664 11.6699 20.6633 11.6809 20.6693C11.7819 20.7173 11.889 20.7494 11.999 20.7494C12.109 20.7494 12.2159 20.7173 12.3169 20.6693C12.3279 20.6643 12.3411 20.6664 12.3521 20.6604C12.3631 20.6544 12.3721 20.6453 12.3821 20.6383C12.3921 20.6323 12.4041 20.6304 12.4141 20.6234C14.7791 19.0464 17.236 18.6963 20.147 19.5223C20.525 19.6293 20.9399 19.5544 21.2529 19.3174C21.5669 19.0804 21.7471 18.7183 21.7471 18.3253V5.32029C21.7501 4.83629 21.4699 4.38935 21.0359 4.18235ZM6.73389 17.5943C5.77289 17.5943 4.78 17.7283 3.75 17.9963V5.47129C5.169 4.82929 6.68811 4.61737 8.39111 4.82737C10.0211 5.02737 11.25 6.41731 11.25 8.05931V18.6903C9.815 17.9583 8.31789 17.5943 6.73389 17.5943ZM20.25 17.9963C17.524 17.2873 15.057 17.5133 12.75 18.6903V8.05931C12.75 6.41631 13.9789 5.02737 15.6079 4.82737C16.0299 4.77537 16.441 4.74937 16.842 4.74937C18.057 4.74937 19.182 4.98829 20.249 5.47129V17.9963H20.25Z"
                    fill="#333333"
                  />
                </svg>
                Chia sẽ tài liệu
              </Button>
              <Button className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.9441 5.28406L18.7161 3.05603C18.1951 2.53603 17.5441 2.249 16.7681 2.25C16.0321 2.251 15.341 2.53906 14.823 3.06006L2.46899 15.471C2.32799 15.6119 2.25 15.802 2.25 16V21C2.25 21.414 2.586 21.75 3 21.75H8C8.198 21.75 8.38905 21.671 8.52905 21.532L20.9399 9.177C21.4609 8.658 21.749 7.96706 21.75 7.23206C21.751 6.49606 21.4651 5.80406 20.9441 5.28406ZM7.68994 20.25H3.75V16.3101L12.7429 7.276L16.7251 11.257L7.68994 20.25ZM19.8821 8.11402L17.7881 10.199L13.801 6.21302L15.886 4.11804C16.122 3.88104 16.436 3.751 16.771 3.75H16.772C17.106 3.75 17.42 3.87997 17.657 4.11597L19.885 6.344C20.121 6.581 20.251 6.89498 20.251 7.22998C20.25 7.56398 20.1191 7.87802 19.8821 8.11402Z"
                    fill="#333333"
                  />
                </svg>
                Thông báo mở lớp
              </Button>
            </ul>
            <div className="col-span-1 space-y-3 md:col-span-3">
              {data.slice(0, show).map((_, index) => (
                <CardNews key={`${_.title}+${index}`} props={_} />
              ))}
              <Button
                className="flex w-full items-center justify-center gap-x-2 px-2"
                onClick={seeMore}
              >
                Xem thêm
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.0003C11.7443 17.0003 11.4883 16.9023 11.2933 16.7073L4.29325 9.70731C3.90225 9.31631 3.90225 8.68425 4.29325 8.29325C4.68425 7.90225 5.31631 7.90225 5.70731 8.29325L12.0003 14.5862L18.2933 8.29325C18.6842 7.90225 19.3163 7.90225 19.7073 8.29325C20.0983 8.68425 20.0983 9.31631 19.7073 9.70731L12.7073 16.7073C12.5123 16.9023 12.2563 17.0003 12.0003 17.0003Z"
                    fill="#2B346F"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <NhanTuVanPage />
      </div>
    </>
  );
}

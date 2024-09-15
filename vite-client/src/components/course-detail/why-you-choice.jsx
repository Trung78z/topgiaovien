import { API_URL } from "@/services/apiService";

export default function WhyYouChoice({ props }) {
  console.log(props);
  return (
    <>
      <div className="container mx-auto space-y-2 px-2">
        <h2 className="text-center text-[28px] font-semibold text-[#333333]">
          Tại sao nên học IETLS tại TopGiaoVien?
        </h2>
        <div className="video">
          <iframe
            className="min-h-60 w-full sm:min-h-[500px]"
            src={`https://www.youtube.com/embed/${props.urlChoice}`}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 md:grid-cols-4 md:gap-6">
          <div className="col-span-1 space-y-3 rounded-lg border bg-background p-1 sm:p-2">
            <img
              src={`${API_URL}/api/file/course/${props?.reviewCourseImage1}`}
              alt=""
              className="max-h-48 min-h-48 min-w-full object-cover"
            />
            <h2 className="text-[16px] font-semibold">
              Chấm chữa bài và luyện tập 1 kèm 1 với giáo viên
            </h2>
          </div>{" "}
          <div className="col-span-1 space-y-3 rounded-lg border bg-background p-1 sm:p-2">
            <img
              src={`${API_URL}/api/file/course/${props?.reviewCourseImage2}`}
              alt=""
              className="max-h-48 min-h-48 min-w-full object-cover"
            />
            <h2 className="text-[16px] font-semibold">
              Thi thử không giới hạn số lần
            </h2>
          </div>{" "}
          <div className="col-span-1 space-y-3 rounded-lg border bg-background p-1 sm:p-2">
            <img
              src={`${API_URL}/api/file/course/${props?.reviewCourseImage3}`}
              alt=""
              className="max-h-48 min-h-48 min-w-full object-cover"
            />
            <h2 className="text-[16px] font-semibold">
              Vô số tài liệu học tập từ giảng viên của trung tâm
            </h2>
          </div>{" "}
          <div className="col-span-1 space-y-3 rounded-lg border bg-background p-1 sm:p-2">
            <img
              src={`${API_URL}/api/file/course/${props?.reviewCourseImage4}`}
              alt=""
              className="max-h-48 min-h-48 min-w-full object-cover"
            />
            <h2 className="text-[16px] font-semibold">
              30 khóa học đã mở và nhận về đánh giá tích cực từ học viên
            </h2>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

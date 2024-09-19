import { API_URL } from "@/services/apiService";
import PropTypes from "prop-types";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

export default function WhyYouChoice({ props }) {
  return (
    <div className="container mx-auto space-y-2 px-2">
      <h2 className="text-center text-[28px] font-semibold text-[#333333]">
        Tại sao nên học {props?.courseCategory?.content} tại Top Giáo Viên?
      </h2>

      {props?.urlChoice === "" || props?.urlChoice === undefined ? (
        <></>
      ) : (
        <div className="video">
          <iframe
            className="min-h-60 w-full sm:min-h-[500px]"
            src={`https://www.youtube.com/embed/${props.urlChoice}?autoplay=1&mute=1`}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 md:grid-cols-4 md:gap-6">
        <div className="card-hover col-span-1 space-y-3 rounded-lg border bg-background p-1 sm:p-2">
          <HoverCard>
            <HoverCardTrigger>
              <img
                loading="lazy"
                src={`${API_URL}/api/file/course/${props?.reviewCourseImage1}`}
                alt="Top giáo viên"
                className="max-h-48 min-h-48 min-w-full object-cover"
              />
            </HoverCardTrigger>
            <HoverCardContent
              className="relative w-full max-w-screen-sm translate-y-[20%] bg-background"
              side="left"
            >
              <img
                loading="lazy"
                src={`${API_URL}/api/file/course/${props?.reviewCourseImage1}`}
                alt="Top giáo viên"
                className="max-h-96 min-w-full object-cover"
              />
            </HoverCardContent>
          </HoverCard>

          <h2 className="text-[16px] font-semibold">
            Chấm chữa bài và luyện tập 1 kèm 1 với giáo viên
          </h2>
        </div>
        <div className="card-hover col-span-1 space-y-3 rounded-lg border bg-background p-1 sm:p-2">
          <HoverCard>
            <HoverCardTrigger>
              <img
                loading="lazy"
                src={`${API_URL}/api/file/course/${props?.reviewCourseImage2}`}
                alt="Top giáo viên"
                className="max-h-48 min-h-48 min-w-full object-cover"
              />
            </HoverCardTrigger>
            <HoverCardContent
              className="relative w-full max-w-screen-sm translate-y-[20%] bg-background"
              side="right"
            >
              <img
                loading="lazy"
                src={`${API_URL}/api/file/course/${props?.reviewCourseImage2}`}
                alt="Top giáo viên"
                className="max-h-96 min-w-full object-cover"
              />
            </HoverCardContent>
          </HoverCard>

          <h2 className="text-[16px] font-semibold">
            Thi thử không giới hạn số lần
          </h2>
        </div>
        <div className="card-hover col-span-1 space-y-3 rounded-lg border bg-background p-1 sm:p-2">
          <HoverCard>
            <HoverCardTrigger>
              <img
                loading="lazy"
                src={`${API_URL}/api/file/course/${props?.reviewCourseImage3}`}
                alt="Top giáo viên"
                className="max-h-48 min-h-48 min-w-full object-cover"
              />
            </HoverCardTrigger>
            <HoverCardContent
              className="relative w-full max-w-screen-sm translate-y-[20%] bg-background"
              side="right"
            >
              <img
                loading="lazy"
                src={`${API_URL}/api/file/course/${props?.reviewCourseImage3}`}
                alt="Top giáo viên"
                className="max-h-96 min-w-full object-cover"
              />
            </HoverCardContent>
          </HoverCard>

          <h2 className="text-[16px] font-semibold">
            Vô số tài liệu học tập từ giảng viên của trung tâm
          </h2>
        </div>
        <div className="card-hover col-span-1 space-y-3 rounded-lg border bg-background p-1 sm:p-2">
          <HoverCard>
            <HoverCardTrigger>
              <img
                loading="lazy"
                src={`${API_URL}/api/file/course/${props?.reviewCourseImage4}`}
                alt="Top giáo viên"
                className="max-h-48 min-h-48 min-w-full object-cover"
              />
            </HoverCardTrigger>
            <HoverCardContent
              className="relative w-full max-w-screen-sm translate-y-[20%] bg-background"
              side="right"
            >
              <img
                loading="lazy"
                src={`${API_URL}/api/file/course/${props?.reviewCourseImage4}`}
                alt="Top giáo viên"
                className="max-h-96 min-w-full object-cover"
              />
            </HoverCardContent>
          </HoverCard>

          <h2 className="text-[16px] font-semibold">
            30 khóa học đã mở và nhận về đánh giá tích cực từ học viên
          </h2>
        </div>
      </div>
    </div>
  );
}

WhyYouChoice.propTypes = {
  urlChoice: PropTypes.string.isRequired,
  courseCategory: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reviewCourseImage1: PropTypes.string.isRequired,
  reviewCourseImage2: PropTypes.string.isRequired,
  reviewCourseImage3: PropTypes.string.isRequired,
  reviewCourseImage4: PropTypes.string.isRequired,
};

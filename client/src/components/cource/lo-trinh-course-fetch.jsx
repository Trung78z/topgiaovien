import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const steps = [
  {
    id: 1,
    title: "Chặng 1",
    subtitle: "Foundation 1",
    doiTuongHoc: ["Mất gốc, bỏ Tiếng Anh quá lâu (7 - 10 năm)"],
    thoiGianHoc: "20 buổi",
    mucTieuKhoaHoc: [
      "Nắm vững lại các chủ điểm ngữ pháp cần thiết cho việc nói/viết trong IELTS.",
      "Phát âm chuẩn, dễ nghe, tự tin phát âm.",
      "Mạnh dạn nói các chủ điểm cơ bản quen thuộc.",
      "Viết chính xác các loại câu và đoạn ngắn.",
    ],
  },
  {
    id: 2,
    title: "Chặng 2",
    subtitle: "Foundation 2",
    doiTuongHoc: ["Có nền tảng Tiếng Anh cơ bản, bỏ Tiếng Anh lâu (3 - 5 năm)"],
    thoiGianHoc: "38 buổi",
    mucTieuKhoaHoc: [
      "Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng.",
      "Đọc và hiểu một đoạn văn ngắn (200-300 từ) ở các chủ đề thông dụng.",
      "Có khả năng trả lời các câu hỏi theo một số chủ đề thông dụng.",
      "Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn; có cố gắng áp dụng câu phức/ghép.",
    ],
  },
  {
    id: 3,
    title: "Chặng 3",
    subtitle: "IELTS 3.0 - 5.0",
    doiTuongHoc: [
      "Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp.",
      "Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc.",
    ],
    thoiGianHoc: "100 buổi",
    mucTieuKhoaHoc: [
      "Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật.",
      "Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật.",
      "Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục.",
      "Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi).",
    ],
  },
  {
    id: 4,
    title: "Chặng 4",
    subtitle: "IELTS 5.0 - 6.5+",
    doiTuongHoc: [
      "Đã trải qua việc học và ôn luyện IELTS ở level tương đương hoặc thấp hơn.",
      "Đã từng tham gia thi IELTS đạt điểm số Overall cận 5.0.",
    ],
    thoiGianHoc: "100 buổi",
    mucTieuKhoaHoc: [
      "Nghe hiểu các bài hội thoại và đọc thoại với chủ đề thông dụng và chủ đề học thuật.",
      "Đọc hiểu các bài đọc với chủ đề thông dụng và chủ đề học thuật.",
      "Speaking part 1 khá năng mở rộng ý hợp lý, chính xác. Part 2 nói được 2 phút trôi chảy, đúng trọng tâm. Part 3 trả lời được tất cả các câu hỏi theo bố cục, tự nhiên.",
      "Kiểm soát tốt ngữ pháp, hoàn toàn không có hoặc rất ít lỗi sai với 10% câu bị lỗi.",
    ],
  },
  {
    id: 5,
    title: "Chặng 5",
    subtitle: "IELTS 7.0+",
    doiTuongHoc: [
      "Đã trải qua việc học và ôn luyện IELTS ở level thấp hơn (6.0+) hoặc level tương đương nhưng thi chưa đạt kết quả.",
    ],
    thoiGianHoc: "100 buổi",
    mucTieuKhoaHoc: [
      "Hoàn toàn làm chủ được tất cả các dạng câu hỏi, kỹ năng làm bài yêu cầu.",
      "Nhuần nhuyễn đọc/ nghe hiểu các bài hội thoại và đọc thoại với chủ đề thông dụng và chủ đề học thuật.",
      "Ứng dụng nhuần nhuyễn vốn từ vựng, ngữ pháp vốn có và được nâng cao để trả lời các câu hỏi theo mọi chủ đề khác nhau.",
      "Xây dựng tư duy logic trong việc phân tích đề, tạo lập ý tưởng và phát triển dàn ý có độ sâu, thuyết phục.",
    ],
  },
];

export default function RouteCourse({ props }) {
  const [active, setActive] = useState();
  const [dataActive, setDataActive] = useState();
  useEffect(() => {
    if (props?.routeDetail) {
      setDataActive(props?.routeDetail[0]);
      setActive(props?.routeDetail[0]?.id);
    }
  }, [props?.routeDetail]);
  const handleChangeStep = (data) => {
    setActive(data);
    const update = props?.routeDetail.find((item) => item.id === data);
    setDataActive(update);
  };

  return (
    <div className="relative bg-[#EAEBF1] py-10">
      <div className="container space-y-6 rounded-lg bg-background p-2 px-2 sm:p-10">
        <h2 className="w-full text-center text-[28px] font-semibold text-[#333333]">
          Chi tiết lộ trình học
        </h2>
        <div>
          <div className="mx-auto flex w-max flex-col items-center md:p-4">
            <div className="w-full max-w-4xl">
              <div
                className={cn(
                  "relative hidden grid-cols-2 gap-5 sm:grid md:grid-cols-5",
                  props?.routeDetail?.length === 4 && "md:grid-cols-4",
                  props?.routeDetail?.length === 3 && "md:grid-cols-3",
                  props?.routeDetail?.length === 2 && "md:grid-cols-2",
                )}
              >
                <div className="absolute bottom-0 left-1/2 h-full w-2 bg-gray-200 md:left-0 md:h-1 md:w-full md:-translate-y-2"></div>

                {props?.routeDetail?.map((item, key) => (
                  <button
                    className="relative z-10 flex h-36 w-full flex-row items-center justify-between odd:-translate-x-2 odd:translate-y-1/2 odd:flex-row-reverse even:translate-x-4 sm:flex-col sm:odd:translate-x-0 sm:odd:translate-y-0 sm:odd:flex-col sm:even:translate-x-0"
                    key={item.id}
                    onClick={() => handleChangeStep(item.id)}
                  >
                    <div
                      className={cn(
                        "flex max-w-44 flex-col items-center justify-center rounded-md px-4 py-2",
                        item.id === active
                          ? "bg-primary-500 text-white"
                          : "text-neutral-CED4DA hover:border hover:bg-slate-100",
                      )}
                    >
                      <div className="mt-2 text-[16px]">Chặng {key + 1}</div>
                      <div
                        className={cn(
                          "w-full px-2 text-lg font-semibold",
                          item.id === active ? "text-white" : "text-black",
                          key === 0 && "pl-0",
                        )}
                      >
                        {item.content}
                      </div>
                    </div>
                    <div
                      className={cn(
                        "bottom-0 h-6 w-6 rounded-full",
                        item.id === active ? "bg-blue-600" : "bg-gray-300",
                      )}
                    ></div>
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-6 gap-x-2 gap-y-4 sm:hidden">
                {props?.routeDetail?.map((item, key) => (
                  <li
                    key={item.id}
                    className={cn(
                      "list-inside list-none",
                      key < 3 ? "col-span-2" : "col-span-3",
                    )}
                    onClick={() => handleChangeStep(item.id)}
                  >
                    <Button
                      className="flex w-full flex-col items-center border-2 p-8"
                      variant={item.id === active ? "" : "outline"}
                    >
                      <div className="mt-2 sm:text-[16px]">Chặng {key + 1}</div>
                      <p className="text-wrap text-xs"> {item.content}</p>
                    </Button>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-10">
          <SubjectOfStudy subjectOfStudy={dataActive?.subjectOfStudy} />
          <GoalLearn goalLearn={dataActive?.goalLearn} />
        </div>
      </div>
    </div>
  );
}

const SubjectOfStudy = ({ subjectOfStudy }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (subjectOfStudy) {
      setAnimationClass("slide-in-from-opacity");

      const timeout = setTimeout(() => {
        setAnimationClass("");
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [subjectOfStudy]);
  if (!subjectOfStudy) return null;

  return (
    <>
      <ul
        className={`col-span-1 list-inside list-disc rounded-lg border border-primary-500 p-4 sm:col-span-2 ${animationClass}`}
      >
        <h3 className="text-[16px] font-semibold">Đối tượng học</h3>
        {subjectOfStudy
          ?.trim()
          .split("\n")
          .map((line, index) => (
            <li key={index} className="mb-1">
              {line}
            </li>
          ))}
      </ul>
    </>
  );
};

const GoalLearn = ({ goalLearn }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (goalLearn) {
      setAnimationClass("slide-in-from-opacity");

      const timeout = setTimeout(() => {
        setAnimationClass("");
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [goalLearn]);
  if (!goalLearn) return null;
  return (
    <>
      {" "}
      <ul
        className={`col-span-1 list-inside list-disc rounded-lg border border-primary-500 p-4 sm:col-span-3 ${animationClass}`}
      >
        <h3 className="text-[16px] font-semibold">Mục tiêu khóa học</h3>
        {goalLearn
          ?.trim()
          .split("\n")
          .map((line, index) => (
            <li key={index} className="mb-1">
              {line}
            </li>
          ))}
      </ul>
    </>
  );
};
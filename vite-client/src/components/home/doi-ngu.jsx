import icon1 from "@/assets/image-home/card/Icon.svg";
import icon2 from "@/assets/image-home/card/Icon2.svg";
import icon3 from "@/assets/image-home/card/icon3.svg";
import homeSession from "@/assets/image-home/img-home-session.png";
import iconTopButton from "@/assets/image-home/timtop.png";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
export default function DoiNguTop() {
  const navigate = useNavigate();
  const hanleClickSearchNow = () => {
    navigate("/chon-giao-vien");
  };
  return (
    <div className="relative bg-[#EAEBF1] md:pb-80 lg:pb-60">
      <div className="container flex flex-wrap items-center justify-between gap-x-2 py-20 md:flex-nowrap">
        <div className="flex w-[750px] flex-col items-center space-y-3 sm:items-start">
          <h2 className="text-[48px] font-semibold text-primary">
            <span className="border-b-8 border-b-surface px-0">Đội ngũ</span>
            <> </> giáo viên <br className="hidden sm:block" /> tại TopGiaoVien
          </h2>
          <p className="text-[16px] text-neutral-600">
            Là những giáo viên giỏi kiến thức và giỏi truyền đạt. Rất tận tâm
            với học viên, đi dạy vì cái tâm và luôn khát khao cải tiến việc học
            tiếng anh ở Việt Nam.
          </p>
          <div className="relative w-max space-y-5">
            <Button
              variant="outline"
              className="border-primary"
              onClick={hanleClickSearchNow}
            >
              Tìm TopGiaoVien ngay
            </Button>
            <div className="flex justify-center">
              <img src={iconTopButton} alt="" width={56} height={29} />
            </div>
          </div>
        </div>
        <img src={homeSession} width={442} height={519} alt="error" />
      </div>
      <div className="container relative bottom-0 left-1/2 mx-auto mt-10 grid -translate-x-1/2 grid-cols-1 gap-10 gap-x-10 rounded-[14px] bg-neutral p-4 shadow-lg sm:absolute sm:translate-y-1/2 sm:grid-cols-2 md:grid-cols-3 md:p-10">
        <div className="col-span-1 space-y-5 md:p-2">
          <div className="relative flex items-center gap-2 sm:flex-col sm:items-start">
            <img
              src={icon1}
              alt="icon Đạt chuẩn giáo viên"
              width={40}
              height={40}
            ></img>
            <h3 className="text-[20px] font-semibold text-neutral-600">
              Đạt chuẩn Topgiaovien
            </h3>
          </div>
          <p className="text-justify leading-[22.4px]">
            Đội ngũ giáo viên nhiều năm kinh nghiệm, background tốt, là Thạc sĩ,
            Thủ khoa, Á khoa, có chứng chỉ Ielts, HSK... cao. Có chứng chỉ giảng
            dạy quốc tế và được đào tạo bài bản. Điểm chung là đã được trải qua
            lớp đào tạo giáo viên tài năng của Topgiaovien
          </p>
        </div>
        <div className="col-span-1 space-y-2 sm:p-2">
          <div className="relative flex items-center gap-2 sm:flex-col sm:items-start">
            <img
              src={icon2}
              alt="icon Trách nhiệm tạo nên sự tận tâm"
              width={40}
              height={40}
              className=""
            ></img>
            <h3 className="text-[20px] font-semibold text-neutral-600">
              Trách nhiệm tạo nên sự tận tâm
            </h3>
          </div>
          <p className="text-justify leading-[22.4px]">
            Đội ngũ giáo viên luôn đặt học viên của mình lên hàng đầu. Không chỉ
            giảng dạy và truyền đạt kiến thức tại lớp, giáo viên còn sẵn sàng hỗ
            trợ học viên ngoài giờ học thông qua zalo. Bởi sự hài lòng của học
            viên được
            <span className="font-semibold text-primary"> công khai </span>
            và ảnh hưởng đến danh tiếng của giáo viên
          </p>
        </div>
        <div className="col-span-1 space-y-2 sm:p-2">
          <div className="relative flex items-center gap-2 sm:flex-col sm:items-start">
            <img
              src={icon3}
              alt="icon Đạt chuẩn giáo viên"
              width={40}
              height={40}
            ></img>
            <h3 className="text-[20px] font-semibold text-neutral-600">
              Đạt chuẩn Topgiaovien
            </h3>
          </div>

          <p className="text-justify leading-[22.4px]">
            Đội ngũ giáo viên nhiều năm kinh nghiệm, background tốt, là Thạc sĩ,
            Thủ khoa, Á khoa, có chứng chỉ Ielts, HSK... cao. Có chứng chỉ giảng
            dạy quốc tế và được đào tạo bài bản. Điểm chung là đã được trải qua
            lớp đào tạo giáo viên tài năng của Topgiaovien
          </p>
        </div>
      </div>
    </div>
  );
}
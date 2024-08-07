import NhanTuVanPage from "@/components/home/nhan-tu-van";
import CardNews from "@/components/news/card-new";
import { Button } from "@headlessui/react";
import { useParams } from "react-router-dom";

export default function ScheduleNewsDetail() {
  const { id } = useParams();

  return (
    <>
      <div className="space-y-6 py-4 sm:py-10">
        <div className="container space-y-3 px-2">
          <h1 className="text-[28px] font-semibold">
            Lộ trình học tiếng anh cho người mất gốc từ A - Z
          </h1>
          <img
            src="/public/assets/post/english-books-resting-table-working-space 1.png"
            alt=""
            className="w-full rounded-sm"
          />
          <p>
            Không chỉ người đi làm mà rất nhiều sinh viên cũng đang gặp khó khăn
            vì mất căn bản tiếng Anh. Vậy mất gốc tiếng Anh nên bắt đầu từ đâu?
            Cách sắp xếp kiến thức thế nào là hợp lý? Cùng TopGiaoVien giải đáp
            thắc mắc qua bài viết sau.
          </p>
          <h2>Nguyên nhân khiến bạn bị mất gốc tiếng Anh</h2>
          <p>
            Hiện nay nhiều bạn học sinh, sinh viên và người đi làm đều gặp nhiều
            rào cản trong học tập và công việc vì thiếu kỹ năng ngoại ngữ. Những
            lỗ hổng về kiến thức tiếng Anh ngày càng nhiều khiến bạn nhớ nhớ
            quên quên.
          </p>
          <p>Vậy đâu là lý do khiến người học bị mất nền tảng Anh ngữ?</p>
          <ul className="list-disc pl-10">
            <li>
              <span className="font-semibold"> Chủ quan trong học tập:</span>{" "}
              Khi đạt được một số thành tựu về Anh ngữ như điểm số cao, chứng
              chỉ ngoại ngữ thì nhiều người có xu hướng thỏa mãn. Họ chểnh mảnh
              trong quá trình học hoặc ngừng ôn luyện hoàn toàn.{" "}
            </li>
            <li>
              <span className="font-semibold"> Không có động lực học:</span>{" "}
              Việc thiếu “sức đẩy” khiến bạn không muốn duy trì và theo đuổi lộ
              trình học từ đầu. Song, khi đứng trước tình huống cần sử dụng
              tiếng Anh thì bạn sẽ vô cùng bối rối vì vốn kiến thức tưởng có mà
              không của mình.{" "}
            </li>
            <li>
              <span className="font-semibold"> Học lệch kỹ năng: </span> Có
              nhiều bạn dành phần lớn thời gian chỉ để luyện ngữ pháp, đọc hoặc
              thuần giao tiếp mà thiếu sự hài hòa các kỹ năng. Điều này dẫn đến
              việc bạn dễ gặp các vấn đề về phát âm, nghe hoặc viết đúng chính
              tả khi thực hiện các kỹ năng yếu hơn.
            </li>
          </ul>
        </div>
        <NhanTuVanPage />
      </div>
    </>
  );
}

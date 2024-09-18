import topgiaoviencogi1 from "@/assets/image-home/topgiaoviencogi1.png";
import topgiaoviencogi2 from "@/assets/image-home/topgiaoviencogi2.png";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

export default function TopGiaoVienHave() {
  return (
    <div className="container mx-auto space-y-6 px-2 py-10">
      <h2 className="text-center text-[28px] font-semibold text-[#333333]">
        Ở TopGiaoVien có gì?
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="col-span-1 space-y-4">
          <HoverCard>
            <HoverCardTrigger>
              <img
                loading="lazy"
                src={topgiaoviencogi1}
                alt="Ảnh giáo viên"
                width={1697}
                height={1010}
                className="h-60 min-w-full rounded-sm object-cover sm:h-80"
              />
            </HoverCardTrigger>
            <HoverCardContent
              className="relative w-full bg-background"
              side="bottom"
            >
              Hình ảnh đội ngũ giảng viên dạy tại top giáo viên
            </HoverCardContent>
          </HoverCard>

          <h3 className="text-[20px] font-semibold text-primary">
            Bạn được <> </>
            <span className="text-surface">
              chủ động tìm hiểu và quyết định giáo viên<> </>
            </span>
            mình theo học một cách chân thực. Với đội ngũ giáo viên đã được tinh
            chọn
          </h3>
          <p className="text-justify text-[14px]">
            Bạn có quyền được tìm hiểu, trò chuyện và lựa chọn với giáo viên mà
            mình muốn học. Không còn phải đăng ký khóa học mà không biết ai là
            người dạy mình, có thật sự phù hợp với mình không, có đồng đều chất
            lượng với các giáo viên không, feedback thật về giáo viên như thế
            nào. Hơn nửa đội ngũ Top giáo viênđược tuyển chọn, kết nạp kỹ lượng,
            bạn cũng không còn lạc giữa rừng sự lựa chọn. Bởi “Top” ở đây là
            chất lượng và giới hạn. Từ nay, bạn sẽ không còn phải tìm hiểu trung
            tâm, tìm hiểu giáo viên rồi đến lúc vào học lại học với một giáo
            viên không như truyền thông.
          </p>
        </div>
        <div className="col-span-1 space-y-4">
          <HoverCard>
            <HoverCardTrigger>
              <img
                loading="lazy"
                src={topgiaoviencogi2}
                width={1280}
                height={1017}
                alt="Ảnh giáo viên"
                className="h-60 min-w-full rounded-sm object-cover sm:h-80"
              />
            </HoverCardTrigger>
            <HoverCardContent
              className="relative w-full bg-background"
              side="bottom"
            >
              Hình ảnh đội ngũ giảng viên dạy tại top giáo viên
            </HoverCardContent>
          </HoverCard>
          <h3 className="text-[20px] font-semibold text-primary">
            Giáo viên
            <span className="text-surface"> chịu trách nhiệm về cam kết </span>
            chất lượng và đầu ra cho học viên. TGV giám sát và có chính sách
            <span className="text-surface">
              <> </> hoàn học phí cho học đạt kết quả tốt
            </span>
          </h3>
          <p className="text-justify text-[14px]">
            Đội ngũ “Top giáo viên” sẽ hoạt động theo mô hình, giáo viên phải
            chịu trách nhiệm cho những cam kết về chất lượng giảng dạy, thông
            tin mình cung cấp. Vì thu nhập của họ không phải là lương mà chính
            là học phí của bạn, do vậy chắc chắn rằng Giáo viên sẽ toàn tâm, hết
            mình cho việc giảng dạy và chăm sóc học viên. TGV sẽ đóng vai trò
            giải quyết quyền lợi của học viên nếu bạn không hài lòng, đồng thời
            TGV cũng có các chính sách khuyến khích bạn học tập bằng hoàn học
            phí đều bạn đạt aim (mục tiêu).
          </p>
        </div>
      </div>
    </div>
  );
}

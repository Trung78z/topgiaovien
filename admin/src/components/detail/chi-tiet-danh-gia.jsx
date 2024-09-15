import CardDanhGia from "./card-danh-gia";
import { Button } from "../ui/button";

export default function ChiTietDanhGia() {
  return (
    <>
      <div className="container mx-auto space-y-6 px-2">
        <div className="space-y-1">
          <h2 className="text-center text-[28px] font-semibold text-[#333333]">
            Xếp hạng và đánh giá
          </h2>
          <p className="w-full text-center">
            Chỉ học viên đăng ký học và cấp tài khoản mới để lại được feedback
          </p>
        </div>
        <div className="grid-col-span-1 grid gap-x-4 sm:grid-cols-2">
          <div className="content-scroll col-span-1 max-h-[330px] space-y-5 overflow-hidden overflow-y-auto">
            {Array.from({ length: 5 }).map((item, index) => (
              <div key={index}>
                <CardDanhGia />
              </div>
            ))}
          </div>
          <div className="col-span-1 space-y-3 py-4">
            <div className="flex items-center gap-x-6 px-2">
              <div>
                {" "}
                <h2 className="text-lg font-semibold">
                  4.8 <span className="text-sm font-medium"> trên 5</span>
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="16"
                  viewBox="0 0 96 16"
                  fill="none"
                >
                  <path
                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                    fill="#FFDC3A"
                  />
                  <path
                    d="M28 0L29.7961 5.52786H35.6085L30.9062 8.94427L32.7023 14.4721L28 11.0557L23.2977 14.4721L25.0938 8.94427L20.3915 5.52786H26.2039L28 0Z"
                    fill="#FFDC3A"
                  />
                  <path
                    d="M48 0L49.7961 5.52786H55.6085L50.9062 8.94427L52.7023 14.4721L48 11.0557L43.2977 14.4721L45.0938 8.94427L40.3915 5.52786H46.2039L48 0Z"
                    fill="#FFDC3A"
                  />
                  <path
                    d="M68 0L69.7961 5.52786H75.6085L70.9062 8.94427L72.7023 14.4721L68 11.0557L63.2977 14.4721L65.0938 8.94427L60.3915 5.52786H66.2039L68 0Z"
                    fill="#FFDC3A"
                  />
                  <path
                    d="M88 0L89.7961 5.52786H95.6085L90.9062 8.94427L92.7023 14.4721L88 11.0557L83.2977 14.4721L85.0938 8.94427L80.3915 5.52786H86.2039L88 0Z"
                    fill="#CED4DA"
                  />
                </svg>
              </div>
              <div>
                <Button variant="outline" size="small" className="px-2 py-1">
                  Tất cả
                </Button>
                <Button variant="outline" size="small" className="px-2 py-1">
                  Từ Fanpage
                </Button>
                <Button variant="outline" size="small" className="px-2 py-1">
                  Từ group reviews
                </Button>
              </div>
            </div>
            <h3>Thêm đánh giá mới</h3>
            <p>Địa chỉ email của bạn sẽ được bảo mật.</p>
            <div className="flex items-center gap-x-2">
              <h4>Đánh giá: </h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="16"
                  viewBox="0 0 96 16"
                  fill="none"
                >
                  <path
                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                    fill="#CED4DA"
                  />
                  <path
                    d="M28 0L29.7961 5.52786H35.6085L30.9062 8.94427L32.7023 14.4721L28 11.0557L23.2977 14.4721L25.0938 8.94427L20.3915 5.52786H26.2039L28 0Z"
                    fill="#CED4DA"
                  />
                  <path
                    d="M48 0L49.7961 5.52786H55.6085L50.9062 8.94427L52.7023 14.4721L48 11.0557L43.2977 14.4721L45.0938 8.94427L40.3915 5.52786H46.2039L48 0Z"
                    fill="#CED4DA"
                  />
                  <path
                    d="M68 0L69.7961 5.52786H75.6085L70.9062 8.94427L72.7023 14.4721L68 11.0557L63.2977 14.4721L65.0938 8.94427L60.3915 5.52786H66.2039L68 0Z"
                    fill="#CED4DA"
                  />
                  <path
                    d="M88 0L89.7961 5.52786H95.6085L90.9062 8.94427L92.7023 14.4721L88 11.0557L83.2977 14.4721L85.0938 8.94427L80.3915 5.52786H86.2039L88 0Z"
                    fill="#CED4DA"
                  />
                </svg>
              </span>
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="feel">Viết cảm nhận *</label>
              <textarea
                name="feel"
                id="feel"
                placeholder="cảm nhận"
                className="min-h-28 rounded-md border p-4"
              ></textarea>
              <div className="w-full text-right">
                <Button className="bg-primary-500 px-10">Gửi</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

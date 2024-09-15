import Facebook from "@/assets/footer/Facebook.svg";
import TikTok from "@/assets/footer/Tiktok.svg";
import YoutubeLogo from "@/assets/footer/Youtube.svg";
import email from "@/assets/footer/Icon.svg";
import location from "@/assets/footer/location.svg";
import phone from "@/assets/footer/phone.svg";
import { Link } from "react-router-dom";
import LogoTopTeacher from "./logo";
export default function FooterPage() {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="container grid grid-cols-1 justify-center gap-x-4 gap-y-6 px-2 py-10 sm:grid-cols-2 sm:px-4 sm:py-20 lg:grid-cols-4 lg:px-14">
        <div className="col-span-1 space-y-2">
          <div>
            <LogoTopTeacher />
          </div>
          <p>Thứ 2- 6: 8:00 - 22:00</p>
          <p>Thứ 7 - CN: 8:00 - 23:00</p>
        </div>
        <div className="col-span-1 space-y-2">
          <h2 className="text-[20px] font-semibold leading-[28px]">
            Thông tin liên hệ
          </h2>
          <div className="flex items-center gap-1">
            <img
              loading="lazy"
              width={24}
              height={24}
              src={email}
              alt="email"
            />
            <p>topgiaovien@gmail.com</p>
          </div>
          <div className="flex items-center gap-1">
            <img
              loading="lazy"
              width={24}
              height={24}
              src={phone}
              alt="email"
            />
            <p>0909.984.822</p>
          </div>
          <div className="flex items-center gap-1">
            <img
              loading="lazy"
              width={24}
              height={24}
              src={location}
              alt="email"
            />
            <p>540/24 Cách Mạng Tháng 8, Phường 11, Quận 3</p>
          </div>
        </div>
        <div className="col-span-1 space-y-2">
          <h2 className="text-[20px] font-semibold leading-[28px]">
            Thông tin
          </h2>
          <div className="flex items-center gap-1">
            <p>Nội quy</p>
          </div>
          <div className="flex items-center gap-1">
            <p>Hướng dẫn</p>
          </div>
          <div className="flex items-center gap-1">
            <p>Giải quyết khiếu nại</p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0655434200426!2d106.7160645!3d10.806292099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529004092ca47%3A0x416c1c41fac87e13!2sTopgiaovien!5e0!3m2!1svi!2s!4v1724476587271!5m2!1svi!2s?autoplay=1&mute=1"
          allowFullScreen=""
          className="col-span-1 w-full flex-shrink-0 rounded-md border-none"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <hr className="border-t-2" />
      <footer className="container flex flex-col-reverse items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p>
          © Copyright <span>{new Date().getFullYear()}</span> | topgiaovien.vn
        </p>
        <div className="flex items-center gap-x-4">
          <Link
            to="https://www.facebook.com/topgiaovien?mibextid=ZbWKwL"
            target="_blank"
          >
            <img
              loading="lazy"
              src={Facebook}
              width={40}
              height={40}
              alt="icon facebook"
            />
          </Link>
          <Link to="https://www.tiktok.com/@topgiaovien" target="_blank">
            <img
              loading="lazy"
              src={TikTok}
              width={40}
              height={40}
              alt="icon TikTok"
            />
          </Link>
          <a
            href="https://youtube.com/@topgiaovien?si=H8SZzxf6WvHbSzwe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              loading="lazy"
              src={YoutubeLogo}
              width={40}
              height={40}
              alt="YouTube"
              className="hover:rounded-full hover:shadow-2xl"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

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
      <div className="container grid grid-cols-1 justify-center gap-x-4 gap-y-6 px-2 py-20 sm:grid-cols-2 sm:px-4 lg:grid-cols-4 lg:px-14">
        <div className="col-span-1 space-y-2">
          <div>
            <LogoTopTeacher />
          </div>
          <p>Thứ 2- 6: 8AM - 22PM</p>
          <p>Thứ 7 - CN: 8AM - 23PM</p>
        </div>{" "}
        <div className="col-span-1 space-y-2">
          <h2 className="text-[20px] font-semibold leading-[28px]">
            Thông tin liên hệ
          </h2>
          <div className="flex items-center gap-1">
            <img src={email} alt="email" />
            <p>topgiaovien@gmail.com</p>
          </div>
          <div className="flex items-center gap-1">
            <img src={phone} alt="email" />
            <p>0909.984.822</p>
          </div>{" "}
          <div className="flex items-center gap-1">
            <img src={location} alt="email" />
            <p>168/20 Nguyễn Gia Trí, Phường 25, Bình Thạnh, TP.HCM</p>
          </div>
        </div>{" "}
        <div className="col-span-1 space-y-2">
          <h2 className="text-[20px] font-semibold leading-[28px]">
            Thông tin
          </h2>
          <div className="flex items-center gap-1">
            <p>Nội quy</p>
          </div>
          <div className="flex items-center gap-1">
            <p>Hướng dẫn</p>
          </div>{" "}
          <div className="flex items-center gap-1">
            <p>Giải quyết khiếu nại</p>
          </div>
        </div>{" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15671.640087029456!2d106.5702042!3d10.894442600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d57740dd97bb%3A0xa42d2e8b2f90dea!2zTmjDoCBUaOG7nSBHacOhbyBY4bupIE5hbSBIxrBuZw!5e0!3m2!1svi!2s!4v1721631507557!5m2!1svi!2s"
          className="col-span-1 w-full flex-shrink-0 rounded-md border-none"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <hr className="border-t-2" />
      <footer className="container flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p>
          © Copyright <span>{new Date().getFullYear()}</span> | topgiaovien.vn
        </p>
        <div className="flex items-center gap-x-4">
          <Link
            to="https://www.facebook.com/topgiaovien?mibextid=ZbWKwL"
            target="_blank"
          >
            <img src={Facebook} width={40} height={40} alt="" />
          </Link>
          <Link
            to="https://www.tiktok.com/@thayphan.topgiaovien?_t=8p3arbC6FJE&_r=1"
            target="_blank"
          >
            <img src={TikTok} width={40} height={40} alt="" />
          </Link>
          <a
            href="https://youtube.com/@topgiaovien?si=H8SZzxf6WvHbSzwe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
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

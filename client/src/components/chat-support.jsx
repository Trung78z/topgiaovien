import { cn } from "@/lib/utils";
import { useState } from "react";

function ChatSupport() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="sliding-text">
        <span className="text-1">Chào mừng bạn đến với Topgiaovien!</span>
        <span className="text-2">
          Khám phá những nội dung hữu ích ngay bây giờ!
        </span>
      </div>

      <div className="chat-icon">
        <div
          className={cn(
            "fixed bottom-14 right-0 z-50 m-4 rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-1000",
            isVisible ? "effect block" : "hidden",
          )}
        >
          <div className="rounded-t-lg bg-indigo-900 p-4 text-white">
            <h2 className="mr-6 font-bold">
              TopGiaoVien có thể hỗ trợ gì cho anh chị ạ?
            </h2>
          </div>
          <div className="space-y-4 p-4">
            <a
              href="https://facebook.com/topgiaovien  "
              target="_blank"
              className="flex items-center space-x-4 rounded-md bg-neutral-F5F5F5 p-2 ring-1 hover:bg-slate-200 focus:bg-slate-300"
            >
              <span dangerouslySetInnerHTML={{ __html: iconFa }}></span>
              <div>
                <p className="font-semibold">Nhắn tin qua Messenger</p>
                <p className="text-gray-500">m.me/topgiaovien</p>
              </div>
            </a>
            <a
              href="https://zalo.me/g/bfzbij560"
              target="_blank"
              className="flex items-center space-x-4 rounded-md bg-neutral-F5F5F5 p-2 ring-1 hover:bg-slate-200 focus:bg-slate-300"
            >
              <img
                loading="lazy"
                src="/zalo.png"
                alt="Zalo Icon"
                className="h-8 w-8"
                width={32}
                height={32}
              />
              <div>
                <p className="font-semibold">Nhắn tin qua Zalo</p>
                <p className="text-gray-500">zalo.me/topgiaovien</p>
              </div>
            </a>
            <a
              href="mailto:topgiaovien@gmail.com"
              target="_blank"
              className="flex items-center space-x-4 rounded-md bg-neutral-F5F5F5 p-2 ring-1 hover:bg-slate-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="28"
                viewBox="0 0 34 28"
                fill="none"
              >
                <path
                  d="M27 27.5833H7C2.97 27.5833 0.75 25.3633 0.75 21.3333V6.33334C0.75 2.30334 2.97 0.0833435 7 0.0833435H27C31.03 0.0833435 33.25 2.30334 33.25 6.33334V21.3333C33.25 25.3633 31.03 27.5833 27 27.5833ZM7 2.58334C4.37167 2.58334 3.25 3.70501 3.25 6.33334V21.3333C3.25 23.9617 4.37167 25.0833 7 25.0833H27C29.6283 25.0833 30.75 23.9617 30.75 21.3333V6.33334C30.75 3.70501 29.6283 2.58334 27 2.58334H7ZM18.7151 14.965L26.9015 9.01167C27.4599 8.60667 27.5833 7.82335 27.1766 7.26502C26.7716 6.70835 25.9918 6.58167 25.4302 6.99001L17.2433 12.9433C17.0967 13.05 16.9017 13.05 16.755 12.9433L8.5682 6.99001C8.00486 6.58167 7.22678 6.71002 6.82178 7.26502C6.41511 7.82335 6.53851 8.605 7.09684 9.01167L15.2833 14.9667C15.7966 15.34 16.3984 15.525 16.9984 15.525C17.5984 15.525 18.2034 15.3383 18.7151 14.965Z"
                  fill="#2B346F"
                />
              </svg>
              <div>
                <p className="font-semibold">Liên hệ qua Email</p>
                <p className="text-gray-500">topgiaovien@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:0909984822"
              target="_blank"
              className="flex items-center space-x-4 rounded-md bg-neutral-F5F5F5 p-2 ring-1 hover:bg-slate-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M27.5867 36.2533C26.8217 36.2533 26.0518 36.15 25.2918 35.9417C15.0168 33.1217 6.88174 24.9917 4.06008 14.7234C3.41841 12.3884 3.76999 9.955 5.05332 7.875C6.34166 5.785 8.46009 4.31 10.8651 3.83C12.4651 3.51 14.0467 4.22335 14.8584 5.59168L17.4634 9.99165C18.7284 12.1283 18.0998 14.88 16.0315 16.2567L14.1467 17.51C15.9084 21.1267 18.8715 24.0984 22.4732 25.8584L23.7435 23.9633C25.1285 21.8983 27.8801 21.28 30.0151 22.5517L34.4202 25.1783C35.7835 25.9917 36.4884 27.5833 36.1784 29.1367C35.6984 31.5417 34.2234 33.66 32.135 34.9483C30.7317 35.8116 29.17 36.2533 27.5867 36.2533ZM11.6301 6.24999C11.5484 6.24999 11.4651 6.25835 11.3851 6.27502C9.62844 6.62669 8.10678 7.68498 7.18345 9.18665C6.26845 10.67 6.01674 12.4017 6.47341 14.06C9.06174 23.4817 16.5267 30.9433 25.9534 33.53C27.6134 33.985 29.3399 33.7317 30.8216 32.8183C32.3216 31.8933 33.3818 30.37 33.7268 28.6433C33.8302 28.125 33.5951 27.5933 33.1384 27.3217L28.735 24.695C27.7433 24.105 26.4633 24.3933 25.8199 25.3517L23.9616 28.1267C23.6283 28.6233 22.9852 28.8133 22.4418 28.5833C17.5035 26.5183 13.4851 22.4917 11.4185 17.535C11.1885 16.9817 11.3816 16.345 11.8799 16.0133L14.6485 14.1716C15.6085 13.5333 15.9 12.255 15.3117 11.2633L12.7067 6.86497C12.4784 6.47831 12.0651 6.24999 11.6301 6.24999Z"
                  fill="#2B346F"
                />
              </svg>
              <div>
                <p className="font-semibold">Gọi điện thoại trực tiếp</p>
                <p className="text-gray-500">0909.984.822</p>
              </div>
            </a>
          </div>
          <button
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-900 text-white hover:bg-indigo-700"
            onClick={toggleVisibility}
          >
            &times;
          </button>
        </div>
        <button
          className="shadow-icon fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-900 text-white hover:bg-indigo-700"
          onClick={toggleVisibility}
        >
          {!isVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="transition-transform duration-500"
              fill="none"
            >
              <path
                d="M3 21.75C2.903 21.75 2.80589 21.731 2.71289 21.693C2.43289 21.577 2.25 21.303 2.25 21V6C2.25 3.582 3.582 2.25 6 2.25H18C20.418 2.25 21.75 3.582 21.75 6V15C21.75 17.418 20.418 18.75 18 18.75H6.31104L3.53101 21.53C3.38701 21.674 3.195 21.75 3 21.75ZM6 3.75C4.423 3.75 3.75 4.423 3.75 6V19.189L5.46997 17.469C5.61097 17.328 5.801 17.249 6 17.249H18C19.577 17.249 20.25 16.576 20.25 14.999V5.99902C20.25 4.42202 19.577 3.74902 18 3.74902H6V3.75Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              className="transition-transform duration-500"
              fill="none"
            >
              <path
                d="M13.53 12.47C13.823 12.763 13.823 13.238 13.53 13.531C13.384 13.677 13.192 13.751 13 13.751C12.808 13.751 12.616 13.678 12.47 13.531L6.99999 8.061L1.52999 13.531C1.38399 13.677 1.19199 13.751 0.999993 13.751C0.807993 13.751 0.615994 13.678 0.469994 13.531C0.176994 13.238 0.176994 12.763 0.469994 12.47L5.94 7.00002L0.469994 1.53005C0.176994 1.23705 0.176994 0.762018 0.469994 0.469018C0.762994 0.176018 1.238 0.176018 1.531 0.469018L7.001 5.93905L12.471 0.469018C12.764 0.176018 13.239 0.176018 13.532 0.469018C13.825 0.762018 13.825 1.23705 13.532 1.53005L8.06199 7.00002L13.53 12.47Z"
                fill="white"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}

export default ChatSupport;

const iconFa = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9999 2.66666C9.98528 2.66666 2.22217 10.0027 2.22217 19.9111C2.22217 25.0938 4.34617 29.5724 7.80528 32.6658C8.0955 32.9258 8.27106 33.2898 8.28306 33.6796L8.37995 36.8418C8.41106 37.8507 9.45284 38.5067 10.3759 38.0996L13.9044 36.5418C14.2035 36.4098 14.5386 36.3853 14.8537 36.472C16.4751 36.9178 18.2008 37.1556 19.9999 37.1556C30.0146 37.1556 37.7777 29.8196 37.7777 19.9111C37.7777 10.0027 30.0146 2.66666 19.9999 2.66666Z" fill="url(#paint0_radial_169_2157)"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3243 24.9542L14.5465 16.6689C15.3772 15.3507 17.1559 15.0227 18.4025 15.9573L22.5559 19.0724C22.9367 19.3582 23.4612 19.3569 23.8407 19.0689L29.4501 14.8116C30.199 14.2436 31.1763 15.1396 30.675 15.9347L25.4527 24.22C24.6221 25.5378 22.843 25.8662 21.5967 24.9316L17.443 21.8164C17.0621 21.5307 16.5376 21.532 16.1581 21.82L10.5487 26.0773C9.79985 26.6453 8.82252 25.7493 9.32385 24.9542H9.3243Z" fill="white"/>
  <defs>
    <radialGradient id="paint0_radial_169_2157" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.1555 37.9533) scale(38.7556)">
      <stop stop-color="#0099FF"/>
      <stop offset="0.61" stop-color="#A033FF"/>
      <stop offset="0.93" stop-color="#FF5280"/>
      <stop offset="1" stop-color="#FF7061"/>
    </radialGradient>
  </defs>
</svg>`;

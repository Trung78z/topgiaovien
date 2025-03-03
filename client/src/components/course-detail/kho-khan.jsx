export default function KhoKhan({ props }) {
  return (
    <>
      <div className="container mx-auto space-y-6 px-2">
        <h2 className="text-center text-[28px] font-semibold text-[#333333]">
          Bạn đang gặp khó khăn gì khi học {props?.courseCategory?.content}
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          <div className="col-span-1 space-y-3 rounded-lg border bg-background p-2 shadow-2xl sm:p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M39.2539 17.5039C38.6459 19.4139 37.0861 20.964 35.1721 21.562C32.0761 22.53 29.1319 21.202 27.6599 18.864C27.5439 18.68 27.552 18.4481 27.658 18.2581C28.528 16.7061 29.022 14.914 29.022 13C29.022 12.336 28.9639 11.688 28.8479 11.054C28.8099 10.846 28.8739 10.6299 29.0359 10.4919C30.1459 9.54994 31.5821 9 33.1221 9C37.3541 9 40.6539 13.1019 39.2539 17.5039ZM36.22 24.5601H32.26C31.92 24.5601 31.6599 24.8199 31.6599 25.1599C31.6599 25.3199 31.7201 25.4801 31.8401 25.5801C31.8601 25.6001 31.8799 25.6199 31.8999 25.6399C34.6999 28.3399 36 32.2 36 36.04C36 36.78 35.9601 37.4999 35.8401 38.1599C35.8201 38.2479 35.814 38.3221 35.814 38.4021C35.814 38.7421 36.0799 39 36.3999 39H39.3201C42.9801 39 45 37.0001 45 33.3601C45 29.3001 42.7 24.5601 36.22 24.5601ZM18.02 5C13.6 5 10.02 8.58 10.02 13C10.02 17.42 13.6 21 18.02 21C22.42 21 26.02 17.42 26.02 13C26.02 8.58 22.42 5 18.02 5ZM22 25H14C5.88 25 3 30.94 3 36.04C3 40.6 5.42 43 10 43H26C30.58 43 33 40.6 33 36.04C33 30.94 30.12 25 22 25Z"
                fill="#2B346F"
              />
            </svg>
            <h2 className="text-[20px] font-semibold">
              {props?.differentTitle1}
            </h2>
            <p>
              {props?.differentContent1
                ?.trim()
                .split("\n")
                .map((line, index) => (
                  <li key={index} className="mb-1 list-none">
                    {line}
                  </li>
                ))}
              {/* Bạn từng thấy nhiều lớp học IELTS với số lượng từ 15 – 30 học viên
              và giáo viên không đủ thời gian để quan tâm, tương tác đến từng
              bạn. */}
            </p>
          </div>
          <div className="col-span-1 space-y-3 rounded-lg border bg-background p-2 shadow-2xl sm:p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.3599 30.8C23.1199 28.52 23.0998 24.8401 25.3398 22.5601C25.3798 21.1001 25.8999 19.7399 26.8599 18.6799C27.9599 17.4399 29.5402 16.7199 31.2202 16.6799C32.3202 15.5999 33.7798 15 35.3398 15C36.8798 15 38.3399 15.5999 39.4399 16.6799C39.6179 16.8579 40 16.8159 40 16.4619V12C40 8 38 6 34 6H10C6 6 4 8 4 12V28C4 32 6 34 10 34H25.3442C25.7682 34 26.074 33.564 25.894 33.178C25.556 32.452 25.3599 31.646 25.3599 30.8ZM12 14.5H24C24.828 14.5 25.5 15.172 25.5 16C25.5 16.828 24.828 17.5 24 17.5H12C11.172 17.5 10.5 16.828 10.5 16C10.5 15.172 11.172 14.5 12 14.5ZM18 25.5H12C11.172 25.5 10.5 24.828 10.5 24C10.5 23.172 11.172 22.5 12 22.5H18C18.828 22.5 19.5 23.172 19.5 24C19.5 24.828 18.828 25.5 18 25.5ZM43.1519 24.624C42.4139 23.986 42.2362 23.5481 42.3042 22.5801C42.3182 20.7121 40.6019 19.4719 38.8179 19.6919C38.2179 19.7259 37.7481 19.25 37.3721 18.844C36.2441 17.716 34.4161 17.716 33.2881 18.844C32.9121 19.256 32.4418 19.7219 31.8418 19.6919C29.7178 19.4499 28.1119 21.05 28.3579 23.176C28.3919 23.776 27.9158 24.2461 27.5098 24.6221C26.3818 25.7501 26.3818 27.5781 27.5098 28.7061C28.2478 29.3441 28.4259 29.782 28.3579 30.75C28.3579 32.278 29.5502 33.5159 31.0542 33.6179L31.0518 33.624L28.666 41.998L32.3599 40.5181C34.2659 39.7581 36.4002 39.7581 38.3062 40.5181L42 42L39.6118 33.6201C41.1138 33.5181 42.3062 32.28 42.3062 30.752C42.2802 30.196 42.284 29.5341 42.728 29.1321C44.144 28.0281 44.4879 25.938 43.1519 24.624ZM35.334 30C33.492 30 32 28.508 32 26.666C32 24.826 33.492 23.332 35.334 23.332C37.174 23.332 38.668 24.824 38.668 26.666C38.666 28.508 37.174 30 35.334 30Z"
                fill="#2B346F"
              />
            </svg>
            <h2 className="text-[20px] font-semibold">
              {props?.differentTitle2}
              {/* Cấp gấp bằng IELTS trong thời gian ngắn */}
            </h2>
            <p>
              {props?.differentContent2
                ?.trim()
                .split("\n")
                .map((line, index) => (
                  <li key={index} className="mb-1 list-none">
                    {line}
                  </li>
                ))}
              {/* Tự học IELTS thường khiến bạn dễ mất định hướng do không có phương
              pháp học tập hiệu quả hay một người thầy chuyên môn để trao đổi,
              sửa lỗi và hướng dẫn cho bạn. */}
            </p>
          </div>
          <div className="col-span-1 space-y-3 rounded-lg border bg-background p-2 shadow-2xl sm:p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M37 4.5H14C9.164 4.5 6.5 7.164 6.5 12V36C6.5 40.486 9.514 43.5 14 43.5H37C39.48 43.5 41.5 41.482 41.5 39V27V9C41.5 6.518 39.48 4.5 37 4.5ZM18 12.5H30C30.828 12.5 31.5 13.172 31.5 14C31.5 14.828 30.828 15.5 30 15.5H18C17.172 15.5 16.5 14.828 16.5 14C16.5 13.172 17.172 12.5 18 12.5ZM18 18.5H26C26.828 18.5 27.5 19.172 27.5 20C27.5 20.828 26.828 21.5 26 21.5H18C17.172 21.5 16.5 20.828 16.5 20C16.5 19.172 17.172 18.5 18 18.5ZM38.5 39C38.5 39.828 37.826 40.5 37 40.5H14C9.94 40.5 9.5 37.352 9.5 36C9.5 34.648 9.94 31.5 14 31.5H37C37.29 31.5 37.5702 31.4661 37.8442 31.4141C37.9322 31.3981 38.0161 31.3679 38.1021 31.3459C38.2341 31.3119 38.372 31.2879 38.5 31.2419V39Z"
                fill="#2B346F"
              />
            </svg>
            <h2 className="text-[20px] font-semibold">
              {/* Chương trình học không phù hợp với trình độ của bản thân      */}
              {props?.differentTitle3}
            </h2>
            <p>
              {props?.differentContent3
                ?.trim()
                .split("\n")
                .map((line, index) => (
                  <li key={index} className="mb-1 list-none">
                    {line}
                  </li>
                ))}

              {/* Học nhóm không hiệu quả, bạn cần một lộ trình học được thiết kế
              chuyên biệt với phương pháp học IELTS dành riêng cho nhu cầu và
              trình độ cá nhân của mình. */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import { API_URL } from "@/services/apiService";
import { formatContent } from "@/lib/utils";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function CardReview({ data }) {
  return (
    <div className="card-hover relative col-span-1 max-w-[390px] gap-2 space-y-2 overflow-hidden rounded-lg border-2 bg-background pt-2 shadow-xl transition-shadow duration-300 ease-in-out hover:shadow-2xl">
      <div className="flex items-center gap-x-2 px-3">
        <div className="icon relative flex max-h-12 min-h-12 min-w-12 max-w-12 items-center justify-center rounded-full bg-primary-300">
          <img
            loading="lazy"
            width={44}
            height={44}
            src={
              data?.icon !== null
                ? `${API_URL}/api/file/user/${data?.icon}`
                : "/avatar.svg"
            }
            alt="avatar feedback"
            className="max-h-11 min-h-11 min-w-11 max-w-11 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="space-y-1">
          <h4 className="text-[20px] font-medium">
            {data?.fullName || "Nguyễn Minh Hiếu"}
          </h4>
          {/* <p>{new Date(data?.updatedAt).toLocaleDateString("vi-VN")}</p> */}
        </div>
        <Link
          to={data?.link}
          className="absolute right-4 top-4"
          target="_blank"
        >
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M24 12C24 17.9897 19.6116 22.9542 13.875 23.8542V15.4688H16.6711L17.2031 12H13.875V9.74906C13.875 8.79984 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9703 4.6875 14.6573 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C4.38844 22.9542 0 17.9897 0 12C0 5.37281 5.37281 0 12 0C18.6272 0 24 5.37281 24 12Z"
                fill="#1877F2"
              />
              <path
                d="M16.6711 15.4688L17.2031 12H13.875V9.74902C13.875 8.80003 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.736 23.95 11.3621 24 12 24C12.6379 24 13.264 23.95 13.875 23.8542V15.4688H16.6711Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>
      </div>
      <p className="px-3 pb-4 pt-4 text-justify">
        {formatContent(data.content, 200)}
      </p>
      <Link to={data?.link} target="_blank" className="">
        <div className="bottom-0 w-full">
          <img
            loading="lazy"
            src={
              `${API_URL}/api/file/share/${data?.image}` ||
              "/assets/feedback1.png"
            }
            width={360}
            height={360}
            alt="Hình ảnh feedback"
            className="max-h-52 min-h-52 w-full rounded-sm object-cover"
          />
        </div>
      </Link>
    </div>
  );
}

CardReview.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string,
    updatedAt: PropTypes.string,
    icon: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

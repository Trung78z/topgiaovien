import { formatContent } from "@/lib/utils";
import { API_URL } from "@/services/apiService";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function CardZingNew({ props }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
      <div className="relative col-span-1 sm:col-span-4">
        <img
          src={`${API_URL}/api/file/review/${props.image}`}
          width={1200}
          height={630}
          className="aspect-auto h-auto w-full rounded-md object-cover"
          alt={props.title}
        />
      </div>
      <div className="col-span-1 py-2 sm:col-span-8">
        <h3 className="text-2xl font-semibold text-primary-500">
          {props.title}
        </h3>
        <p>{formatContent(props.description, 400)}</p>
        <Link
          to={props.url}
          target="_blank"
          className="flex items-center gap-2 text-blue-500 hover:text-blue-700"
        >
          <FaArrowRightLong /> <span>Xem chi tiết</span>
        </Link>
      </div>
    </div>
  );
}

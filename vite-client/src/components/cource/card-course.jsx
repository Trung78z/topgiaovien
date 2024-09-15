import { convertToSlug, formatContent } from "@/lib/utils";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "@/services/apiService";

export default function CardCourse({ props }) {
  const navigate = useNavigate();
  const handleClickSearch = (data) => {
    navigate(`/khoa-hoc/${convertToSlug(data)}`);
  };
  return (
    <div className="min-h-[50vh] space-y-3 rounded-md border-2 p-2 hover:shadow-2xl">
      <Link to={`/khoa-hoc/${props?.slug}`}>
        {" "}
        <img
          src={`${API_URL}/api/file/course/${props.image}`}
          alt="Khóa học tại top giáo viên"
          className="h-[280px] w-full rounded-md object-cover"
        />
      </Link>{" "}
      <Link to={`/khoa-hoc/${props?.slug}`}>
        {" "}
        <h2 className="font-semibold text-[20]">
          {formatContent(props?.title, 40)}
        </h2>{" "}
      </Link>
      <p className="min-h-14">{formatContent(props?.content, 80)}</p>
      <Button
        onClick={() => {
          handleClickSearch(props?.slug);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M10.264 8.86783L6.80125 11.7878C6.21925 12.2784 5.33331 11.8625 5.33331 11.0985V4.90119C5.33331 4.13719 6.21992 3.72124 6.80125 4.2119L10.264 7.13183C10.8006 7.58449 10.8006 8.41516 10.264 8.86783Z"
            fill="white"
          />
        </svg>
        Tìm hiểu thêm
      </Button>
    </div>
  );
}

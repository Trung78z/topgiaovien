import { formatContent } from "@/lib/utils";
import { Link } from "react-router-dom";
import { API_URL } from "@/services/apiService";

export default function CardNews({ props }) {
  return (
    <div className="card flex w-full flex-wrap gap-4 rounded-sm border md:flex-nowrap">
      <div className="card-hover relative w-full sm:min-w-[336px] sm:max-w-[336px]">
        <Link to={`/lich-hoc-tin-tuc/${props.slug}`}>
          <img
            src={
              `${API_URL}/api/file/post/${props?.image}` ||
              "/assets/post/post1.png"
            }
            alt="Hình ảnh chia sẽ về góc học tập"
            loading="eager"
            width={307}
            height={171}
            className="h-52 min-w-full rounded-sm object-fill"
          />
        </Link>
      </div>
      <div className="content space-y-1 py-4">
        <Link to={`/lich-hoc-tin-tuc/${props.slug}`}>
          <h2 className="text-lg font-medium">
            {formatContent(props?.title, 60) ||
              "Lộ trình học tiếng anh cho người mất gốc từ A - Z"}
          </h2>
        </Link>

        <p
          className="rich-text"
          dangerouslySetInnerHTML={{
            __html: formatContent(
              props?.content.replace(/<\/?[^>]+(>|$)/g, ""),
              250,
            ),
          }}
        ></p>
        <div className="flex items-center gap-3">
          <img
            loading="lazy"
            src={
              `${API_URL}/api/file/user/${props?.user?.image}` ||
              "/assets/khoanh-khac/khoanh-khac-1.png"
            }
            alt="icon người đăng bài viết"
            width={24}
            height={24}
            className="h-6 w-6 rounded-full object-cover"
          />
          <h3>{props?.user?.fullName || "Công Danh"}</h3>
          <div className="h-1 w-1 rounded-full bg-primary-500"></div>
          <p>
            {new Date(props?.createdAt).toLocaleDateString("vi-VN") ||
              "06.06.2024"}
          </p>
        </div>
      </div>
    </div>
  );
}

import PropTypes from "prop-types";
import { formatContent } from "@/lib/utils";
import { Link } from "react-router-dom";
import { API_URL } from "@/services/apiService";

export default function CardNews({ props }) {
  return (
    <div className="card flex w-full flex-wrap items-center gap-6 rounded-sm border md:flex-nowrap">
      <div className="relative w-full">
        <img
          src={
            `${API_URL}/api/file/post/${props?.image}` ||
            "/assets/post/post1.png"
          }
          alt="Hình ảnh chia sẽ về góc học tập"
          loading="eager"
          width={307}
          height={171}
          className="h-52 w-full min-w-full rounded-sm sm:min-w-72 sm:max-w-72"
        />
      </div>
      <div className="content space-y-3">
        <Link to={`/lich-hoc-tin-tuc/${props.slug}`}>
          <h2 className="font-medium">
            {props?.title ||
              "Lộ trình học tiếng anh cho người mất gốc từ A - Z"}
          </h2>
        </Link>
        <p
          className="rich-text"
          dangerouslySetInnerHTML={{
            __html: formatContent(props?.content, 200),
          }}
        ></p>
        <div className="flex items-center gap-3">
          <img
            src={props?.user?.image || "/assets/khoanh-khac/khoanh-khac-1.png"}
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

CardNews.propTypes = {
  props: PropTypes.shape({
    image: PropTypes.string, // Thêm thuộc tính 'image'
    slug: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    User: PropTypes.shape({
      image: PropTypes.string,
      fullName: PropTypes.string,
    }),
    createdAt: PropTypes.string,
  }).isRequired,
};

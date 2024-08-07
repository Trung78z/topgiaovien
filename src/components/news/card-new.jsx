import { convertToSlug } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function CardNews({ props }) {
  return (
    <div className="card flex w-full flex-wrap items-center gap-2 rounded-sm border md:flex-nowrap">
      <div>
        <img
          src={props?.img || "/assets/post/post1.png"}
          alt="Hình ảnh chia sẽ về góc học tập"
          loading="eager"
          width={307}
          height={171}
          className="h-40 w-full min-w-72 rounded-sm md:max-w-72"
        />
      </div>
      <div className="content space-y-3">
        <Link to={`/lich-hoc-tin-tuc/${convertToSlug(props.title)}`}>
          <h2 className="font-medium">
            {props?.title ||
              "Lộ trình học tiếng anh cho người mất gốc từ A - Z"}
          </h2>
        </Link>
        <p>
          {props?.content ||
            " Bạn là học sinh cấp 3? Bạn chìm trong mớ hỗn độn bài vở, deadline, thi cử? Áp lực học tập đè nặng khiến bạn stress, “burn out” dù chẳng gần lửa? Thấu hiểu điều này,"}
        </p>
        <div className="flex items-center gap-3">
          <img
            src={props?.imgUser || "/assets/khoanh-khac/khoanh-khac-1.png"}
            alt="icon người đăng bài viết"
            width={24}
            height={24}
            className="h-6 w-6 rounded-full object-cover"
          />
          <h3>{props?.fullName || "Công Danh"}</h3>
          <div className="h-1 w-1 rounded-full bg-primary-500"></div>
          <p>{props?.createdAt || "06.06.2024"}</p>
        </div>
      </div>
    </div>
  );
}

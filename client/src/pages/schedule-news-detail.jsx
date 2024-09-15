import NhanTuVanPage from "@/components/home/nhan-tu-van";
import useScrollToTop from "@/components/useScrollToTop";
import { formatContent } from "@/lib/utils";
import { API_URL } from "@/services/apiService";
import { getCourseCategory } from "@/services/courseService";
import { getPostDetail } from "@/services/postService";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

export default function ScheduleNewsDetail() {
  useScrollToTop();
  const [categoryCourse, setCategoryCourse] = useState([]);
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const res = await getPostDetail(id);
      const resCate = await getCourseCategory();
      setCategoryCourse(resCate.msg);
      setData(res.msg);
    };
    fetch();
  }, [id]);
  return (
    <>
      {data?.title && (
        <Helmet>
          <title>
            {`${data?.title} | Top Giáo Viên ${new Date().getFullYear()} - Đánh Giá
            & Danh Sách Tốt Nhất`}
          </title>
          <meta
            name="description"
            content={
              formatContent(
                data?.content.replace(/<\/?[^>]+(>|$)/g, ""),
                165,
              ) ||
              `Tìm kiếm giáo viên chất lượng hàng đầu tại Việt Nam. Khám phá danh sách giáo viên tốt nhất ${new Date().getFullYear()} tại TopGiaoVien.vn. Đánh giá chi tiết, thông tin liên hệ rõ ràng.`
            }
          />
        </Helmet>
      )}

      <div className="space-y-6 py-4 sm:py-10">
        <div className="container space-y-6 px-2">
          <h1 className="text-[30px] font-semibold">{data?.title}</h1>
          <div className="card-hover">
            {" "}
            <img
              loading="lazy"
              src={`${API_URL}/api/file/post/${data?.image}`}
              width={1920}
              height={1080}
              alt={data?.title}
              className="h-[600px] max-h-[600px] w-full rounded-sm border object-fill"
            />
          </div>
          <div
            className="rich-text"
            dangerouslySetInnerHTML={{
              __html: data?.content,
            }}
          ></div>
        </div>
        <NhanTuVanPage
          categoryCourse={categoryCourse}
          setCategoryCourse={setCategoryCourse}
        />
      </div>
    </>
  );
}

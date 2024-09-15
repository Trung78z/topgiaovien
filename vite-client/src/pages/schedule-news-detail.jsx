import NhanTuVanPage from "@/components/home/nhan-tu-van";
import { API_URL } from "@/services/apiService";
import { getCourseCategory } from "@/services/courseService";
import { getPostDetail } from "@/services/postService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ScheduleNewsDetail() {
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
      <div className="space-y-6 py-4 sm:py-10">
        <div className="container space-y-3 px-2">
          <h1 className="text-[30px] font-semibold">
            Lộ trình học tiếng anh cho người mất gốc từ A - Z
          </h1>
          <img
            src={
              `${API_URL}/api/file/post/${data?.image}` ||
              "/assets/post/english-books-resting-table-working-space 1.png"
            }
            alt={data?.title}
            className="max-h-[600px] w-full rounded-sm object-cover"
          />
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

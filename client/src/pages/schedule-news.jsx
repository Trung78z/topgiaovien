import NhanTuVanPage from "@/components/home/nhan-tu-van";
import CardNews from "@/components/news/card-new";
import useScrollToTop from "@/components/useScrollToTop";
import { cn } from "@/lib/utils";
import { getCategories } from "@/services/categoriesService ";
import { getCourseCategory } from "@/services/courseService";
import { getAllPost } from "@/services/postService";
import { Button } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default function ScheduleNews() {
  useScrollToTop();
  const [categoryCourse, setCategoryCourse] = useState([]);
  const [show, setShow] = useState(6);
  const [data, setData] = useState([]);
  const [dataOld, setDataOld] = useState([]);
  const [categoryActive, setCategoryActive] = useState({});
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await getAllPost();
      const cate = await getCategories();
      const resCate = await getCourseCategory();
      setCategoryCourse(resCate.msg);
      setCategories(cate.msg);
      setData(res.msg);
      setDataOld(res.msg);
    };
    fetch();
  }, []);

  const seeMore = () => {
    setShow((prev) => prev + 6);
  };
  const seemsLess = () => {
    setShow(6);
  };

  const hanleChangeActiveCategory = (data) => {
    const update = categories.find((item) => item.id === data);
    const updatePost = dataOld.filter((item) => item.categoryId === data);
    setData(updatePost);
    setCategoryActive(update);
  };

  return (
    <>
      <Helmet>
        <title>
          {`Tin tức | Top Giáo Viên ${new Date().getFullYear()} - Đánh Giá & Danh
          Sách Tốt Nhất`}
        </title>
        <meta
          name="description"
          content="Cập nhật tin tức mới nhất về giáo dục và giáo viên hàng đầu tại Việt Nam. Đọc các bài viết, tin tức và phân tích chuyên sâu tại TopGiaoVien.vn."
        />
      </Helmet>

      <div className="space-y-6">
        <div className="flex min-h-40 items-center justify-center bg-primary-50">
          <div className="space-y-2">
            <h1 className="text-center text-4xl font-semibold text-primary-500">
              Tin tức - lịch học
              <span className="hidden">Cập nhật các thông tin sự kiện</span>
            </h1>
            <h2 className="max-w-screen-sm text-center text-sm text-neutral-555F6D">
              Cập nhật các thông tin sự kiện, lịch mở lớp, tài liệu mới nhất của
              Top giáo viênhoặc thông báo chính thức do Top giáo viêntổ chức,
              đồng hành và tài trợ.
            </h2>
          </div>
        </div>
        <div className="container px-2">
          <div className="grid grid-cols-1 gap-x-4 py-10 md:grid-cols-4">
            <ul className="hidden h-max space-y-3 rounded-md border p-4 md:col-span-1 md:block">
              {categories.map((item) => (
                <Button
                  className={cn(
                    "flex w-full items-center gap-x-2 p-2",
                    categoryActive.id === item.id &&
                      "w-full rounded-lg bg-primary-500 text-background",
                  )}
                  key={item.id}
                  onClick={() => {
                    hanleChangeActiveCategory(item.id);
                  }}
                >
                  {item.icon ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          categoryActive.id === item.id
                            ? item.icon.replace(
                                /fill='[^']*'/g,
                                'fill="#FFFFFF"',
                              )
                            : item.icon.replace(
                                /fill='[^']*"/g,
                                'fill="#333333"',
                              ),
                      }}
                    ></div>
                  ) : (
                    <div
                      className="text-background"
                      dangerouslySetInnerHTML={{
                        __html: `<svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                >
                  <path
                    d="M2 6C2 5.448 2.448 5 3 5H21C21.552 5 22 5.448 22 6C22 6.552 21.552 7 21 7H3C2.448 7 2 6.552 2 6ZM21 11H3C2.448 11 2 11.448 2 12C2 12.552 2.448 13 3 13H21C21.552 13 22 12.552 22 12C22 11.448 21.552 11 21 11ZM21 17H3C2.448 17 2 17.448 2 18C2 18.552 2.448 19 3 19H21C21.552 19 22 18.552 22 18C22 17.448 21.552 17 21 17Z"
                    fill=${
                      categoryActive.id === item.id ? "#FFFFFF" : "#333333"
                    }
                  />
                </svg>`,
                      }}
                    ></div>
                  )}
                  {item.content}
                </Button>
              ))}
            </ul>
            <div className="col-span-1 space-y-3 md:col-span-3">
              {data
                .sort(() => 0.5 - Math.random())
                .slice(0, show)
                .map((_, index) => (
                  <CardNews key={`${_.title}+${index}`} props={_} />
                ))}
              {data.length > 0 ? (
                data.length > show ? (
                  <Button
                    className="flex w-full items-center justify-center gap-x-2 px-2"
                    onClick={seeMore}
                  >
                    Xem thêm
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0003 17.0003C11.7443 17.0003 11.4883 16.9023 11.2933 16.7073L4.29325 9.70731C3.90225 9.31631 3.90225 8.68425 4.29325 8.29325C4.68425 7.90225 5.31631 7.90225 5.70731 8.29325L12.0003 14.5862L18.2933 8.29325C18.6842 7.90225 19.3163 7.90225 19.7073 8.29325C20.0983 8.68425 20.0983 9.31631 19.7073 9.70731L12.7073 16.7073C12.5123 16.9023 12.2563 17.0003 12.0003 17.0003Z"
                        fill="#2B346F"
                      />
                    </svg>
                  </Button>
                ) : (
                  data.length > 3 && (
                    <>
                      <Button
                        className="flex w-full items-center justify-center gap-x-2 px-2"
                        onClick={seemsLess}
                      >
                        Rút ngắn
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="rotate-180"
                          fill="none"
                        >
                          <path
                            d="M12.0003 17.0003C11.7443 17.0003 11.4883 16.9023 11.2933 16.7073L4.29325 9.70731C3.90225 9.31631 3.90225 8.68425 4.29325 8.29325C4.68425 7.90225 5.31631 7.90225 5.70731 8.29325L12.0003 14.5862L18.2933 8.29325C18.6842 7.90225 19.3163 7.90225 19.7073 8.29325C20.0983 8.68425 20.0983 9.31631 19.7073 9.70731L12.7073 16.7073C12.5123 16.9023 12.2563 17.0003 12.0003 17.0003Z"
                            fill="#2B346F"
                          />
                        </svg>
                      </Button>
                    </>
                  )
                )
              ) : (
                <div className="space-y-6">
                  <h2 className="text-center text-red-500">
                    Xin lỗi hiện tại chưa có bài viết nào thuộc bộ lọc này!
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
        <NhanTuVanPage
          categoryCourse={categoryCourse}
          setCategoryCourse={setCategoryCourse}
        />
      </div>
    </>
  );
}

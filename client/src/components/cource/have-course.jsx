import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import CardCourse from "./card-course";
import { getCourseCategory } from "@/services/courseService";

export default function CoursesTopGiaoVien({
  props,
  topic,
  active,
  handleSeletion,
  category,
  setCategory,
}) {
  const [data, setData] = useState(props);

  useEffect(() => {
    const fetch = async () => {
      try {
        const allSubCategories = category
          .map((category) => category.courseSubCategory)
          .reduce((acc, subArray) => acc.concat(subArray), []);

        setCategory(allSubCategories);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    if (topic) {
      return setData(props);
    }
    const update = props.filter((item) => item.courseSubCategoryId === active);
    setData(update);
  }, [active, props]);
  return (
    <>
      <div className="container mx-auto space-y-6 px-0">
        <div className="space-y-1">
          <h2 className="text-center text-[28px] font-semibold text-[#333333]">
            Xếp hạng và đánh giá
          </h2>
          <p className="w-full text-center">
            Các khóa học IELTS tại TopGiaoVien được nghiên cứu, thiết kế riêng
            biệt bởi đội ngũ giáo viên nhiều năm kinh nghiệm, được sắp xếp phù
            hợp với từng đối tượng, nhằm đảm bảo và cam kết chất lượng đầu ra.
          </p>
        </div>
        {!topic && (
          <div className="">
            <div className="content-scroll-z mx-auto ml-2 flex max-w-[98%] items-center justify-center gap-x-2 overflow-x-auto pb-4 pt-2 sm:flex-nowrap sm:gap-4">
              {category.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => {
                    handleSeletion(item.id);
                  }}
                  className={cn(
                    ``,
                    active === item.id
                      ? ""
                      : "border-2 bg-white text-primary-500 hover:bg-slate-50",
                  )}
                >
                  {item.content}
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 md:grid-cols-3">
          {data.length > 0 ? (
            data
              .sort(() => 0.5 - Math.random())
              .slice(0, 3)
              .map((_, index) => <CardCourse key={index} props={_} />)
          ) : (
            <div className="col-span-full flex flex-1 justify-center">
              <h2 className="text-2xl text-red-500">
                Không có khóa học nào dựa theo tiêu chi bạn chọn!
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

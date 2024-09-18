import { cn } from "@/lib/utils";
import { API_URL } from "@/services/apiService";
import { Button } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { z } from "zod";
import TeacherProfile from "./TeacherActive";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { priceCourse, typeCourse, voteLevel } from "@/lib/data";
const schema = z.object({
  type: z
    .string({ required_error: "Chọn hình thức bạn muốn học" })
    .min(1, "Chọn hình thức bạn muốn học"),
  topic: z
    .string({ required_error: "Chọn khóa học bạn quan tâm" })
    .min(1, "Chọn khóa học bạn quan tâm"),
});

export default function TeacherEnglish({ categoryCourseParent, dataParent }) {
  const [categoryCourse, setCategoryCourse] = useState([]);
  const [dataOld, setDataOld] = useState([]);
  const [dataOld2, setDataOld2] = useState([]);
  const [data, setData] = useState([]);
  const [dataActive, setDataActive] = useState();
  const targetRef = useRef(null);

  const {
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
  });
  useEffect(() => {
    setCategoryCourse(categoryCourseParent);

    setData(dataParent);

    setDataOld(dataParent);
    if (Array.isArray(dataParent) && dataParent.length > 0) {
      setDataActive(dataParent[0]);
    } else {
      console.error("Data is not an array or is empty.");
    }
  }, [dataParent, categoryCourseParent]);
  const scrollToTarget = () => {
    if (targetRef.current) {
      const navbarHeight = 20;
      const topOffset =
        targetRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight -
        window.innerHeight * 0.1;
      setTimeout(() => {
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  const [itemsToShow, setItemsToShow] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelection = (value) => {
    scrollToTarget();
    const update = data.find((item) => item.id === value);
    setDataActive(update);
  };

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(4);
        setCurrentPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(6);
        setCurrentPage(1);
      } else {
        setItemsToShow(8);
        setCurrentPage(1);
      }
    };
    window.addEventListener("resize", updateItemsToShow);
    updateItemsToShow();
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);
  const totalPages = Math.ceil(data?.length / itemsToShow);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleChange = (data) => {
    const catefilter = categoryCourse.find((item) => item.content === data);

    const update = dataOld.filter(
      (item) => item.courseSubCategoryId === catefilter.id,
    );
    setDataOld2(update);
    setDataActive(update[0]);
    setData(update);
    setValue("topic", data);
  };
  const handleChangeType = (value) => {
    const update =
      data.length > 0
        ? data.filter((item) => item.typeLearn === value)
        : dataOld2.filter((item) => item.typeLearn === value);

    setDataActive(update[0]);
    setData(update);
    setValue("type", value);
  };
  const handleChangePrice = (value) => {
    // Chuyển đổi giá trị "voucher" từ chuỗi thành số nguyên
    const updatedData = data.map((item) => ({
      ...item,
      voucher: parseInt(item.voucher, 10),
    }));

    updatedData.sort((a, b) => {
      if (value === "asc") {
        return a.voucher - b.voucher;
      } else if (value === "dsc") {
        return b.voucher - a.voucher;
      }
      return 0;
    });
    setDataActive(updatedData[0]);
    setData(updatedData);
  };
  const handleChangeVote = (value) => {
    const sortedData = data.map((teacher) => {
      const totalLevel = teacher.comment.reduce(
        (sum, comment) => sum + parseInt(comment.level),
        0,
      );
      const averageLevel = totalLevel / teacher.comment.length;

      return { ...teacher, averageLevel };
    });

    sortedData.sort((a, b) => {
      if (value === "asc") {
        if (a.averageLevel === b.averageLevel) {
          return a.comment.length - b.comment.length;
        }
        return a.averageLevel - b.averageLevel;
      } else if (value === "dsc") {
        if (a.averageLevel === b.averageLevel) {
          return b.comment.length - a.comment.length;
        }
        return b.averageLevel - a.averageLevel;
      }
      return 0;
    });
    setDataActive(sortedData[0]);
    setData(sortedData);
  };
  const startIndex = (currentPage - 1) * itemsToShow;
  return (
    <div className="container mx-auto space-y-3 px-0">
      <div className="px-2 pt-4">
        <h2 className="text-center text-[28px] font-semibold text-[#333333]">
          Giáo viên tiếng anh
        </h2>
      </div>
      <>
        <div className="px-0">
          <form className="flex flex-wrap justify-center gap-2 sm:flex-nowrap">
            <div className="min-w-[212px]">
              <Select onValueChange={handleChange}>
                <SelectTrigger className="z-10">
                  <SelectValue placeholder="Khóa học bạn quan tâm" />
                </SelectTrigger>
                <SelectContent className="z-10 min-w-[212px] bg-white">
                  {categoryCourse?.map((item, index) => (
                    <SelectItem
                      value={item.content}
                      key={`${item.id}+${index}`}
                    >
                      {item.content}
                    </SelectItem>
                  ))}
                </SelectContent>
                {errors.topic && (
                  <p className="text-red-500">{errors.topic.message}</p>
                )}
              </Select>
            </div>
            <div className="min-w-[180px]">
              <Select
                onValueChange={handleChangeType}
                disabled={
                  watch("topic") === "" || watch("topic") === undefined
                    ? true
                    : false
                }
              >
                <SelectTrigger className="z-10 min-w-[180px] bg-white sm:w-[200px]">
                  <SelectValue placeholder="Hình thức khóa học" />
                </SelectTrigger>
                <SelectContent className="z-10 bg-white">
                  {typeCourse.map((item, index) => (
                    <SelectItem
                      key={`${item.type}+${index}`}
                      value={item.value}
                    >
                      {item.type}
                    </SelectItem>
                  ))}
                </SelectContent>
                {errors.type && (
                  <p className="text-red-500">{errors.type.message}</p>
                )}
              </Select>
            </div>
            <div className="min-w-[137px]">
              <Select
                onValueChange={handleChangeVote}
                disabled={
                  watch("type") === "" || watch("type") === undefined
                    ? true
                    : false
                }
              >
                <SelectTrigger className="z-10 min-w-[137px] bg-white sm:w-[200px]">
                  <SelectValue placeholder="Đánh giá" />
                </SelectTrigger>
                <SelectContent className="z-10 bg-white">
                  {voteLevel.map((item, index) => (
                    <SelectItem
                      key={`${item.type}+${index}`}
                      value={item.value}
                    >
                      {item.type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="min-w-[137px]">
              <Select
                onValueChange={handleChangePrice}
                disabled={
                  watch("type") === "" || watch("type") === undefined
                    ? true
                    : false
                }
              >
                <SelectTrigger className="z-10 bg-white sm:w-[200px]">
                  <SelectValue placeholder="Trợ phí" />
                </SelectTrigger>
                <SelectContent className="z-10 min-w-[137px] bg-white">
                  {priceCourse.map((item, index) => (
                    <SelectItem
                      key={`${item.type}+${index}`}
                      value={item.value}
                    >
                      {item.type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </form>
        </div>
      </>

      {dataActive && data.length > 0 ? (
        <div
          className="flex flex-wrap gap-x-6 rounded-lg bg-white px-2 md:px-0 lg:flex-nowrap"
          ref={targetRef}
        >
          <TeacherProfile dataActive={dataActive} />
          <div className="mt-8 flex w-full flex-col lg:w-2/3">
            <div className="relative grid min-h-[460px] grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
              <button
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage <= 1 ? true : false}
                className="absolute -left-10 top-1/2 hidden -translate-y-1/2 sm:block"
              >
                <FaAngleLeft
                  className={cn(
                    currentPage <= 1 ? "text-gray-400" : "",
                    "h-10 w-10",
                  )}
                />
              </button>
              <button
                disabled={currentPage >= totalPages ? true : false}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="absolute right-0 top-1/2 hidden -translate-y-1/2 sm:-right-10 sm:block"
              >
                <FaAngleRight
                  className={cn(
                    currentPage >= totalPages ? "text-gray-400" : "",
                    "h-10 w-10",
                  )}
                />
              </button>
              {data.slice(startIndex, startIndex + itemsToShow).map((_) => (
                <Button
                  onMouseEnter={() => handleSelection(_?.id)}
                  key={_.id}
                  className={cn(
                    `card-hover relative max-h-[220px] min-h-[220px] rounded-md border-2 px-4 py-6 hover:shadow-xl`,
                    _.id === dataActive?.id
                      ? "border-neutral-555F6D"
                      : "border-neutral-CED4DA",
                  )}
                >
                  <div className="absolute right-2 top-2 flex items-center gap-0 text-sm text-primary-500">
                    <span className="text-xs text-red-500">
                      Trợ phí
                      <span className="font-semibold"> {_?.voucher}%</span>
                    </span>
                  </div>
                  <Link
                    to={`/giao-vien/giao-vien-${_?.id}+${_?.slug}`}
                    className="relative flex flex-col items-center"
                  >
                    <img
                      loading="lazy"
                      src={
                        `${API_URL}/api/file/teacher/${_?.photoUrl}` ||
                        "/assets/doi-ngu-giao-vien/tran-thanh-giang.png"
                      }
                      alt="Teacher"
                      height={144}
                      width={144}
                      className="h-28 w-28 rounded-full border-2 border-orange-500 object-cover p-1"
                    />
                    <p className="mt-2 text-center">{_?.name}</p>

                    {/* <Button className="rounded-md bg-primary-500 p-1 text-xs text-background hover:bg-primary-600">
                  Xem ngay
                </Button> */}
                  </Link>
                </Button>
              ))}
            </div>
            {/* <FaRegEye className="h-6 w-6 text-green-500 hover:text-green-400" /> */}

            <div className="flex justify-center pt-4 sm:pt-10">
              <nav className="inline-flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  disabled={currentPage <= 1 ? true : false}
                >
                  <FaAngleLeft
                    className={cn(currentPage <= 1 ? "text-gray-400" : "")}
                  />
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <div key={index}>
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className={`rounded-full px-3 py-1 ${
                        index + 1 === currentPage
                          ? "bg-primary-600 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {index + 1}
                    </button>
                  </div>
                ))}

                <button
                  disabled={currentPage >= totalPages ? true : false}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  <FaAngleRight
                    className={cn(
                      currentPage >= totalPages ? "text-gray-400" : "",
                    )}
                  />
                </button>
              </nav>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full pt-6 text-center text-red-500">
            Xin lỗi hiện tại hệ thống của chúng tôi chưa có giáo viên nào thuộc
            tiêu chí này!
          </div>
        </>
      )}
    </div>
  );
}

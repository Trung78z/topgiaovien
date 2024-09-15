import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { createPostRoute, deleteRouteCourse } from "@/services/courseService";
import Swal from "sweetalert2";

export default function LoTrinhCourse({ props, handleChange, setForm }) {
  const [active, setActive] = useState(1);
  const [dataActive, setDataActive] = useState({});
  useEffect(() => {
    if (props?.routeDetail) {
      if (props.routeDetail?.length > 0) {
        setDataActive(props.routeDetail[0]);
      }
    }
  }, [props?.routeDetail]);
  const handleChangeStep = (data) => {
    setActive(data);
    const update = props.routeDetail?.find((item, index) => index === data - 1);
    setDataActive(update);
  };

  const handleAddRoute = async () => {
    try {
      const res = await createPostRoute(props.id);
      setForm((prev) => ({
        ...prev,
        routeDetail: [...(prev.routeDetail || []), res.msg],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteRoute = async (id) => {
    const result = await Swal.fire({
      title: "Bạn có chắc chắn muốn xóa lộ này?",
      text: "Hành động này không thể hoàn tác!",
      icon: "warning",
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    });
    if (result.isConfirmed) {
      try {
        const res = await deleteRouteCourse(id);
        setForm((prev) => ({
          ...prev,
          routeDetail: prev.routeDetail?.filter((item) => item.id !== id),
        }));
        const update = dataActive.id === id ? {} : dataActive;
        setDataActive(update);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="relative bg-[#EAEBF1] py-10">
      <div className="container space-y-6 rounded-lg bg-background p-2 px-2 sm:p-10">
        <h2 className="w-full text-center text-[28px] font-semibold text-[#333333]">
          Chi tiết lộ trình học
        </h2>
        <div>
          <div className="flex flex-col items-center md:p-4">
            <div className="w-full max-w-4xl">
              <div
                className={cn(
                  `relative grid w-full grid-cols-2 md:grid-cols-5`,
                  props?.routeDetail?.length === 4 && "md:grid-cols-4",
                  props?.routeDetail?.length === 3 && "md:grid-cols-3",
                  props?.routeDetail?.length === 2 && "md:grid-cols-2",
                )}
              >
                <Button
                  size="small "
                  disabled={props?.routeDetail?.length === 5 ? true : false}
                  variant="outline"
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 border-none text-green-500 hover:text-green-600"
                  onClick={handleAddRoute}
                >
                  <IoMdAddCircle className="h-6 w-6" />
                </Button>
                <div className="absolute bottom-0 left-1/2 h-full w-2 bg-gray-300 md:left-0 md:h-1 md:w-full md:-translate-y-2"></div>
                {props?.routeDetail?.map((item, index) => (
                  <div
                    className="relative z-10 flex h-32 w-full flex-row items-center justify-between odd:-translate-x-2 odd:translate-y-1/2 odd:flex-row-reverse even:translate-x-4 sm:flex-col sm:odd:translate-x-0 sm:odd:translate-y-0 sm:odd:flex-col sm:even:translate-x-0"
                    key={item?.id}
                  >
                    <div className="absolute top-0 -translate-y-6">
                      <Button
                        size="small "
                        variant="outline"
                        className="border-none text-red-500 hover:text-red-600"
                        onClick={() => handleDeleteRoute(item.id)}
                      >
                        <MdDelete className="h-6 w-6" />
                      </Button>
                    </div>

                    <button
                      onClick={() => handleChangeStep(index + 1)}
                      className={cn(
                        "flex flex-col items-center justify-center rounded-md px-2 py-2",

                        index + 1 === active
                          ? "bg-primary-500 text-white"
                          : "text-neutral-CED4DA",
                      )}
                    >
                      <div className="mt-2 text-[16px]">{`Chặng ${index + 1}`}</div>

                      <div>
                        <input
                          type="text"
                          id="routeDetailContent"
                          value={item?.content}
                          name={item?.id}
                          className={cn(
                            "editText w-full text-[20px] font-semibold",
                            "text-center text-black",
                          )}
                          onChange={handleChange}
                        />
                      </div>
                    </button>
                    <div
                      className={cn(
                        "bottom-0 h-6 w-6 rounded-full",
                        index + 1 === active ? "bg-blue-600" : "bg-gray-300",
                      )}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="h-10 sm:hidden"></div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-10">
          <div className="col-span-1 min-h-full sm:col-span-2">
            <textarea
              id="subjectOfStudy"
              name={dataActive?.id}
              value={dataActive?.subjectOfStudy || ""}
              className="editText content-scroll min-h-24 w-full p-2"
              onChange={handleChange}
            ></textarea>
            <ul className="col-span-1 list-inside list-disc rounded-lg border border-primary-500 p-4 sm:col-span-2">
              {dataActive?.subjectOfStudy
                ?.trim()
                .split("\n")
                .map((line, index) => (
                  <li key={index} className="mb-1">
                    {line}
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-3">
            <textarea
              id="goalLearn"
              name={dataActive?.id}
              className="editText content-scroll min-h-24 w-full p-2"
              value={dataActive?.goalLearn || ""}
              onChange={handleChange}
            ></textarea>
            <ul className="list-inside list-disc rounded-lg border border-primary-500 p-4">
              {dataActive?.goalLearn
                ?.trim()
                .split("\n")
                .map((line, index) => (
                  <li key={index} className="mb-1">
                    {line}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

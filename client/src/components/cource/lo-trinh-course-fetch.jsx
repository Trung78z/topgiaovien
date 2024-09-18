import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function RouteFetchCourse({ props }) {
  const [active, setActive] = useState();
  const [dataActive, setDataActive] = useState();
  useEffect(() => {
    if (props?.routeDetail) {
      setDataActive(props?.routeDetail[0]);
      setActive(props?.routeDetail[0]?.id);
    }
  }, [props?.routeDetail]);
  const handleChangeStep = (data) => {
    setActive(data);
    const update = props?.routeDetail.find((item) => item.id === data);
    setDataActive(update);
  };

  return (
    <div className="relative bg-[#EAEBF1] py-10">
      <div className="container space-y-6 rounded-lg bg-background p-2 px-2 sm:p-10">
        <h2 className="w-full text-center text-[28px] font-semibold text-[#333333]">
          Chi tiết lộ trình học
        </h2>
        <div>
          <div className="mx-auto flex w-max flex-col items-center md:p-4">
            <div className="w-full max-w-4xl">
              <div
                className={cn(
                  "relative hidden grid-cols-2 gap-5 sm:grid md:grid-cols-5",
                  props?.routeDetail?.length === 4 && "md:grid-cols-4",
                  props?.routeDetail?.length === 3 && "md:grid-cols-3",
                  props?.routeDetail?.length === 2 && "md:grid-cols-2",
                )}
              >
                <div className="absolute bottom-0 left-1/2 h-full w-2 bg-gray-200 md:left-0 md:h-1 md:w-full md:-translate-y-2"></div>

                {props?.routeDetail?.map((item, key) => (
                  <button
                    className="relative z-10 flex h-36 w-full flex-row items-center justify-between odd:-translate-x-2 odd:translate-y-1/2 odd:flex-row-reverse even:translate-x-4 sm:flex-col sm:odd:translate-x-0 sm:odd:translate-y-0 sm:odd:flex-col sm:even:translate-x-0"
                    key={item.id}
                    onClick={() => handleChangeStep(item.id)}
                  >
                    <div
                      className={cn(
                        "flex max-w-48 flex-col items-center justify-center rounded-md px-4 py-2",
                        item.id === active
                          ? "bg-primary-500 text-white"
                          : "text-neutral-CED4DA hover:border hover:bg-slate-100",
                      )}
                    >
                      <div className="mt-2 text-[16px]">Chặng {key + 1}</div>
                      <div
                        className={cn(
                          "w-full px-2 text-lg font-semibold",
                          item.id === active ? "text-white" : "text-black",
                          key === 0 && "pl-0",
                        )}
                      >
                        {item.content}
                      </div>
                    </div>
                    <div
                      className={cn(
                        "bottom-0 h-6 w-6 rounded-full",
                        item.id === active ? "bg-blue-600" : "bg-gray-300",
                      )}
                    ></div>
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-6 gap-x-2 gap-y-4 sm:hidden">
                {props?.routeDetail?.map((item, key) => (
                  <li
                    key={item.id}
                    className={cn(
                      "list-inside list-none",
                      key < 3 ? "col-span-2" : "col-span-3",
                    )}
                    onClick={() => handleChangeStep(item.id)}
                  >
                    <Button
                      className="flex w-full flex-col items-center border-2 p-8"
                      variant={item.id === active ? "" : "outline"}
                    >
                      <div className="mt-2 sm:text-[16px]">Chặng {key + 1}</div>
                      <p className="text-wrap text-xs"> {item.content}</p>
                    </Button>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-10">
          <SubjectOfStudy subjectOfStudy={dataActive?.subjectOfStudy} />
          <GoalLearn goalLearn={dataActive?.goalLearn} />
        </div>
      </div>
    </div>
  );
}

const SubjectOfStudy = ({ subjectOfStudy }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (subjectOfStudy) {
      setAnimationClass("slide-in-from-opacity");

      const timeout = setTimeout(() => {
        setAnimationClass("");
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [subjectOfStudy]);
  if (!subjectOfStudy) return null;

  return (
    <>
      <ul
        className={`col-span-1 list-inside list-disc rounded-lg border border-primary-500 p-4 sm:col-span-2 ${animationClass}`}
      >
        <h3 className="text-[16px] font-semibold">Đối tượng học</h3>
        {subjectOfStudy
          ?.trim()
          .split("\n")
          .map((line, index) => (
            <li key={index} className="mb-1">
              {line}
            </li>
          ))}
      </ul>
    </>
  );
};

const GoalLearn = ({ goalLearn }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (goalLearn) {
      setAnimationClass("slide-in-from-opacity");

      const timeout = setTimeout(() => {
        setAnimationClass("");
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [goalLearn]);
  if (!goalLearn) return null;
  return (
    <>
      {" "}
      <ul
        className={`col-span-1 list-inside list-disc rounded-lg border border-primary-500 p-4 sm:col-span-3 ${animationClass}`}
      >
        <h3 className="text-[16px] font-semibold">Mục tiêu khóa học</h3>
        {goalLearn
          ?.trim()
          .split("\n")
          .map((line, index) => (
            <li key={index} className="mb-1">
              {line}
            </li>
          ))}
      </ul>
    </>
  );
};

import { API_URL } from "@/services/apiService";
import { Button } from "../ui/button";

export default function ExperienceTeacher({ props }) {
  return (
    <>
      <div className="container space-y-6 px-2">
        <h2 className="text-center text-[28px] font-semibold">
          Kinh nghiệm làm việc
        </h2>
        <div className="flex flex-wrap gap-x-10 sm:flex-nowrap">
          <div className="flex w-full flex-col items-center gap-y-4 sm:w-[40%]">
            <img
              loading="lazy"
              src={
                props?.photoUrl2
                  ? `${API_URL}/api/file/teacher/${props?.photoUrl2}`
                  : `${API_URL}/api/file/teacher/${props?.photoUrl}`
              }
              className="max-h-[500px] min-h-[500px] min-w-full rounded-2xl object-cover"
              alt={props?.name || "Image giáo viên"}
            />
            <p className="text-center">Sở trường</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap">
              {props?.teacherForte?.map((item) => (
                <Button variant="outline" key={item.id}>
                  {item.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="w-full space-y-4 pt-4 sm:w-[60%] md:pt-0">
            <Button className="bg-primary-500 text-white">Học vấn</Button>
            <ul className="list-disc space-y-2">
              {props?.education &&
                props.education?.map((item) => (
                  <li key={item?.id}> {item?.content}</li>
                ))}
            </ul>
            <Button className="bg-primary-500 text-white">Chứng chỉ</Button>
            <ul className="list-disc space-y-2">
              {props?.certificate &&
                props.certificate?.map((item) => (
                  <li key={item?.id}> {item?.content}</li>
                ))}
            </ul>
            <Button className="bg-primary-500 text-white">Kinh nghiệm</Button>
            <ul className="list-none">
              {props?.experience &&
                props?.experience.map((item) => (
                  <li key={item?.id} className="space-y-3">
                    <h3 className="text-[20px] font-semibold">{item?.title}</h3>
                    <h4 className="text-[16px] font-medium text-neutral-555F6D">
                      {item?.content}
                    </h4>
                    <p className="text-neutral-555F6D">
                      {item?.description
                        ?.trim()
                        .split("\n")
                        .map((line, index) => (
                          <li key={index} className="mb-1">
                            {line}
                          </li>
                        ))}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

import { API_URL } from "@/services/apiService";
import { Button } from "../ui/button";
import { MdDelete, MdEdit } from "react-icons/md";
import { Input } from "../ui/input";

export default function ExperienceTeacher({
  props,
  handleChange,
  handleAddEducation,
  handleAddCertificate,
  handleAddExperience,
  handleDeleteEducation,
  handleDeleteCertificate,
  handleDeleteExperience,
}) {
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
              src={`${API_URL}/api/file/teacher/${props?.photoUrl}`}
              alt={`Hình ảnh giáo viên của ${props?.name}`}
              className="rounded-full object-cover"
            />
            <p className="text-center">Sở trường</p>
            <div className="flex items-center justify-center gap-x-6">
              <Button variant="outline">IELTS nâng cao</Button>
              <Button variant="outline">Giao tiếp</Button>
              <Button variant="outline">TOEIC</Button>
            </div>
          </div>
          <div className="w-full space-y-4 pt-4 sm:w-[60%] md:pt-0">
            <div className="flex items-center gap-x-3">
              <Button className="cursor-default bg-primary-500 text-white hover:bg-primary-500">
                Học vấn
              </Button>
              <Button
                disabled={props?.education.length === 2 ? true : false}
                className="bg-green-500 px-2 py-1 hover:bg-green-600"
                size="small"
                onClick={() => handleAddEducation(props.id)}
              >
                Thêm
              </Button>
              <p className="text-red-500">Tối đa 2</p>
            </div>

            <ul className="list-disc space-y-2 pl-4">
              {props?.education?.map((item) => (
                <li key={item?.id}>
                  <div className="flex items-center gap-2">
                    <Input
                      id="content"
                      name="education"
                      value={item?.content}
                      onChange={(e) => handleChange(e, item.id)}
                    ></Input>
                    <Button
                      size="small "
                      variant="outline"
                      disabled={true}
                      className="border-none text-green-500 hover:text-green-600"
                    >
                      <MdEdit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="small "
                      variant="outline"
                      className="border-none text-red-500 hover:text-red-600"
                      onClick={() => handleDeleteEducation(item.id)}
                    >
                      <MdDelete />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-x-3">
              <Button className="cursor-default bg-primary-500 text-white hover:bg-primary-500">
                Chứng chỉ
              </Button>
              <Button
                disabled={props?.certificate.length === 2 ? true : false}
                className="bg-green-500 px-2 py-1 hover:bg-green-600"
                size="small"
                onClick={() => handleAddCertificate(props.id)}
              >
                Thêm
              </Button>
              <p className="text-red-500">Tối đa 2</p>
            </div>
            <ul className="list-disc space-y-2 pl-4">
              {props?.certificate?.map((item) => (
                <li key={item?.id}>
                  <div className="flex items-center gap-2">
                    <Input
                      id="content"
                      name="certificate"
                      value={item?.content}
                      onChange={(e) => handleChange(e, item.id)}
                    ></Input>
                    <Button
                      size="small "
                      variant="outline"
                      disabled={true}
                      className="border-none text-green-500 hover:text-green-600"
                    >
                      <MdEdit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="small "
                      variant="outline"
                      className="border-none text-red-500 hover:text-red-600"
                      onClick={() => handleDeleteCertificate(item.id)}
                    >
                      <MdDelete />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-x-3">
              <Button className="cursor-default bg-primary-500 text-white hover:bg-primary-500">
                Kinh nghiệm
              </Button>
              <Button
                disabled={props?.experience.length === 2 ? true : false}
                className="bg-green-500 px-2 py-1 hover:bg-green-600"
                size="small"
                onClick={() => handleAddExperience(props.id)}
              >
                Thêm
              </Button>
              <p className="text-red-500">Tối đa 2</p>
            </div>

            <ul className="content-scroll min-h-80 list-none overflow-y-auto">
              {props?.experience.map((item) => (
                <li key={item?.id} className="space-y-3">
                  <div className="flex items-center gap-2 p-1">
                    <Input
                      id="title"
                      name="experience"
                      value={item?.title}
                      className="text-[20px] font-semibold"
                      onChange={(e) => handleChange(e, item.id)}
                    ></Input>
                    <Button
                      size="small "
                      variant="outline"
                      disabled={true}
                      className="border-none text-green-500 hover:text-green-600"
                    >
                      <MdEdit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="small "
                      variant="outline"
                      className="border-none text-red-500 hover:text-red-600"
                      onClick={() => handleDeleteExperience(item.id)}
                    >
                      <MdDelete />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 p-1">
                    <Input
                      id="content"
                      name="experience"
                      value={item?.content}
                      onChange={(e) => handleChange(e, item.id)}
                      className="text-[16px] font-medium text-neutral-555F6D"
                    ></Input>
                  </div>

                  <textarea
                    id="description"
                    name="experience"
                    value={item?.description}
                    onChange={(e) => handleChange(e, item.id)}
                    className="rich-text content-scroll editText min-h-40 w-full rounded-lg p-2 text-neutral-555F6D"
                  ></textarea>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

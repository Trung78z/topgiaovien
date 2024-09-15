import QuillEditorHookForm from "@/components/hookformQuill";
import { editJob, getJobCategory, getJobDetail } from "@/services/jobService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, { message: "Vui lòng nhập tiêu đề!" }),
  responsibilities: z
    .string()
    .min(1, { message: "Vui lòng nhập trách nhiệm!" }),
  requirements: z.string().min(1, { message: "Vui lòng nhập yêu cầu!" }),
  benefits: z.string().min(1, { message: "Vui lòng nhập lợi ích!" }),
  recruitmentProcess: z
    .string()
    .min(1, { message: "Vui lòng nhập quy trình tuyển dụng!" }),
  location: z.string().min(1, { message: "Vui lòng nhập địa điểm!" }),
  salary: z.string().min(1, { message: "Vui lòng nhập mức lương!" }),
  position: z.string().min(1, { message: "Vui lòng nhập vị trí!" }),
  jobType: z.string().min(1, { message: "Vui lòng nhập loại công việc!" }),
  jobRole: z.string().min(1, { message: "Vui lòng nhập vai trò công việc!" }),
  applicationDeadline: z
    .string()
    .min(1, { message: "Vui lòng nhập hạn nộp hồ sơ!" }),
  applicationCategoryId: z
    .number()
    .min(1, { message: "Vui lòng chọn danh mục tuyển dụng!" }),
  applicationSubCategoryId: z
    .number()
    .min(1, { message: "Vui lòng chọn danh mục con tuyển dụng!" }),
});

export default function JobEdit() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },

    watch,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [row, setRow] = useState({});
  const [form, setForm] = useState({
    applicationCategory: "",
    applicationSubCategory: "",
  });
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const resCate = await getJobCategory();
        const res = await getJobDetail(slug);
        setRow(res.msg);
        for (const item in res.msg) {
          if (typeof res.msg[item] === "object") {
            const update = resCate.msg.find(
              (item) => item.id === res.msg.applicationCategory.id,
            );
            setForm((prev) => ({
              ...prev,
              applicationCategory: update.content,
              applicationSubCategory: update.applicationSubCategory.find(
                (item) => item.id === res.msg.applicationSubCategory.id,
              ).content,
            }));
            setSubCategories(update.applicationSubCategory);
            setForm((prev) => ({
              ...prev,
            }));

            setValue(
              "applicationCategoryId",
              resCate.msg.find(
                (item) => item.id === res.msg.applicationCategory.id,
              ).id,
            );
            setValue(
              "applicationSubCategoryId",
              resCate.msg
                .find((item) => item.id === res.msg.applicationCategory.id)
                .applicationSubCategory.find(
                  (item) => item.id === res.msg.applicationSubCategory.id,
                ).id,
            );
          } else if (item === "applicationDeadline") {
            const dateObject = new Date(res.msg[item]);
            const formattedDate = dateObject.toLocaleDateString("en-GB");
            setValue("applicationDeadline", formattedDate);
          } else {
            setValue(item, res.msg[item]);
          }
        }
        setCategories(resCate.msg);
      } catch (error) {
        console.error("Error fetching job categories:", error);
      }
    };
    fetchCategories();
  }, [slug, setValue]);

  const handleCategoryChange = (e) => {
    const { id, value } = e.target;
    if (id === "applicationCategoryId") {
      const selectedCategoryId = parseInt(value);
      const selectedCategory = categories.find(
        (category) => category.id === selectedCategoryId,
      ).applicationSubCategory;
      setSubCategories(selectedCategory || []);
    }
  };
  const onSubmit = async (data) => {
    try {
      await editJob(row.id, data);
      Swal.fire({
        icon: "success",
        title: "Chỉnh sửa công việc thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        navigate(`/cong-viec/tuyen-nhan-vien`);
      }, 1500);
    } catch (error) {
      console.error("Error creating job:", error);
      Swal.fire({
        icon: "error",
        title: "Đã có lỗi xảy ra!",
        text: "Không thể tạo công việc. Vui lòng thử lại.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex min-h-[70vh] items-center justify-center"
      >
        <div className="container grid grid-cols-1 items-center gap-4 px-2 sm:max-w-screen-2xl sm:px-10 md:grid-cols-3">
          <div className="col-span-1">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter title"
            />
            {errors.title && (
              <p className="text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>
          <div className="col-span-1">
            <label
              htmlFor="applicationCategoryId"
              className="block text-sm font-medium text-gray-700"
            >
              Application Category
            </label>
            <select
              id="applicationCategoryId"
              {...register("applicationCategoryId", { valueAsNumber: true })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              defaultValue={form?.applicationCategory}
              onChange={handleCategoryChange}
            >
              <option value={0}>Chọn danh mục tuyển dụng</option>
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category?.content}
                </option>
              ))}
            </select>
            {errors.applicationCategoryId && (
              <p className="text-sm text-red-600">
                {errors.applicationCategoryId.message}
              </p>
            )}
          </div>
          <div className="col-span-1">
            <label
              htmlFor="applicationSubCategoryId"
              className="block text-sm font-medium text-gray-700"
            >
              Application Sub-Category
            </label>
            <select
              id="applicationSubCategoryId"
              {...register("applicationSubCategoryId", { valueAsNumber: true })}
              defaultValue={form?.applicationSubCategory}
              onChange={handleCategoryChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Chọn danh mục con tuyển dụng</option>
              {subCategories?.map((subCategory) => (
                <option key={subCategory.id} value={subCategory.id}>
                  {subCategory?.content}
                </option>
              ))}
            </select>
            {errors.applicationSubCategoryId && (
              <p className="text-sm text-red-600">
                {errors.applicationSubCategoryId.message}
              </p>
            )}
          </div>

          <div className="col-span-1">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Địa điểm
            </label>
            <input
              type="text"
              id="location"
              {...register("location")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter location"
            />
            {errors.location && (
              <p className="text-sm text-red-600">{errors.location.message}</p>
            )}
          </div>

          <div className="col-span-1">
            <label
              htmlFor="salary"
              className="block text-sm font-medium text-gray-700"
            >
              Lương
            </label>
            <input
              type="text"
              id="salary"
              {...register("salary")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter salary"
            />
            {errors.salary && (
              <p className="text-sm text-red-600">{errors.salary.message}</p>
            )}
          </div>

          <div className="col-span-1">
            <label
              htmlFor="position"
              className="block text-sm font-medium text-gray-700"
            >
              Cấp bậc
            </label>
            <input
              type="text"
              id="position"
              {...register("position")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter position"
            />
            {errors.position && (
              <p className="text-sm text-red-600">{errors.position.message}</p>
            )}
          </div>

          <div className="col-span-1">
            <label
              htmlFor="jobType"
              className="block text-sm font-medium text-gray-700"
            >
              Hình thức
            </label>
            <input
              type="text"
              id="jobType"
              {...register("jobType")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter job type"
            />
            {errors.jobType && (
              <p className="text-sm text-red-600">{errors.jobType.message}</p>
            )}
          </div>

          <div className="col-span-1">
            <label
              htmlFor="jobRole"
              className="block text-sm font-medium text-gray-700"
            >
              Loại công việc
            </label>
            <input
              type="text"
              id="jobRole"
              {...register("jobRole")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter job role"
            />
            {errors.jobRole && (
              <p className="text-sm text-red-600">{errors.jobRole.message}</p>
            )}
          </div>

          <div className="col-span-1">
            <label
              htmlFor="applicationDeadline"
              className="block text-sm font-medium text-gray-700"
            >
              Deadline
            </label>
            <input
              type="date"
              id="applicationDeadline"
              {...register("applicationDeadline")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter application deadline"
            />
            {errors.applicationDeadline && (
              <p className="text-sm text-red-600">
                {errors.applicationDeadline.message}
              </p>
            )}
          </div>

          <div className="col-span-1 md:col-span-3">
            <label
              htmlFor="responsibilities"
              className="block text-sm font-medium text-gray-700"
            >
              Nhiệm vụ công việc
            </label>
            <QuillEditorHookForm
              name="responsibilities"
              id="responsibilities"
              control={control}
              setValue={setValue}
              watch={watch}
            />

            {/* <textarea
              id="responsibilities"
              {...register("responsibilities")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter responsibilities"
            /> */}
            {errors.responsibilities && (
              <p className="text-sm text-red-600">
                {errors.responsibilities.message}
              </p>
            )}
          </div>

          <div className="col-span-1 md:col-span-3">
            <label
              htmlFor="requirements"
              className="block text-sm font-medium text-gray-700"
            >
              Yêu cầu
            </label>
            <QuillEditorHookForm
              name="requirements"
              id="requirements"
              control={control}
              setValue={setValue}
              watch={watch}
            />
            {/* <textarea
              id="requirements"
              {...register("requirements")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter requirements"
            /> */}
            {errors.requirements && (
              <p className="text-sm text-red-600">
                {errors.requirements.message}
              </p>
            )}
          </div>

          <div className="col-span-1 md:col-span-3">
            <label
              htmlFor="benefits"
              className="block text-sm font-medium text-gray-700"
            >
              Quyền lợi nhân sự
            </label>
            <QuillEditorHookForm
              name="benefits"
              id="benefits"
              control={control}
              setValue={setValue}
              watch={watch}
            />
            {/* <textarea
              id="benefits"
              {...register("benefits")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter benefits"
            /> */}
            {errors.benefits && (
              <p className="text-sm text-red-600">{errors.benefits.message}</p>
            )}
          </div>

          <div className="col-span-1 md:col-span-3">
            <label
              htmlFor="recruitmentProcess"
              className="block text-sm font-medium text-gray-700"
            >
              Quy trình tuyển dụng
            </label>
            <QuillEditorHookForm
              name="recruitmentProcess"
              id="recruitmentProcess"
              control={control}
              setValue={setValue}
              watch={watch}
            />
            {/* <textarea
              id="recruitmentProcess"
              {...register("recruitmentProcess")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter recruitment process"
            /> */}
            {errors.recruitmentProcess && (
              <p className="text-sm text-red-600">
                {errors.recruitmentProcess.message}
              </p>
            )}
          </div>

          <div className="col-span-1 flex flex-1 items-center justify-end md:col-span-3">
            <button
              type="submit"
              className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

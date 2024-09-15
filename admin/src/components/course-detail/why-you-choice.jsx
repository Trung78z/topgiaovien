import { API_URL } from "@/services/apiService";
import { MdDelete } from "react-icons/md";

export default function WhyYouChoice({
  props,
  handleChange,
  handleImageChangeReview,
  setForm,
}) {
  const handleDelete = () => {
    setForm({ ...props, urlChoice: "" });
  };
  return (
    <>
      <div className="container relative mx-auto space-y-6 px-1">
        <h2 className="text-center text-[28px] font-semibold text-[#333333]">
          Tại sao nên học {props?.courseCategory?.content} tại TopGiaoVien?
        </h2>
        <label
          htmlFor=""
          className="top-0 flex w-full translate-y-2 flex-col items-center sm:flex-row"
        >
          <span>Link giới khóa học: </span>
          <input
            id="urlChoice"
            type="text"
            className="editText p-2"
            value={props.urlChoice}
            onChange={handleChange}
          />{" "}
          <button
            onClick={handleDelete}
            className="pl-4 text-red-500 hover:text-red-400"
            disabled={props.urlChoice ? false : true}
          >
            <MdDelete />
          </button>
        </label>

        {props?.urlChoice && (
          <div className="video relative min-h-96">
            <iframe
              className="min-h-[500px] w-full"
              src={`https://www.youtube.com/embed/${props.urlChoice}`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          <div className="col-span-1 space-y-3 rounded-lg border bg-background p-1 sm:p-2">
            <label htmlFor="reviewCourseImage1" className="cursor-pointer">
              <input
                id="reviewCourseImage1"
                type="file"
                className="hidden"
                accept=".png, .jpg, .jpeg"
                onChange={handleImageChangeReview}
              />
              <img
                src={`${API_URL}/api/file/course/${props?.reviewCourseImage1}`}
                alt={props.reviewCourseTitle1}
                className="max-h-48 min-h-48 min-w-full object-cover"
              />
            </label>
            <h2 className="text-[16px] font-semibold">
              <textarea
                type="text"
                id="reviewCourseTitle1"
                value={props?.reviewCourseTitle1}
                onChange={handleChange}
                className="editText w-full"
              />
            </h2>
          </div>
          <div className="col-span-1 space-y-3 rounded-lg border bg-background p-1 sm:p-2">
            <label htmlFor="reviewCourseImage2" className="cursor-pointer">
              <input
                id="reviewCourseImage2"
                type="file"
                className="hidden"
                accept=".png, .jpg, .jpeg"
                onChange={handleImageChangeReview}
              />
              <img
                src={`${API_URL}/api/file/course/${props?.reviewCourseImage2}`}
                alt={props.reviewCourseTitle2}
                className="max-h-48 min-h-48 min-w-full object-cover"
              />
            </label>
            <h2 className="text-[16px] font-semibold">
              <textarea
                type="text"
                id="reviewCourseTitle2"
                value={props?.reviewCourseTitle2}
                onChange={handleChange}
                className="editText w-full"
              />
            </h2>
          </div>
          <div className="col-span-1 space-y-3 rounded-lg border bg-background p-1 sm:p-2">
            <label htmlFor="reviewCourseImage3" className="cursor-pointer">
              <input
                id="reviewCourseImage3"
                type="file"
                className="hidden"
                accept=".png, .jpg, .jpeg"
                onChange={handleImageChangeReview}
              />
              <img
                src={`${API_URL}/api/file/course/${props?.reviewCourseImage3}`}
                alt={props.reviewCourseTitle3}
                className="max-h-48 min-h-48 min-w-full object-cover"
              />
            </label>
            <h2 className="text-[16px] font-semibold">
              <textarea
                type="text"
                id="reviewCourseTitle3"
                value={props?.reviewCourseTitle3}
                onChange={handleChange}
                className="editText w-full"
              />
            </h2>
          </div>
          <div className="col-span-1 space-y-3 rounded-lg border bg-background p-1 sm:p-2">
            <label htmlFor="reviewCourseImage4" className="cursor-pointer">
              <input
                id="reviewCourseImage4"
                type="file"
                className="hidden"
                accept=".png, .jpg, .jpeg"
                onChange={handleImageChangeReview}
              />
              <img
                src={`${API_URL}/api/file/course/${props?.reviewCourseImage4}`}
                alt={props.reviewCourseTitle4}
                className="max-h-48 min-h-48 min-w-full object-cover"
              />
            </label>
            <h2 className="text-[16px] font-semibold">
              <textarea
                type="text"
                id="reviewCourseTitle4"
                value={props?.reviewCourseTitle4}
                onChange={handleChange}
                className="editText w-full"
              />
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { convertToSlug } from "@/lib/utils";
import { getAllJob, getJobCategory } from "@/services/jobService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa6";
export default function ApplicationTeacher() {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      id: 4,
      title: "IELTS Trainer",
      slug: "teacher-ielts-trainer",
      responsibilities:
        "<p>1/ Giảng dạy lớp IELTS Academic và General:</p><ul><li>Sỉ số Học viên: Lớp nhóm dưới 12 Học viên &amp; lớp kèm riêng.</li><li>Hình thức lớp: Offline hoặc online.</li><li>Lịch lớp 3 buổi/ tuần (thứ 2,4,6 và thứ 3,5,7).</li><li>Ưu tiên nhận lớp tại chi nhánh Thầy/ Cô thuận tiện di chuyển</li></ul><p>2/ Các công tác chuyên môn khác theo nguyện vọng phát triển và thế mạnh của cá nhân Thầy Cô, được tính theo thù lao làm việc riêng.</p>",
      requirements:
        "<p>1/ Chuyên môn/ kinh nghiệm:</p><ul><li>Chuyên ngành Sư phạm Anh hoặc chuyên ngành khác có chứng chỉ giảng dạy TESOL/ CELTA.</li><li>IELTS từ 8.0 trở lên, trong đó kỹ năng Writing từ 7.5 trở lên.</li><li>Kinh nghiệm ít nhất 02 năm giảng dạy IELTS Academic và IELTS General với các hình thức nhóm &amp; kèm riêng.</li></ul><p>2/ Kỹ năng: Thiết kế bài giảng có tích hợp công nghệ và phù hợp với từng đối tượng học viên, linh hoạt trong việc giảng bài.</p><p>3/ Con người: Nghiêm túc, có trách nhiệm và có tâm với công tác giảng dạy.</p>",
      benefits:
        "<p>1/ Thù lao theo bậc chuyên môn và tính chất lớp giảng dạy: 230.000 VNĐ – 450.000 VNĐ/ giờ/&nbsp;(Thu nhập trung bình 20.000.000đ – 40.000.000đ). Cơ chế thưởng hiệu quả theo chính sách nội bộ hiện hành.</p><p>2/ Chính sách học phí riêng biệt dành cho người thân khi tham gia khóa học tại Công ty.</p><p>3/ Đào tạo nội bộ, đào tạo với đối tác BC, IDP.</p><p>4/ Định hướng phát triển theo thế mạnh cá nhân (chuyên môn, content, học thuật, quản lý).</p>",
      recruitmentProcess:
        "<p>1/ Ứng viên gửi thông tin ứng tuyển (CV, bắt buộc đính kèm bằng IELTS và các bằng cấp chuyên môn).</p><p>2/ Tham gia demo chuyên môn cùng Phòng Đào tạo.</p><p>3/ Nhận 2-3 lớp giảng dạy trong thời gian 02 tháng thử việc.</p>",
      location: "Quận Phú Nhuận, Quận Gò Vấp, Quận 10, Quận Tân Phú",
      salary: "230.000 VNĐ - 450.000 VNĐ/ giờ",
      position: "Giáo viên",
      jobType: "Part-time",
      jobRole: "Trainer",
      applicationDeadline: "2024-08-31T00:00:00.000Z",
      createdAt: "2024-08-21T16:18:48.993Z",
      updatedAt: "2024-08-21T16:18:48.993Z",
      applicationSubCategoryId: 1,
      applicationCategoryId: 1,
      applicationCategory: {
        id: 1,
        content: "Teacher",
      },
      applicationSubCategory: {
        id: 1,
        content: "Tiếng anh",
        applicationCategoryId: 1,
      },
    },
  ]);
  const [dataOld, setDataOld] = useState([
    {
      id: 4,
      title: "IELTS Trainer",
      slug: "teacher-ielts-trainer",
      responsibilities:
        "<p>1/ Giảng dạy lớp IELTS Academic và General:</p><ul><li>Sỉ số Học viên: Lớp nhóm dưới 12 Học viên &amp; lớp kèm riêng.</li><li>Hình thức lớp: Offline hoặc online.</li><li>Lịch lớp 3 buổi/ tuần (thứ 2,4,6 và thứ 3,5,7).</li><li>Ưu tiên nhận lớp tại chi nhánh Thầy/ Cô thuận tiện di chuyển</li></ul><p>2/ Các công tác chuyên môn khác theo nguyện vọng phát triển và thế mạnh của cá nhân Thầy Cô, được tính theo thù lao làm việc riêng.</p>",
      requirements:
        "<p>1/ Chuyên môn/ kinh nghiệm:</p><ul><li>Chuyên ngành Sư phạm Anh hoặc chuyên ngành khác có chứng chỉ giảng dạy TESOL/ CELTA.</li><li>IELTS từ 8.0 trở lên, trong đó kỹ năng Writing từ 7.5 trở lên.</li><li>Kinh nghiệm ít nhất 02 năm giảng dạy IELTS Academic và IELTS General với các hình thức nhóm &amp; kèm riêng.</li></ul><p>2/ Kỹ năng: Thiết kế bài giảng có tích hợp công nghệ và phù hợp với từng đối tượng học viên, linh hoạt trong việc giảng bài.</p><p>3/ Con người: Nghiêm túc, có trách nhiệm và có tâm với công tác giảng dạy.</p>",
      benefits:
        "<p>1/ Thù lao theo bậc chuyên môn và tính chất lớp giảng dạy: 230.000 VNĐ – 450.000 VNĐ/ giờ/&nbsp;(Thu nhập trung bình 20.000.000đ – 40.000.000đ). Cơ chế thưởng hiệu quả theo chính sách nội bộ hiện hành.</p><p>2/ Chính sách học phí riêng biệt dành cho người thân khi tham gia khóa học tại Công ty.</p><p>3/ Đào tạo nội bộ, đào tạo với đối tác BC, IDP.</p><p>4/ Định hướng phát triển theo thế mạnh cá nhân (chuyên môn, content, học thuật, quản lý).</p>",
      recruitmentProcess:
        "<p>1/ Ứng viên gửi thông tin ứng tuyển (CV, bắt buộc đính kèm bằng IELTS và các bằng cấp chuyên môn).</p><p>2/ Tham gia demo chuyên môn cùng Phòng Đào tạo.</p><p>3/ Nhận 2-3 lớp giảng dạy trong thời gian 02 tháng thử việc.</p>",
      location: "Quận Phú Nhuận, Quận Gò Vấp, Quận 10, Quận Tân Phú",
      salary: "230.000 VNĐ - 450.000 VNĐ/ giờ",
      position: "Giáo viên",
      jobType: "Part-time",
      jobRole: "Trainer",
      applicationDeadline: "2024-08-31T00:00:00.000Z",
      createdAt: "2024-08-21T16:18:48.993Z",
      updatedAt: "2024-08-21T16:18:48.993Z",
      applicationSubCategoryId: 1,
      applicationCategoryId: 1,
      applicationCategory: {
        id: 1,
        content: "Teacher",
      },
      applicationSubCategory: {
        id: 1,
        content: "Tiếng anh",
        applicationCategoryId: 1,
      },
    },
  ]);
  const [categories, setCategories] = useState([
    {
      id: 1,
      content: "Teacher",
      applicationSubCategory: [
        {
          id: 1,
          content: "Tiếng anh",
          applicationCategoryId: 1,
        },
      ],
    },
  ]);
  useEffect(() => {
    const fetch = async () => {
      const resCate = await getJobCategory();
      const res = await getAllJob();
      setData(res.msg);
      setDataOld(res.msg);
      setCategories(resCate.msg);
    };
    fetch();
  }, []);

  const handleChangeFindCategory = (cate, subCate) => {
    const update = dataOld.filter(
      (item) =>
        item.applicationCategoryId === cate &&
        item.applicationSubCategoryId === subCate,
    );
    setData(update);
  };

  const handleClickApply = (data) => {
    navigate(`/tuyen-dung/${data}`);
  };
  return (
    <>
      <div className="space-y-4">
        <div className="relative h-full w-full">
          <img
            src="/assets/tuyen-dung/bg-tuyen-dung.png"
            alt=""
            width={1920}
            height={200}
            className="min-h-[00px] w-full"
          />
          <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold text-background sm:text-[48px]">
            Tuyển dụng
          </h2>
        </div>
        <div className="container grid grid-cols-1 gap-3 px-2 sm:grid-cols-5 sm:gap-10">
          <div className="col-span-1 sm:col-span-2">
            <h3 className="text-[24px] font-medium">Tìm kiếm nâng cao</h3>
            <hr />
            <Accordion type="single" collapsible>
              {categories.map((item) => (
                <AccordionItem value={item.id} key={item.id}>
                  <AccordionTrigger className="px-2">
                    {item.content}
                  </AccordionTrigger>
                  {item.applicationSubCategory.map((row) => (
                    <AccordionContent
                      key={row.id}
                      className="flex items-center rounded-md p-2 hover:bg-gray-200"
                    >
                      <button
                        className="inline-flex w-full items-center"
                        onClick={() =>
                          handleChangeFindCategory(item.id, row.id)
                        }
                      >
                        {row.content}
                      </button>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="col-span-1 space-y-3 sm:col-span-3">
            {data
              .sort(() => 0.5 - Math.random())
              .slice(0, 4)
              .map((_, index) => (
                <div
                  className="card space-y-3 rounded-md border p-4"
                  key={`${_.title}+${index}`}
                >
                  <h4 className="text-[24px] font-medium text-primary-500">
                    {_.title}
                  </h4>
                  <h5 className="text-[18px] font-normal text-neutral-555F6D">
                    Chức vụ: {_.position}
                  </h5>
                  <hr />
                  <div className="flex items-center gap-2 text-[14px] text-neutral-555F6D">
                    {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.99984 1.5C4.78317 1.5 2.1665 4.11667 2.1665 7.33333C2.1665 10.7453 5.29783 12.8133 7.36983 14.182L7.7225 14.416C7.8065 14.472 7.90317 14.5 7.99984 14.5C8.0965 14.5 8.19317 14.472 8.27717 14.416L8.62984 14.182C10.7018 12.8133 13.8332 10.7453 13.8332 7.33333C13.8332 4.11667 11.2165 1.5 7.99984 1.5ZM8.07917 13.3473L7.99984 13.4001L7.9205 13.3473C5.91383 12.022 3.1665 10.2073 3.1665 7.33333C3.1665 4.668 5.3345 2.5 7.99984 2.5C10.6652 2.5 12.8332 4.668 12.8332 7.33333C12.8332 10.2073 10.0852 12.0227 8.07917 13.3473ZM7.99984 5.16667C6.80517 5.16667 5.83317 6.13867 5.83317 7.33333C5.83317 8.528 6.80517 9.5 7.99984 9.5C9.1945 9.5 10.1665 8.528 10.1665 7.33333C10.1665 6.13867 9.1945 5.16667 7.99984 5.16667ZM7.99984 8.5C7.3565 8.5 6.83317 7.97667 6.83317 7.33333C6.83317 6.69 7.3565 6.16667 7.99984 6.16667C8.64317 6.16667 9.1665 6.69 9.1665 7.33333C9.1665 7.97667 8.64317 8.5 7.99984 8.5Z"
                      fill="#555F6D"
                    />
                  </svg> */}
                    <FaHouseUser />
                    <h6 className="text-[14px] font-normal text-neutral-555F6D">
                      {_.position}
                    </h6>
                  </div>
                  <div className="flex items-center gap-2 text-[14px] text-neutral-555F6D">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.99984 1.5C4.78317 1.5 2.1665 4.11667 2.1665 7.33333C2.1665 10.7453 5.29783 12.8133 7.36983 14.182L7.7225 14.416C7.8065 14.472 7.90317 14.5 7.99984 14.5C8.0965 14.5 8.19317 14.472 8.27717 14.416L8.62984 14.182C10.7018 12.8133 13.8332 10.7453 13.8332 7.33333C13.8332 4.11667 11.2165 1.5 7.99984 1.5ZM8.07917 13.3473L7.99984 13.4001L7.9205 13.3473C5.91383 12.022 3.1665 10.2073 3.1665 7.33333C3.1665 4.668 5.3345 2.5 7.99984 2.5C10.6652 2.5 12.8332 4.668 12.8332 7.33333C12.8332 10.2073 10.0852 12.0227 8.07917 13.3473ZM7.99984 5.16667C6.80517 5.16667 5.83317 6.13867 5.83317 7.33333C5.83317 8.528 6.80517 9.5 7.99984 9.5C9.1945 9.5 10.1665 8.528 10.1665 7.33333C10.1665 6.13867 9.1945 5.16667 7.99984 5.16667ZM7.99984 8.5C7.3565 8.5 6.83317 7.97667 6.83317 7.33333C6.83317 6.69 7.3565 6.16667 7.99984 6.16667C8.64317 6.16667 9.1665 6.69 9.1665 7.33333C9.1665 7.97667 8.64317 8.5 7.99984 8.5Z"
                        fill="#555F6D"
                      />
                    </svg>
                    <h6 className="text-[14px] font-normal text-neutral-555F6D">
                      {_.location}
                    </h6>
                  </div>
                  <div className="flex items-center gap-2 text-[14px] text-neutral-555F6D">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12 2.5H11.1667V2C11.1667 1.724 10.9427 1.5 10.6667 1.5C10.3907 1.5 10.1667 1.724 10.1667 2V2.5H5.83333V2C5.83333 1.724 5.60933 1.5 5.33333 1.5C5.05733 1.5 4.83333 1.724 4.83333 2V2.5H4C2.388 2.5 1.5 3.388 1.5 5V12C1.5 13.612 2.388 14.5 4 14.5H12C13.612 14.5 14.5 13.612 14.5 12V5C14.5 3.388 13.612 2.5 12 2.5ZM4 3.5H4.83333V4C4.83333 4.276 5.05733 4.5 5.33333 4.5C5.60933 4.5 5.83333 4.276 5.83333 4V3.5H10.1667V4C10.1667 4.276 10.3907 4.5 10.6667 4.5C10.9427 4.5 11.1667 4.276 11.1667 4V3.5H12C13.0513 3.5 13.5 3.94867 13.5 5V5.5H2.5V5C2.5 3.94867 2.94867 3.5 4 3.5ZM12 13.5H4C2.94867 13.5 2.5 13.0513 2.5 12V6.5H13.5V12C13.5 13.0513 13.0513 13.5 12 13.5ZM6.01335 8.66667C6.01335 9.03467 5.71535 9.33333 5.34668 9.33333C4.97868 9.33333 4.6766 9.03467 4.6766 8.66667C4.6766 8.29867 4.97201 8 5.34001 8H5.34668C5.71468 8 6.01335 8.29867 6.01335 8.66667ZM8.68001 8.66667C8.68001 9.03467 8.38201 9.33333 8.01335 9.33333C7.64535 9.33333 7.34326 9.03467 7.34326 8.66667C7.34326 8.29867 7.63867 8 8.00667 8H8.01335C8.38135 8 8.68001 8.29867 8.68001 8.66667ZM11.3467 8.66667C11.3467 9.03467 11.0487 9.33333 10.68 9.33333C10.312 9.33333 10.0099 9.03467 10.0099 8.66667C10.0099 8.29867 10.3053 8 10.6733 8H10.68C11.048 8 11.3467 8.29867 11.3467 8.66667ZM6.01335 11.3333C6.01335 11.7013 5.71535 12 5.34668 12C4.97868 12 4.6766 11.7013 4.6766 11.3333C4.6766 10.9653 4.97201 10.6667 5.34001 10.6667H5.34668C5.71468 10.6667 6.01335 10.9653 6.01335 11.3333ZM8.68001 11.3333C8.68001 11.7013 8.38201 12 8.01335 12C7.64535 12 7.34326 11.7013 7.34326 11.3333C7.34326 10.9653 7.63867 10.6667 8.00667 10.6667H8.01335C8.38135 10.6667 8.68001 10.9653 8.68001 11.3333ZM11.3467 11.3333C11.3467 11.7013 11.0487 12 10.68 12C10.312 12 10.0099 11.7013 10.0099 11.3333C10.0099 10.9653 10.3053 10.6667 10.6733 10.6667H10.68C11.048 10.6667 11.3467 10.9653 11.3467 11.3333Z"
                        fill="#555F6D"
                      />
                    </svg>
                    <h6 className="text-[14px] font-normal text-neutral-555F6D">
                      Đến hết ngày:
                      {new Date(_.applicationDeadline).toLocaleDateString(
                        "vi-VN",
                      )}
                    </h6>
                  </div>
                  <div className="flex flex-1 items-center justify-end">
                    <Button
                      onClick={() => {
                        handleClickApply(_.slug);
                      }}
                    >
                      Ứng tuyển
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

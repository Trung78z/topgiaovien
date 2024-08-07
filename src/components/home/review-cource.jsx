import { post_reviews } from "@/lib/data-giao-vien-tinh-hoa";
import { Suspense } from "react";
import PropTypes from "prop-types";
export default function ReviewCourse({
  inView,
  title = "Review học viên khóa IELTS tại TopGiaoVien",
}) {
  return (
    <>
      <div className="container mx-auto space-y-6 px-2">
        <h2 className="text-center text-[28px] font-semibold text-[#333333]">
          {title}
        </h2>
        <Suspense fallback={<p>loading...</p>}>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3">
            {post_reviews.slice(0, inView).map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </Suspense>
      </div>
    </>
  );
}

function Card({ data }) {
  return (
    <div className="space-y-2 rounded-lg border-2 bg-background pt-2 shadow-xl hover:shadow-2xl">
      <div className="flex items-center gap-x-2 px-3">
        <div className="icon">
          <img
            src="/assets/feedback1.png"
            alt="avatar feedback"
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
        <div className="space-y-1">
          <h4>{data.username}</h4>
          <p>{data.date}</p>
        </div>
      </div>
      <p className="px-3 text-justify">{data.content}</p>
      <div className="relative w-full">
        <img
          src={data.image}
          alt="Hình ảnh feedback"
          loading="lazy"
          className="h-60 max-h-60 w-full rounded-sm"
        />
      </div>
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

// Card.propTypes = {
//   username: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired
// };

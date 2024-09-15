import { API_URL } from "@/services/apiService";

export default function TrietLyGiaoDuc({ data }) {
  return (
    <>
      <div className="container flex flex-wrap items-center px-0 sm:max-h-[320px] sm:flex-nowrap sm:gap-x-10">
        <div className="img w-full sm:w-1/2">
          {data?.linkPhilosophy && data.linkPhilosophy.length < 20 ? (
            <iframe
              className="h-full min-h-60 w-full rounded-xl sm:max-h-[350px] sm:min-h-[350px]"
              src={`https://www.youtube.com/embed/${data?.linkPhilosophy}?autoplay=1&mute=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={`${API_URL}/api/file/teacher/${data?.linkPhilosophy}`}
              className="min-w-full rounded-sm object-cover sm:max-h-[350px] sm:min-h-[350px]"
            />
          )}
        </div>
        <div className="content w-full space-y-4 sm:w-1/2">
          <h2 className="text-center text-[28px] font-semibold sm:text-left">
            Triết lý giáo dục
          </h2>
          <div className="content-scroll rich-text max-h-[320px] space-y-4 overflow-y-auto">
            {data?.philosophy}
          </div>
        </div>
      </div>
    </>
  );
}

export default function TrietLyGiaoDuc({ data }) {
  return (
    <>
      <div className="container flex flex-wrap items-center px-0 sm:max-h-[320px] sm:flex-nowrap sm:gap-x-10">
        <div className="img w-full sm:w-1/2">
          <iframe
            className="h-full min-h-60 w-full rounded-xl sm:max-h-[350px] sm:min-h-[350px]"
            src={`https://www.youtube.com/embed/${data?.linkPhilosophy}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
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

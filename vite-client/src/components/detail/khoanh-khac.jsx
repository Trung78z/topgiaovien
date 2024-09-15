export default function KhoanhKhacGiaoVien() {
  return (
    <>
      <div className="container space-y-6 px-2">
        <h2 className="text-center text-[28px] font-semibold">
          Khoảnh khắc giữa giáo viên và học viên
        </h2>
        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-5">
          <div className="col-span-1 p-1 sm:col-span-2">
            <img
              src="/assets/khoanh-khac/khoanh-khac-1.png"
              alt=""
              className="min-h-full min-w-full rounded-md object-cover"
            />{" "}
          </div>
          <div className="col-span-1 flex flex-col gap-y-2 p-1 sm:col-span-3">
            <div className="grid h-1/2 grid-cols-5 gap-x-2">
              <div className="col-span-2 h-full">
                <img
                  src="/assets/khoanh-khac/khoanh-khac-2.png"
                  alt=""
                  className="min-h-full min-w-full rounded-md object-cover"
                />
              </div>
              <div className="col-span-3 h-full">
                <img
                  src="/assets/khoanh-khac/khoanh-khac-3.png"
                  alt=""
                  className="min-h-full min-w-full rounded-md object-cover"
                />
              </div>
            </div>
            <div className="grid h-1/2 grid-cols-5 gap-x-2">
              <div className="col-span-3 h-full">
                <img
                  src="/assets/khoanh-khac/khoanh-khac-4.png"
                  alt=""
                  className="min-h-full min-w-full rounded-md object-cover"
                />
              </div>
              <div className="col-span-2 h-full">
                <img
                  src="/assets/khoanh-khac/khoanh-khac-5.png"
                  alt=""
                  className="min-h-full min-w-full rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

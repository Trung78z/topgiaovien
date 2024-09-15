import { API_URL } from "@/services/apiService";
import { memo } from "react";
function KhoanhKhacGiaoVien({ props }) {
  return (
    <>
      <div className="container space-y-6 px-2">
        <h2 className="text-center text-[28px] font-semibold">
          Khoảnh khắc giữa giáo viên và học viên
        </h2>

        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-5">
          <div className="col-span-1 p-1 sm:col-span-2">
            {props?.imageMoment[0] && (
              <img
                loading="lazy"
                src={`${API_URL}/api/file/moment/${props?.imageMoment[0].image}`}
                alt="Khoảnh khắc giáo viên"
                className="h-full w-full rounded-md object-cover"
              />
            )}
          </div>
          <div className="col-span-1 flex flex-col gap-y-2 p-1 sm:col-span-3">
            <div className="grid grid-cols-5 gap-x-2">
              <div className="col-span-2">
                {props?.imageMoment[1] && (
                  <img
                    loading="lazy"
                    src={`${API_URL}/api/file/moment/${props?.imageMoment[1].image}`}
                    alt="Khoảnh khắc giáo viên"
                    className="h-full w-full rounded-md object-cover"
                  />
                )}
              </div>
              <div className="col-span-3">
                {props?.imageMoment[2] && (
                  <img
                    loading="lazy"
                    src={`${API_URL}/api/file/moment/${props?.imageMoment[2].image}`}
                    alt="Khoảnh khắc giáo viên"
                    className="h-full w-full rounded-md object-cover"
                  />
                )}
              </div>
            </div>
            <div className="mt-2 grid grid-cols-5 gap-x-2">
              <div className="col-span-3">
                {props?.imageMoment[3] && (
                  <img
                    loading="lazy"
                    src={`${API_URL}/api/file/moment/${props?.imageMoment[3].image}`}
                    alt="Khoảnh khắc giáo viên"
                    className="h-full w-full rounded-md object-cover"
                  />
                )}
              </div>
              <div className="col-span-2">
                {props?.imageMoment[4] && (
                  <img
                    loading="lazy"
                    src={`${API_URL}/api/file/moment/${props?.imageMoment[4].image}`}
                    alt="Khoảnh khắc giáo viên"
                    className="h-full w-full rounded-md object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(KhoanhKhacGiaoVien);

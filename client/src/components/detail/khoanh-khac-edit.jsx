import { API_URL } from "@/services/apiService";

export default function MomentTeacher({ props, handleChange }) {
  return (
    <>
      {props.imageMoment && (
        <div className="container space-y-6 px-2">
          <h2 className="text-center text-[28px] font-semibold">
            Khoảnh khắc giữa giáo viên và học viên
          </h2>
          <p className="text-center text-green-500">
            Click vào ảnh để chỉnh sửa.
            <span className="text-red-500">
              Đối với ảnh này khi thay đổi tự động cập nhật không cần xác nhận!
            </span>
          </p>
          <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-5">
            <div className="relative col-span-1 p-1 sm:col-span-2">
              <button disabled={true} className="h-full w-full cursor-pointer">
                <label
                  htmlFor={props?.imageMoment && props.imageMoment[0]?.id}
                  className="cursor-pointer"
                >
                  <img
                    loading="lazy"
                    src={
                      props?.imageMoment
                        ? `${API_URL}/api/file/moment/${props.imageMoment[0]?.image}`
                        : `${API_URL}/api/file/moment/khoanh-khac-1.png`
                    }
                    alt="Khoang khac giao vien"
                    className="min-h-full min-w-full rounded-md object-cover"
                  />
                  <input
                    id={props?.imageMoment && props.imageMoment[0]?.id}
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    className="hidden"
                    onChange={handleChange}
                  />
                </label>
              </button>
            </div>

            <div className="col-span-1 flex flex-col gap-y-2 p-1 sm:col-span-3">
              <div className="grid h-1/2 grid-cols-5 gap-x-2">
                <div className="relative col-span-2 h-full">
                  <button
                    disabled={true}
                    className="h-full w-full cursor-pointer"
                  >
                    <label
                      htmlFor={props?.imageMoment && props.imageMoment[1]?.id}
                      className="cursor-pointer"
                    >
                      <img
                        loading="lazy"
                        src={
                          props?.imageMoment
                            ? `${API_URL}/api/file/moment/${props?.imageMoment[1]?.image}`
                            : `${API_URL}/api/file/moment/khoanh-khac-2.png`
                        }
                        alt="Khoang khac giao vien"
                        className="min-h-full min-w-full rounded-md object-cover"
                      />
                      <input
                        id={props?.imageMoment && props.imageMoment[1]?.id}
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        className="hidden"
                        onChange={handleChange}
                      />
                    </label>
                  </button>
                </div>
                <div className="relative col-span-3 h-full">
                  <button
                    disabled={true}
                    className="h-full w-full cursor-pointer"
                  >
                    <label
                      htmlFor={props?.imageMoment && props.imageMoment[2]?.id}
                      className="cursor-pointer"
                    >
                      <img
                        loading="lazy"
                        src={
                          props?.imageMoment
                            ? `${API_URL}/api/file/moment/${props?.imageMoment[2]?.image}`
                            : `${API_URL}/api/file/moment/khoanh-khac-3.png`
                        }
                        alt="Khoang khac giao vien"
                        className="min-h-full min-w-full rounded-md object-cover"
                      />
                      <input
                        id={props?.imageMoment && props.imageMoment[2]?.id}
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        className="hidden"
                        onChange={handleChange}
                      />
                    </label>
                  </button>
                </div>
              </div>
              <div className="grid h-1/2 grid-cols-5 gap-x-2">
                <div className="relative col-span-3 h-full">
                  <button
                    disabled={true}
                    className="h-full w-full cursor-pointer"
                  >
                    <label
                      htmlFor={props?.imageMoment && props.imageMoment[3]?.id}
                      className="cursor-pointer"
                    >
                      <img
                        loading="lazy"
                        src={
                          props?.imageMoment
                            ? `${API_URL}/api/file/moment/${props?.imageMoment[3]?.image}`
                            : `${API_URL}/api/file/moment/khoanh-khac-4.png`
                        }
                        alt="Khoang khac giao vien"
                        className="min-h-full min-w-full rounded-md object-cover"
                      />
                      <input
                        id={props?.imageMoment && props.imageMoment[3]?.id}
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        className="hidden"
                        onChange={handleChange}
                      />
                    </label>
                  </button>
                </div>
                <div className="relative col-span-2 h-full">
                  <button
                    disabled={true}
                    className="h-full w-full cursor-pointer"
                  >
                    <label
                      htmlFor={props.imageMoment && props.imageMoment[4]?.id}
                      className="cursor-pointer"
                    >
                      <img
                        loading="lazy"
                        src={
                          props.imageMoment
                            ? `${API_URL}/api/file/moment/${props?.imageMoment[4]?.image}`
                            : `${API_URL}/api/file/moment/khoanh-khac-5.png`
                        }
                        alt="Khoang khac giao vien"
                        className="min-h-full min-w-full rounded-md object-cover"
                      />
                      <input
                        id={props.imageMoment && props.imageMoment[4]?.id}
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        className="hidden"
                        onChange={handleChange}
                      />
                    </label>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

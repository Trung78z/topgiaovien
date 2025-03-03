import { cn, getRandomAllItems } from "@/lib/utils";
import { Button } from "@headlessui/react";
import { memo, useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import { getAllTeacher } from "@/services/teacherDetailService";
import { API_URL } from "@/services/apiService";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function GiaoVienTinhHoa({ dataSearch }) {
  const [dataCheck, setDataCheck] = useState([]);
  const [dataActive, setDataActive] = useState();
  const [data, setData] = useState([]);
  const [dataOld, setDataOld] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setDataCheck(dataSearch);
  }, [dataSearch]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllTeacher();

      const randomData = getRandomAllItems(data.msg);

      const filter = randomData.filter((item) => item.courseCategoryId === 1);
      setData(filter);

      setDataOld(randomData);
      if (Array.isArray(data.msg) && data.msg.length > 0) {
        setDataActive(data.msg[0]);
      } else {
        console.error("Data is not an array or is empty.");
      }
    };
    fetch();
  }, []);
  const handleSelection = (value) => {
    scrollToTarget();
    const update = data.find((item) => item.id === value);
    setDataActive(update);
  };
  const handleChangeActive = (id) => {
    scrollToTarget();
    const update = dataCheck.map((item) =>
      item.id === id
        ? { ...item, active: true }
        : item.active === true
          ? { ...item, active: false }
          : item,
    );
    const filter = dataOld.filter((item) => item.courseCategoryId === id);

    setData(filter);
    setDataActive(filter[0]);
    setDataCheck(update);
  };
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(4);
        setCurrentPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(6);
        setCurrentPage(1);
      } else {
        setItemsToShow(8);
        setCurrentPage(1);
      }
    };
    window.addEventListener("resize", updateItemsToShow);
    updateItemsToShow();
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);
  const totalPages = Math.ceil(data?.length / itemsToShow);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const targetRef = useRef(null);
  const scrollToTarget = () => {
    if (targetRef.current) {
      const navbarHeight = 20;
      const topOffset =
        targetRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight -
        window.innerHeight * 0.1;
      setTimeout(() => {
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  const startIndex = (currentPage - 1) * itemsToShow;

  return (
    <>
      {data && (
        <div className="container mx-auto px-0">
          <div className="px-2 pt-4">
            <h2 className="text-center text-[28px] font-semibold text-[#333333]">
              Giáo viên hàng đầu
            </h2>
          </div>
          <div className="mx-auto grid grid-cols-2 gap-2 pt-10 sm:max-w-[600px] sm:grid-cols-3 sm:gap-4">
            {dataCheck.map((row, key) => {
              return (
                <Button
                  className={cn(
                    "mx-auto w-max rounded-lg border-2 p-1 text-sm font-medium sm:px-4",
                    row.active
                      ? "bg-primary-500 text-white hover:bg-primary-400 hover:text-white"
                      : "hover:bg-slate-50 hover:text-gray-700",
                    key === 2 && "col-span-2 sm:col-span-1",
                    key === 0 && "sm:ml-3",
                  )}
                  type="button"
                  key={`${row.id}`}
                  onClick={() => handleChangeActive(row?.id)}
                >
                  {row.content.toLowerCase() === "khác"
                    ? "Đội ngũ giáo viên nước ngoài"
                    : `Giáo viên ${row.content}`}
                </Button>
              );
            })}
          </div>
          {dataActive ? (
            <div
              className="flex flex-wrap gap-x-6 rounded-lg bg-white px-2 pt-6 md:px-0 lg:flex-nowrap"
              ref={targetRef}
            >
              <TeacherProfile dataActive={dataActive} />
              <div className="relative mt-8 flex w-full flex-col lg:w-2/3">
                <div className="relative grid min-h-[460px] grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                  <button
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    disabled={currentPage <= 1 ? true : false}
                    className="absolute -left-10 top-1/2 hidden -translate-y-1/2 sm:block"
                  >
                    <FaAngleLeft
                      className={cn(
                        currentPage <= 1 ? "text-gray-400" : "",
                        "h-10 w-10",
                      )}
                    />
                  </button>
                  <button
                    disabled={currentPage >= totalPages ? true : false}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="absolute right-0 top-1/2 hidden -translate-y-1/2 sm:-right-10 sm:block"
                  >
                    <FaAngleRight
                      className={cn(
                        currentPage >= totalPages ? "text-gray-400" : "",
                        "h-10 w-10",
                      )}
                    />
                  </button>
                  {data.slice(startIndex, startIndex + itemsToShow).map((_) => (
                    <Button
                      onMouseEnter={() => handleSelection(_?.id)}
                      key={_.id}
                      className={cn(
                        `card-hover relative max-h-[220px] min-h-[220px] rounded-md border-2 px-4 py-6 hover:shadow-xl`,
                        _.id === dataActive?.id
                          ? "border-neutral-555F6D"
                          : "border-neutral-CED4DA",
                      )}
                    >
                      <div className="absolute right-2 top-2 flex items-center gap-0 text-sm text-primary-500">
                        <span className="text-xs text-red-500">
                          Trợ phí
                          <span className="font-semibold"> {_?.voucher}%</span>
                        </span>
                      </div>
                      <Link
                        to={`/giao-vien/giao-vien-${_?.id}+${_?.slug}`}
                        className="relative flex flex-col items-center"
                      >
                        <img
                          loading="lazy"
                          src={
                            `${API_URL}/api/file/teacher/${_?.photoUrl}` ||
                            "/assets/doi-ngu-giao-vien/tran-thanh-giang.png"
                          }
                          alt="Teacher"
                          height={144}
                          width={144}
                          className="h-28 w-28 rounded-full border-2 border-orange-500 object-cover p-1"
                        />
                        <p className="mt-2 text-center">{_?.name}</p>

                        {/* <Button className="rounded-md bg-primary-500 p-1 text-xs text-background hover:bg-primary-600">
                          Xem ngay
                        </Button> */}
                      </Link>
                    </Button>
                  ))}
                </div>
                {/* <FaRegEye className="h-6 w-6 text-green-500 hover:text-green-400" /> */}
                <div className="flex justify-center pt-4 sm:pt-10">
                  <nav className="inline-flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentPage((prev) => prev - 1)}
                      disabled={currentPage <= 1 ? true : false}
                    >
                      <FaAngleLeft
                        className={cn(currentPage <= 1 ? "text-gray-400" : "")}
                      />
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <div key={index}>
                        <button
                          onClick={() => handlePageChange(index + 1)}
                          className={`rounded-full px-3 py-1 ${
                            index + 1 === currentPage
                              ? "bg-primary-600 text-white"
                              : "bg-gray-200"
                          }`}
                        >
                          {index + 1}
                        </button>
                      </div>
                    ))}

                    <button
                      disabled={currentPage >= totalPages ? true : false}
                      onClick={() => setCurrentPage((prev) => prev + 1)}
                    >
                      <FaAngleRight
                        className={cn(
                          currentPage >= totalPages ? "text-gray-400" : "",
                        )}
                      />
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="w-full pt-6 text-center text-red-500">
                Xin lỗi hiện tại hệ thống của chúng tôi chưa có giáo viên nào
                thuộc tiêu chí này!
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

const TeacherProfile = ({ dataActive }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (dataActive) {
      // Trigger the slide-in animation when dataActive changes
      setAnimationClass("slide-in-from-right");

      // Remove the animation class after the animation is complete
      const timeout = setTimeout(() => {
        setAnimationClass("");
      }, 500); // Match this duration with your animation duration

      // Cleanup timeout on component unmount or when data changes
      return () => clearTimeout(timeout);
    }
  }, [dataActive]);
  if (!dataActive) return null;
  return (
    <>
      <div
        className={`flex w-full flex-col p-4 transition-opacity duration-500 lg:w-1/3 ${animationClass}`}
      >
        <div className="card-hover flex h-60 w-full items-center justify-center py-4">
          <img
            loading="lazy"
            src={`${API_URL}/api/file/teacher/${dataActive?.photoUrl}`}
            alt="Teacher"
            width={500}
            height={400}
            className="min-h-full w-[70%] items-center rounded-3xl object-cover"
          />
        </div>
        <div className="w-full pt-4 sm:px-4">
          <h2 className="text-2xl font-bold">{dataActive?.name}</h2>
          <p className="text-gray-600">{dataActive?.position}</p>
          <ul className="mt-4 space-y-2">
            {dataActive?.experience.map((item) => (
              <li className="flex items-center" key={item.id}>
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.5533 19.3386L18.8258 14.1013C19.7185 12.8372 20.2407 11.3132 20.2407 9.67422C20.2407 5.31311 16.5449 1.76514 12.0021 1.76514C7.45936 1.76514 3.76354 5.31311 3.76354 9.67422C3.76354 11.3132 4.28572 12.8374 5.17866 14.1016L2.45082 19.3386C2.35095 19.5305 2.36169 19.7582 2.47901 19.9406C2.59651 20.123 2.80396 20.2342 3.02737 20.2342H6.15687L8.03457 22.6377C8.1571 22.7943 8.34844 22.8852 8.5502 22.8852C8.81758 22.8852 9.02822 22.732 9.12675 22.543L11.7129 17.5777C11.8089 17.581 11.9053 17.5832 12.0021 17.5832C12.099 17.5832 12.1953 17.581 12.2913 17.5777L14.8775 22.543C14.9757 22.7318 15.1865 22.8852 15.4541 22.8852C15.6557 22.8852 15.8472 22.7943 15.9695 22.6377L17.8474 20.2342H20.9769C21.2003 20.2342 21.4078 20.123 21.5251 19.9406C21.6426 19.7582 21.6533 19.5305 21.5533 19.3386ZM8.44026 21.0942L6.99476 19.2442C6.87307 19.0884 6.68206 18.9967 6.47914 18.9967H4.0702L6.07026 15.1569C7.20591 16.2887 8.68833 17.0977 10.3519 17.4237L8.44026 21.0942ZM5.05261 9.67422C5.05261 5.99551 8.17019 3.00263 12.0021 3.00263C15.8341 3.00263 18.9517 5.99551 18.9517 9.67422C18.9517 13.3528 15.8341 16.3457 12.0021 16.3457C8.17019 16.3457 5.05261 13.3528 5.05261 9.67422ZM17.525 18.9967C17.3222 18.9967 17.1312 19.0884 17.0093 19.2442L15.564 21.0942L13.6522 17.4237C15.3159 17.0976 16.7985 16.2887 17.9342 15.1566L19.9339 18.9965L17.525 18.9967Z"
                      fill="#E05F3E"
                    />
                    <path
                      d="M15.2921 10.7009L17.0921 8.63834C17.2348 8.47495 17.2798 8.25259 17.2111 8.04988C17.1425 7.84702 16.9699 7.69249 16.7546 7.64077L14.0356 6.98785L12.5483 4.70702C12.4305 4.52623 12.2241 4.4165 12.002 4.4165C11.7799 4.4165 11.5735 4.52623 11.4556 4.70702L9.96869 6.98785L7.24991 7.64077C7.0344 7.69249 6.86185 7.84702 6.7932 8.04972C6.72472 8.25259 6.76954 8.47495 6.91221 8.63834L8.71219 10.7009L8.5185 13.3848C8.50323 13.5976 8.60293 13.8028 8.78252 13.9282C9.05527 14.1185 9.33272 14.0284 9.40238 14.0014L12.002 12.9956L14.6016 14.0016C14.8075 14.0812 15.0417 14.0536 15.2213 13.9283C15.4011 13.803 15.5008 13.5977 15.4855 13.385L15.2921 10.7009ZM14.1372 10.0972C14.0301 10.22 13.9767 10.3776 13.9883 10.5373L14.1284 12.4843L12.243 11.7547C12.034 11.6737 11.8508 11.7198 11.7611 11.7547L9.87571 12.4843L10.0162 10.5375C10.0276 10.3777 9.97423 10.22 9.86715 10.0972L8.56164 8.60144L10.5337 8.12787C10.6955 8.08904 10.8351 7.99155 10.9236 7.85588L12.0022 6.20153L13.0809 7.85588C13.1694 7.99155 13.309 8.08904 13.4708 8.12787L15.4428 8.60144L14.1372 10.0972Z"
                      fill="#E05F3E"
                    />
                  </svg>
                </span>
                {item?.title}
              </li>
            ))}

            {dataActive?.certificate?.map((item) => (
              <li className="flex items-center" key={item.id}>
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.25 17C11.25 17.414 10.914 17.75 10.5 17.75H5C2.582 17.75 1.25 16.418 1.25 14V6C1.25 3.582 2.582 2.25 5 2.25H17C19.418 2.25 20.75 3.582 20.75 6C20.75 6.414 20.414 6.75 20 6.75C19.586 6.75 19.25 6.414 19.25 6C19.25 4.423 18.577 3.75 17 3.75H5C3.423 3.75 2.75 4.423 2.75 6V14C2.75 15.577 3.423 16.25 5 16.25H10.5C10.914 16.25 11.25 16.586 11.25 17ZM12 7.25H6C5.586 7.25 5.25 7.586 5.25 8C5.25 8.414 5.586 8.75 6 8.75H12C12.414 8.75 12.75 8.414 12.75 8C12.75 7.586 12.414 7.25 12 7.25ZM9 12.75C9.414 12.75 9.75 12.414 9.75 12C9.75 11.586 9.414 11.25 9 11.25H6C5.586 11.25 5.25 11.586 5.25 12C5.25 12.414 5.586 12.75 6 12.75H9ZM22.1069 14.884L21.894 15.097L21.9031 15.376C21.9031 16.216 21.423 16.939 20.7271 17.307L21.7209 20.7939C21.7989 21.0689 21.714 21.365 21.501 21.557C21.361 21.683 21.182 21.75 20.999 21.75C20.905 21.75 20.811 21.732 20.72 21.696L18.873 20.9561C18.096 20.6451 17.2371 20.6461 16.4561 20.9561L14.6111 21.696C14.3431 21.802 14.0411 21.748 13.8301 21.557C13.6171 21.365 13.5321 21.0699 13.6101 20.7939L14.604 17.306C13.909 16.938 13.429 16.215 13.429 15.375V15.076L13.2241 14.8831C12.3701 14.0281 12.3691 12.636 13.2241 11.781L13.438 11.568L13.429 11.2889C13.429 10.0799 14.4131 9.09497 15.6221 9.09497H15.9209L16.1121 8.89099C16.9441 8.06099 18.3871 8.06099 19.2161 8.89099L19.428 9.10303L19.708 9.09497C20.917 9.09497 21.9009 10.0789 21.9009 11.2889V11.588L22.104 11.78C22.963 12.638 22.9619 14.029 22.1069 14.884ZM19.8589 19.735L19.281 17.707L19.217 17.775C18.804 18.189 18.253 18.417 17.667 18.417C17.081 18.417 16.53 18.189 16.115 17.775L16.051 17.7111L15.4741 19.736L15.9009 19.5649C17.0419 19.1109 18.2949 19.1109 19.4309 19.5649L19.8589 19.735ZM21.0471 12.843L20.835 12.631C20.556 12.35 20.4031 11.981 20.4031 11.589V11.29C20.4031 10.907 20.091 10.5959 19.71 10.5959H19.4109C19.0149 10.5959 18.6449 10.442 18.3679 10.163L18.158 9.953C17.894 9.689 17.437 9.69 17.176 9.953L16.9651 10.1639C16.6861 10.4419 16.3171 10.5959 15.9231 10.5959H15.624C15.242 10.5959 14.9309 10.907 14.9309 11.29V11.589C14.9309 11.982 14.778 12.352 14.499 12.63L14.2849 12.843C14.0149 13.113 14.0149 13.553 14.2859 13.823L14.499 14.036C14.777 14.313 14.9309 14.683 14.9309 15.077V15.376C14.9309 15.759 15.243 16.0699 15.624 16.0699H15.9231C16.3161 16.0699 16.6849 16.223 16.9629 16.5L17.177 16.714C17.437 16.975 17.896 16.976 18.157 16.714L18.3711 16.501C18.6461 16.224 19.0169 16.0699 19.4109 16.0699H19.71C20.092 16.0699 20.4031 15.759 20.4031 15.376V15.077C20.4031 14.684 20.555 14.315 20.833 14.037L21.0471 13.823C21.3171 13.553 21.3171 13.113 21.0471 12.843ZM20.083 13.333C20.083 14.666 18.999 15.75 17.667 15.75C16.334 15.75 15.25 14.666 15.25 13.333C15.25 12 16.334 10.916 17.667 10.916C18.999 10.917 20.083 12.001 20.083 13.333ZM18.583 13.333C18.583 12.827 18.172 12.416 17.667 12.416C17.161 12.416 16.75 12.827 16.75 13.333C16.75 13.838 17.161 14.25 17.667 14.25C18.172 14.25 18.583 13.839 18.583 13.333Z"
                      fill="#E05F3E"
                    />
                  </svg>
                </span>
                {item?.content}
              </li>
            ))}

            {dataActive?.education?.map((item) => (
              <li className="flex items-center" key={item.id}>
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.75 9.696C21.75 8.659 21.2059 7.74293 20.2959 7.24593L13.824 3.71492C12.683 3.09292 11.32 3.09192 10.176 3.71492L3.7041 7.24593C2.7941 7.74293 2.25 8.659 2.25 9.696C2.25 10.733 2.7941 11.649 3.7041 12.146L5.25 12.989V16.6989C5.25 17.6549 5.74004 18.533 6.56104 19.05C8.36603 20.185 10.183 20.753 12 20.753C13.817 20.753 15.635 20.186 17.439 19.05C18.259 18.534 18.75 17.6549 18.75 16.6989V12.989L20.25 12.171V16C20.25 16.414 20.586 16.75 21 16.75C21.414 16.75 21.75 16.414 21.75 16V9.99996C21.75 9.95796 21.7321 9.91996 21.7261 9.87996C21.7301 9.81696 21.75 9.76 21.75 9.696ZM17.25 16.6989C17.25 17.1289 17.0171 17.544 16.6411 17.78C13.5191 19.743 10.4841 19.744 7.36011 17.78C6.98411 17.544 6.75098 17.1289 6.75098 16.6989V13.807L10.177 15.676C10.748 15.988 11.374 16.144 12.001 16.144C12.628 16.144 13.254 15.988 13.825 15.676L17.251 13.807V16.6989H17.25ZM19.5769 10.8299L13.105 14.3609C12.414 14.7389 11.585 14.7389 10.894 14.3609L4.42212 10.8299C4.00012 10.5999 3.74902 10.177 3.74902 9.69698C3.74902 9.21698 4.00012 8.79392 4.42212 8.56392L10.894 5.03292C11.24 4.84492 11.62 4.74996 11.999 4.74996C12.378 4.74996 12.759 4.84492 13.104 5.03292L19.5759 8.56392C19.9979 8.79392 20.249 9.21698 20.249 9.69698C20.249 10.177 19.9989 10.5999 19.5769 10.8299Z"
                      fill="#E05F3E"
                    />
                  </svg>
                </span>
                {item.content}
              </li>
            ))}

            {dataActive?.specialty && (
              <li className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10.283 16.752C9.93296 16.752 9.58301 16.662 9.26001 16.481C8.59301 16.107 8.19495 15.4281 8.19495 14.6641V9.33594C8.19495 8.57194 8.59301 7.89304 9.26001 7.51904C9.93101 7.14404 10.719 7.15906 11.373 7.56006L15.8521 10.3C16.4491 10.666 16.806 11.301 16.806 12.001C16.806 12.701 16.4491 13.3359 15.8521 13.7019L11.373 16.4419C11.034 16.6479 10.659 16.752 10.283 16.752ZM10.285 8.75C10.153 8.75 10.047 8.79688 9.99304 8.82788C9.90304 8.87788 9.69397 9.02894 9.69397 9.33594V14.6641C9.69397 14.9721 9.90304 15.1221 9.99304 15.1721C10.084 15.2231 10.323 15.3249 10.59 15.1609L15.069 12.4209C15.283 12.2899 15.306 12.083 15.306 12C15.306 11.917 15.283 11.7101 15.069 11.5801L10.59 8.84009C10.481 8.77209 10.377 8.75 10.285 8.75ZM12 22.75C6.072 22.75 1.25 17.928 1.25 12C1.25 6.072 6.072 1.25 12 1.25C17.928 1.25 22.75 6.072 22.75 12C22.75 17.928 17.928 22.75 12 22.75ZM12 2.75C6.899 2.75 2.75 6.899 2.75 12C2.75 17.101 6.899 21.25 12 21.25C17.101 21.25 21.25 17.101 21.25 12C21.25 6.899 17.101 2.75 12 2.75Z"
                      fill="#E05F3E"
                    />
                  </svg>
                </span>
                {dataActive?.specialty}
              </li>
            )}
          </ul>
          <div className="mt-4 flex items-center justify-center">
            <Link
              to={`/giao-vien/giao-vien-${dataActive?.id}+${dataActive?.slug}`}
              className="rounded-lg bg-primary-500 px-4 py-2 text-white hover:bg-primary-500/90"
            >
              Xem thông tin giáo viên
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(GiaoVienTinhHoa);

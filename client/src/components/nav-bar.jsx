import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "@/services/authService";
import { logout } from "@/features/auth/authSlice";
import { API_URL } from "@/services/apiService";
import { CiUser } from "react-icons/ci";
import NavMobile from "./nav-mobile";
import LogoTopTeacher from "./logo";
import { nav } from "@/lib/data";

export default function NavBar() {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setShow(!show);
  };

  const handleLogin = () => {
    navigate("/dang-nhap");
  };
  const handleRegister = () => {
    navigate("/dang-ki");
  };
  const handleLogout = async () => {
    try {
      await authLogout();
      sessionStorage.removeItem("accessToken");
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };
  const handleApply = () => {
    navigate("/tuyen-dung");
  };

  return (
    <>
      <div className="sticky top-0 z-[999] w-full bg-white transition-transform duration-150 ease-in-out">
        <div
          className={`w-full overflow-hidden whitespace-nowrap border-b bg-background font-medium text-primary-500 ring-inset`}
        >
          <p className="animate-marquee align-middle">
            <span className="w-max rounded-md text-xs">
              Chào mừng đến với TopGiáoViên! Khám phá các khóa học tuyệt vời và
              nhận ưu đãi đặc biệt lên đến 30%!
            </span>
          </p>
        </div>
        <nav
          className={cn(
            "nav-z mx-a mx-auto grid w-full max-w-[1380px] grid-cols-4 items-center px-2 pt-4 sm:gap-x-3 sm:px-2",
            "md:flex md:items-center md:justify-between",
          )}
        >
          <div className="z-[10000] block md:hidden">
            <NavMobile />
          </div>
          <div className="col-span-2 inline-flex justify-center md:hidden">
            <LogoTopTeacher />
          </div>
          <ul className="hidden items-center gap-x-4 md:inline-flex">
            <LogoTopTeacher />
            {nav.map((item) => {
              return (
                <li className="flex-shrink-0 list-none" key={item.id}>
                  <Link
                    to={item.url}
                    className="relative font-medium transition-all hover:text-primary-500/90"
                    target={item.url === "/e-learning" && "_blank"}
                  >
                    {item.url === pathname && (
                      <motion.span
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        transition={{ type: "tween" }}
                        layoutId="underline"
                        className={`absolute left-0 top-[102%] h-[2px] w-full bg-primary-500`}
                      />
                    )}
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="md:hidden">
            {!isAuthenticated ? (
              <Button
                className="block h-8 border-blue-900 bg-blue-900 px-1 py-1 text-white hover:bg-blue-900/90"
                variant="outline"
                onClick={handleLogin}
              >
                Đăng nhập
              </Button>
            ) : (
              <ul className="list-none items-center gap-2 lg:inline-flex">
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      onClick={handleClick}
                      className="icon-container relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img
                        loading="lazy"
                        className="h-11 w-11 rounded-full"
                        src={
                          user?.image !== null
                            ? `${API_URL}/api/file/user/${user.image}`
                            : "/avatar.svg"
                        }
                        alt="image user"
                      />
                    </button>
                  </div>
                  {show === true && (
                    <div
                      className={
                        "absolute right-0 z-10 mt-2 block w-max origin-top-right rounded-md bg-white py-1 text-center shadow-lg ring-1 ring-black ring-opacity-5 transition-transform duration-300 focus:outline-none"
                      }
                    >
                      <Link
                        to="/chinh-sua"
                        onClick={handleClick}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                      >
                        Trang cá nhân
                      </Link>
                      {user.role === "teacher" && (
                        <Link
                          to="/chinh-sua-thong-tin"
                          onClick={handleClick}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                        >
                          Chỉnh sửa trang giáo viên
                        </Link>
                      )}
                      {user.role === "teacher" && (
                        <Link
                          to="/them-chia-se"
                          onClick={handleClick}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                        >
                          Thêm chia sẻ
                        </Link>
                      )}
                      {user.role === "teacher" && (
                        <Link
                          to="/chinh-sua-chung-chi"
                          onClick={handleClick}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                        >
                          Thêm chứng chỉ
                        </Link>
                      )}
                      <Link
                        to="/doi-mat-khau"
                        onClick={handleClick}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                      >
                        Đổi mật khẩu
                      </Link>
                      <Link
                        to="/tuyen-dung"
                        onClick={handleClick}
                        className="block px-4 py-2 text-center text-sm text-gray-700 hover:bg-primary-50"
                      >
                        Ứng tuyển giáo viên
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-center text-sm text-gray-700 hover:bg-primary-50"
                      >
                        Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              </ul>
            )}
          </div>
          {!isAuthenticated ? (
            <ul className="hidden list-none items-center gap-x-2 lg:inline-flex">
              <li>
                <Button
                  variant="outline"
                  className="border-blue-900 text-blue-900"
                  onClick={handleRegister}
                >
                  Đăng kí
                </Button>
              </li>
              <li>
                <Button
                  className="border-blue-900 bg-blue-900 text-white hover:bg-blue-900/90"
                  onClick={handleLogin}
                >
                  Đăng nhập
                </Button>
              </li>
              <li>
                <Button
                  className="w-full border-blue-900 bg-slate-700 text-white hover:bg-slate-800"
                  onClick={handleApply}
                >
                  Ứng tuyển giáo viên
                </Button>
              </li>
            </ul>
          ) : (
            <ul className="hidden list-none items-center gap-2 lg:inline-flex">
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    onClick={handleClick}
                    className="icon-container relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    {user?.image !== null ? (
                      <img
                        loading="lazy"
                        className="h-11 w-11 rounded-full"
                        src={`${API_URL}/api/file/user/${user?.image}`}
                        alt="icon user"
                      />
                    ) : (
                      <CiUser className="icon-container relative flex h-11 w-11 rounded-full bg-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
                    )}
                  </button>
                </div>
                {show === true && (
                  <div
                    className={
                      "absolute right-0 z-10 mt-2 block w-max origin-top-right rounded-md bg-white py-1 text-center shadow-lg ring-1 ring-black ring-opacity-5 transition-transform duration-300 focus:outline-none"
                    }
                  >
                    <Link
                      to="/chinh-sua"
                      onClick={handleClick}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                    >
                      Trang cá nhân
                    </Link>
                    {user.role === "teacher" && (
                      <Link
                        to="/chinh-sua-thong-tin"
                        onClick={handleClick}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                      >
                        Chỉnh sửa trang giáo viên
                      </Link>
                    )}
                    {user.role === "teacher" && (
                      <Link
                        to="/them-chia-se"
                        onClick={handleClick}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                      >
                        Thêm chia sẻ
                      </Link>
                    )}
                    {user.role === "teacher" && (
                      <Link
                        to="/chinh-sua-chung-chi"
                        onClick={handleClick}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                      >
                        Thêm chứng chỉ
                      </Link>
                    )}
                    <Link
                      to="/doi-mat-khau"
                      onClick={handleClick}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                    >
                      Đổi mật khẩu
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                    >
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
              {/* 
            <div className="relative cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                className="z-10 fill-[#EAEBF1] hover:fill-slate-300"
              >
                <circle cx="22" cy="22" r="22" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-primary-600"
                fill="none"
              >
                <path
                  d="M14.1638 19.751C14.2528 19.906 14.2518 20.098 14.1618 20.252C13.7058 21.033 12.8978 21.5 11.9998 21.5C11.1018 21.5 10.2938 21.033 9.8378 20.252C9.7478 20.098 9.7468 19.906 9.8358 19.751C9.9248 19.596 10.0898 19.5 10.2698 19.5H13.7298C13.9088 19.5 14.0738 19.596 14.1638 19.751ZM20.3908 17.688C20.3718 17.665 18.4948 15.282 18.4948 12.5V8.995C18.4948 5.414 15.5808 2.5 11.9998 2.5C8.41881 2.5 5.5048 5.414 5.5048 8.995V12.5C5.5048 15.281 3.62881 17.664 3.60881 17.688C3.48881 17.838 3.46581 18.044 3.54881 18.217C3.63181 18.39 3.80681 18.5 3.99881 18.5H19.9988C20.1908 18.5 20.3658 18.39 20.4488 18.217C20.5338 18.043 20.5098 17.838 20.3908 17.688Z"
                  fill="#2B346F"
                />
              </svg>
            </div> */}

              <li>
                <Button
                  className="border-blue-900 bg-slate-700 text-white hover:bg-slate-800"
                  onClick={handleApply}
                >
                  Ứng tuyển giáo viên
                </Button>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </>
  );
}

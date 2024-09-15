import { lazy, Suspense, useState } from "react";
import { Button } from "./ui/button";

const NavMobile = lazy(() => import("./nav-mobile"));
const LogoTeacher = lazy(() => import("@/components/logo"));
import { cn } from "@/lib/utils";
import LoadingPage from "./loading";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "@/services/authService";
import { logout } from "@/features/auth/authSlice";
import { API_URL } from "@/services/apiService";

const nav = [
  { id: 1, title: "Chọn giáo viên", url: "/chon-giao-vien" },
  { id: 2, title: "Khóa học", url: "/khoa-hoc" },
  { id: 3, title: "Giới thiệu", url: "/gioi-thieu" },
  { id: 4, title: "E-learning", url: "/e-learning" },
  { id: 5, title: "Lịch học-tin tức", url: "/lich-hoc-tin-tuc" },
];

export default function NavBar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
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
    <div className="sticky top-0 z-50 w-full bg-white py-4">
      <nav
        className={cn(
          "nav-z container grid w-full grid-cols-4 items-center gap-x-4 px-2",
          "md:flex md:items-center md:justify-between",
        )}
      >
        <div className="block md:hidden">
          <Suspense
            fallback={
              <div className="flex w-full justify-center">
                <LoadingPage />
              </div>
            }
          >
            <NavMobile />
          </Suspense>
        </div>
        <div className="col-span-2 inline-flex justify-center md:hidden">
          <Suspense
            fallback={
              <div className="flex w-full justify-center">
                <LoadingPage />
              </div>
            }
          >
            <LogoTeacher />
          </Suspense>
        </div>
        <ul className="hidden items-center gap-x-4 md:inline-flex">
          <LogoTeacher />
          {nav.map((item) => {
            return (
              <li className="flex-shrink-0 list-none" key={item.id}>
                <Link to={item.url} className="w-full">
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="lg:hidden">
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
                      className="h-11 w-11 rounded-full"
                      src={
                        `${API_URL}/api/file/user/${user?.image}` ||
                        "/avatar.svg"
                      }
                      alt=""
                    />
                  </button>
                </div>

                <div
                  className={
                    (``,
                    show === true
                      ? "absolute right-0 z-10 mt-2 block w-max origin-top-right rounded-md bg-white py-1 text-center shadow-lg ring-1 ring-black ring-opacity-5 transition-transform duration-300 focus:outline-none"
                      : "hidden")
                  }
                >
                  {/* <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                  >
                    Trang cá nhân
                  </Link> */}
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
                  <img
                    className="h-11 w-11 rounded-full"
                    src={
                      `${API_URL}/api/file/user/${user?.image}` || "/avatar.svg"
                    }
                    alt="icon user"
                  />
                </button>
              </div>

              <div
                className={
                  (``,
                  show === true
                    ? "absolute right-0 z-10 mt-2 block w-max origin-top-right rounded-md bg-white py-1 text-center shadow-lg ring-1 ring-black ring-opacity-5 transition-transform duration-300 focus:outline-none"
                    : "hidden")
                }
              >
                {/* <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                >
                  Trang cá nhân
                </Link> */}
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
            </div>

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
            </div>

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
  );
}

import { lazy, Suspense } from "react";
import { Button } from "./ui/button";

const NavMobile = lazy(() => import("./nav-mobile"));
const LogoTeacher = lazy(() => import("@/components/logo"));
import { cn } from "@/lib/utils";
import LoadingPage from "./loading";
import { Link, useNavigate } from "react-router-dom";

const nav = [
  { id: 1, title: "Chọn giáo viên", url: "/chon-giao-vien" },
  { id: 2, title: "Khóa học", url: "/khoa-hoc" },
  { id: 3, title: "Giới thiệu", url: "/gioi-thieu" },
  { id: 4, title: "E-learning", url: "/e-learning" },
  { id: 5, title: "Lịch học-tin tức", url: "/lich-hoc-tin-tuc" },
];

export default function NavBar() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dang-nhap");
  };
  const handleRegister = () => {
    navigate("/dang-ki");
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
        <Button
          className="block h-8 border-blue-900 bg-blue-900 px-1 py-1 text-white hover:bg-blue-900/90 lg:hidden"
          variant="outline"
          onClick={handleLogin}
        >
          Đăng nhập
        </Button>
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
            <Button className="border-blue-900 bg-slate-700 text-white hover:bg-slate-800">
              Ứng tuyển giáo viên
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

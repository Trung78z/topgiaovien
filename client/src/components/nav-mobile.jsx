import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bars3Icon } from "@heroicons/react/24/outline";
import LogoTopTeacher from "./logo";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { nav } from "@/lib/data";

export default function NavMobile() {
  const navigate = useNavigate();
  const handleApply = () => {
    navigate("/tuyen-dung");
  };
  return (
    <Sheet key="left">
      <SheetTrigger>
        <Bars3Icon className="h-6 w-6 text-gray-500" />
      </SheetTrigger>
      <SheetContent side="left" className="z-[100000] max-w-max">
        <SheetHeader>
          <SheetTitle>
            <SheetTrigger className="w-full">
              <LogoTopTeacher />
            </SheetTrigger>
          </SheetTitle>

          {nav.map((item) => {
            return (
              <Link
                to={item.url}
                key={item.id}
                className="flex w-full items-center"
              >
                <SheetTrigger className="w-full">
                  <SheetDescription className="flex-shrink-0 font-medium">
                    {item.title}
                  </SheetDescription>
                </SheetTrigger>
              </Link>
            );
          })}
          <ul className="list-none items-center gap-x-2 space-y-2">
            <li>
              <Button
                variant="outline"
                className="border-blue-900 text-blue-900"
                size="sm"
              >
                Đăng kí
              </Button>
            </li>
            <li>
              <Button
                className="border-blue-900 bg-blue-900 text-white hover:bg-blue-900/90"
                size="sm"
              >
                Đăng nhập
              </Button>
            </li>
            <li>
              <Button
                className="border-blue-900 bg-slate-700 text-white hover:bg-slate-800"
                size="sm"
                onClick={handleApply}
              >
                Ứng tuyển giáo viên
              </Button>
            </li>
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

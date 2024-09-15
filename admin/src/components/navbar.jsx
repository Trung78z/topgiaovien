import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import LogoTopTeacher from "./logo";

import { cn } from "@/lib/utils";
import { useResolvedPath, Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { nav, navLink } from "@/lib/data";
import { authLogout } from "@/services/authService";
import { logout } from "@/features/auth/authSlice";
import { useDispatch } from "react-redux";
export default function Navbar() {
  const { pathname } = useResolvedPath();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await authLogout();
      sessionStorage.removeItem("accessToken");
      dispatch(logout());

      navigate("/dang-nhap");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex w-full items-center justify-between p-4 md:justify-end">
        <Sheet key="left">
          <SheetTrigger className="block md:hidden">
            <FaBars />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="max-h-screen min-h-screen min-w-[250px] overflow-y-auto bg-primary-500"
          >
            <div className="space-y-4 py-10">
              <SheetTitle className="flex flex-col items-center">
                <LogoTopTeacher />
              </SheetTitle>
              <SheetDescription className="mt-10 flex flex-col items-center gap-2">
                {nav.map((item) => (
                  <Button
                    className={cn(
                      "flex h-0 min-w-[80%] items-center gap-x-2 px-2 py-4 hover:bg-primary-600",
                      pathname === item.url &&
                        "bg-[#509CDB] hover:bg-[#4f88b3]",
                    )}
                    key={item?.url}
                  >
                    <SheetClose className="w-full" asChild>
                      <Link
                        to={item?.url}
                        className="flex min-w-max items-center justify-center gap-2"
                      >
                        <span
                          dangerouslySetInnerHTML={{ __html: item.icon }}
                        ></span>
                        <span> {item?.title}</span>
                      </Link>
                    </SheetClose>
                  </Button>
                ))}

                <Accordion
                  className={cn("w-full max-w-[80%] space-y-3")}
                  collapsible
                >
                  {navLink.map((itemS) => (
                    <AccordionItem value={itemS.id} key={itemS.id}>
                      <AccordionTrigger
                        className={cn(
                          "flex h-0 min-w-[80%] items-center gap-x-2 rounded-md px-2 py-4 text-background hover:bg-primary-600",
                          pathname.startsWith(itemS.url) &&
                            "bg-[#509CDB] hover:bg-[#4f88b3]",
                        )}
                      >
                        {itemS.title}
                      </AccordionTrigger>
                      {itemS.sub.map((item) => (
                        <AccordionContent
                          className={cn(
                            "mt-2 flex h-0 min-w-[80%] items-center gap-x-2 rounded-md px-2 py-4 hover:bg-primary-600",
                            pathname.endsWith(item.url) &&
                              "bg-[#509CDB] hover:bg-[#4f88b3]",
                          )}
                          key={item?.title}
                        >
                          <SheetClose className="w-full" asChild>
                            <Link
                              to={`${itemS.url}${item?.url}`}
                              className="flex flex-1 items-center justify-center text-background"
                            >
                              {item?.title}
                            </Link>
                          </SheetClose>
                        </AccordionContent>
                      ))}
                    </AccordionItem>
                  ))}
                </Accordion>
              </SheetDescription>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-x-5">
          <div dangerouslySetInnerHTML={{ __html: icon }}></div>
          <Button className="bg-[#509CDB]" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </div>
    </>
  );
}

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M16.0183 24.4999C15.8135 24.8538 15.5191 25.1476 15.1649 25.3518C14.8106 25.5561 14.4089 25.6636 14 25.6636C13.5911 25.6636 13.1894 25.5561 12.8351 25.3518C12.4809 25.1476 12.1865 24.8538 11.9817 24.4999M21.1563 12.8333C21.8342 19.1041 24.5 20.9999 24.5 20.9999H3.5C3.5 20.9999 7 18.5114 7 9.79992C7 7.82008 7.73733 5.92075 9.04983 4.52075C10.3635 3.12075 12.145 2.33325 14 2.33325C14.3932 2.33325 14.784 2.36825 15.1667 2.43825L21.1563 12.8333ZM22.1667 9.33325C23.0949 9.33325 23.9852 8.9645 24.6415 8.30813C25.2979 7.65175 25.6667 6.76151 25.6667 5.83325C25.6667 4.90499 25.2979 4.01476 24.6415 3.35838C23.9852 2.702 23.0949 2.33325 22.1667 2.33325C21.2384 2.33325 20.3482 2.702 19.6918 3.35838C19.0354 4.01476 18.6667 4.90499 18.6667 5.83325C18.6667 6.76151 19.0354 7.65175 19.6918 8.30813C20.3482 8.9645 21.2384 9.33325 22.1667 9.33325Z" stroke="#282828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <ellipse cx="6.3" cy="6.3" rx="6.3" ry="6.3" transform="matrix(-1 0 0 1 26.5996 0)" fill="#2D88D4"/>
</svg>`;

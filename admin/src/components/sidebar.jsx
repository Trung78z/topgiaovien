import { useEffect, useState } from "react";
import LogoTopTeacher from "./logo";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useResolvedPath, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { nav, navLink } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function SidebarTopTeacher() {
  const { pathname } = useResolvedPath();
  const check =
    pathname.startsWith("/giao-vien/chinh-sua") ||
    pathname.startsWith("/khoa-hoc/chinh-sua");
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (check === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [check]);
  const handleOpenSidebar = () => {
    setOpen(true);
  };
  return (
    <div
      className={cn(
        "content-scroll max-h-screen w-0 overflow-y-auto overflow-x-hidden sm:min-w-[250px]",
        check === true ? "sm:min-w-0" : "sm:min-w-[250px]",
      )}
    >
      {check === true &&
        (open === false ? (
          <div className="fixed left-4 top-4 z-20 hidden md:block">
            <Button onClick={handleOpenSidebar}>
              <FaBars />
            </Button>
          </div>
        ) : (
          ""
        ))}

      <div
        className={cn(
          "transition-transform",
          open
            ? "sticky bottom-0 left-0 top-0 hidden min-w-[250px] bg-primary-500 md:block"
            : "hidden w-0 -translate-x-full duration-700",
        )}
      >
        <div className="min-h-screen space-y-4 py-10">
          <div className="flex flex-col items-center">
            <LogoTopTeacher />
          </div>

          <div className="relative mt-10 flex flex-col items-center gap-2">
            {nav.map((item) => (
              <Button
                className={cn(
                  "flex h-0 min-w-[80%] items-center gap-x-2 px-2 py-4 text-background hover:bg-primary-600",
                  pathname.startsWith(item.url) &&
                    "bg-[#509CDB] hover:bg-[#4f88b3]",
                )}
                key={item?.url}
              >
                <Link
                  to={item?.url}
                  className="flex min-w-full items-center justify-center gap-x-2"
                >
                  <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                  <span> {item?.title}</span>
                </Link>
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
                      "flex h-0 min-w-[80%] items-center gap-x-2 rounded-md px-2 py-3 text-sm text-background hover:bg-primary-600",
                      pathname.startsWith(itemS.url) &&
                        "bg-[#509CDB] hover:bg-[#4f88b3]",
                    )}
                  >
                    {itemS.title}
                  </AccordionTrigger>
                  {itemS.sub.map((item) => (
                    <AccordionContent
                      className={cn(
                        "mt-2 flex h-0 min-w-[80%] items-center gap-x-2 rounded-md px-2 py-3 hover:bg-primary-600",
                        pathname.endsWith(item.url) &&
                          "bg-[#509CDB] hover:bg-[#4f88b3]",
                      )}
                      key={item?.title}
                    >
                      <Link
                        to={`${itemS.url}${item?.url}`}
                        className="flex flex-1 items-center justify-center text-sm text-background"
                      >
                        {item?.title}
                      </Link>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

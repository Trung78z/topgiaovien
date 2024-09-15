import { Outlet } from "react-router-dom";
import SidebarTopTeacher from "./sidebar";
import Navbar from "./navbar";

export default function Layout() {
  return (
    <>
      <div className="flex items-start">
        <SidebarTopTeacher />
        <div className="w-full overflow-x-hidden">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

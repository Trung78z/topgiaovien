import { Outlet } from "react-router-dom";

export default function LayoutCourse() {
  return (
    <div className="min-h-[85vh] p-4">
      <Outlet />
    </div>
  );
}

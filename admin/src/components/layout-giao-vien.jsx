import { Outlet } from "react-router-dom";

export default function LayoutTeacher() {
  return (
    <div className="min-h-[85vh] p-4">
      <Outlet />
    </div>
  );
}

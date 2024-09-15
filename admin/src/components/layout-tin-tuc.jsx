import { Outlet } from "react-router-dom";

export default function LayoutTinTuc() {
  return (
    <div className="min-h-[85vh] p-4">
      <Outlet />
    </div>
  );
}

import { Button } from "@/components/ui/button";
import useScrollToTop from "@/components/useScrollToTop";
import { cn } from "@/lib/utils";
import { useState } from "react";
const initialData = [
  { id: 1, title: "IELTS", active: true },
  { id: 2, title: "TOEIC", active: false },
  { id: 3, title: "TOEFL", active: false },
];
export default function Certification() {
  const [data, setData] = useState(initialData);
  useScrollToTop();

  const handleActive = (id) => {
    const updatedData = data.map((item) => ({
      ...item,
      active: item.id === id,
    }));
    setData(updatedData);
  };
  return (
    <>
      <h2 className="text-center text-4xl font-semibold">
        Bằng cấp, chứng chỉ
      </h2>

      <div className="flex flex-col items-center gap-4 p-10">
        {data.map((item, key) => (
          <Button
            key={`${item.id}+${key}`}
            onClick={() => handleActive(item.id)}
            className={cn(
              "px-10",
              item.active
                ? "bg-primary-500"
                : "rounded-md border-2 bg-background text-black hover:bg-slate-300",
            )}
          >
            {item.title}
          </Button>
        ))}
      </div>
    </>
  );
}

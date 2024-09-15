import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LoiHuaGiaoVien({ props }) {
  return (
    <>
      <div className="container space-y-6 px-2">
        <h2 className="text-center text-[28px] font-semibold">
          Lời hứa từ giáo viên
        </h2>
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
          <div className="space-y-8 rounded-br-[40px] rounded-tl-[40px] bg-primary-50 p-4 sm:p-10">
            <div className="flex items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M29.1665 5C34.2292 5 38.3332 9.10406 38.3332 14.1667C38.3332 17.906 36.3866 21.524 33.4813 22.2222C32.3607 22.4915 31.4682 23.9296 31.6599 25.5714C31.9166 27.7689 33.9038 29.989 37.8385 31.7386C38.7145 32.1281 38.3477 33.446 37.3964 33.3269C27.1421 32.0431 20.0341 25.3579 20 15.8997C19.9999 9.39508 23.8429 5 29.1665 5Z"
                  fill="#9DA2BD"
                />
                <path
                  d="M9.16655 5C14.2292 5 18.3332 9.10406 18.3332 14.1667C18.3332 17.906 16.3866 21.524 13.4813 22.2222C12.3607 22.4915 11.4682 23.9296 11.6599 25.5714C11.9166 27.7689 13.9038 29.989 17.8385 31.7386C18.7145 32.1281 18.3477 33.446 17.3964 33.3269C7.14208 32.0431 0.0341 25.3579 2.94371e-09 15.8997C-0.000122814 9.39508 3.84286 5 9.16655 5Z"
                  fill="#9DA2BD"
                />
              </svg>
              <h3 className="text-[28px] font-semibold text-primary-500">
                Lời cam kết từ giáo viên
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="29"
                viewBox="0 0 39 29"
                fill="none"
              >
                <path
                  d="M9.16887 0C14.4926 0 18.3355 4.39508 18.3354 10.9027C18.3013 20.3579 11.1933 27.0431 0.939065 28.3269C-0.0122856 28.446 -0.379115 27.1281 0.496958 26.7386C4.43161 24.989 6.41881 22.7689 6.67549 20.5714C6.86726 18.9296 5.97476 17.4915 4.85409 17.2222C1.94879 16.524 0.0022081 12.906 0.0022081 9.16667C0.0022081 4.10406 4.10626 0 9.16887 0Z"
                  fill="#9DA2BD"
                />
                <path
                  d="M29.1689 0C34.4926 0 38.3355 4.39508 38.3354 10.9027C38.3013 20.3579 31.1933 27.0431 20.9391 28.3269C19.9877 28.446 19.6209 27.1281 20.497 26.7386C24.4316 24.989 26.4188 22.7689 26.6755 20.5714C26.8673 18.9296 25.9748 17.4915 24.8541 17.2222C21.9488 16.524 20.0022 12.906 20.0022 9.16667C20.0022 4.10406 24.1063 0 29.1689 0Z"
                  fill="#9DA2BD"
                />
              </svg>
            </div>
            <ul className="list-inside list-disc space-y-2 px-2">
              {props?.commitment
                ?.trim()
                .split("\n")
                .map((line, index) => (
                  <li key={index} className="mb-1">
                    {line}
                  </li>
                ))}
            </ul>
          </div>
          <div className="content-scroll max-h-[350px] overflow-y-auto overflow-x-hidden px-2">
            <h3 className="text-2xl font-semibold text-primary-500">
              Thông báo từ giáo viên
            </h3>
            <Accordion type="single" collapsible>
              {props?.teacherNotify?.map((item) => (
                <AccordionItem value={item.id} key={item.id}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

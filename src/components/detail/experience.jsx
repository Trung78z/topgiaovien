import { Button } from "../ui/button";

export default function ExperienceTeacher() {
  return (
    <>
      <div className="container space-y-6 px-2">
        <h2 className="text-center text-[28px] font-semibold">
          Kinh nghiệm làm việc
        </h2>
        <div className="flex flex-wrap gap-x-10 sm:flex-nowrap">
          <div className="flex w-full flex-col items-center gap-y-4 sm:w-[40%]">
            <img src="/assets/doi-ngu-giao-vien/detail-giao-vien.png" alt="" />
            <p className="text-center">Sở trường</p>
            <div className="flex items-center justify-center gap-x-6">
              <Button variant="outline">IELTS nâng cao</Button>
              <Button variant="outline">Giao tiếp</Button>
              <Button variant="outline">TOEIC</Button>
            </div>
          </div>
          <div className="w-full space-y-4 sm:w-[60%]">
            <Button className="bg-primary-500 text-white">Học vấn</Button>
            <ul className="list-disc space-y-2">
              <li>Tốt nghiệp cử nhân ngành Ngôn ngữ anh tại RMIT</li>
              <li>Thạc sĩ giảng dạy ngôn ngữ</li>
            </ul>
            <Button className="bg-primary-500 text-white">Chứng chỉ</Button>
            <ul className="list-disc space-y-2">
              <li>Chứng chỉ giảng dạy Tiếng Anh quốc tế TESOL</li>
              <li>Chứng chỉ giảng dạy ngoại ngữ CELTA</li>
            </ul>
            <Button className="bg-primary-500 text-white">Kinh nghiệm</Button>
            <div className="space-y-3">
              <h3 className="text-[20px] font-semibold">
                Communication English Teacher
              </h3>
              <h4 className="text-[16px] font-medium text-neutral-555F6D">
                TALENT INSTITUTE / 10/2013 - 03/2018
              </h4>
              <p className="text-neutral-555F6D">{`Teaching Communication English for adults (From Basic to Upper-Intermediate Level) Books: Face2Face, Tactics for Listening, American English File, Let's talk Planning, preparing and delivering lessons to a range of classes. Concentrating on pronunciation, listening, and speaking skills for daily topic. Marking and providing appropriate feedback on oral and written work. Devising, writing and producing new materials, including audio and visual resources.`}</p>{" "}
              <h3 className="text-[20px] font-semibold">TOEIC Trainer</h3>
              <h4 className="text-[16px] font-medium text-neutral-555F6D">
                TALENT INSTITUTE / 01/2016 - 03/2018
              </h4>
              <p className="text-neutral-555F6D">{`Define learning objectives for language learners so that they can reach their target Inncorporate practical strategies for accomplishing classroom learning objectives Master effective teaching and learning strategies Explore dynamic classroom activities to help motivate learners`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

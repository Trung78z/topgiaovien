import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { API_URL } from "@/services/apiService";
import { EditReviewImage, getReviewImage } from "@/services/reviewIamge";
import { TabsContent } from "@radix-ui/react-tabs";
import { useEffect, useState } from "react";

export default function ReviewEditImage() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getReviewImage();
        setData(res.msg);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handleChangeImageMoment = async (e) => {
    const { id } = e.target;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("review", file);
    formData.append("type", id);

    try {
      const res = await EditReviewImage(formData);

      setData((prev) => ({
        ...prev,
        [id]: res.msg,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <Tabs
          defaultValue="account"
          orientation="vertical"
          className="min-w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="account"
              className="data-[state=active]:bg-primary-500 data-[state=active]:text-white"
            >
              Hình ảnh
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="data-[state=active]:bg-primary-500 data-[state=active]:text-white"
            >
              Cảm nhận chân thực từ học viên
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="account"
            className="flex items-center justify-center"
          >
            <div className="grid w-full grid-cols-1 gap-2 pt-6 sm:max-w-96 sm:grid-cols-2 sm:overflow-hidden sm:pt-0">
              <div className="relative col-span-1 flex flex-col items-center gap-2">
                <div className="relative h-[50%]">
                  <label htmlFor="image1" className="cursor-pointer">
                    <img
                      loading="lazy"
                      src={`${API_URL}/api/file/review/${data?.image1}`}
                      alt="Top giáo viên"
                      className="h-[200px] min-w-full rounded-lg object-cover sm:h-full"
                      width={1920}
                      height={1080}
                    />
                    <input
                      id="image1"
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      className="hidden"
                      onChange={handleChangeImageMoment}
                    />
                  </label>
                </div>
                <div className="h-[60%]">
                  <label htmlFor="image2" className="cursor-pointer">
                    <img
                      loading="lazy"
                      src={`${API_URL}/api/file/review/${data?.image2}`}
                      alt="Top giáo viên"
                      className="h-[200px] min-w-full rounded-lg object-cover sm:h-full"
                      width={1920}
                      height={1080}
                    />{" "}
                    <input
                      id="image2"
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      className="hidden"
                      onChange={handleChangeImageMoment}
                    />
                  </label>
                </div>
              </div>
              <div className="col-span-1 hidden flex-col items-center gap-2 sm:flex">
                <div className="h-[60%]">
                  {" "}
                  <label htmlFor="image3" className="cursor-pointer">
                    <img
                      loading="lazy"
                      src={`${API_URL}/api/file/review/${data?.image3}`}
                      alt="Top giáo viên"
                      className="h-[200px] min-w-full rounded-lg object-cover sm:h-full"
                      width={1920}
                      height={1080}
                    />
                    <input
                      id="image3"
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      className="hidden"
                      onChange={handleChangeImageMoment}
                    />
                  </label>
                </div>
                <div className="h-[40%]">
                  {" "}
                  <label htmlFor="image4" className="cursor-pointer">
                    <img
                      loading="lazy"
                      src={`${API_URL}/api/file/review/${data?.image4}`}
                      alt="Top giáo viên"
                      className="h-[200px] min-w-full rounded-lg object-cover sm:h-full"
                      width={1920}
                      height={1080}
                    />
                    <input
                      id="image4"
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      className="hidden"
                      onChange={handleChangeImageMoment}
                    />
                  </label>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="relative bg-[#EAEBF1]">
              <div className="container scale-[90%] space-y-1 sm:py-2">
                <div className="content-scroll grid max-h-[77vh] grid-cols-2 gap-4 overflow-y-auto md:grid-cols-2 lg:grid-cols-3">
                  <div className="col-span-2 overflow-hidden rounded-lg md:col-span-1">
                    <div className="h-[400px]">
                      {" "}
                      <label htmlFor="student1" className="cursor-pointer">
                        <img
                          src={`${API_URL}/api/file/review/${data?.student1}`}
                          alt="Image 1"
                          className="w-full object-cover"
                        />
                        <input
                          id="student1"
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          className="hidden"
                          onChange={handleChangeImageMoment}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="col-span-2 overflow-hidden rounded-lg">
                    <div className="h-[400px]">
                      {" "}
                      <label htmlFor="student2" className="cursor-pointer">
                        <img
                          src={`${API_URL}/api/file/review/${data?.student2}`}
                          alt="Image 1"
                          className="w-full object-cover"
                        />{" "}
                        <input
                          id="student2"
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          className="hidden"
                          onChange={handleChangeImageMoment}
                        />{" "}
                      </label>
                    </div>
                  </div>

                  <div className="col-span-1 overflow-hidden rounded-lg">
                    <div className="h-[300px]">
                      {" "}
                      <label htmlFor="student3" className="cursor-pointer">
                        <img
                          src={`${API_URL}/api/file/review/${data?.student3}`}
                          alt="Image 3"
                          className="h-[300px] w-full object-cover"
                        />{" "}
                        <input
                          id="student3"
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          className="hidden"
                          onChange={handleChangeImageMoment}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg">
                    <div className="h-[300px]">
                      <label htmlFor="student4" className="cursor-pointer">
                        <img
                          src={`${API_URL}/api/file/review/${data?.student4}`}
                          alt="Image 4"
                          className="h-[300px] w-full object-cover"
                        />{" "}
                        <input
                          id="student4"
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          className="hidden"
                          onChange={handleChangeImageMoment}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="col-span-2 overflow-hidden rounded-lg sm:col-span-1">
                    <div className="h-[300px]">
                      <label htmlFor="student5" className="cursor-pointer">
                        <img
                          src={`${API_URL}/api/file/review/${data?.student5}`}
                          alt="Image 5"
                          className="h-[300px] w-full object-cover"
                        />{" "}
                        <input
                          id="student5"
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          className="hidden"
                          onChange={handleChangeImageMoment}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

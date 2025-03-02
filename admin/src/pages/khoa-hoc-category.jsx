import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaEdit, FaRegEye } from "react-icons/fa";
import {
  createCourseCategory,
  createSubCourseCategory,
  deleteCourseCategory,
  deleteSubCourseCategory,
  editCourseCategory,
  getCourseCategory,
} from "@/services/courseService";
import { IoMdAddCircle } from "react-icons/io";
import { createJobSubCategory } from "@/services/jobService";
const schema = z.object({
  content: z
    .string()
    .min(1, { message: "Vui lòng nhập title cho category bài chia sẽ!" }),
});
export default function CategoryCourse() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getCourseCategory();
        setData(res.msg);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Bạn có chắc chắn muốn xóa category này?",
      html: `Hành động này không thể hoàn tác! <br />Khi xóa sẽ xóa hết tất cả các bài viết thuộc doanh mục này! <br />Vui lòng chuyển đổi doanh mục nếu bạn muốn dữ lại dữ liệu thuộc doanh mục này!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      reverseButtons: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    });
    if (result.isConfirmed) {
      try {
        await deleteCourseCategory(id);
        Swal.fire({
          icon: "success",
          title: "Xóa thành công!",
          showConfirmButton: false,
          timer: 1000,
        });
        const update = data.filter((item) => item.id !== id);
        setData(update);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Đã có lỗi xảy ra!",
          text: `Vui lòng thử lại. Chi tiết lỗi: ${error.message}`,
          showConfirmButton: true,
          confirmButtonText: "Đóng",
          timer: 5000,
        });
      }
    }
  };

  const onSubmit = async (data) => {
    try {
      const res = await createCourseCategory(data);
      if (res.success === false) {
        return Swal.fire({
          icon: "error",
          title: res.msg,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      setData((prev) => [...prev, res.msg]);
      Swal.fire({
        icon: "success",
        title: "Thêm thành công!",
        showConfirmButton: false,
        timer: 1500,
      });

      setOpen(false);
      reset({ content: "", icon: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="space-y-4 px-2">
        <h1 className="title text-center text-2xl text-primary-500">
          Danh sách category khóa học của
          <span className="text-yellow-500"> Top</span>
          GiaoVien
        </h1>
        <div className="flex items-center justify-end gap-x-2">
          <Dialog open={open} onOpenChange={(e) => setOpen(e)}>
            <DialogTrigger>
              <Button>Thêm</Button>
            </DialogTrigger>
            <DialogContent className="w-full">
              <DialogHeader>
                <DialogTitle className="text-center">
                  Thêm category khóa học
                </DialogTitle>
                <DialogDescription className="space-y-6">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex items-center justify-center"
                  >
                    <div className="container grid grid-cols-1 items-center gap-4 px-2 sm:max-w-screen-md sm:px-10 md:grid-cols-2">
                      <div className="col-span-1 sm:col-span-2">
                        <label
                          htmlFor="content"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id="content"
                          {...register("content")}
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter your content"
                        />
                        {errors.content && (
                          <p className="text-sm text-red-600">
                            {errors.content.message}
                          </p>
                        )}
                      </div>

                      <div className="col-span-1 flex flex-1 items-center justify-end gap-6 md:col-span-2">
                        <DialogClose>Hủy</DialogClose>
                        <button
                          type="submit"
                          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="content-scroll relative max-h-[60vh] min-h-[60vh] overflow-y-auto">
          <Table>
            <TableCaption>A list of your teacher TopGiaoVien .</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[16px] font-medium">ID</TableHead>
                <TableHead className="text-[16px] font-medium">Title</TableHead>
                <TableHead className="text-[16px] font-medium">
                  Option
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="max-h-[65vh]">
              {data.map((item, key) => (
                <TableRow key={item?.id}>
                  <TableCell className="font-medium">{key + 1}</TableCell>
                  <TableCell className="font-medium">{item?.content}</TableCell>
                  <TableCell className="flex flex-shrink-0 items-center gap-1 font-medium">
                    <EditCate item={item} setData={setData} />
                    <EditBanner
                      item={item}
                      dataUpdateZ={data}
                      setData={setData}
                    />

                    <button
                      onClick={() => handleDelete(item.id)}
                      disabled={data.length > 3 ? false : true}
                    >
                      <FaDeleteLeft className="h-4 w-4 text-red-500" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
const EditCate = ({ item, setData }) => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,

    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  useEffect(() => {
    setValue("content", item?.content);
  }, []);
  const onSubmit = async (data) => {
    try {
      const res = await editCourseCategory(item.id, data);
      Swal.fire({
        icon: "success",
        title: "Chỉnh sửa thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
      setData((prev) =>
        prev.map((row) => (row.id === item.id ? { ...row, ...res.msg } : row)),
      );

      setOpen(false);
      reset({ content: "", icon: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(e) => {
        setOpen(e);
      }}
    >
      <DialogTrigger>
        <FaEdit className="h-4 w-4 cursor-pointer text-green-500" />
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa Category khóa học</DialogTitle>
          <DialogDescription className="space-y-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex items-center justify-center"
            >
              <div className="container grid grid-cols-1 items-center gap-4 px-2 sm:max-w-screen-md sm:px-10 md:grid-cols-2">
                <div className="col-span-1 sm:col-span-2">
                  <label
                    htmlFor="content"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="content"
                    {...register("content")}
                    defaultValue={item?.content}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter your content"
                  />
                  {errors.content && (
                    <p className="text-sm text-red-600">
                      {errors.content.message}
                    </p>
                  )}
                </div>

                <div className="col-span-1 flex items-center justify-end gap-6 sm:col-span-2">
                  <DialogClose>Hủy</DialogClose>
                  <Button type="submit">Chỉnh sửa</Button>
                </div>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const EditBanner = ({ item, dataUpdateZ, setData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const [open, setOpen] = useState(false);
  const handleAddSubCategory = (itemId, newSubCategory) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === itemId
          ? {
              ...item,
              courseSubCategory: [...item.courseSubCategory, newSubCategory],
            }
          : item,
      ),
    );
  };

  const onSubmit = async (data) => {
    try {
      const res = await createSubCourseCategory(data, item.id);

      handleAddSubCategory(item.id, res.msg);
      Swal.fire({
        icon: "success",
        title: "Thêm thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
      reset({ content: "" });
      setOpen(false);
    } catch (error) {
      console.log(error);
      return Swal.fire({
        icon: "error",
        title: "Đã có lỗi xảy ra!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDelete = async (id) => {
    setOpen(false);
    const result = await Swal.fire({
      title: "Bạn có chắc chắn muốn xóa category này?",
      html: `Hành động này không thể hoàn tác! <br />Khi xóa sẽ xóa hết tất cả các bài viết thuộc doanh mục này! <br />Vui lòng chuyển đổi doanh mục nếu bạn muốn dữ lại dữ liệu thuộc doanh mục này!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      reverseButtons: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
      didOpen: () => {
        document.querySelector(".swal2-popup").style.zIndex = "1050"; // Đặt z-index
      },
    });
    if (result.isConfirmed) {
      try {
        await deleteSubCourseCategory(id);
        Swal.fire({
          icon: "success",
          title: "Xóa thành công!",
          showConfirmButton: false,
          timer: 1000,
        });
        const updatedSubCategory = item?.courseSubCategory.filter(
          (subItem) => subItem.id !== id,
        );

        const updated = dataUpdateZ.map((row) =>
          row.id === item.id
            ? {
                ...row,
                courseSubCategory: updatedSubCategory,
              }
            : row,
        );

        setData(updated);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Đã có lỗi xảy ra!",
          text: `Vui lòng thử lại. Chi tiết lỗi: ${error.message}`,
          showConfirmButton: true,
          confirmButtonText: "Đóng",
          timer: 5000,
        });
      }
    }
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={(e) => setOpen(e)}>
        <DialogTrigger>
          <FaRegEye className="h-4 w-4 cursor-pointer text-green-500" />
        </DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Danh sách doanh mục</DialogTitle>
            <DialogDescription className="space-y-6 pt-4">
              <div className="content-scroll relative max-h-[60vh] min-h-[60vh] overflow-y-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-[16px] font-medium">
                        ID
                      </TableHead>
                      <TableHead className="text-[16px] font-medium">
                        Title
                      </TableHead>
                      <TableHead className="text-[16px] font-medium">
                        Option
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody className="max-h-[65vh]">
                    {item?.courseSubCategory?.map((item, key) => (
                      <TableRow key={item?.id}>
                        <TableCell className="font-medium">{key + 1}</TableCell>
                        <TableCell className="font-medium">
                          {item?.content}
                        </TableCell>
                        <TableCell className="flex flex-shrink-0 items-center gap-1 font-medium">
                          <FaDeleteLeft
                            className="h-4 w-4 cursor-pointer text-red-500"
                            onClick={() => handleDelete(item.id)}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-center justify-center"
              >
                <div className="container grid grid-cols-1 items-center gap-4 px-2 sm:max-w-screen-md sm:px-10 md:grid-cols-2">
                  <div className="col-span-1 md:col-span-2">
                    <label
                      htmlFor="content"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Thêm thông tin sub tiêu đề
                    </label>
                    <input
                      type="content"
                      id="content"
                      {...register("content")}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Enter your content address"
                    />
                    {errors.content && (
                      <p className="text-sm text-red-600">
                        {errors.content.message}
                      </p>
                    )}
                  </div>

                  <div className="col-span-1 flex flex-1 items-center justify-end gap-6 md:col-span-2">
                    <DialogClose>Hủy</DialogClose>
                    <button
                      type="submit"
                      className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

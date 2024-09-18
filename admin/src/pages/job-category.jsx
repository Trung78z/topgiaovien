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
import {
  createJobCategory,
  createJobSubCategory,
  deleteJobCategory,
  deleteJobSubCategory,
  editJobCategory,
  getJobCategory,
} from "@/services/jobService";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoMdAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const schema = z.object({
  content: z
    .string()
    .min(1, { message: "Vui lòng nhập content cho khóa học!" }),
});
export default function JobCategory() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getJobCategory();
        setData(res.msg);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handleSubDelete = async (id) => {
    const result = await Swal.fire({
      title: "Bạn có chắc chắn muốn xóa sub category này?",
      text: "Hành động này không thể hoàn tác!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      reverseButtons: true,
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    });
    if (result.isConfirmed) {
      try {
        await deleteJobSubCategory(id);
        Swal.fire({
          icon: "success",
          title: "Xóa thành công!",
          showConfirmButton: false,
          timer: 1000,
        });
        const update = data.map((item) => {
          return {
            ...item,
            applicationSubCategory: item.applicationSubCategory.filter(
              (row) => row.id !== id,
            ),
          };
        });
        setData(update);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Đã có lỗi xảy ra!",
          text: `Vui lòng thử lại. Chi tiết lỗi: ${error.message}`,
          showConfirmButton: true,
          confirmButtonText: "Đóng",
          timer: 5000, // Popup sẽ tự động đóng sau 5 giây
        });
      }
    }
  };
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Bạn có chắc chắn muốn xóa category này?",
      html: `Hành động này không thể hoàn tác! <br />Khi xóa sẽ xóa hết tất cả các bài viết thuộc doanh mục này! <br />Vui lòng chuyển đổi doanh mục nếu bạn muốn dữ lại dữ liệu thuộc doanh mục này!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      reverseButtons: true,
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    });
    if (result.isConfirmed) {
      try {
        await deleteJobCategory(id);
        Swal.fire({
          icon: "success",
          title: "Xóa thành công!",
          showConfirmButton: false,
          timer: 1000,
        });

        console.log(data);
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
      const res = await createJobCategory(data);
      const update = { ...res.msg, applicationSubCategory: [] };
      setData((prev) => [...prev, update]);
      Swal.fire({
        icon: "success",
        title: "Tạo thành công!",
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

  return (
    <>
      <div className="space-y-4 px-2">
        <h1 className="title text-center text-2xl text-primary-500">
          Danh sách Category công việc của
          <span className="text-yellow-500">Top</span>
          GiaoVien
        </h1>
        <div className="flex items-center justify-end gap-x-2">
          <Dialog open={open} onOpenChange={(e) => setOpen(e)}>
            <DialogTrigger>
              <Button>Thêm</Button>
            </DialogTrigger>
            <DialogContent className="w-full">
              <DialogHeader>
                <DialogTitle>Thêm Category</DialogTitle>
                <DialogDescription className="space-y-6 pt-4">
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
                          Thông tin tiêu đề
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
        <div className="content-scroll relative max-h-[60vh] min-h-[60vh] overflow-y-auto">
          <Table>
            <TableCaption>A list of your teacher TopGiaoVien .</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[16px] font-medium">ID</TableHead>
                <TableHead className="text-[16px] font-medium">Title</TableHead>
                <TableHead className="text-[16px] font-medium">
                  Sub title
                </TableHead>

                <TableHead className="text-[16px] font-medium">
                  Option
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="max-h-[65vh]">
              {data
                .reduce((acc, category) => {
                  const subCategories = category.applicationSubCategory.map(
                    (sub) => ({
                      id: category.id,
                      category: category.content,
                      subCategory: sub.content,
                      subId: sub.id,
                    }),
                  );
                  return acc.concat(subCategories);
                }, [])
                .map((item, key) => (
                  <TableRow key={item?.subId}>
                    <TableCell className="font-medium">{key + 1}</TableCell>
                    <TableCell className="font-medium">
                      {item?.category}
                    </TableCell>
                    <TableCell className="font-medium">
                      {item?.subCategory}
                    </TableCell>

                    <TableCell className="flex flex-shrink-0 items-center gap-1 font-medium">
                      <EditCate item={item} setData={setData} />
                      <EditBanner item={item} setData={setData} />
                      <FaDeleteLeft
                        className="h-4 w-4 cursor-pointer text-red-500"
                        onClick={() => handleSubDelete(item?.subId)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              {data.map((item, key) => {
                if (item.applicationSubCategory.length < 1) {
                  return (
                    <TableRow key={item?.id}>
                      <TableCell className="font-medium">
                        {data.length + key - 2}
                      </TableCell>
                      <TableCell className="font-medium">
                        {item?.content}
                      </TableCell>
                      <TableCell className="font-medium">
                        Chưa có sub title
                      </TableCell>
                      {console.log(item)}
                      <TableCell className="flex flex-shrink-0 items-center gap-1 font-medium">
                        <EditCate item={item} setData={setData} />
                        <EditBanner item={item} setData={setData} />
                        <FaDeleteLeft
                          className="h-4 w-4 cursor-pointer text-red-500"
                          onClick={() => handleDelete(item.id)}
                        />
                      </TableCell>
                    </TableRow>
                  );
                }
                // Trả về null nếu không muốn hiển thị hàng
                return null;
              })}
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
    watch,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  useEffect(() => {
    setValue("content", item?.content);
  }, []);
  const onSubmit = async (data) => {
    try {
      const res = await editJobCategory(item.id, data);
      if (res.success === false) {
        return Swal.fire({
          icon: "error",
          title: res.msg,
          showConfirmButton: false,
          timer: 1500,
        });
      }

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
          <DialogTitle>Chỉnh sửa category bài viết</DialogTitle>
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
                    defaultValue={item?.category}
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
const EditBanner = ({ item, setData }) => {
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
              applicationSubCategory: [
                ...item.applicationSubCategory,
                newSubCategory,
              ],
            }
          : item,
      ),
    );
  };

  const onSubmit = async (data) => {
    try {
      const res = await createJobSubCategory(item.id, data);

      handleAddSubCategory(item.id, res.msg);
      Swal.fire({
        icon: "success",
        title: "Tạo thành công!",
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
  return (
    <div>
      <Dialog open={open} onOpenChange={(e) => setOpen(e)}>
        <DialogTrigger>
          <IoMdAddCircle className="h-4 w-4 cursor-pointer text-green-500" />
        </DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Thêm Sub Category</DialogTitle>
            <DialogDescription className="space-y-6 pt-4">
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
                      Thông tin sub tiêu đề
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

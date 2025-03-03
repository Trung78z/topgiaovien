import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { API_URL } from "@/services/apiService";
import {
  addCertification,
  addEducation,
  addExperience,
  addNotify,
  deleteCertification,
  deleteEducation,
  deleteExperience,
  deleteNotify,
  editTeacher,
  editTeacherImageMoment,
  getTeacherDetailEdit,
} from "@/services/teacherService";
import { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditTeacherDetail() {
  const { slug } = useParams();

  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [form, setForm] = useState({});

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getTeacherDetailEdit(slug);
        setForm(res.msg);
        return Swal.fire({
          icon: "info",
          title: "Chỉnh sửa thông tin và nhấn nút xác nhận bên dưới!",
          showConfirmButton: true,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [slug]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      setFile(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageChange2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      setFile2(file);
      reader.onloadend = () => {
        setImage2(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageChange3 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      setFile3(file);
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, linkPhilosophy: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "linkPhilosophy") {
      const videoId = value.match(/[?&]v=([^&]+)/)[1];
      setForm({ ...form, [id]: videoId });
    } else {
      setForm({ ...form, [id]: value });
    }
  };
  const handleChangeEXP = (e, key) => {
    const { id, value, name } = e.target;
    setForm({
      ...form,
      [name]: form[name].map((item) =>
        item.id === key ? { ...item, [id]: value } : item,
      ),
    });
  };
  const handleChangeForte = (e, key) => {
    const { id, value, name } = e.target;
    setForm({
      ...form,
      [name]: form[name].map((item) =>
        item.id === key ? { ...item, [id]: value } : item,
      ),
    });
  };
  const handleChangeNotify = (e, key) => {
    const { id, value, name } = e.target;
    setForm({
      ...form,
      [name]: form[name].map((item) =>
        item.id === key ? { ...item, [id]: value } : item,
      ),
    });
  };
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      for (const key in form) {
        if (Array.isArray(form[key])) {
          formData.append(key, JSON.stringify(form[key]));
        } else {
          formData.append(key, form[key]);
        }
      }
      formData.append("imageTeacher", file);
      formData.append("imageTeacher2", file2);
      formData.append("imageTeacher3", file3);
      await editTeacher(form.id, formData);
      Swal.fire({
        icon: "success",
        title: "Chỉnh sửa thông tin thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        navigate("/giao-vien");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddEducation = async (data) => {
    try {
      const res = await addEducation(data);
      setForm((prev) => ({
        ...prev,
        education: [...(prev.education || []), res.msg],
      }));
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddNotify = async (data) => {
    try {
      const res = await addNotify(data);
      setForm((prev) => ({
        ...prev,
        teacherNotify: [...(prev.teacherNotify || []), res.msg],
      }));
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddCertificate = async (data) => {
    try {
      const res = await addCertification(data);
      setForm((prev) => ({
        ...prev,
        certificate: [...(prev.certificate || []), res.msg],
      }));
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddExperience = async (data) => {
    try {
      const res = await addExperience(data);
      setForm((prev) => ({
        ...prev,
        experience: [...(prev.experience || []), res.msg],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteNotify = async (id) => {
    try {
      await deleteNotify(id);
      setForm((prev) => ({
        ...prev,
        teacherNotify: prev.teacherNotify.filter((item) => item.id !== id), // Loại bỏ bản ghi khỏi danh sách
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteEducation = async (id) => {
    try {
      await deleteEducation(id);
      setForm((prev) => ({
        ...prev,
        education: prev.education.filter((item) => item.id !== id), // Loại bỏ bản ghi khỏi danh sách
      }));
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteCertificate = async (id) => {
    try {
      await deleteCertification(id);

      setForm((prev) => ({
        ...prev,
        certificate: prev.certificate.filter((item) => item.id !== id), // Loại bỏ bản ghi khỏi danh sách
      }));
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteExperience = async (id) => {
    try {
      await deleteExperience(id);
      setForm((prev) => ({
        ...prev,
        experience: prev.experience.filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeImageMoment = async (e) => {
    const { id } = e.target;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("moment", file);
    formData.append("teacherId", form.id);

    try {
      const res = await editTeacherImageMoment(id, formData);
      setForm((prev) => ({
        ...prev,
        imageMoment: prev.imageMoment.map((item) =>
          item.id === parseInt(id) ? res.msg : item,
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {form && (
        <div className="space-y-20">
          <div className="relative bg-[#EAEBF1]">
            <div className="container flex flex-wrap items-center justify-between gap-x-2 py-10 md:flex-nowrap">
              <div className="flex w-[750px] flex-col items-center space-y-6 sm:items-start">
                <h2 className="flex items-center gap-x-2 rounded-md bg-background px-4 py-2 text-[14px] font-semibold text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.5533 19.3391L18.8258 14.1017C19.7185 12.8377 20.2407 11.3137 20.2407 9.67471C20.2407 5.3136 16.5449 1.76562 12.0021 1.76562C7.45936 1.76562 3.76354 5.3136 3.76354 9.67471C3.76354 11.3137 4.28572 12.8379 5.17866 14.1021L2.45082 19.3391C2.35095 19.531 2.36169 19.7586 2.47901 19.941C2.59651 20.1234 2.80396 20.2347 3.02737 20.2347H6.15687L8.03457 22.6382C8.1571 22.7947 8.34844 22.8857 8.5502 22.8857C8.81758 22.8857 9.02822 22.7325 9.12675 22.5435L11.7129 17.5782C11.8089 17.5815 11.9053 17.5837 12.0021 17.5837C12.099 17.5837 12.1953 17.5815 12.2913 17.5782L14.8775 22.5435C14.9757 22.7322 15.1865 22.8857 15.4541 22.8857C15.6557 22.8857 15.8472 22.7947 15.9695 22.6382L17.8474 20.2347H20.9769C21.2003 20.2347 21.4078 20.1234 21.5251 19.941C21.6426 19.7586 21.6533 19.531 21.5533 19.3391ZM8.44026 21.0947L6.99476 19.2447C6.87307 19.0889 6.68206 18.9972 6.47914 18.9972H4.0702L6.07026 15.1574C7.20591 16.2892 8.68833 17.0982 10.3519 17.4242L8.44026 21.0947ZM5.05261 9.67471C5.05261 5.996 8.17019 3.00312 12.0021 3.00312C15.8341 3.00312 18.9517 5.996 18.9517 9.67471C18.9517 13.3533 15.8341 16.3462 12.0021 16.3462C8.17019 16.3462 5.05261 13.3533 5.05261 9.67471ZM17.525 18.9972C17.3222 18.9972 17.1312 19.0889 17.0093 19.2447L15.564 21.0947L13.6522 17.4242C15.3159 17.0981 16.7985 16.2892 17.9342 15.1571L19.9339 18.997L17.525 18.9972Z"
                      fill="#E05F3E"
                    />
                    <path
                      d="M15.2921 10.7014L17.0921 8.63883C17.2348 8.47544 17.2798 8.25308 17.2111 8.05037C17.1425 7.8475 16.9699 7.69298 16.7546 7.64126L14.0356 6.98834L12.5483 4.70751C12.4305 4.52672 12.2241 4.41699 12.002 4.41699C11.7799 4.41699 11.5735 4.52672 11.4556 4.70751L9.96869 6.98834L7.24991 7.64126C7.0344 7.69298 6.86185 7.8475 6.7932 8.05021C6.72472 8.25308 6.76954 8.47544 6.91221 8.63883L8.71219 10.7014L8.5185 13.3853C8.50323 13.5981 8.60293 13.8033 8.78252 13.9287C9.05527 14.119 9.33272 14.0289 9.40238 14.0019L12.002 12.9961L14.6016 14.0021C14.8075 14.0817 15.0417 14.0541 15.2213 13.9288C15.4011 13.8035 15.5008 13.5982 15.4855 13.3855L15.2921 10.7014ZM14.1372 10.0977C14.0301 10.2205 13.9767 10.3781 13.9883 10.5378L14.1284 12.4847L12.243 11.7551C12.034 11.6742 11.8508 11.7203 11.7611 11.7551L9.87571 12.4847L10.0162 10.538C10.0276 10.3782 9.97423 10.2205 9.86715 10.0977L8.56164 8.60193L10.5337 8.12836C10.6955 8.08953 10.8351 7.99204 10.9236 7.85637L12.0022 6.20202L13.0809 7.85637C13.1694 7.99204 13.309 8.08953 13.4708 8.12836L15.4428 8.60193L14.1372 10.0977Z"
                      fill="#E05F3E"
                    />
                  </svg>
                  Topgiaovien member
                </h2>
                <div className="max-w-max">
                  <input
                    className="rounded-md border border-gray-300 px-4 py-3 text-center text-xl font-semibold leading-3 text-neutral-900 sm:inline-block sm:text-start sm:text-4xl"
                    id="name"
                    value={form?.name}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="flex flex-1 flex-col items-center sm:flex-row">
                  <input
                    className="editText"
                    id="position"
                    value={form?.position}
                    onChange={handleChange}
                  ></input>
                  <p> tại TopGiaovien</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M15.02 6.00023C6.87 9.78023 2 16.8002 2 24.5602C2 30.0102 5.39 34.0002 10.05 34.0002C14.07 34.0002 17.25 31.0602 17.25 27.1802C17.25 24.2402 15.34 21.8302 12.49 21.1002C9.21 20.3702 9.1 20.2602 9.1 18.5802C9.1 14.9102 11.85 11.4502 17.15 8.51023L15.03 5.99023L15.02 6.00023ZM35.78 6.00023C27.63 9.78023 22.76 16.8002 22.76 24.5602C22.76 30.0102 26.15 34.0002 30.81 34.0002C34.83 34.0002 38.01 31.0602 38.01 27.1802C38.01 24.2402 36.1 21.8302 33.25 21.1002C29.97 20.3702 29.86 20.2602 29.86 18.5802C29.86 14.9102 32.61 11.4502 37.91 8.51023L35.79 5.99023L35.78 6.00023Z"
                    fill="#E05F3E"
                  />
                </svg>
                <p className="text-[24px] font-medium text-neutral-555F6D">
                  <input
                    id="slogan"
                    type="text"
                    onChange={handleChange}
                    value={form?.slogan}
                    className="editText w-full sm:min-w-[400px]"
                  />
                </p>
              </div>
              <div className="relative">
                <label
                  htmlFor="image"
                  className="absolute bottom-0 cursor-pointer"
                >
                  <Button
                    size="small "
                    variant="outline"
                    disabled={true}
                    className="rounded-full border-none bg-background text-green-500 hover:text-green-600"
                  >
                    <MdEdit className="h-8 w-8" />
                  </Button>
                </label>
                <input
                  id="image"
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <img
                  src={image || `${API_URL}/api/file/teacher/${form.photoUrl}`}
                  width={442}
                  height={519}
                  className="z-10 rounded-full fill-orange-300"
                  alt="error"
                />
              </div>
            </div>
            <div className="container relative mx-auto mt-10 grid grid-cols-1 gap-x-2 gap-y-4 rounded-[14px] bg-neutral p-4 shadow-lg sm:translate-y-1/2 sm:grid-cols-2 sm:gap-x-10 md:grid-cols-4 md:p-4">
              <div className="col-span-1 flex items-center gap-x-2 md:p-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M18.7499 28.3333C18.7499 29.0233 18.1899 29.5833 17.4999 29.5833H8.33325C4.30325 29.5833 2.08325 27.3633 2.08325 23.3333V10C2.08325 5.97 4.30325 3.75 8.33325 3.75H28.3333C32.3632 3.75 34.5832 5.97 34.5832 10C34.5832 10.69 34.0232 11.25 33.3332 11.25C32.6432 11.25 32.0832 10.69 32.0832 10C32.0832 7.37167 30.9616 6.25 28.3333 6.25H8.33325C5.70492 6.25 4.58325 7.37167 4.58325 10V23.3333C4.58325 25.9617 5.70492 27.0833 8.33325 27.0833H17.4999C18.1899 27.0833 18.7499 27.6433 18.7499 28.3333ZM19.9999 12.0833H9.99992C9.30992 12.0833 8.74992 12.6433 8.74992 13.3333C8.74992 14.0233 9.30992 14.5833 9.99992 14.5833H19.9999C20.6899 14.5833 21.2499 14.0233 21.2499 13.3333C21.2499 12.6433 20.6899 12.0833 19.9999 12.0833ZM14.9999 21.25C15.6899 21.25 16.2499 20.69 16.2499 20C16.2499 19.31 15.6899 18.75 14.9999 18.75H9.99992C9.30992 18.75 8.74992 19.31 8.74992 20C8.74992 20.69 9.30992 21.25 9.99992 21.25H14.9999ZM36.8448 24.8067L36.49 25.1617L36.505 25.6266C36.505 27.0266 35.705 28.2317 34.545 28.845L36.2015 34.6566C36.3315 35.1149 36.1899 35.6083 35.8349 35.9283C35.6015 36.1383 35.3033 36.25 34.9983 36.25C34.8416 36.25 34.6849 36.2201 34.5332 36.1601L31.455 34.9268C30.16 34.4084 28.7283 34.4101 27.4267 34.9268L24.3517 36.1601C23.9051 36.3367 23.4017 36.2467 23.05 35.9283C22.695 35.6083 22.5534 35.1166 22.6834 34.6566L24.3399 28.8434C23.1816 28.23 22.3815 27.025 22.3815 25.625V25.1267L22.0401 24.8051C20.6168 23.3801 20.6151 21.06 22.0401 19.635L22.3966 19.28L22.3815 18.8149C22.3815 16.7999 24.0217 15.1583 26.0367 15.1583H26.5347L26.8533 14.8183C28.24 13.435 30.645 13.435 32.0267 14.8183L32.3799 15.1717L32.8466 15.1583C34.8616 15.1583 36.5014 16.7982 36.5014 18.8149V19.3134L36.8399 19.6334C38.2716 21.0634 38.2698 23.3817 36.8448 24.8067ZM33.0981 32.8916L32.1349 29.5117L32.0283 29.625C31.34 30.315 30.4216 30.695 29.4449 30.695C28.4682 30.695 27.5499 30.315 26.8582 29.625L26.7516 29.5184L25.7901 32.8933L26.5014 32.6082C28.403 31.8516 30.4914 31.8516 32.3848 32.6082L33.0981 32.8916ZM35.0784 21.405L34.7248 21.0516C34.2598 20.5833 34.005 19.9683 34.005 19.315V18.8167C34.005 18.1784 33.4848 17.6599 32.8498 17.6599H32.3514C31.6914 17.6599 31.0748 17.4033 30.6131 16.9383L30.2632 16.5883C29.8232 16.1483 29.0616 16.15 28.6266 16.5883L28.2751 16.9399C27.8101 17.4032 27.1951 17.6599 26.5384 17.6599H26.04C25.4033 17.6599 24.8848 18.1784 24.8848 18.8167V19.315C24.8848 19.97 24.63 20.5867 24.165 21.05L23.8081 21.405C23.3581 21.855 23.3581 22.5883 23.8097 23.0383L24.165 23.3934C24.6283 23.855 24.8848 24.4717 24.8848 25.1284V25.6266C24.8848 26.265 25.405 26.7832 26.04 26.7832H26.5384C27.1934 26.7832 27.8081 27.0383 28.2714 27.5L28.6283 27.8566C29.0616 28.2916 29.8266 28.2933 30.2616 27.8566L30.6184 27.5016C31.0767 27.04 31.6947 26.7832 32.3514 26.7832H32.8498C33.4865 26.7832 34.005 26.265 34.005 25.6266V25.1284C34.005 24.4734 34.2583 23.8583 34.7216 23.395L35.0784 23.0383C35.5284 22.5883 35.5284 21.855 35.0784 21.405ZM33.4716 22.2217C33.4716 24.4433 31.6649 26.25 29.4449 26.25C27.2232 26.25 25.4166 24.4433 25.4166 22.2217C25.4166 20 27.2232 18.1934 29.4449 18.1934C31.6649 18.195 33.4716 20.0017 33.4716 22.2217ZM30.9716 22.2217C30.9716 21.3783 30.2866 20.6934 29.4449 20.6934C28.6016 20.6934 27.9166 21.3783 27.9166 22.2217C27.9166 23.0633 28.6016 23.75 29.4449 23.75C30.2866 23.75 30.9716 23.065 30.9716 22.2217Z"
                      fill="#2B346F"
                    />
                  </svg>
                </div>
                <div className="">
                  <input
                    id="levelCa"
                    className="editText w-10 text-center font-semibold text-primary-500"
                    value={form?.levelCa}
                    onChange={handleChange}
                  ></input>
                  <input
                    id="ca"
                    className="editText px-2"
                    value={form?.ca}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div className="col-span-1 flex items-center gap-x-2 md:p-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M39.4099 6.43023C39.4099 7.27023 38.7199 7.96023 37.8799 7.96023H37.7699V21.3202H37.8799C38.7199 21.3202 39.4099 22.0002 39.4099 22.8402V23.8702C39.4099 24.7102 38.7199 25.4002 37.8799 25.4002H26.4999C27.6699 25.8702 28.4999 27.0802 28.4999 28.5102C28.4999 29.2802 28.2599 30.0102 27.8399 30.5802C29.3199 31.0602 30.3899 32.4602 30.3899 34.0902V35.9802C30.3899 36.8002 29.7099 37.4702 28.8899 37.4702H21.9399C21.3599 37.4702 20.8499 37.1402 20.5999 36.6502C20.3599 37.1402 19.8499 37.4702 19.2699 37.4702H12.32C11.7299 37.4702 11.2199 37.1402 10.9799 36.6502C10.74 37.1402 10.23 37.4702 9.63995 37.4702H2.68995C1.86995 37.4702 1.19995 36.8002 1.19995 35.9802V34.1002C1.19995 32.4602 2.26995 31.0702 3.74995 30.5802C3.31995 30.0002 3.07995 29.2802 3.07995 28.5102C3.07995 27.0802 3.90995 25.8602 5.08995 25.3902C4.12995 25.3502 3.34995 24.5502 3.34995 23.5702V23.4202C2.11995 23.1502 1.19995 22.0702 1.19995 20.7702V15.0602C1.19995 13.2402 2.66995 11.7702 4.48995 11.7702H6.16995C5.16995 10.9602 4.51995 9.65023 4.51995 8.19023C4.51995 5.74023 6.33995 3.74023 8.59995 3.74023C10.86 3.74023 12.6899 5.74023 12.6899 8.19023C12.6899 9.65023 12.04 10.9602 11.03 11.7702H13.13C13.9699 11.7702 14.6899 12.0302 15.2999 12.5802L16.2099 11.6602V7.96023H16.0899C15.2599 7.96023 14.57 7.27023 14.57 6.43023V5.40023C14.57 4.56023 15.2599 3.87023 16.0899 3.87023H37.8799C38.7199 3.87023 39.4099 4.56023 39.4099 5.40023V6.43023ZM8.58995 4.30023C6.65995 4.30023 5.08995 6.04023 5.08995 8.17023C5.08995 10.3102 6.64995 12.0502 8.58995 12.0502C8.59152 12.0502 8.59309 12.0502 8.59466 12.0502C6.66708 12.047 5.09995 10.2983 5.09995 8.17023C5.09995 6.04207 6.66724 4.30324 8.59495 4.30024C8.59328 4.30024 8.59162 4.30023 8.58995 4.30023ZM4.87995 20.7502V18.2802H4.92995C4.92995 17.9602 5.19995 17.7002 5.50995 17.7002C5.81995 17.7002 6.07995 17.9602 6.07995 18.2802V20.7502C6.07995 21.4602 5.71995 22.1302 5.12995 22.5202V23.5502C5.12995 23.6002 5.15995 23.6402 5.21995 23.6402H12.06C12.1 23.6402 12.15 23.6102 12.15 23.5502V15.9702C12.15 15.7402 12.29 15.5202 12.5 15.4302C12.72 15.3502 12.96 15.3902 13.13 15.5602L14.24 16.6702C14.53 16.9502 14.9199 17.1202 15.3299 17.1202C15.74 17.1202 16.13 16.9602 16.4199 16.6702L20.4699 12.6302C20.6499 12.4402 20.7499 12.2002 20.7499 11.9402C20.7499 11.6802 20.6499 11.4402 20.4699 11.2502C20.2899 11.0702 20.0399 10.9702 19.7799 10.9702C19.5199 10.9702 19.2799 11.0702 19.0899 11.2502L17.7899 12.5502L15.7399 14.6102C15.6299 14.7202 15.4799 14.7802 15.3199 14.7802C15.1699 14.7802 15.0199 14.7202 14.91 14.6102L14.24 13.9402C13.9399 13.6402 13.5899 13.4902 13.15 13.4902H4.49995C3.63995 13.4902 2.94995 14.1902 2.94995 15.0402V20.7502C2.94995 21.2802 3.37995 21.7202 3.91995 21.7202C4.04995 21.7202 4.17995 21.7002 4.29995 21.6402C4.64995 21.4802 4.87995 21.1302 4.87995 20.7502ZM19.7399 9.83023C20.3099 9.83023 20.8499 10.0402 21.2499 10.4502C21.6499 10.8502 21.8699 11.3802 21.8699 11.9502C21.8699 12.5202 21.6499 13.0602 21.2499 13.4602L17.9399 16.7702V21.9002H36.0199V7.38023H17.9399V10.7402L18.2399 10.4502C18.6399 10.0402 19.1699 9.83023 19.7399 9.83023ZM7.44484 30.9602C7.44321 30.9602 7.44158 30.9602 7.43995 30.9602H7.26995C8.09509 30.5228 8.66326 29.5912 8.66989 28.5192C8.66315 29.5912 8.08515 30.5228 7.26995 30.9602L7.43995 30.9602H7.44484ZM8.58995 30.5702C9.73995 30.9502 10.6399 31.8602 10.9799 33.0202V33.0302C11.33 31.8802 12.2299 30.9602 13.37 30.5802C12.9399 30.0002 12.7 29.2802 12.7 28.5102C12.7 26.8302 13.87 25.4302 15.3699 25.2102C14.8899 24.9502 14.57 24.4502 14.57 23.8702V22.8402C14.57 22.0002 15.2599 21.3202 16.0899 21.3202H16.2099V18.7502C15.9099 18.8302 15.61 18.8802 15.2999 18.8802C14.79 18.8802 14.3 18.7602 13.85 18.5402V23.5602C13.85 24.5702 13.04 25.3902 12.03 25.3902H7.24995C8.42995 25.8602 9.25995 27.0702 9.25995 28.5002C9.25995 29.2702 9.01995 30.0002 8.58995 30.5702ZM12.3173 36.8702C11.8085 36.8688 11.4 36.4594 11.4 35.9602V34.0802C11.4 32.3602 12.8 30.9602 14.52 30.9602H14.68C13.85 30.5102 13.28 29.5802 13.28 28.5002C13.28 26.9921 14.4072 25.7632 15.785 25.7602C15.7833 25.7602 15.7816 25.7602 15.7799 25.7602C14.4 25.7602 13.27 26.9902 13.27 28.5002C13.27 29.5802 13.8499 30.5102 14.67 30.9602H14.51C12.79 30.9602 11.39 32.3602 11.39 34.0802V35.9602C11.39 36.4602 11.8 36.8702 12.31 36.8702H12.3173ZM16.89 30.9602H17.0548C17.0532 30.9602 17.0516 30.9602 17.0499 30.9602L16.89 30.9602ZM18.2199 30.5702C19.3599 30.9502 20.2599 31.8602 20.5999 33.0202H20.6099C20.9599 31.8702 21.8599 30.9502 22.9999 30.5702C22.5799 29.9902 22.3399 29.2702 22.3399 28.5002C22.3399 27.0802 23.1699 25.8602 24.3399 25.3902H16.8799C18.0499 25.8602 18.8799 27.0702 18.8799 28.5002C18.8799 29.2702 18.6399 30.0002 18.2199 30.5702ZM27.9098 28.5318C27.899 29.5985 27.3418 30.5245 26.5199 30.9602C27.3319 30.5245 27.8988 29.5985 27.9098 28.5318ZM26.6849 30.9602H26.68L26.5199 30.9602H26.6799C26.6816 30.9602 26.6832 30.9602 26.6849 30.9602ZM21.9373 36.8702H21.9299C21.4299 36.8702 21.0199 36.4602 21.0199 35.9602V34.0802C21.0199 32.3602 22.4199 30.9602 24.1299 30.9602H24.2899C23.4699 30.5102 22.8999 29.5802 22.8999 28.5002C22.8999 26.9902 24.0199 25.7602 25.3999 25.7602C25.4016 25.7602 25.4033 25.7602 25.4049 25.7602C24.0272 25.7632 22.91 26.9921 22.91 28.5002C22.91 29.5802 23.4699 30.5102 24.2999 30.9602H24.1399C22.4299 30.9602 21.03 32.3602 21.03 34.0802V35.9602C21.03 36.4594 21.4385 36.8688 21.9373 36.8702ZM16.3099 23.6402H37.6699V23.0402H16.3099V23.6402ZM16.3099 6.22023H37.6699V5.62023H16.3099V6.22023ZM20.67 15.7402C20.3599 15.7402 20.1 16.0002 20.1 16.3202C20.1 16.6402 20.3599 16.8902 20.67 16.8902H33.4399C33.7499 16.8902 34.0099 16.6302 34.0099 16.3202C34.0099 16.0102 33.7499 15.7402 33.4399 15.7402H20.67ZM23.35 12.3602C23.0299 12.3602 22.77 12.6202 22.77 12.9302C22.77 13.2402 23.0299 13.5102 23.35 13.5102H33.4399C33.7499 13.5102 34.0099 13.2502 34.0099 12.9302C34.0099 12.6102 33.7499 12.3602 33.4399 12.3602H23.35ZM22.6299 8.98023C22.3099 8.98023 22.0499 9.24024 22.0499 9.56024C22.0499 9.88023 22.3099 10.1302 22.6299 10.1302H33.4399C33.7499 10.1302 34.0099 9.87024 34.0099 9.56024C34.0099 9.25023 33.7499 8.98023 33.4399 8.98023H22.6299ZM20.53 19.1202C20.2099 19.1202 19.95 19.3802 19.95 19.6902C19.95 20.0002 20.2099 20.2702 20.53 20.2702H33.4399C33.7499 20.2702 34.0099 20.0102 34.0099 19.6902C34.0099 19.3702 33.7499 19.1202 33.4399 19.1202H20.53ZM4.81995 28.5002C4.81995 27.6302 5.41995 26.9202 6.15995 26.9202C6.89995 26.9202 7.50995 27.6302 7.50995 28.5002C7.50995 29.3702 6.90995 30.0902 6.15995 30.0902C5.40995 30.0902 4.81995 29.3802 4.81995 28.5002ZM2.93995 34.0802C2.93995 33.0002 3.81995 32.1202 4.89995 32.1202H7.43995C8.50995 32.1202 9.38995 33.0002 9.38995 34.0702V35.7102H2.93995V34.0802ZM8.59995 10.8902C7.29995 10.8902 6.25995 9.67023 6.25995 8.17023C6.25995 6.67023 7.30995 5.46023 8.59995 5.46023C9.88995 5.46023 10.95 6.68023 10.95 8.17023C10.95 9.66023 9.88995 10.8902 8.59995 10.8902ZM14.44 28.5002C14.44 27.6302 15.04 26.9202 15.79 26.9202C16.54 26.9202 17.13 27.6302 17.13 28.5002C17.13 29.3702 16.53 30.0902 15.79 30.0902C15.05 30.0902 14.44 29.3802 14.44 28.5002ZM12.56 34.0802C12.56 33.0002 13.44 32.1202 14.52 32.1202H17.06C18.1299 32.1202 19.01 33.0002 19.01 34.0702V35.7102H12.56V34.0802ZM24.07 28.5002C24.07 27.6302 24.6699 26.9202 25.41 26.9202C26.15 26.9202 26.75 27.6302 26.75 28.5002C26.75 29.3702 26.15 30.0902 25.41 30.0902C24.6699 30.0902 24.07 29.3802 24.07 28.5002ZM22.2 34.0802C22.2 33.0002 23.0799 32.1202 24.15 32.1202H26.69C27.77 32.1202 28.65 33.0002 28.65 34.0702V35.7102H22.2V34.0802Z"
                      fill="#2B346F"
                    />
                  </svg>
                </div>
                <div className="">
                  <h3 className="flex-shrink-0 items-center text-[20px] font-semibold text-primary-500">
                    <input
                      id="exp"
                      type="text"
                      value={form?.exp}
                      className="editText w-10 text-center"
                      onChange={handleChange}
                    />
                    năm kinh nghiệm
                  </h3>
                  <input
                    id="optionExp"
                    className="editText"
                    value={form?.optionExp}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div className="col-span-1 flex items-center gap-x-2 md:p-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M36.25 16.1597C36.25 14.4313 35.3432 12.9046 33.8265 12.0762L23.04 6.19121C21.1383 5.15454 18.8667 5.15288 16.96 6.19121L6.1735 12.0762C4.65684 12.9046 3.75 14.4313 3.75 16.1597C3.75 17.888 4.65684 19.4146 6.1735 20.2429L8.75 21.648V27.8312C8.75 29.4246 9.56673 30.888 10.9351 31.7497C13.9434 33.6413 16.9717 34.588 20 34.588C23.0283 34.588 26.0583 33.643 29.0649 31.7497C30.4316 30.8897 31.25 29.4246 31.25 27.8312V21.648L33.75 20.2846V26.6663C33.75 27.3563 34.31 27.9163 35 27.9163C35.69 27.9163 36.25 27.3563 36.25 26.6663V16.6663C36.25 16.5963 36.2201 16.5329 36.2101 16.4663C36.2168 16.3613 36.25 16.2663 36.25 16.1597ZM28.75 27.8312C28.75 28.5479 28.3619 29.2397 27.7352 29.633C22.5319 32.9047 17.4735 32.9063 12.2668 29.633C11.6402 29.2397 11.2516 28.5479 11.2516 27.8312V23.0113L16.9617 26.1263C17.9133 26.6463 18.9566 26.9063 20.0016 26.9063C21.0466 26.9063 22.0899 26.6463 23.0416 26.1263L28.7516 23.0113V27.8312H28.75ZM32.6282 18.0495L21.8416 23.9345C20.69 24.5645 19.3084 24.5645 18.1567 23.9345L7.3702 18.0495C6.66687 17.6662 6.24837 16.9613 6.24837 16.1613C6.24837 15.3613 6.66687 14.6562 7.3702 14.2729L18.1567 8.38787C18.7334 8.07453 19.3667 7.91627 19.9984 7.91627C20.63 7.91627 21.265 8.07453 21.84 8.38787L32.6265 14.2729C33.3299 14.6562 33.7484 15.3613 33.7484 16.1613C33.7484 16.9613 33.3315 17.6662 32.6282 18.0495Z"
                      fill="#2B346F"
                    />
                  </svg>
                </div>
                <div className="">
                  <h3 className="flex-shrink-0 text-[20px] font-semibold text-primary-500">
                    Bằng cấp, chứng chỉ
                  </h3>
                  <p className="text-red-500">Xem thêm</p>
                </div>
              </div>
              <div className="col-span-1 flex items-center gap-x-2 md:p-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M20.0001 36.2504C18.9951 36.2504 18.0518 35.8587 17.3434 35.1487L15.15 32.9554C14.9167 32.7238 14.5952 32.5904 14.2669 32.5904H11.1701C9.09847 32.5904 7.41179 30.9054 7.41179 28.8321V25.7354C7.41179 25.4021 7.28184 25.0871 7.04517 24.8504L4.85177 22.6571C3.38844 21.1921 3.38844 18.8088 4.85177 17.3438L7.04517 15.1487C7.27851 14.9154 7.41179 14.5937 7.41179 14.2654V11.1687C7.41179 9.09707 9.09847 7.41045 11.1701 7.41045H14.2669C14.5952 7.41045 14.9184 7.27707 15.15 7.04541L17.3434 4.85211C18.7601 3.43211 21.2401 3.43211 22.6567 4.85211L24.8501 7.04541C25.0868 7.28207 25.4002 7.41045 25.7352 7.41045H28.83C30.9017 7.41045 32.5884 9.09541 32.5884 11.1687V14.2654C32.5884 14.5937 32.7217 14.9171 32.955 15.1487L35.1484 17.3421C36.6117 18.8071 36.6117 21.1904 35.1484 22.6554L32.955 24.8488C32.7183 25.0854 32.5884 25.3988 32.5884 25.7338V28.8304C32.5884 30.9021 30.9017 32.5888 28.83 32.5888H25.7352C25.4002 32.5888 25.0851 32.7188 24.8501 32.9538L22.6567 35.1471C21.9484 35.8588 21.0051 36.2504 20.0001 36.2504ZM11.1685 9.91045C10.4752 9.91045 9.91016 10.4754 9.91016 11.1687V14.2654C9.91016 15.2671 9.52007 16.2087 8.81173 16.9171L6.61833 19.1104C6.12833 19.6004 6.12833 20.3988 6.61833 20.8904L8.81173 23.0838C9.52007 23.7938 9.91016 24.7338 9.91016 25.7354V28.8321C9.91016 29.5254 10.4752 30.0904 11.1685 30.0904H14.265C15.2534 30.0904 16.2185 30.4904 16.9168 31.1888L19.11 33.3821C19.585 33.8571 20.4117 33.8571 20.8867 33.3821L23.0801 31.1871C23.7885 30.4788 24.73 30.0888 25.7333 30.0888H28.8284C29.5217 30.0888 30.0868 29.5238 30.0868 28.8304V25.7338C30.0868 24.7321 30.4769 23.7904 31.1852 23.0821L33.3784 20.8887C33.8684 20.3987 33.8684 19.6004 33.3784 19.1088L31.1852 16.9154C30.4769 16.2071 30.0868 15.2654 30.0868 14.2638V11.1671C30.0868 10.4738 29.5217 9.90877 28.8284 9.90877H25.7333C24.73 9.90877 23.7885 9.51878 23.0801 8.81044L20.8867 6.61709C20.4117 6.14209 19.585 6.14209 19.11 6.61709L16.9168 8.81207C16.2185 9.5104 15.2534 9.91045 14.265 9.91045H11.1685ZM34.2669 21.7738H34.2833H34.2669ZM16.7168 25.0504L25.0501 16.7171C25.5385 16.2288 25.5385 15.4371 25.0501 14.9487C24.5618 14.4604 23.7701 14.4604 23.2817 14.9487L14.9484 23.2821C14.4601 23.7704 14.4601 24.5621 14.9484 25.0504C15.1917 25.2938 15.5118 25.4171 15.8318 25.4171C16.1518 25.4171 16.4735 25.2954 16.7168 25.0504ZM17.5033 15.8338C17.5033 14.9138 16.7583 14.1671 15.8367 14.1671H15.82C14.9 14.1671 14.1617 14.9138 14.1617 15.8338C14.1617 16.7538 14.9167 17.5004 15.8367 17.5004C16.7583 17.5004 17.5033 16.7538 17.5033 15.8338ZM25.8367 24.1671C25.8367 23.2471 25.0917 22.5004 24.17 22.5004H24.1533C23.2333 22.5004 22.495 23.2471 22.495 24.1671C22.495 25.0871 23.25 25.8338 24.17 25.8338C25.0917 25.8338 25.8367 25.0871 25.8367 24.1671Z"
                      fill="#2B346F"
                    />
                  </svg>
                </div>
                <div className="">
                  <h3 className="flex-shrink-0 text-[20px] font-semibold text-primary-500">
                    Ưu đãi từ giáo viên
                  </h3>
                  <p className="italic text-red-500">
                    Trợ phí cho sinh viên
                    <input
                      id="voucher"
                      type="text"
                      value={form?.voucher}
                      onChange={handleChange}
                      className="editText w-10 text-center"
                    />
                    %
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:pt-20">
            <div className="container flex max-h-[320] flex-wrap items-center px-0 sm:max-h-[320px] sm:flex-nowrap sm:gap-x-10">
              <div className="img relative w-full sm:w-1/2">
                {form.linkPhilosophy && (
                  <span
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        linkPhilosophy: null,
                      }))
                    }
                    className="absolute top-0 flex -translate-y-20 cursor-pointer items-center text-red-500"
                  >
                    Xóa để thêm hình ảnh <MdDelete />
                  </span>
                )}
                <label
                  htmlFor=""
                  className="absolute top-0 flex w-full -translate-y-14 flex-col sm:flex-row"
                >
                  <span>Link giới thiệu giáo viên: </span>
                  <input
                    id="linkPhilosophy"
                    type="text"
                    className="editText flex-1"
                    value={form.linkPhilosophy}
                    onChange={handleChange}
                  />
                </label>
                <div className="relative h-full min-h-60 w-full rounded-xl sm:max-h-[350px] sm:min-h-[350px]">
                  {form?.linkPhilosophy && form.linkPhilosophy.length < 20 ? (
                    <iframe
                      className="h-full min-h-60 w-full rounded-xl sm:max-h-[350px] sm:min-h-[350px]"
                      src={`https://youtube.com/embed/${form.linkPhilosophy}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="relative h-full min-h-60 w-full min-w-full rounded-xl sm:max-h-[350px] sm:min-h-[350px]">
                      <label
                        htmlFor="image3"
                        className="absolute bottom-0 h-full w-full cursor-pointer"
                      >
                        Thêm hình ảnh*
                      </label>
                      <input
                        id="image3"
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        className="hidden"
                        onChange={handleImageChange3}
                      />

                      {form?.linkPhilosophy &&
                      form?.linkPhilosophy.includes("data:image") ? (
                        <img
                          src={`${form?.linkPhilosophy}`}
                          className="min-w-full rounded-sm object-cover sm:max-h-[350px] sm:min-h-[350px]"
                        />
                      ) : (
                        <img
                          src={`${API_URL}/api/file/teacher/${form?.linkPhilosophy}`}
                          className="min-w-full rounded-sm object-cover sm:max-h-[350px] sm:min-h-[350px]"
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="content w-full space-y-4 sm:w-1/2">
                <h2 className="text-center text-[28px] font-semibold sm:text-left">
                  Triết lý giáo dục
                </h2>
                <div className="space-y-4">
                  <textarea
                    id="philosophy"
                    className="rich-text content-scroll editText h-full max-h-[320px] min-h-[320px] w-full px-2 text-justify"
                    value={form?.philosophy}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="container space-y-6 px-2">
            <h2 className="text-center text-[28px] font-semibold">
              Kinh nghiệm làm việc
            </h2>
            <div className="flex flex-wrap gap-x-10 sm:flex-nowrap">
              <div className="flex w-full flex-col items-center gap-y-4 sm:w-[40%]">
                <div className="relative">
                  <label
                    htmlFor="image2"
                    className="absolute bottom-0 cursor-pointer"
                  >
                    <Button
                      size="small "
                      variant="outline"
                      disabled={true}
                      className="rounded-full border-none bg-background text-green-500 hover:text-green-600"
                    >
                      <MdEdit className="h-8 w-8" />
                    </Button>
                  </label>
                  <input
                    id="image2"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    className="hidden"
                    onChange={handleImageChange2}
                  />
                  <img
                    src={
                      image2 ||
                      `${API_URL}/api/file/teacher/${form?.photoUrl2}` ||
                      `${API_URL}/api/file/teacher/${form?.photoUrl}`
                    }
                    alt={`Hình ảnh giáo viên của ${form?.name}`}
                    className="rounded-full object-cover"
                  />
                </div>

                <p className="text-center">Sở trường</p>
                <div className="flex items-center justify-center gap-x-6">
                  {form?.teacherForte?.slice(0, 3).map((item) => (
                    <input
                      key={item.id}
                      type="text"
                      name="teacherForte"
                      id="title"
                      className="editText max-w-32"
                      value={item.title}
                      onChange={(e) => handleChangeForte(e, item.id)}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full space-y-4 pt-4 sm:w-[60%] md:pt-0">
                <div className="flex items-center gap-x-3">
                  <Button className="cursor-default bg-primary-500 text-white hover:bg-primary-500">
                    Học vấn
                  </Button>
                  <Button
                    disabled={form?.education?.length === 2 ? true : false}
                    className="bg-green-500 px-2 py-1 hover:bg-green-600"
                    size="small"
                    onClick={() => handleAddEducation(form.id)}
                  >
                    Thêm
                  </Button>
                  <p className="text-red-500">Tối đa 2</p>
                </div>

                <ul className="list-disc space-y-2 pl-4">
                  {form?.education?.map((item) => (
                    <li key={item?.id}>
                      <div className="flex items-center gap-2">
                        <Input
                          id="content"
                          name="education"
                          value={item?.content}
                          onChange={(e) => handleChangeEXP(e, item.id)}
                        ></Input>
                        <Button
                          size="small "
                          variant="outline"
                          disabled={true}
                          className="border-none text-green-500 hover:text-green-600"
                        >
                          <MdEdit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="small "
                          variant="outline"
                          className="border-none text-red-500 hover:text-red-600"
                          onClick={() => handleDeleteEducation(item.id)}
                        >
                          <MdDelete />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-x-3">
                  <Button className="cursor-default bg-primary-500 text-white hover:bg-primary-500">
                    Chứng chỉ
                  </Button>
                  <Button
                    disabled={form?.certificate?.length === 2 ? true : false}
                    className="bg-green-500 px-2 py-1 hover:bg-green-600"
                    size="small"
                    onClick={() => handleAddCertificate(form.id)}
                  >
                    Thêm
                  </Button>
                  <p className="text-red-500">Tối đa 2</p>
                </div>
                <ul className="list-disc space-y-2 pl-4">
                  {form?.certificate?.map((item) => (
                    <li key={item?.id}>
                      <div className="flex items-center gap-2">
                        <Input
                          id="content"
                          name="certificate"
                          value={item?.content}
                          onChange={(e) => handleChangeEXP(e, item.id)}
                        ></Input>
                        <Button
                          size="small "
                          variant="outline"
                          disabled={true}
                          className="border-none text-green-500 hover:text-green-600"
                        >
                          <MdEdit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="small "
                          variant="outline"
                          className="border-none text-red-500 hover:text-red-600"
                          onClick={() => handleDeleteCertificate(item.id)}
                        >
                          <MdDelete />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-x-3">
                  <Button className="cursor-default bg-primary-500 text-white hover:bg-primary-500">
                    Kinh nghiệm
                  </Button>
                  <Button
                    disabled={form?.experience?.length === 2 ? true : false}
                    className="bg-green-500 px-2 py-1 hover:bg-green-600"
                    size="small"
                    onClick={() => handleAddExperience(form.id)}
                  >
                    Thêm
                  </Button>
                  <p className="text-red-500">Tối đa 2</p>
                </div>

                <ul className="content-scroll min-h-80 list-none overflow-y-auto">
                  {form?.experience?.map((item) => (
                    <li key={item?.id} className="space-y-3">
                      <div className="flex items-center gap-2 p-1">
                        <Input
                          id="title"
                          name="experience"
                          value={item?.title}
                          className="text-[20px] font-semibold"
                          onChange={(e) => handleChangeEXP(e, item.id)}
                        ></Input>
                        <Button
                          size="small "
                          variant="outline"
                          disabled={true}
                          className="border-none text-green-500 hover:text-green-600"
                        >
                          <MdEdit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="small "
                          variant="outline"
                          className="border-none text-red-500 hover:text-red-600"
                          onClick={() => handleDeleteExperience(item.id)}
                        >
                          <MdDelete />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 p-1">
                        <Input
                          id="content"
                          name="experience"
                          value={item?.content}
                          onChange={(e) => handleChangeEXP(e, item.id)}
                          className="text-[16px] font-medium text-neutral-555F6D"
                        ></Input>
                      </div>

                      <textarea
                        id="description"
                        name="experience"
                        value={item?.description}
                        onChange={(e) => handleChangeEXP(e, item.id)}
                        className="rich-text content-scroll editText min-h-40 w-full rounded-lg p-2 text-neutral-555F6D"
                      ></textarea>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
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
                <ul className="mt-4 list-inside list-disc">
                  {form?.commitment
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
                  {form?.teacherNotify?.map((item) => (
                    <AccordionItem value={item?.id} key={item?.id}>
                      <p className="font-medium text-red-400">
                        Chỉnh title lẫn content
                      </p>
                      <AccordionTrigger>
                        <Input
                          id="title"
                          name="teacherNotify"
                          value={item?.title}
                          onChange={(e) => handleChangeNotify(e, item.id)}
                        ></Input>
                      </AccordionTrigger>
                      <AccordionContent>
                        <Input
                          id="content"
                          name="teacherNotify"
                          value={item?.content}
                          onChange={(e) => handleChangeNotify(e, item.id)}
                        ></Input>
                      </AccordionContent>
                      <div className="flex w-full justify-end">
                        <Button
                          size="small "
                          variant="outline"
                          className="w-max border-none text-red-500 hover:text-red-600"
                          onClick={() => handleDeleteNotify(item.id)}
                        >
                          <MdDelete className="h-6 w-6" />
                        </Button>
                      </div>
                    </AccordionItem>
                  ))}
                  <Button
                    className="bg-green-500 px-2 py-1 hover:bg-green-600"
                    size="small"
                    onClick={() => handleAddNotify(form.id)}
                  >
                    Thêm
                  </Button>
                </Accordion>
              </div>
              <textarea
                id="commitment"
                value={form?.commitment}
                onChange={handleChange}
                rows={10}
                cols={50}
                className="content-scroll mt-4 h-20 w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="container space-y-6 px-2">
            <h2 className="text-center text-[28px] font-semibold">
              Khoảnh khắc giữa giáo viên và học viên
            </h2>
            <p className="text-center text-green-500">
              Click vào ảnh để chỉnh sửa.
              <span className="text-red-500">
                Đối với ảnh này khi thay đổi tự động cập nhật không cần xác
                nhận!
              </span>
            </p>
            <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-5">
              <div className="relative col-span-1 p-1 sm:col-span-2">
                <button
                  disabled={true}
                  className="h-full w-full cursor-pointer"
                >
                  <label
                    htmlFor={form?.imageMoment && form.imageMoment[0]?.id}
                    className="cursor-pointer"
                  >
                    <img
                      src={
                        form?.imageMoment
                          ? `${API_URL}/api/file/moment/${form.imageMoment[0]?.image}`
                          : `${API_URL}/api/file/moment/khoanh-khac-1.png`
                      }
                      alt=""
                      className="min-h-full min-w-full rounded-md object-cover"
                    />
                    <input
                      id={form?.imageMoment && form.imageMoment[0]?.id}
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      className="hidden"
                      onChange={handleChangeImageMoment}
                    />
                  </label>
                </button>
              </div>

              <div className="col-span-1 flex flex-col gap-y-2 p-1 sm:col-span-3">
                <div className="grid h-1/2 grid-cols-5 gap-x-2">
                  <div className="relative col-span-2 h-full">
                    <button
                      disabled={true}
                      className="h-full w-full cursor-pointer"
                    >
                      <label
                        htmlFor={form?.imageMoment && form.imageMoment[1]?.id}
                        className="cursor-pointer"
                      >
                        <img
                          src={
                            form?.imageMoment
                              ? `${API_URL}/api/file/moment/${form?.imageMoment[1]?.image}`
                              : `${API_URL}/api/file/moment/khoanh-khac-2.png`
                          }
                          alt=""
                          className="min-h-full min-w-full rounded-md object-cover"
                        />
                        <input
                          id={form?.imageMoment && form.imageMoment[1]?.id}
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          className="hidden"
                          onChange={handleChangeImageMoment}
                        />
                      </label>
                    </button>
                  </div>
                  <div className="relative col-span-3 h-full">
                    <button
                      disabled={true}
                      className="h-full w-full cursor-pointer"
                    >
                      <label
                        htmlFor={form?.imageMoment && form.imageMoment[2]?.id}
                        className="cursor-pointer"
                      >
                        <img
                          src={
                            form?.imageMoment
                              ? `${API_URL}/api/file/moment/${form?.imageMoment[2]?.image}`
                              : `${API_URL}/api/file/moment/khoanh-khac-3.png`
                          }
                          alt=""
                          className="min-h-full min-w-full rounded-md object-cover"
                        />
                        <input
                          id={form?.imageMoment && form.imageMoment[2]?.id}
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          className="hidden"
                          onChange={handleChangeImageMoment}
                        />
                      </label>
                    </button>
                  </div>
                </div>
                <div className="grid h-1/2 grid-cols-5 gap-x-2">
                  <div className="relative col-span-3 h-full">
                    <button
                      disabled={true}
                      className="h-full w-full cursor-pointer"
                    >
                      <label
                        htmlFor={form?.imageMoment && form.imageMoment[3]?.id}
                        className="cursor-pointer"
                      >
                        <img
                          src={
                            form?.imageMoment
                              ? `${API_URL}/api/file/moment/${form?.imageMoment[3]?.image}`
                              : `${API_URL}/api/file/moment/khoanh-khac-4.png`
                          }
                          alt=""
                          className="min-h-full min-w-full rounded-md object-cover"
                        />
                        <input
                          id={form?.imageMoment && form.imageMoment[3]?.id}
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          className="hidden"
                          onChange={handleChangeImageMoment}
                        />
                      </label>
                    </button>
                  </div>
                  <div className="relative col-span-2 h-full">
                    <button
                      disabled={true}
                      className="h-full w-full cursor-pointer"
                    >
                      <label
                        htmlFor={form.imageMoment && form.imageMoment[4]?.id}
                        className="cursor-pointer"
                      >
                        <img
                          src={
                            form.imageMoment
                              ? `${API_URL}/api/file/moment/${form?.imageMoment[4]?.image}`
                              : `${API_URL}/api/file/moment/khoanh-khac-5.png`
                          }
                          alt=""
                          className="min-h-full min-w-full rounded-md object-cover"
                        />
                        <input
                          id={form.imageMoment && form.imageMoment[4]?.id}
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          className="hidden"
                          onChange={handleChangeImageMoment}
                        />
                      </label>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex -translate-y-20 justify-center">
            <Button
              className="bg-green-500 hover:bg-green-600"
              onClick={handleSubmit}
            >
              Hoàn tất chỉnh sửa!
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

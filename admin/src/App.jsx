import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home-page";
import Login from "./pages/dang-nhap";
import Layout from "./components/layout";
import Teacher from "./pages/giao-vien";
import ZingNews from "./pages/tin-tuc";
import LayoutTinTuc from "./components/layout-tin-tuc";
import AddZingNew from "./pages/tin-tuc-them";
import EditZingNew from "./pages/tin-tuc-edit";
import LayoutTeacher from "./components/layout-giao-vien";
import Course from "./pages/khoa-hoc";
import LayoutCourse from "./components/layout-course";
import EditCourseDetail from "./pages/khoa-hoc-edit";
import Banner from "./pages/banner";
import AddTeacher from "./pages/giao-vien-them";
import AddCourse from "./pages/khoa-hoc-them";
import CategoryPost from "./pages/post-category";
import CategoryCourse from "./pages/khoa-hoc-category";
import HomeTime from "./pages/home-time";
import JobCategory from "./pages/job-category";
import JobAdd from "./pages/job-them";
import Job from "./pages/job";
import { Helmet } from "react-helmet";
import JobEdit from "./pages/job-edit";
import ShareWithFacebook from "./pages/share";
import AddShareWithFacebook from "./pages/share-them";
import { Provider } from "react-redux";
import store from "./store";
import LayoutTop from "./components/layout-top";
import Student from "./pages/hoc-vien";
import Account from "./pages/tai-khoan";
import AddAccount from "./pages/tai-khoan-them";
import EditAccount from "./pages/tai-khoan-edit";
import Linkchat from "./pages/link-chat";
import EditTeacherDetail from "./pages/giao-vien-edit-full";
import EditTeacherStep from "./pages/giao-vien-edit-step";
import CareTeacher from "./pages/quan-tam-giao-vien";
import CareHome from "./pages/quan-tam-trang-chu";
import CareCourse from "./pages/quan-tam-khoa-hoc";
import ApplyCation from "./pages/job-ung-tuyen";
import EditStepCourse from "./pages/khoa-hoc-edit-step";
import ReviewNews from "./pages/review-news";
import AddReviewNew from "./pages/review-news-add";
import EditReviewNew from "./pages/review-news-edit";
import ReviewVideo from "./pages/review-video";
import AddReviewVideo from "./pages/review-video-add";
import EditReviewVideo from "./pages/review-video-edit";
import ReviewEditImage from "./pages/review-edit-image";

export default function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard TopGiaoVien</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="Tìm kiếm giáo viên hàng đầu tại Top Giáo Viên. Danh sách giáo viên chất lượng với kinh nghiệm dạy học đa dạng. Chọn giáo viên phù hợp cho mọi nhu cầu học tập và nâng cao kiến thức của bạn."
        />
      </Helmet>

      <Provider store={store}>
        <Routes>
          <Route element={<LayoutTop />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route>
              <Route path="/" element={<Layout />}>
                <Route path="share-facebook" element={<LayoutTinTuc />}>
                  <Route path="" element={<ShareWithFacebook />}></Route>
                  <Route path="them" element={<AddShareWithFacebook />}></Route>
                </Route>
                <Route path="dashboard" element={<Home />}></Route>
                <Route path="giao-vien" element={<LayoutTeacher />}>
                  <Route path="" element={<Teacher />}></Route>
                  <Route path="them" element={<AddTeacher />}></Route>
                  <Route
                    path="chinh-sua-thong-tin/:slug"
                    element={<EditTeacherStep />}
                  ></Route>
                  <Route
                    path="chinh-sua-profile/:slug"
                    element={<EditTeacherDetail />}
                  ></Route>
                </Route>
                <Route path="ung-tuyen" element={<LayoutTeacher />}>
                  <Route path="" element={<ApplyCation />}></Route>
                </Route>
                <Route path="quan-tam" element={<LayoutTeacher />}>
                  <Route path="" element={<CareHome />}></Route>
                  <Route path="khoa-hoc" element={<CareCourse />}></Route>
                  <Route path="giao-vien" element={<CareTeacher />}></Route>
                </Route>
                <Route path="hoc-vien" element={<LayoutTeacher />}>
                  <Route path="" element={<Student />}></Route>
                </Route>
                <Route path="tai-khoan" element={<LayoutTeacher />}>
                  <Route path="" element={<Account />}></Route>
                  <Route path="them" element={<AddAccount />}></Route>
                  <Route
                    path="chinh-sua/:slug"
                    element={<EditAccount />}
                  ></Route>
                </Route>
                <Route path="khoa-hoc" element={<LayoutCourse />}>
                  <Route path="" element={<Course />}></Route>
                  <Route path="them" element={<AddCourse />}></Route>
                  <Route
                    path="chinh-sua-step/:slug"
                    element={<EditStepCourse />}
                  ></Route>
                  <Route
                    path="chinh-sua/:slug"
                    element={<EditCourseDetail />}
                  ></Route>
                </Route>
                <Route path="tin-tuc" element={<LayoutTinTuc />}>
                  <Route path="" element={<ZingNews />}></Route>
                  <Route path="them" element={<AddZingNew />}></Route>
                  <Route
                    path="chinh-sua/:slug"
                    element={<EditZingNew />}
                  ></Route>
                </Route>
                <Route path="link-chat" element={<LayoutTinTuc />}>
                  <Route path="" element={<Linkchat />}></Route>
                  <Route path="them" element={<AddZingNew />}></Route>
                  <Route
                    path="chinh-sua/:slug"
                    element={<EditZingNew />}
                  ></Route>
                </Route>
                <Route path="trang-chu" element={<LayoutTinTuc />}>
                  <Route path="banner" element={<Banner />}></Route>
                  <Route path="time" element={<HomeTime />}></Route>
                </Route>
                <Route path="category" element={<LayoutTinTuc />}>
                  <Route
                    path="category-post"
                    element={<CategoryPost />}
                  ></Route>
                  <Route
                    path="category-course"
                    element={<CategoryCourse />}
                  ></Route>
                </Route>
                <Route path="reviews" element={<LayoutTinTuc />}>
                  <Route path="video" element={<LayoutTinTuc />}>
                    <Route path="" element={<ReviewVideo />}></Route>
                    <Route path="them" element={<AddReviewVideo />}></Route>
                    <Route
                      path="chinh-sua/:slug"
                      element={<EditReviewVideo />}
                    ></Route>{" "}
                  </Route>
                  <Route path="image" element={<ReviewEditImage />}></Route>
                  <Route path="news" element={<LayoutTinTuc />}>
                    <Route path="" element={<ReviewNews />}></Route>
                    <Route path="them" element={<AddReviewNew />}></Route>
                    <Route
                      path="chinh-sua/:slug"
                      element={<EditReviewNew />}
                    ></Route>
                  </Route>
                </Route>
                <Route path="cong-viec" element={<LayoutTinTuc />}>
                  <Route path="category" element={<JobCategory />}></Route>
                  <Route path="" element={<LayoutTinTuc />}>
                    <Route path="tuyen-nhan-vien" element={<Job />}></Route>
                    <Route
                      path="tuyen-nhan-vien/them"
                      element={<JobAdd />}
                    ></Route>
                    <Route
                      path="tuyen-nhan-vien/chinh-sua/:slug"
                      element={<JobEdit />}
                    ></Route>
                  </Route>
                  <Route
                    path="category-course"
                    element={<CategoryCourse />}
                  ></Route>
                  <Route path="time" element={<HomeTime />}></Route>
                </Route>
              </Route>
            </Route>
            <Route path="dang-nhap" element={<Login />}></Route>
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingPage from "./components/loading";
import ScheduleNews from "./pages/schedule-news";
import ScheduleNewsDetail from "./pages/schedule-news-detail";
import { Helmet } from "react-helmet";
import ChatSupport from "./components/chat-support";
import store from "./store";
import { Provider } from "react-redux";
import LayoutTop from "./components/layout";
import ELearning from "./pages/e-learing";
import NotFoundPage from "./pages/NotFoundPage";
import ChangePassword from "./pages/auth-change-page";
const ApplicationTeacherDetail = lazy(
  () => import("./pages/tuyen-dung-detail"),
);
const ApplicationTeacher = lazy(() => import("./pages/tuyen-dung"));
const CourseDetail = lazy(() => import("./pages/course-detail"));
const Introduce = lazy(() => import("./pages/introduce"));
const CourseTopTeacher = lazy(() => import("@/pages/course"));
const NavBar = lazy(() => import("./components/nav-bar"));
const LoginPage = lazy(() => import("./pages/login-page"));
const HomePage = lazy(() => import("./pages/home-page"));
const RegisterPage = lazy(() => import("./pages/register-page"));
const FooterPage = lazy(() => import("@/components/footer"));
const SelectTeacher = lazy(() => import("@/pages/select-teacher"));
const TeacherDetail = lazy(() => import("@/pages/tearch-detail"));

export default function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Top Giáo Viên Tốt Nhất 2024 - Danh Sách và Đánh Giá</title>
        <meta
          name="description"
          content="Khám phá danh sách top giáo viên tốt nhất năm 2024 với đánh giá chi tiết và thông tin liên hệ. Tìm kiếm giáo viên chất lượng cao để nâng cao trình độ học tập của bạn."
        />

        <link rel="canonical" href="http://localhost:3000/" />
        <meta property="og:title" content="Top Giáo Viên Tốt Nhất 2024" />
        <meta
          property="og:description"
          content="Khám phá danh sách top giáo viên tốt nhất năm 2024 với đánh giá chi tiết và thông tin liên hệ."
        />
        <meta property="og:image" content="https://example.com/giao-vien.jpg" />
        <meta property="og:url" content="https://example.com/top-giao-vien" />
      </Helmet>
      <Provider store={store}>
        <Suspense
          fallback={
            <div className="flex min-h-screen w-full items-center justify-center">
              <LoadingPage />
            </div>
          }
        >
          <NavBar />
          <div className="mt-2 min-h-screen w-full">
            <Routes>
              <Route path="/" element={<LayoutTop />}>
                <Route path="" element={<HomePage />} />
                <Route path="dang-ki" element={<RegisterPage />} />
                <Route path="doi-mat-khau" element={<ChangePassword />} />

                <Route path="dang-nhap" element={<LoginPage />} />
                <Route path="chon-giao-vien" element={<SelectTeacher />} />
                <Route path="giao-vien/:id" element={<TeacherDetail />} />
                <Route path="khoa-hoc" element={<CourseTopTeacher />} />
                <Route path="khoa-hoc/:id" element={<CourseDetail />} />
                <Route path="e-learning" element={<ELearning />} />
                <Route path="gioi-thieu" element={<Introduce />} />
                <Route path="lich-hoc-tin-tuc" element={<ScheduleNews />} />
                <Route
                  path="lich-hoc-tin-tuc/:id"
                  element={<ScheduleNewsDetail />}
                />
                <Route path="tuyen-dung" element={<ApplicationTeacher />} />
                <Route
                  path="tuyen-dung/:id"
                  element={<ApplicationTeacherDetail />}
                />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </div>

          <div className="mt-6">
            <FooterPage />
          </div>
        </Suspense>
        <ChatSupport />
      </Provider>
    </>
  );
}

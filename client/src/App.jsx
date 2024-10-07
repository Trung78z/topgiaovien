import { Routes, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import NavBar from "./components/nav-bar";
import ChatSupport from "./components/chat-support";
import ErrorBoundary from "./ErrorBoundary";
import ScheduleNews from "./pages/schedule-news";
import ScheduleNewsDetail from "./pages/schedule-news-detail";
import LayoutTop from "./components/layout";
import ELearning from "./pages/e-learning";
import NotFoundPage from "./pages/NotFoundPage";
import ChangePassword from "./pages/auth-change-page";
import EditProfile from "./pages/profile-edit";
import EditTeacherDetail from "./pages/teacher-edit";
import AddShareTeacher from "./pages/teacher-add-share";
import Certification from "./pages/chung-chi";
import ForgetPassword from "./pages/auth-change-forget";
import VerifyToken from "./pages/auth-change-verify";
import EditTeacherStep from "./pages/teacher-edit-step";
import EditCertification from "./pages/teacher-certification-edit";

import ApplicationTeacherDetail from "./pages/tuyen-dung-detail";

import ApplicationTeacher from "./pages/tuyen-dung";
import CourseDetail from "./pages/course-detail";
import Introduce from "./pages/introduce";
import CourseTopTeacher from "@/pages/course";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";
import RegisterPage from "./pages/register-page";
import FooterPage from "@/components/footer";
import SelectTeacher from "@/pages/select-teacher";
import TeacherDetail from "@/pages/tearch-detail";
import Reviews from "./pages/reviews";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <ErrorBoundary>
          <NavBar />
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<LayoutTop />}>
                <Route path="" element={<HomePage />} />
                <Route path="dang-ki" element={<RegisterPage />} />
                <Route path="chinh-sua" element={<EditProfile />} />
                <Route path="doi-mat-khau" element={<ChangePassword />} />
                <Route path="quen-mat-khau" element={<ForgetPassword />} />
                <Route path="xac-thuc" element={<VerifyToken />} />
                <Route
                  path="chinh-sua-thong-tin"
                  element={<EditTeacherStep />}
                />
                <Route
                  path="chinh-sua-profile"
                  element={<EditTeacherDetail />}
                />
                <Route
                  path="chinh-sua-chung-chi"
                  element={<EditCertification />}
                />
                <Route path="them-chia-se" element={<AddShareTeacher />} />
                <Route path="dang-nhap" element={<LoginPage />} />
                <Route path="chung-chi" element={<Certification />} />
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
                <Route path="reviews" element={<Reviews></Reviews>} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </div>
          <div className="mt-6">
            <FooterPage />
          </div>

          <ChatSupport />
        </ErrorBoundary>
      </Provider>
    </>
  );
}

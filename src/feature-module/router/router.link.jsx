// router.link.jsx
import { all_routes } from "./all_routes";
import Login from "@/feature-module/auth/login/Login";
import ForgotPassword from "@/feature-module/auth/forgotPassword/ForgotPassword";
import Register from "@/feature-module/auth/register/Register";
import ResetPassword from "@/feature-module/auth/resetPassword/resetPassword";
import ResetPasswordSuccess from "@/feature-module/auth/resetPasswordSuccess/resetPasswordSuccess";
import TeacherDashboard from "@/feature-module/mainMenu/teacherDashboard";
import AdminDashboard from "@/feature-module/mainMenu/adminDashboard";
import ParentDashboard from "@/feature-module/mainMenu/parentDashboard";
import StudentDashboard from "@/feature-module/mainMenu/studentDashboard";

const routes = all_routes;

// ✅ Public routes (no login required)
export const publicRoutes = [
  { path: routes.login, element: <Login /> },
  { path: routes.forgotPassword, element: <ForgotPassword /> },
  { path: routes.register, element: <Register /> },
  { path: routes.resetPassword, element: <ResetPassword /> },
  { path: routes.resetPasswordSuccess, element: <ResetPasswordSuccess /> },
];

// ✅ Protected routes (login required)
export const authRoutes = [
  { path: routes.adminDashboard, element: <AdminDashboard /> },
  { path: routes.teacherDashboard, element: <TeacherDashboard /> },
  { path: routes.parentDashboard, element: <ParentDashboard /> },
  { path: routes.studentDashboard, element: <StudentDashboard /> },
];

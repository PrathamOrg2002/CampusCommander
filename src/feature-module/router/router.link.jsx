import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import Login from "@/feature-module/auth/login/Login";
import ForgotPassword from "@/feature-module/auth/forgotPassword/ForgotPassword";
import Register from "@/feature-module/auth/register/Register";
import ResetPassword from "@/feature-module/auth/resetPassword/resetPassword";
import ResetPasswordSuccess from "@/feature-module/auth/resetPasswordSuccess/resetPasswordSuccess";
import TeacherDashboard from "@/feature-module/mainMenu/teacherDashboard";
const routes = all_routes;
export const publicRoutes = [
  {
    path: routes.teacherDashboard,
    element: <TeacherDashboard />,
    route: Route,
  },
];
export const authRoutes = [
  {
    path: routes.login,
    element: <Login />,
    route: Route,
  },
  {
    path: routes.forgotPassword,
    element: <ForgotPassword />,
    route: Route,
  },
  {
    path: routes.register,
    element: <Register />,
    route: Route,
  },
  {
    path: routes.resetPassword,
    element: <ResetPassword />,
    route: Route,
  },{
    path: routes.resetPasswordSuccess,
    element: <ResetPasswordSuccess />,
  }
];
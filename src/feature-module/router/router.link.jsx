import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import Login from "@/feature-module/auth/login/Login";
import ForgotPassword from "@/feature-module/auth/forgotPassword/ForgotPassword";
import Register from "@/feature-module/auth/register/Register";

const routes = all_routes;
export const publicRoutes = {
  login: "/",
  adminDashboard: "/admin-dashboard",
  forgotPassword: "/forgot-password"
};
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
  }
];
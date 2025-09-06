import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import Login from "src/feature-module/auth/login/Login";
import ForgotPassword from "src/feature-module/auth/forgotPassword/ForgotPassword";

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
  }
];
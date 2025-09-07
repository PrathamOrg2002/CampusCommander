import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
<<<<<<< Updated upstream
import Login from "../auth/login/login";
import ForgotPassword from "../auth/forgotPassword/ForgotPassword";
=======
import Login from "@/feature-module/auth/login/Login";
import ForgotPassword from "@/feature-module/auth/forgotPassword/ForgotPassword";
import Register from "@/feature-module/auth/register/Register";
import ResetPassword from "../auth/resetPassword/resetPassword";
import ResetPasswordSuccess from "../auth/resetPasswordSuccess/resetPasswordSuccess";


<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  }
];
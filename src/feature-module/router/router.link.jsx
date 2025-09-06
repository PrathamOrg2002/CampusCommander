import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import Login from "../auth/login/login";
const routes = all_routes;
export const publicRoutes = {
    login: "/",
    adminDashboard: "/admin-dashboard",
  };
export const authRoutes = [
    {
        path: routes.login,
        element: <Login />,
        route: Route,
    }
];
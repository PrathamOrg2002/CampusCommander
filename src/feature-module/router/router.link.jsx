import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import Login from "@/feature-module/auth/login/Login";
import ForgotPassword from "@/feature-module/auth/forgotPassword/ForgotPassword";
import Register from "@/feature-module/auth/register/Register";
import ResetPassword from "@/feature-module/auth/resetPassword/resetPassword";
import ResetPasswordSuccess from "@/feature-module/auth/resetPasswordSuccess/resetPasswordSuccess";
import TeacherDashboard from "@/feature-module/mainMenu/teacherDashboard";
import AdminDashboard from "@/feature-module/mainMenu/adminDashboard";
import ParentDashboard from "@/feature-module/mainMenu/parentDashboard";
import StudentDasboard from "@/feature-module//mainMenu/studentDashboard";

//import ParentList from "../peoples/parent/parent-list";



const routes = all_routes;
export const publicRoutes = [
  {
    path: routes.teacherDashboard,
    element: <TeacherDashboard />,
    route: Route,
  }, 
  {
    path: routes.parentDashboard,
    element: <ParentDashboard />,
    route: Route,
  },
   {
    path: routes.adminDashboard,
    element: <AdminDashboard />,
    route: Route,
  },
  {
    path: routes.studentDashboard,
    element: <StudentDasboard />,
    route: Route,
  },



// {
//     path: routes.parentGrid,
//     element: <ParentGrid />,
//   },
//   {
//     path: routes.parentList,
//     element: <ParentList />,
//   },
















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
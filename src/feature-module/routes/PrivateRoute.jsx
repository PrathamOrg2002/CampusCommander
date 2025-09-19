// src/feature-module/routes/PrivateRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token"); // or get from Redux
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;

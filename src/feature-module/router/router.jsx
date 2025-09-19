import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, authRoutes } from "./router.link";
import Feature from "../feature";          // layout for dashboard pages
import AuthFeature from "../authFeature";  // layout for login/register pages
import PrivateRoute from "@/feature-module/routes/PrivateRoute";

const ALLRoutes = () => {
  return (
    <Routes>
      {/* Public routes (login, register, etc.) */}
      <Route element={<AuthFeature />}>
        {publicRoutes.map((r, idx) => (
          <Route path={r.path} element={r.element} key={idx} />
        ))}
      </Route>

      {/* Protected routes (dashboard, etc.) */}
      <Route element={<PrivateRoute />}>
        <Route element={<Feature />}>
          {authRoutes.map((r, idx) => (
            <Route path={r.path} element={r.element} key={idx} />
          ))}
        </Route>
      </Route>

      {/* Catch all unknown routes */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default ALLRoutes;

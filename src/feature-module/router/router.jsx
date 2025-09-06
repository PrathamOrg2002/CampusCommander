import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { authRoutes, publicRoutes } from "./router.link";
import AuthFeature from "../authFeature";
import Login from "../auth/login/Login";
const ALLRoutes = () => {
    return (
      <>
        <Routes>
          {/* Default Login Route */}
          <Route path="/" element={<Login />} />
  
          {/* Public Routes wrapped with Feature layout */}
          {/* <Route element={<Feature />}>
            {publicRoutes.map((route, idx) => (
              <Route path={route.path} element={route.element} key={idx} />
            ))}
          </Route> */}
  
          {/* Auth Routes wrapped with AuthFeature layout */}
          <Route element={<AuthFeature />}>
            {authRoutes.map((route, idx) => (
              <Route path={route.path} element={route.element} key={idx} />
            ))}
          </Route>
        </Routes>
      </>
    );
  };
  
  export default ALLRoutes;
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "../InitialPage/header";
import { authRoute, publicRoutes } from "./router.link";
import Signin from "../InitialPage/signin";
import { useSelector } from "react-redux";
import Sidebar from "../InitialPage/sidebar";

// ProtectedRoute component to manage access to authenticated routes
const ProtectedRoute = ({ element }) => {
  const authState = useSelector((state) => state.user.authState);
  return authState ? element : <Navigate to="/signin" />;
};

const AllRoutes = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Routes>
              {/* Public routes */}
              {publicRoutes.map((route) => (
                <Route
                  path={route.path}
                  element={route.element}
                  key={route.id}
                />
              ))}

              {/* Authenticated routes */}
              {authRoute.map((route) => (
                <Route
                  path={route.path}
                  element={<ProtectedRoute element={route.element} />}
                  key={route.id}
                />
              ))}

              {/* Redirect for signin route */}
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRoutes;

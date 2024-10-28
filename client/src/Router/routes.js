import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import Header from "../InitialPage/header";
import { authRoute, publicRoutes } from "./router.link";
import Signin from "../InitialPage/signin";
import { useSelector } from "react-redux";
import Sidebar from "../InitialPage/sidebar";

const ProtectedRoute = ({ element }) => {
  const authState = useSelector((state) => state.user.authState);
  return authState ? element : <Navigate to="/signin" />;
};

const AllRoutes = () => {
  return (
    <div
      className="container-fluid"
      style={{ padding: 0, height: "100vh", overflow: "hidden" }}
    >
      <div className="row" style={{ height: "100%" }}>
        <div className="col-md-2" style={{ padding: 0, overflowY: "auto" }}>
          <Sidebar />
        </div>
        <div
          className="col-md-10"
          style={{ padding: 0, display: "flex", flexDirection: "column" }}
        >
          {/* <Header /> */}
          <div style={{ flex: 1, overflowY: "auto" }}>
            <Routes>
              {publicRoutes.map((route) => (
                <Route
                  path={route.path}
                  element={route.element}
                  key={route.id}
                />
              ))}
              {authRoute.map((route) => (
                <Route
                  path={route.path}
                  element={<ProtectedRoute element={route.element} />}
                  key={route.id}
                />
              ))}
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRoutes;

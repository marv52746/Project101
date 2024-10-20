// src/Header.js
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../core/services/slices/userSlice";

import Notification from "../core/notifications/notification"; // Adjust the path as necessary
import { showNotification } from "../core/services/slices/notificationSlice";

import logo from "../images/bakerr.png"; // Adjust the path to your logo image

const Header = () => {
  const authState = useSelector((state) => state.user.authState);
  const notification = useSelector((state) => state.notification.isVisible);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(
      showNotification({
        message: "Logout successfully!",
        type: "success",
      })
    );
  };

  return (
    <header style={headerStyle}>
      {notification && <Notification />}

      <Link to="/">
        <img
          src={logo} // Update this with the path to your logo image
          alt="Brand Logo"
          style={logoStyle} // Optional: add styles for the logo
        />
      </Link>
      <nav style={navStyle}>
        {authState && (
          <>
            <Link to="/profile" style={linkStyle}>
              Profile
            </Link>
            <Link to="/" style={linkStyle} onClick={handleLogout}>
              Logout
            </Link>
          </>
        )}

        {!authState && (
          <Link to="/signin" style={linkStyle}>
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

// Simple styling for the header and nav
const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "#f4f4f4",
  borderBottom: "1px solid #ccc",
};

const navStyle = {
  display: "flex",
  gap: "20px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#333",
};

const logoStyle = {
  height: "50px", // Adjust as needed
  width: "auto", // Maintain aspect ratio
};

export default Header;

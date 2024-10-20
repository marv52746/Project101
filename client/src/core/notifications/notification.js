// src/components/Notification.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideNotification } from "../services/slices/notificationSlice"; // Adjust the path as necessary

const Notification = () => {
  const dispatch = useDispatch();
  const { isVisible, message, type } = useSelector(
    (state) => state.notification
  );

  useEffect(() => {
    if (isVisible) {
      // Automatically hide the notification after 3 seconds
      const timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);

      // Clean up the timer on unmount or when visibility changes
      return () => clearTimeout(timer);
    }
  }, [isVisible, dispatch]);

  if (!isVisible) return null; // Don't render if not visible

  return (
    <div style={{ ...notificationStyles.base, ...notificationStyles[type] }}>
      <span>{message}</span>
      <button
        onClick={() => dispatch(hideNotification())}
        style={notificationStyles.closeButton}
      >
        &times;
      </button>
    </div>
  );
};

const notificationStyles = {
  base: {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "15px 25px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    zIndex: 1000,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Shadow for depth
    transition: "all 0.3s ease", // Smooth transition
    fontFamily: "'Arial', sans-serif", // Font styling
    fontSize: "1rem",
  },
  success: {
    backgroundColor: "#d4edda",
    color: "#155724",
  },
  error: {
    backgroundColor: "#f8d7da",
    color: "#721c24",
  },
  warning: {
    backgroundColor: "#fff3cd",
    color: "#856404",
  },
  info: {
    backgroundColor: "#cce5ff",
    color: "#004085",
  },
  closeButton: {
    marginLeft: "15px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1.5rem",
    color: "inherit", // Match color with notification
    transition: "color 0.3s ease", // Smooth color transition
  },
  closeButtonHover: {
    color: "#000", // Change color on hover
  },
};

export default Notification;

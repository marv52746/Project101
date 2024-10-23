import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../core/services/slices/userSlice";
import Notification from "../core/notifications/notification";
import { showNotification } from "../core/services/slices/notificationSlice";
import logo from "../images/bakerr.png";
import { setTheme } from "../core/services/slices/themeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const authState = useSelector((state) => state.user.authState);
  const notification = useSelector((state) => state.notification.isVisible);
  const themeName = useSelector((state) => state.theme.themeName);
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

  const toggleTheme = () => {
    const newTheme = themeName === "dark-theme" ? "light-theme" : "dark-theme";
    dispatch(setTheme(newTheme));
  };

  return (
    <header className={`header ${themeName}`}>
      {notification && <Notification />}
      <div className="header-content">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Brand Logo" className="logo" />
        </Link>
        <nav className="nav">
          {authState ? (
            <>
              <Link to="/profile" className={`link ${themeName}`}>
                Profile
              </Link>
              <Link
                to="/"
                className={`link ${themeName}`}
                onClick={handleLogout}
              >
                Logout
              </Link>
            </>
          ) : (
            <Link to="/signin" className={`link ${themeName}`}>
              Login
            </Link>
          )}
          <button className="theme-toggle" onClick={toggleTheme}>
            <FontAwesomeIcon
              icon={themeName === "dark-theme" ? faSun : faMoon}
            />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// src/Sidebar.js
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingCart,
  faBreadSlice,
  faChevronDown,
  faChevronUp,
  faChartLine,
  faBoxOpen,
  faUser,
  faSignOutAlt,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../core/services/slices/themeSlice";
import { all_routes } from "../Router/all_routes";
import { logoutUser } from "../core/services/slices/userSlice";
import { showNotification } from "../core/services/slices/notificationSlice";
// import { toggleTheme } from "./themeSlice"; // Import your theme toggle action

const Sidebar = () => {
  const themeName = useSelector((state) => state.theme.themeName);
  const authState = useSelector((state) => state.user.authState);
  const dispatch = useDispatch();

  const [openSections, setOpenSections] = useState({
    services: true,
    portfolio: true,
  });

  const toggleTheme = () => {
    const newTheme = themeName === "dark-theme" ? "light-theme" : "dark-theme";
    dispatch(setTheme(newTheme));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(
      showNotification({
        message: "Logout successfully!",
        type: "success",
      })
    );
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const navItems = [
    { name: "Dashboard", url: "/", icon: faHome },
    {
      name: "Products",
      url: "/products",
      icon: faBreadSlice,
      subcategories: [
        { name: "All", url: "/products" },
        { name: "Breads", url: "/products/Bread" },
        { name: "Pastries", url: "/products/Pastry" },
        { name: "Cakes", url: "/products/Cakes" },
        { name: "Cookies", url: "/products/Cookies" },
      ],
    },
    {
      name: "Orders",
      url: "/orders",
      icon: faShoppingCart,
      subcategories: [
        { name: "All", url: "/orders" },
        { name: "Pending", url: "/orders/pending" },
        { name: "Completed", url: "/orders/completed" },
        { name: "Canceled", url: "/orders/canceled" },
      ],
    },
    { name: "Sales", url: "/sales", icon: faChartLine },
    { name: "Stocks", url: "/stocks", icon: faBoxOpen },
    { name: "Customer Management", url: "/customer", icon: faUser },
    { name: "User Management", url: "/users", icon: faUser },
  ];

  return (
    <nav className={`sidebar ${themeName}`}>
      <Link to="/" className="logo-link">
        <img
          src="assets/img/logo-white.png"
          alt="Brand Logo"
          className="logo"
        />
      </Link>
      <ul className="nav flex-column">
        {navItems.map((item, index) => (
          <li className="nav-item" key={index}>
            {item.subcategories ? (
              <>
                <button
                  className="nav-link"
                  onClick={() => toggleSection(item.name.toLowerCase())}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{ marginRight: "10px" }}
                  />
                  {item.name}
                  <FontAwesomeIcon
                    icon={
                      openSections[item.name.toLowerCase()]
                        ? faChevronUp
                        : faChevronDown
                    }
                    style={{ marginLeft: "10px" }}
                  />
                </button>
                {openSections[item.name.toLowerCase()] && (
                  <ul
                    className="nav flex-column"
                    style={{ marginLeft: "20px" }}
                  >
                    {item.subcategories.map((subitem, subindex) => (
                      <li className="nav-item" key={subindex}>
                        <NavLink
                          to={subitem.url}
                          className={({ isActive }) =>
                            `nav-link ${isActive ? "active-link" : ""}`
                          }
                        >
                          {subitem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to={item.url}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{ marginRight: "10px" }}
                />
                {item.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

      {/* Fixed section for Profile, Logout, and Theme Toggle */}
      <div className="sidebar-footer">
        <div
          className="footer-item"
          onClick={toggleTheme}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faCog} style={{ marginRight: "10px" }} />
          Toggle Theme
        </div>

        {authState ? (
          <>
            <Link
              to={all_routes.profile}
              className="footer-item link"
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />
              Profile
            </Link>
            <Link
              to={all_routes.dashboard}
              onClick={handleLogout}
              className="footer-item link"
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ marginRight: "10px" }}
              />
              Logout
            </Link>
          </>
        ) : (
          <Link
            to={all_routes.singin}
            // onClick={handleLogout}
            className="footer-item link"
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              style={{ marginRight: "10px" }}
            />
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;

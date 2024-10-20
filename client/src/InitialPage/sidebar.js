// src/Sidebar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/Sidebar.scss"; // Import the SCSS file

import {
  faHome,
  faInfoCircle,
  faShoppingCart,
  faEnvelope,
  faBreadSlice,
  faChevronDown,
  faChevronUp,
  faChartLine,
  faBoxOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    services: true,
    portfolio: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const navItems = [
    {
      name: "Dashboard",
      url: "/",
      icon: faHome,
    },
    {
      name: "About Us",
      url: "/about",
      icon: faInfoCircle,
    },
    {
      name: "Products",
      url: "/products",
      icon: faBreadSlice,
      subcategories: [
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
    },
    {
      name: "Sales",
      url: "/sales",
      icon: faChartLine,
    },
    {
      name: "Stocks",
      url: "/stocks",
      icon: faBoxOpen,
    },
    {
      name: "Customer Management",
      url: "/customer",
      icon: faUser,
    },
    {
      name: "User Management",
      url: "/users",
      icon: faUser,
    },
    {
      name: "Contact",
      url: "/contact",
      icon: faEnvelope,
    },
  ];

  return (
    <div className="d-flex">
      <nav
        className="sidebar bg-light"
        style={{ width: "300px", height: "100vh" }}
      >
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
                    {"  "}
                    <FontAwesomeIcon
                      icon={
                        openSections[item.name.toLowerCase()]
                          ? faChevronUp
                          : faChevronDown
                      }
                      style={{ marginLeft: "10px", marginRight: "0" }} // Add margin to the left
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
                            className="nav-link"
                            to={subitem.url}
                            activeClassName="active-link"
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
                  className="nav-link"
                  to={item.url}
                  activeClassName="active-link"
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
      </nav>
    </div>
  );
};

export default Sidebar;
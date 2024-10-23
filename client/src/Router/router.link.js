import React from "react";
import { Route } from "react-router-dom";
import { all_routes } from "./all_routes";

import Signin from "../InitialPage/signin.jsx";
import Home from "../modules/home/home.js";
import About from "../modules/about/about.jsx";
import Profile from "../modules/profile/profile.jsx";
import Contact from "../modules/contact/contact.js";

import OrderList from "../modules/orders/OrderList.js";
import SalesList from "../modules/sales/SalesList.js";
import CustomerList from "../modules/customers/CustomerList.js";
import CustomerForm from "../modules/customers/customerForm.js";
import ProductList from "../modules/products/ProductList.js";
import OrderForm from "../modules/orders/OrderForm.js";

const routes = all_routes;

export const publicRoutes = [
  {
    id: 1,
    path: routes.dashboard,
    name: "home",
    element: <Home />,
    route: Route,
  },
  {
    id: 2,
    path: routes.signin,
    name: "signin",
    element: <Signin />,
    route: Route,
  },
  {
    id: 3,
    path: routes.about,
    name: "about",
    element: <About />,
    route: Route,
  },
  {
    id: 4,
    path: routes.contact,
    name: "contact",
    element: <Contact />,
    route: Route,
  },
];

export const authRoute = [
  {
    id: 1,
    path: routes.profile,
    name: "profile",
    element: <Profile />,
    route: Route,
  },
  {
    id: 2,
    path: routes.customer,
    name: "customer",
    element: <CustomerList />,
    route: Route,
  },
  {
    id: 3,
    path: routes.customer_form,
    name: "customer_form",
    element: <CustomerForm />,
    route: Route,
  },

  {
    id: 4,
    path: routes.products,
    name: "products",
    element: <ProductList />,
    route: Route,
  },

  {
    id: 5,
    path: routes.orders,
    name: "orders",
    element: <OrderList />,
    route: Route,
  },
  {
    id: 6,
    path: routes.orders_form,
    name: "orders_form",
    element: <OrderForm />,
    route: Route,
  },

  {
    id: 7,
    path: routes.sales,
    name: "sales",
    element: <SalesList />,
    route: Route,
  },
];

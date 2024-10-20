import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./core/services/store.js";

import AllRoutes from "./Router/routes.js";
import { base_path } from "./environment.js";

import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename={base_path}>
            <AllRoutes />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Element with id 'root' not found.");
}

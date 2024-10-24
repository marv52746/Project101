import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./core/services/store.js";

import AllRoutes from "./Router/routes.js";
import { base_path } from "./environment.js";

import "./style/styles.scss";

const rootElement = document.getElementById("root");

if (rootElement) {
  const App = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
      setIsDarkTheme((prev) => !prev);
    };

    return (
      <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
        <AllRoutes isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </div>
    );
  };

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename={base_path}>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Element with id 'root' not found.");
}

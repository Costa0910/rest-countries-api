import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { allCountries } from "./features/api/apiSlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={allCountries}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);

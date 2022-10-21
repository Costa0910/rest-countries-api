import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/error/Error";
import { allCountries } from "./features/api/apiSlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import "./index.css";
import App from "./App";
import Home from "./components/home/Home";
import { Provider } from "react-redux";
import { store } from "../src/app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={allCountries}>
        <RouterProvider router={router} />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);

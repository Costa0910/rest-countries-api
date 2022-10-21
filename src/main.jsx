import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/error/Error";
import { allCountries } from "./features/api/apiSlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import "./index.css";
import App from "./App";
import Home from "./components/home/Home";
import Test from "./components/Test";

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
      {
        path: ":testId",
        element: <Test />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={allCountries}>
      <RouterProvider router={router} />
    </ApiProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Home from "./Home/Home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Register from "./Home/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Registration",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

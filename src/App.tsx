import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Home/Header";
import Home from "./Home/Home";
//import Register from "./Home/register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";

export default function App() {
  return (
    <div className="">
      <Home />
    </div>
  );
}

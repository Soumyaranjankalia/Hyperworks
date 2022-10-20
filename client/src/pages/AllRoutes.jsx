import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Home } from "./Home";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
};

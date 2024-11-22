import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/product/:id/view"
        element={<PrivateRoute><ProductDetailsPage /></PrivateRoute>}
      />
    </Routes>
  );
};

export default AllRoutes;
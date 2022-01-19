import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../../pages/Index";
import JewelryPage from "../../pages/JewelryPage";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className="layout">
      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/jewelry" element={<JewelryPage />} />
      </Routes>
    </div>
  );
};

export default Layout;

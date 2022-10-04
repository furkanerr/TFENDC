import React from "react";
import { Route, Routes } from "react-router-dom";
import AddLinkPage from "../pages/AddLinkPage/AddLinkPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import ResultPage from "../pages/ResultPage/ResultPage";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/addnewrecord" element={<AddLinkPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default Routers;

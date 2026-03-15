import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import HowWorks from "./Pages/HowWorks";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";

import "./App.css";

function App() {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />

      <Route path="/howWorks" element={<HowWorks />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  );
}

export default App;
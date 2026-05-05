import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import HowWorks from "./Pages/HowWorks";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import HomeScren from "./Pages/HomeScreen";
import ProfileCreate from "./Pages/ProfileCreate";
import Explore from "./Pages/Explore";
import MySwap from "./Pages/MySwap";
import Messages from "./Pages/Messages";
import ViewProfile from "./Pages/ViewProfile";
import Accountpage from "./Pages/Accountpage";

import "./App.css";

function App() {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />

      <Route path="/howWorks" element={<HowWorks />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/HomeScreen" element={<HomeScren />} />
      <Route path="/ProfileCreate" element={<ProfileCreate />} />
      <Route path="/Explore" element={<Explore />} />
      <Route path="/MySwap" element={<MySwap />} />
      <Route path="/Messages" element={<Messages />} />
      <Route path="/ViewProfile" element={<ViewProfile />} />
      <Route path="/Accountpage" element={<Accountpage />} />
    </Routes>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Login from "./pages/Login";
import Create from "./pages/signUp";
import { Routes, Route } from "react-router-dom";
import Empty from "./pages/mainEmty";
import Profil from "./pages/profil";
import ActiveProfil from "./pages/profilActiv";

import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Create />} />
        <Route path="/Empty" element={<Empty />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/profilActive" element={<ActiveProfil />} />
      </Routes>
    </>
  );
}

export default App;

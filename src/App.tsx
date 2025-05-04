import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routw/Home";
import SandT from "./Routw/SandT";
import EandE from "./Routw/EandE";
import MyWorks from "./Routw/MyWorks";
import NotFound from "./Routw/ComingSoon";

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/skillsandtechnology" element={<SandT />} />
        <Route path="/educationandexperience" element={<EandE />} />
        <Route path="/myworks" element={<MyWorks />} />
        <Route path="/CommingSoon" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};

export default App;
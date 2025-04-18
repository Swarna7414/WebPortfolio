import React from "react";
import Navebar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import SandT from "./Routw/SandT"
import EandE from "./Routw/EandE";
import Home from "./Routw/Home";
import MyWorks from "./Routw/MyWorks";


const App:React.FC=()=>{
    return(
        <div>
            <Navebar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/skillsandtechnology" element={<SandT/>}/>
                <Route path="/educationandexperience" element={<EandE/>}/>
                <Route path="/myworks" element={<MyWorks/>}/>
            </Routes>
        </div>
    )
}
export default App;
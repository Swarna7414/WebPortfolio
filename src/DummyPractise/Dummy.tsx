// import React from "react";
// import DummyOne from "./DummyOne";
// import { Route, Routes } from "react-router-dom";
// import Home from "../Routw/Home";
// import SandT from "../Routw/SandT";
// import EandE from "../Routw/EandE";
// import MyWorks from "../Routw/MyWorks";

// const Dummy:React.FC=()=>{
//     return(
//         <div>
//             <DummyOne/>
//             <Routes>
//                 <Route path="/" element={<Home/>}/>
//                 <Route path="/home" element={<Home/>}/>
//                 <Route path="/Skillsandtechmology" element={<SandT/>}/>
//                 <Route path="/educationandexperience" element={<EandE/>}/>
//                 <Route path="/Myworks" element={<MyWorks/>}/>
//             </Routes>
//         </div>
//     )
// }
// export default Dummy;

import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import React from "react";

const Dummy:React.FC=()=>{
    return(
        <div className="h-screen">
            <div className="flex flex-row justify-between items-center">
                <ul>
                    <li className="hover:text-blue-400"><FaGithub/></li>
                    <li className="hover:text-blue-400"><CiLinkedin/></li>
                    <li><CiMail/></li>
                </ul>
            </div>
        </div>
    );
}
export default Dummy;
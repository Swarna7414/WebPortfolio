import React from "react";
import { Link } from "react-router-dom";

const DummyOne:React.FC=()=>{
    return(
        <div>
            <div className="flex flex-row justify-between items-center px-8 bg-black text-white text-xl h-18">
                <h1>Swarna Sai Sankar</h1>
                <ul className="flex flex-row justify-between gap-9">
                    <Link to={"/home"}><li>Home</li></Link>
                    <Link to={"/Skillsandtechmology"}><li>Skills & Technology</li></Link>
                    <Link to={"/educationandexperience"}><li>Educaton & Experience</li></Link>
                    <Link to={"/Myworks"}><li>Skills & Technology</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default DummyOne;
import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { CgArrowRightO } from "react-icons/cg";
import { FaComputer } from "react-icons/fa6";

const EandE:React.FC=()=>{
  return(
    <section className="min-h-screen bg-black text-blue-100 px-18 py-10">
      <div className="flex justify-center mt-13 mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          My Education & Professional carrer
        </h1>
      </div>

      {/**Education Content */}
      <div className="flex flex-row items-center justify-between ">
        <div className="border-3 border-b-blue-100 rounded-2xl w-180 h-115 flex flex-col px-5 py-5 justify-between hover:border-blue-300 duration-300">

        <div className="flex flex-col space-x-2 border-2 rounded-2xl py-2 px-4 w-full h-30 justify-between hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 cursor-none group">
          <div className="flex flex-row text-md">
            <FaRegCalendarCheck className="text-lg mt-1 transition-colors duration-300 group-hover:text-blue-400" />
            <span className="px-1.5">2025 - Present</span>
          </div>
          <h1 className="text-2xl font-extrabold">Master's - University Of South Dakota</h1>
          <p>Computer Science - </p>
        </div>


        <div className="flex flex-col space-x-2 border-2 rounded-2xl py-2 px-4 w-full h-30 justify-between hover:border-blue-700 hover:shadow-lg hover:shadow-blue-700/50 transition duration-300 cursor-none group">
          <div className="flex flex-row text-md">
            <FaRegCalendarCheck className="text-lg mt-1 transition-colors duration-300 group-hover:text-blue-400" />
            <span className="px-1.5">2019 - 2022</span>
          </div>
          <h1 className="text-2xl font-extrabold">Bachelor's  - Sree Vidyanikethan Engineering College</h1>
          <p>Mechanical Engineering - 7.92 CGPA</p>
        </div>


        <div className="flex flex-col space-x-2 border-2 rounded-2xl py-2 px-4 w-full h-30 justify-between hover:border-blue-900 hover:shadow-lg hover:shadow-blue-900/50 transition duration-300 cursor-none group">
          <div className="flex flex-row text-md">
            <FaRegCalendarCheck className="text-lg mt-1 transition-colors duration-300 group-hover:text-blue-400" />
            <span className="px-1.5">2016 - 2019</span>
          </div>
          <h1 className="text-2xl font-extrabold">PolyTechnic  - Shree Institute of Technology</h1>
          <p>Mechanical Engineering - 84.5%</p>
        </div>

        </div>
        {/** Experience content */}

        <div className="border-3 w-160 h-115 rounded-2xl hover:border-blue-300 flex flex-col px-5 py-5">
          <div className="flex flex-col">
            <div>
              <div className="flex flex-row text-md mb-2">
                <FaRegCalendarCheck className="mt-1 mr-2"/>
                <span>July 2022 - December 2024</span>
              </div>
              <h1 className="text-2xl font-bold flex flex-row group"><FaComputer className="mt-1.5 mr-1.5 group-hover:text-blue-400 duration-300"/>Backend Developer, Tata Consultancy Services</h1>
              <div className="w-3/3 h-px bg-blue-300 mt-4 mx-auto"></div>
            </div>


            {/**Points*/}
            <div>
              <div className="mt-3">
                <h1 className="flex flex-row text-lg"><CgArrowRightO className="mr-1 mt-1 text-xl"/>Developed microservices and Rest APIs using Spring Boot, ensuring 
                scalability and reliability with JUnit and Mockito for testing</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default EandE;
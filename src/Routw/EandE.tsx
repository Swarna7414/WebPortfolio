import React from "react";
import { FaRegCalendarCheck, FaComputer } from "react-icons/fa6";
import { CgArrowRightO } from "react-icons/cg";
import '../Styles/Styles.css';

const TCS:Array<string> = ["Developed Spring Boot microservices and RESTful APIs with JPA/Hibernate and Spring JDBC, ensuring scalability and performance.",
                "Instituted comprehensive unit and integration testing using JUnit and Mockito to maintain code quality and test coverage.",
                "Configured Jenkins CI/CD pipelines with Docker integration for multiple branches, automating tests and code quality checks via SonarQube.",
                "Tested REST APIs using SoapUI and Postman, validating responses for functionality, performance, and compliance with client requirements.",
                "Managed release lifecycles using RLM and OpenShift, ensuring smooth and seamless deployments.",
                "Migrated code from SVN to Bitbucket, cleaned POM files, removed deprecated versions, and performed security checks for scalability.",
                "Migrated codebase from Java 8 to Java 17 using OpenRewrite, ensuring compatibility and leveraging new language features.",
                "Created and maintained Confluence pages to document technical designs, workflows, and deployment processes."
            ]

const EandE: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-blue-100 px-4 md:px-18 py-10">
      <div className="flex justify-center mt-12 mb-15">
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-3.5">
          My Education & Professional Career
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Education Section */}
        <div className="w-full md:w-[45rem] border-2 border-white rounded-2xl p-4 flex flex-col gap-4 hover:border-blue-300">
          {/* Master's */}
          <div className="flex flex-col border-2 rounded-2xl py-4 px-4 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 group">
            <div className="flex flex-row text-md">
              <FaRegCalendarCheck className="text-lg mt-1 transition-colors duration-300 group-hover:text-blue-400" />
              <span className="px-1.5">2025 - Present</span>
            </div>
            <h1 className="text-xl md:text-2xl font-extrabold">Master's - University Of South Dakota</h1>
            <p>Computer Science</p>
          </div>

          {/* Bachelor's */}
          <div className="flex flex-col border-2 rounded-2xl py-4 px-4 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-700/50 transition duration-300 group">
            <div className="flex flex-row text-md">
              <FaRegCalendarCheck className="text-lg mt-1 transition-colors duration-300 group-hover:text-blue-400" />
              <span className="px-1.5">2019 - 2022</span>
            </div>
            <h1 className="text-xl md:text-2xl font-extrabold">Bachelor's - Sree Vidyanikethan Engineering College</h1>
            <p>Mechanical Engineering - 7.92 CGPA</p>
          </div>

          {/* Polytechnic */}
          <div className="flex flex-col border-2 rounded-2xl py-4 px-4 hover:border-blue-900 hover:shadow-lg hover:shadow-blue-900/50 transition duration-300 group">
            <div className="flex flex-row text-md">
              <FaRegCalendarCheck className="text-lg mt-1 transition-colors duration-300 group-hover:text-blue-400" />
              <span className="px-1.5">2016 - 2019</span>
            </div>
            <h1 className="text-xl md:text-2xl font-extrabold">PolyTechnic - Shree Institute of Technology</h1>
            <p>Mechanical Engineering - 84.5%</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full md:w-[45rem] border-2 rounded-2xl hover:border-blue-300 flex flex-col px-5 py-5 cursor-default">
          <div className="flex flex-col">
            <div>
              <div className="flex flex-row text-md mb-2">
                <FaRegCalendarCheck className="mt-1 mr-2" />
                <span>July 2022 - December 2024</span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold flex flex-row group">
                <FaComputer className="mt-1.5 mr-1.5 group-hover:text-blue-400 duration-300" />
                Backend Developer, Tata Consultancy Services
              </h1>
              <div className="w-full h-px bg-blue-300 mt-4 mx-auto"></div>
            </div>

            {/* Points */}
            <div className="mt-3 h-[300px] md:h-[320px] overflow-y-auto pr-2 custom-scroll">
              {TCS.map((text, index) => (
                <div key={index} className="flex flex-row mb-1 mt-2 hover:text-blue-300 transform transition duration-500 hover:translate-x-2 group">
                  <CgArrowRightO className="text-2xl mr-1.5 group-hover:text-white mt-1" />
                  <h1>{text}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EandE;
import React, { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { IoIosMailOpen } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CgBitbucket } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import BackGround from "../assets/BackGround.jpeg";
import SecondSmall from "../assets/SecondSmall.jpg"

import "../Styles/animation.css";
import { Bitbucket, Github, LeetCode, LinkedIn, Mailto } from "../Interfaces";

const Home: React.FC = () => {
  const [hovered, sethovered] = useState<boolean>(false);
  return (
    <section className="pb-1 py-5 pt-13">
      <div className="flex flex-col sm:flex-row mt-3 gap-4 sm:gap-2">

        
        <div className="w-full sm:w-180 h-auto sm:h-168 flex justify-center">
          
          <img
            src={SecondSmall}
            alt="MobileProfile"
            className="block sm:hidden w-70 h-70 mt-6 rounded-full hover:shadow-lg hover:shadow-blue-500 object-cover duration-300"
          />

          
          <img
            src={BackGround}
            alt="BackGroundImage"
            className="hidden sm:block w-full h-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-200 h-auto sm:h-168">
          <div className="text-center sm:text-left mt-6 sm:mt-10 sm:ml-12">
            <h1 className="text-3xl sm:text-6xl font-bold group cursor-default">
              Hello, This is <br />
              <span className="cursor-pointer hover:text-blue-500 duration-650">
                Sai Sankar Swarna
              </span>{" "}
              <span className="inline-block wave-on-hover cursor-grab">👋</span>
            </h1>
          </div>

          <div className="w-full sm:h-1/2 px-4 sm:pl-13 sm:pr-5 text-sm sm:text-base leading-relaxed text-justify mt-6 sm:mt-10 text-size hover:text-blue-100 sm:max-w-5xl sm:mx-auto cursor-default">
            <p>
              I'm a Software developer with a strong foundation in Java, TypeScript, and Python. I specialize in
              building secure and scalable applications using the Spring Boot ecosystem, including Spring
              JDBC, JPA, MVC, Security, and JMS. My DevOps toolkit includes Git, GitHub, Bitbucket, Jenkins,
              Docker, and RLM, allowing me to streamline integration, automate deployments, and manage
              workflows effectively. I'm also proficient in Python, leveraging libraries like NumPy, Matplotlib, Pandas,
              and PyTorch for data analysis, visualization, and machine learning tasks. On the front end, I enjoy
              crafting clean, responsive UIs using React with TypeScript and Tailwind CSS. With this blend of backend,
              DevOps, data, and front-end skills, I'm able to contribute across the full application lifecycle with confidence
              and adaptability.
            </p>
          </div>

          {/* Icons */}
          <div className="flex justify-center sm:items-end sm:justify-end mt-8 sm:mt-16">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-0 sm:flex-row items-center sm:justify-between px-4 sm:px-5 py-2 text-3xl sm:text-4xl w-full sm:w-80 h-auto">
              <div
                className="border rounded-full hover:border-blue-500"
                onMouseEnter={() => sethovered(true)}
                onMouseLeave={() => sethovered(false)}
              >
                {hovered ? (
                  <IoIosMailOpen
                    className="text-4xl sm:text-4xl p-2 sm:p-1.5 bg-black text-white rounded-full duration-200 hover:border-blue-500 cursor-pointer hover:bg-blue-500"
                    onClick={Mailto}
                  />
                ) : (
                  <BiLogoGmail
                    className="text-4xl sm:text-4xl p-2 sm:p-1.5 bg-black text-blue-400 rounded-full duration-200 hover:border-blue-500 cursor-pointer hover:bg-blue-500"
                    onClick={Mailto}
                  />
                )}
              </div>

              <div className="border rounded-full hover:border-blue-500">
                <FaGithub
                  className="text-4xl sm:text-4xl p-2 sm:p-1.5 bg-black text-blue-400 rounded-full duration-300 hover:border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
                  onClick={Github}
                />
              </div>

              <div className="border rounded-full hover:border-blue-500">
                <SiLeetcode
                  className="text-4xl sm:text-4xl p-2 sm:p-1.5 bg-black text-blue-400 rounded-full duration-300 hover:border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
                  onClick={LeetCode}
                />
              </div>

              <div className="border rounded-full hover:border-blue-500">
                <CgBitbucket
                  className="text-4xl sm:text-4xl p-2 sm:p-1.5 bg-black text-blue-400 rounded-full duration-300 hover:border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
                  onClick={Bitbucket}
                />
              </div>

              <div className="border rounded-full hover:border-blue-500">
                <FaLinkedin
                  className="text-4xl sm:text-4xl p-2 sm:p-1.5 bg-black text-blue-400 rounded-full duration-300 hover:border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
                  onClick={LinkedIn}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
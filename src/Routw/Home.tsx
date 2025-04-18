import React from "react";
import background from "../assets/BackSide.jpeg";
import small from "../assets/smallscrenn.png";
import "boxicons/css/boxicons.min.css";

const Home: React.FC = () => {
  const openMailClient = (): void => {
    window.location.href = "mailto:swanrasaisankarnaidu369@gmail.com";
  };

  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-end px-4 md:px-9 bg-cover bg-center relative cursor-default"
      style={{
        backgroundImage: `url(${background})`,
      }}
      id="home"
    >
      {/* Mobile Profile Image (hidden on md and up) */}
      <div className="md:hidden flex justify-center mt-10">
        <div className="mt-15 w-48 h-48 rounded-full border-4 border-blue-500 overflow-hidden">
          <img
            src={small}
            alt="Swarna Sai Sankar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-2xl text-white mt-8 md:mt-0 md:mr-4 w-full md:w-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-6 md:mt-0">
          Hello, This is{" "}
          <span className="text-gray-300 hover:text-blue-500 transition-all duration-300 cursor-pointer">
            Swarna Sai Sankar
          </span>
        </h1>
        <p className="text-base sm:text-lg mt-4">
          I am a skilled Spring Boot developer with expertise in Spring JDBC,
          JPA, MVC, Security, and JMS, building secure, efficient, and scalable
          applications. My DevOps knowledge includes Git, Jenkins, Docker,
          supporting streamlined integration and deployment. I am proficient in
          Python, with expertise in NumPy, Matplotlib, and PyTorch for machine
          learning model development. Additionally, I have strong skills in
          React and TypeScript, enabling the creation of dynamic, maintainable
          front-end applications. This blend of backend, DevOps, Python, and
          front-end expertise allows me to effectively contribute across the
          entire application lifecycle.
        </p>
      </div>

      {/* Social Icons */}
      <div className="w-full md:w-auto flex justify-center md:absolute md:bottom-16 mt-8 md:mt-0 pb-8 md:pb-0">
        <div className="flex space-x-4">
          <a
            onClick={openMailClient}
            className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full text-blue-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition cursor-pointer"
          >
            <i className="bx bxl-gmail"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/Swanra-Sai-Sankar-000797191/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full text-blue-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/Swarna7414?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full text-blue-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>

      {/* Mobile background override */}
      <style>{`
        @media (max-width: 767px) {
          #home {
            background-image: none !important;
            background-color: #000;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
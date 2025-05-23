import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate=useNavigate();

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  const GotoHome=()=>{
    navigate("\home");
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-black text-white h-16 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 z-50">
      <h1 className="text-2xl font-cursive italic hover:text-blue-500 transition-all duration-250 ease-in-out cursor-pointer
        absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none sm:ml-9 md:ml-12 lg:ml-12 xl:ml-12" onClick={GotoHome}>
        Sai Sankar Swarna
      </h1>


      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl text-white focus:outline-none">
          <i className={isOpen ? "bx bx-x" : "bx bx-menu"}></i>
        </button>
      </div>

      <ul className="hidden md:flex flex-row justify-between items-center gap-12 transition duration-300 ease-in-out text-2xl">
        <NavLink to="/home"><li className="hover:text-blue-500">Home</li></NavLink>
        <NavLink to="/skillsandtechnology"><li className="hover:text-blue-500">Skills & Technology</li></NavLink>
        <NavLink to="/educationandexperience"><li className="hover:text-sky-500">Education & Experience</li></NavLink>
        <NavLink to="/myworks"><li className="hover:text-blue-500">MyWorks</li></NavLink>
      </ul>

      {isOpen && (
        <ul className="absolute top-16 left-0 right-0 bg-black flex flex-col items-center gap-6 py-6 md:hidden transition duration-300 ease-in-out">
          <Link to="/home" onClick={toggleMenu}><li className="hover:text-blue-500">Home</li></Link>
          <Link to="/skillsandtechnology" onClick={toggleMenu}><li className="hover:text-blue-500">Skill & Technology</li></Link>
          <Link to="/educationandexperience" onClick={toggleMenu}><li className="hover:text-sky-500">Education & Experience</li></Link>
          <Link to="/myworks" onClick={toggleMenu}><li className="hover:text-blue-500">MyWorks</li></Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
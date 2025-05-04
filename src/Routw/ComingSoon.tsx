import React from "react";
import comingSoonImage from "../assets/image.png";

const CommingSoon: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
      <img
        src={comingSoonImage}
        alt="Coming Soon"
        className="w-[300px] h-auto mb-6"
      />
      <h1 className="text-xl text-center font-semibold">
        This Project is About to Complete and Will Be Deployed Soon
      </h1>
    </section>
  );
};

export default CommingSoon;

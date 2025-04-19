import React from "react";

const Languages = ["Java", "Python", "JavaScript", "HTML & CSS"];
const Framworks = ["SpringBoot ( JDBC, SpingSecurity )", "Junit & Mockito", "React", "TailWind CSS"];
const Technologies = [
    "Git",
    "BitBucket & Github",
    "Jenkins",
    "Docker",
    "RLM(Release LifeCycle Management)",
    "Postman",
];

const SandT: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-blue-100 py-10 px-4 md:px-10">
      <div className="flex justify-center mt-13">
        <h1 className="text-3xl md:text-5xl font-bold text-center">My Skills & Technologies</h1>
      </div>

      {/* Total container */}
      <div className="flex flex-col md:flex-row gap-8 mt-8 md:mt-12">
        {/* Left Section (Languages and Frameworks) */}
        <div className="flex flex-col items-center md:items-start gap-3 w-full">
          <h1 className="mt-8 font-bold text-2xl md:text-3xl md:ml-24">Languages</h1>
          <div className="w-full max-w-md md:w-160 h-auto rounded-xl border border-blue-200 px-6 py-4 hover:shadow-md hover:shadow-blue-300 cursor-none transition-all duration-300 ease-in-out md:ml-24">
            {Languages.map((item, index) => (
              <p className="px-2 mb-3 text-lg md:text-xl" key={index}>
                {item}
              </p>
            ))}
          </div>

          <h1 className="mt-6 font-bold text-2xl md:text-3xl md:ml-24">Frameworks</h1>
          <div className="w-full max-w-md md:w-160 h-auto rounded-xl border border-blue-200 px-6 py-4 hover:shadow-md cursor-none hover:shadow-green-300 hover:border-green-200 transition-all duration-300 ease-in-out md:ml-24">
            {Framworks.map((item, index) => (
              <p className="px-2 mb-3 text-lg md:text-xl" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Right Section (Tools) */}
        <div className="flex flex-col items-center md:items-start gap-3 w-full md:ml-auto">
          <h1 className="mt-6 md:mt-30 font-bold text-2xl md:text-3xl md:ml-24">Tools</h1>
          <div className="w-full max-w-md md:w-120 h-80 rounded-xl border border-blue-200 px-6 py-4 cursor-none hover:border-red-200 hover:shadow-md hover:shadow-red-300 transition-all duration-300 ease-in-out md:ml-24">
            {Technologies.map((item, index) => (
              <p className="px-2 mb-5 text-lg md:text-xl" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SandT;
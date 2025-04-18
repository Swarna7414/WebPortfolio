import React from "react";

const EandE: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-12 tracking-wide">Education & Experience</h1>

      <div className="max-w-4xl mx-auto relative border-l-4 border-blue-500 pl-6">
        
        {/* Education */}
        <div className="mb-12 relative">
          <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
          <h2 className="text-xl font-semibold text-blue-300 mb-1">B.Tech in Computer Science</h2>
          <span className="text-sm text-gray-400">XYZ University • 2019 – 2023</span>
          <p className="mt-2 text-gray-200">Graduated with distinction. Focused on software engineering, data structures, and machine learning.</p>
          <span className="inline-block mt-2 text-xs bg-gray-700 px-2 py-1 rounded">CGPA: 8.9/10</span>
        </div>

        <div className="mb-12 relative">
          <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
          <h2 className="text-xl font-semibold text-blue-300 mb-1">Intermediate (MPC)</h2>
          <span className="text-sm text-gray-400">ABC Junior College • 2017 – 2019</span>
          <p className="mt-2 text-gray-200">Focused on core sciences and mathematics. Strong foundation for technical career.</p>
        </div>

        {/* Experience */}
        <div className="mb-12 relative">
          <div className="absolute -left-3 top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
          <h2 className="text-xl font-semibold text-green-300 mb-1">Spring Boot Developer Intern</h2>
          <span className="text-sm text-gray-400">Tech Solutions • Jan 2023 – Jun 2023</span>
          <p className="mt-2 text-gray-200">
            Built robust APIs with Spring Boot. Integrated back-end with front-end using React and REST.
          </p>
          <span className="inline-block mt-2 text-xs bg-gray-700 px-2 py-1 rounded">Technologies: Spring Boot, React, MySQL</span>
        </div>

        <div className="relative">
          <div className="absolute -left-3 top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
          <h2 className="text-xl font-semibold text-green-300 mb-1">Freelance Web Developer</h2>
          <span className="text-sm text-gray-400">Remote • 2022 – Present</span>
          <p className="mt-2 text-gray-200">
            Designed and built responsive web apps. Specialized in React + TypeScript projects.
          </p>
          <span className="inline-block mt-2 text-xs bg-gray-700 px-2 py-1 rounded">Technologies: React, Tailwind, Firebase</span>
        </div>

      </div>
    </div>
  );
};

export default EandE;
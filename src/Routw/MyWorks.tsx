import React, { useState } from "react";
import { FrameWorks, languages, Tools } from "../Interfaces";

const MyWorks: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredFrameworkIndex, setHoveredFrameworkIndex] = useState<number | null>(null);
  const [hoveredToolsIndex, setHoveredToolsIndex] = useState<number | null>(null);

  const renderItem = (item: (typeof languages)[number], index: number) => {
    const isHovered = hoveredIndex === index;
    const Icon = isHovered ? item.hovericon : item.defaulticon;

    return (
      <div
        key={index}
        className="flex flex-row mb-2 mt-1.5 cursor-pointer items-center"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onTouchStart={() => setHoveredIndex(index)}
        onTouchEnd={() => setHoveredIndex(null)}
      >
        <div
          className={`transition-all duration-700 ease-in-out transform ${
            isHovered ? "opacity-100 scale-110" : "opacity-80 scale-100"
          }`}
        >
          <Icon className="text-orange-400 mr-3 text-xl md:text-2xl" />
        </div>
        <h1 className="text-base md:text-lg transition-all duration-700 ease-in-out">
          {item.language}
        </h1>
      </div>
    );
  };

  const RenderFramework = (item: (typeof FrameWorks)[number], index: number) => {
    const isHovered = hoveredFrameworkIndex === index;
    const Icon = isHovered ? item.hovericon : item.defaulticon;

    return (
      <div
        key={index}
        className="flex flex-row mb-2 mt-3 cursor-pointer items-center"
        onMouseEnter={() => setHoveredFrameworkIndex(index)}
        onMouseLeave={() => setHoveredFrameworkIndex(null)}
        onTouchStart={() => setHoveredFrameworkIndex(index)}
        onTouchEnd={() => setHoveredFrameworkIndex(null)}
      >
        <div
          className={`transition-all duration-700 ease-in-out transform ${
            isHovered ? "opacity-100 scale-110" : "opacity-80 scale-100"
          }`}
        >
          <Icon className="text-green-500 mr-3 text-xl md:text-2xl" />
        </div>
        <h1 className="text-base md:text-lg transition-all duration-700 ease-in-out">
          {item.language}
        </h1>
      </div>
    );
  };

  const RenderTools = (item: (typeof FrameWorks)[number], index: number) => {
    const isHovered = hoveredToolsIndex === index;
    const Icon = isHovered ? item.hovericon : item.defaulticon;

    return (
      <div
        key={index}
        className="flex flex-row mb-2 mt-3 cursor-pointer items-center"
        onMouseEnter={() => setHoveredToolsIndex(index)}
        onMouseLeave={() => setHoveredToolsIndex(null)}
        onTouchStart={() => setHoveredToolsIndex(index)}
        onTouchEnd={() => setHoveredToolsIndex(null)}
      >
        <div
          className={`transition-all duration-700 ease-in-out transform ${
            isHovered ? "opacity-100 scale-110" : "opacity-80 scale-100"
          }`}
        >
          <Icon className="text-blue-500 mr-3 text-xl md:text-2xl" />
        </div>
        <h1 className="text-base md:text-lg transition-all duration-700 ease-in-out">
          {item.language}
        </h1>
      </div>
    );
  };

  return (
    <section className="bg-black min-h-screen text-blue-100 px-4 py-6 md:px-4 md:py-10">
      <div className="flex justify-center items-center mt-8 md:mt-12">
        <h1 className="text-2xl md:text-5xl font-bold text-center mt-2 md:mt-3.5 hover:text-blue-300 transition duration-300 cursor-pointer">
          My Skills and Technologies
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 py-6 md:py-8 px-4 md:px-16 max-w-7xl mx-auto">
        {/* Left Column: Languages and Frameworks */}
        <div className="flex-1 flex flex-col px-3 md:px-5 pt-2">
          <h1 className="font-semibold text-xl md:text-2xl ml-2">Languages</h1>
          <div className="mt-1.5 border border-orange-300 w-full rounded-2xl py-1.5 px-4 md:px-7 shadow-lg hover:border-0 hover:shadow-orange-500/30 hover:border-orange-500">
            {languages.map((item, index) => renderItem(item, index))}
          </div>

          <h1 className="mt-4 font-semibold text-xl md:text-2xl ml-2">Frameworks</h1>
          <div className="mt-1.5 border border-green-300 w-full rounded-2xl py-1.5 px-4 md:px-7 shadow-lg hover:shadow-green-500/30 hover:border-0 hover:border-green-500">
            {FrameWorks.map((item, index) => RenderFramework(item, index))}
          </div>
        </div>

        {/* Right Column: Tools */}
        <div className="flex-1 flex flex-col px-3 md:px-3 md:justify-center">
          <h1 className="mt-4 md:mt-0 font-semibold text-xl md:text-2xl ml-2 md:ml-5">Tools</h1>
          <div className="mt-1.5 border border-blue-300 w-full rounded-2xl py-1.5 px-4 md:px-7 ml-0 md:ml-5 shadow-lg hover:shadow-blue-500/30 hover:border-0">
            {Tools.map((item, index) => RenderTools(item, index))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
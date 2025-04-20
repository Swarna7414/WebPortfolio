import React, { useState } from "react";
import { FrameWorks, languages } from "../Interfaces";


const SandT:React.FC=()=>{
  const [hoveredindex,sethoveredindex]=useState<number | null>(null);
  const [hoveredFrameworkIndex, setHoveredFrameworkIndex] = useState<number | null>(null);

  const renderitem = (
    item: (typeof languages)[number],
    index: number
  ) => {
    const isHovered = hoveredindex === index;
    const Icon = isHovered ? item.hovericon : item.defaulticon;
  
    return (
      <div
        key={index}
        className="flex flex-row mb-2 mt-1.5 cursor-pointer items-center"
        onMouseEnter={() => sethoveredindex(index)}
        onMouseLeave={() => sethoveredindex(null)}
      >
        <div
          className={`transition-all duration-700 ease-in-out transform ${
            isHovered ? "opacity-100 scale-110" : "opacity-80 scale-100"
          }`}
        >
          <Icon className="text-blue-500 mr-3" />
        </div>
  
        <h1 className="text-lg transition-all duration-700 ease-in-out">
          {item.language}
        </h1>
      </div>
    );
  };


  const RenderFramework = (
    item: (typeof FrameWorks)[number],
    index: number
  ) => {
    const isHovered = hoveredFrameworkIndex === index;
    const Icon = isHovered ? item.hovericon : item.defaulticon;
  
    return (
      <div
        key={index}
        className="flex flex-row mb-2 mt-3 cursor-pointer items-center"
        onMouseEnter={() => setHoveredFrameworkIndex(index)}
        onMouseLeave={() => setHoveredFrameworkIndex(null)}
      >
        <div
          className={`transition-all duration-700 ease-in-out transform ${
            isHovered ? "opacity-100 scale-110" : "opacity-80 scale-100"
          }`}
        >
          <Icon className="text-blue-500 mr-3" />
        </div>

        <h1 className="text-lg transition-all duration-700 ease-in-out">
          {item.language}
        </h1>
      </div>
    );
  };

  return(
    <section className="bg-black min-h-screen text-blue-100 px-4 py-10">
      <div className="flex justify-center items-center mt-12">
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-3.5 hover:text-blue-300 duration-350 cursor-pointer">
          My SKills and Technologies
        </h1>
      </div>
      <div className="flex flex-row gap-25 py-8 px-25">

        <div className="border-2 border-dashed border-green-100 h-122 w-150 flex flex-col px-5 pt-2.5">
          <h1 className="font-semibold text-2xl mt-2 ml-2">Languages</h1>
          <div className="mt-1.5 border-1 w-full h-50 rounded-2xl py-1.5 px-7">
            {languages.map((item,index)=> renderitem(item,index))}
          </div>

          <h1 className="mt-2 font-semibold text-2xl ml-52">FrameWorks</h1>
          <div className="mt-1.5 border-1 w-89 h-50 rounded-2xl py-1.5 px-7 ml-50.5">
            {FrameWorks.map((item,index)=>RenderFramework(item,index))}
          </div>
        </div>





        <div className="border-2 border-dashed border-green-100 h-122 w-150"></div>
      </div>
    </section>
  );
}

export default SandT;
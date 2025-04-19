import React from "react";


const SandT:React.FC=()=>{
  return(
    <section className="bg-black min-h-screen text-blue-100 px-4 py-10">
      <div className="flex justify-center items-center mt-12">
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-3.5 hover:text-blue-300 duration-350 cursor-pointer">
          My SKills and Technologies
        </h1>
      </div>
      <div className="flex flex-row gap-25 py-8 px-25">
        <div className="border-2 border-dashed border-green-100 h-122 w-150 flex flex-col px-5 py-2.5">
          <h1 className="font-semibold text-2xl mt-2 ml-2">Languages</h1>
          <div className="mt-1.5 border-1 w-full h-50 rounded-2xl py-4 px-7">
            

          </div>
        </div>
        <div className="border-2 border-dashed border-green-100 h-122 w-150"></div>
      </div>
    </section>
  );
}

export default SandT;
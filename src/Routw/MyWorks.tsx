import React from "react";
import Rl from "../assets/RL BitCoin TradingBot.png"
import Todo from "../assets/Todo.png"
import Weather from "../assets/Weather.png"
import { TbCodeCircle2 } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";

const Myworks: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-5xl mx-auto text-center mt-10">
        <h1 className="text-4xl font-bold mb-6 hover:text-blue-400 transition-all duration-300 cursor-pointer">
          My Works
        </h1>
      </div>
      <div className="mt-20 flex items-center justify-center">
        <div className="border-2 border-dotted border-yellow-200 h-120 w-335 flex flex-row items-center justify-between">
          {/**First Logo*/}
          <div>
          <div className="ml-15 relative w-[280px] h-[280px] rounded-2xl overflow-hidden group">
            <img src={Rl} alt="BitCoin Trading Bot"
             className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"/>
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-3xl">
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between gap-15 text-6xl">
                  <TbCodeCircle2 className="hover:text-black rounded-full cursor-pointer hover:bg-blue-400 duration-500"/>
                  <TbWorld className="hover:text-black rounded-full cursor-pointer hover:bg-blue-400 duration-500"/>
              </div>
              <div className="items-end justify-center">
                <h1 className="mt-8 ml-10 hover:text-blue-200 duration-300 cursor-pointer">BitBotRL</h1>
              </div>
              </div>
            </div>
          </div>
          </div>

          {/**Second Logo*/}
          <div>
          <div className="ml-15 relative w-[280px] h-[280px] rounded-2xl overflow-hidden group">
            <img src={Weather} alt="Live Weather"
             className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"/>
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-3xl">
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between gap-15 text-6xl">
                  <TbCodeCircle2 className="hover:text-black rounded-full cursor-pointer hover:bg-blue-400 duration-500"/>
                  <TbWorld className="hover:text-black rounded-full cursor-pointer hover:bg-blue-400 duration-500"/>
              </div>
              <div className="items-end justify-center">
                <h1 className="mt-8 ml-10 hover:text-blue-200 duration-300 cursor-pointer">Live Weather</h1>
              </div>
              </div>
            </div>
          </div>
          </div>


          {/**third Logo*/}
          <div>
          <div className="ml-15 relative w-[280px] h-[280px] rounded-2xl overflow-hidden group">
            <img src={Todo} alt="BitCoin Trading Bot"
             className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"/>
            <div className="absolute inset-0 bg-[rgba(14,13,13,0.3)] flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-3xl">
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between gap-15 text-6xl">
                  <TbCodeCircle2 className="hover:text-black rounded-full cursor-pointer hover:bg-blue-400 duration-500"/>
                  <TbWorld className="hover:text-black rounded-full cursor-pointer hover:bg-blue-400 duration-500"/>
              </div>
              <div className="items-end justify-center">
                <h1 className="mt-8 ml-10 hover:text-blue-200 duration-300 cursor-pointer">Pensum</h1>
              </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myworks;

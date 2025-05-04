import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from "react";
import Rl from "../assets/RL BitCoin TradingBot.png";
import Todo from "../assets/Todo.png";
import Weather from "../assets/Weather.png";
import { TbCodeCircle2, TbWorld } from "react-icons/tb";

const Rough: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-5xl mx-auto text-center mt-10">
        <h1 className="text-4xl font-bold mb-6 hover:text-blue-400 transition-all duration-300 cursor-pointer">
          My Works
        </h1>
      </div>

      <div className="mt-20 flex items-center justify-center">
        <div className="relative border-2 border-dotted border-yellow-200 w-[1100px] overflow-hidden px-4 py-6 rounded-lg">
          <div className="flex items-center">

            {/* Left Arrow - inside container */}
            <button
              className="z-10 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full"
              onClick={() => scroll(-300)}
            >
              <FaChevronLeft />
            </button>

            {/* Scrollable area */}
            <div
              className="overflow-x-scroll scroll-smooth w-full mx-4"
              ref={scrollRef}
            >
              <div className="flex gap-12 w-max py-2">
                <Card image={Rl} title="BitBotRL" />
                <Card image={Weather} title="Live Weather" />
                <Card image={Todo} title="Pensum" />
              </div>
            </div>

            {/* Right Arrow - inside container */}
            <button
              className="z-10 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full"
              onClick={() => scroll(300)}
            >
              <FaChevronRight />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Card Component
const Card = ({ image, title }: { image: string; title: string }) => (
  <div className="relative w-[280px] h-[280px] rounded-2xl overflow-hidden group shrink-0">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-3xl">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between gap-8 text-6xl">
          <TbCodeCircle2 className="hover:text-black rounded-full cursor-pointer hover:bg-blue-400 duration-500" />
          <TbWorld className="hover:text-black rounded-full cursor-pointer hover:bg-blue-400 duration-500" />
        </div>
        <div className="items-end justify-center">
          <h1 className="mt-8 ml-10 hover:text-blue-200 duration-300 cursor-pointer">{title}</h1>
        </div>
      </div>
    </div>
  </div>
);

export default Rough;

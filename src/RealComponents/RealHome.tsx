import React from "react";
import "../Styles/Styles.css"


const RealHome: React.FC = () => {

  return(
    <section className="relative h-screen">
        <div className="image-container w-full h-full bg-cover bg-center relative"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold">Welcome to RealHome!</h1>
        </div>
    </section>
  )
}

export default RealHome;
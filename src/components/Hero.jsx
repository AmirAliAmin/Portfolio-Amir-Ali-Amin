import React from "react";
import amir from "../assets/Amir2.png";

export default function Hero() {
  return (
    <div className="bg-black text-white flex min-h-screen md:min-h-fit lg:min-h-screen py-5 sm:flex-row flex-col-reverse items-center sm:px-4 md:px-7 lg:px-10  sm:gap-20 gap-5 pt-27  overflow-hidden">
      {/* Content Section */}
      <div className="sm:w-[50%]  w-full pb-2 z-10 text-center mt-10">
        <span className="relative inline-flex h-10 w-10 top-10 right-15">
          <span className="absolute w-full h-full rounded-full bg-red-600 opacity-75 animate-ping"></span>
        </span>
        <p className="text-sm font-light mb-4">Welcome To My World</p>
        <h1 className="lg:text-5xl text-4xl md:text-4xl font-extrabold">
          Hi, I'm Amir Ali Amin{" "}
          <span className="text-red-400">React Developer</span> Based in
          Pakistan
        </h1>
      </div>

      {/* Image with Spinning Border Container */}
      <div className="relative flex items-center  justify-center z-10">
        {/* Spinning Border */}
        <div
          className="absolute animate-spin 
          lg:w-80 lg:h-80 
          md:w-70 md:h-70 
          sm:w-64 sm:h-64 
          w-56 h-56 
          border-4 border-red-500 border-solid rounded-full border-t-transparent border-b-transparent"
        ></div>

        {/* Image */}
        <div
          className="relative overflow-hidden rounded-full 
          lg:w-70 lg:h-70 
          md:w-50 md:h-50 
          sm:w-50 sm:h-50
          w-40 h-40 
          flex items-center justify-center border-3 border-white"
        >
          
          <img
            src={amir}
            alt="Amir Ali Amin"
            className="w-full bg-gray-950 h-full object-cover transition-all hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

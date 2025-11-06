import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const navigation = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <div className="fixed flex w-full items-center justify-between py-4 px-4  md:px-10 lg:px-15 bg-[#000000e6] backdrop-blur-sm text-white z-50">
      <h1
        className="font-bold text-2xl sm:text-3xl cursor-pointer"
        onClick={() => navigation("/")}
      >
        Am<span className="text-red-400">i</span>r
      </h1>
      
      {/* Desktop Navigation */}
      <ul className="hidden sm:flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
        <NavLink 
          className={({ isActive }) => 
            `hover:text-red-400 transition-colors ${isActive ? 'text-red-400' : ''}`
          } 
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink 
          className={({ isActive }) => 
            `hover:text-red-400 transition-colors ${isActive ? 'text-red-400' : ''}`
          } 
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink 
          className={({ isActive }) => 
            `hover:text-red-400 transition-colors ${isActive ? 'text-red-400' : ''}`
          } 
          to={"/services"}
        >
          Services
        </NavLink>
        <NavLink 
          className={({ isActive }) => 
            `hover:text-red-400 transition-colors ${isActive ? 'text-red-400' : ''}`
          } 
          to={"/portfolio"}
        >
          Portfolio
        </NavLink>
        <NavLink 
          className={({ isActive }) => 
            `hover:text-red-400 transition-colors ${isActive ? 'text-red-400' : ''}`
          } 
          to={"/contact"}
        >
          Contact
        </NavLink>
      </ul>
      {/* Right Section */}
      <div className="flex items-center justify-end gap-3 sm:gap-4">
        <a href="https://www.linkedin.com/in/amir-ali-amin-623591298/" target="_blank" className="hover:text-red-400 transition-colors text-lg size-6 animate-bounce">
          <FaLinkedin />
        </a>
        <a href="https://github.com/AmirAliAmin" target="_blank" className="hover:text-red-400 transition-colors text-lg size-6 animate-bounce">
          <FaGithub />
        </a>
        <button 
          onClick={() => setShowMenu(!showMenu)} 
          className="block sm:hidden hover:text-red-400 transition-colors text-2xl"
        >
          <IoIosMenu />
        </button>
        <button className="hidden sm:block py-2 px-4 border animate-pulse cursor-pointer hover:bg-red-400 hover:border-red-400 transition-colors border-gray-500 rounded text-sm">
          <span className='animate-[wiggle_2s_ease-in-out_infinite] inline-block '>👋</span> Let's Talk
        </button>
      </div>
      {/* Mobile Menu */}
      {showMenu && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
            onClick={() => setShowMenu(false)}
          ></div>
          <div className="fixed top-0 right-0 h-screen w-64 bg-[#1a1a1a] shadow-xl overflow-y-auto z-50 sm:hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h1
                className="font-bold text-2xl cursor-pointer"
                onClick={() => {
                  navigation("/");
                  setShowMenu(false);
                }}
              >
                Am<span className="text-red-400">i</span>r
              </h1>
              <button
                onClick={() => setShowMenu(false)}
                className="hover:text-red-400 transition-colors text-xl"
              >
                <RxCross1 />
              </button>
            </div>
            
            <ul className="flex flex-col mt-8">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                  className={({ isActive }) => 
                    `w-full py-4 px-6 border-b border-gray-800 text-center transition-colors ${
                      isActive 
                        ? 'bg-red-400 text-white' 
                        : 'hover:bg-gray-800 hover:text-red-400'
                    }`
                  }
                  onClick={() => setShowMenu(false)}
                >
                  {item}
                </NavLink>
              ))}
            </ul>
            <div className="p-6">
              <button className="w-full animate-pulse py-3 bg-red-400 hover:bg-red-500 transition-colors rounded text-sm font-semibold cursor-pointer" onClick={() => navigation("/contact")}>
                <span className='animate-[wiggle_2s_ease-in-out_infinite] inline-block '>👋</span> Let's Talk
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
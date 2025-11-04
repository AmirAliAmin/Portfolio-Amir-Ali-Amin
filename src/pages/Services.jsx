import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";

export default function Services() {
  return (
    <div className="bg-black text-white pt-20 sm:px-7">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-extrabold text-5xl mb-4">
          My Skills & Technologies
        </h1>
        <p className="text-gray-600 text-lg">
          Transforming ideas into reality through innovative development and
          design
        </p>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1  mt-5">
        {/* HTML & CSS */}
        <div className="relative py-1 px-5 sm:border-r">
          <div className="flex gap-3 items-center">
            <h1 className="text-3xl font-bold">
              HTML <span className="text-red-400">&</span> CSS
            </h1>
            <p className="flex items-center mb-2 text-3xl sm:hidden">
              <FaHtml5 className="text-orange-500" />
            </p>
          </div>
          <p className="text-gray-600 font-light mt-2">
            Building responsive and semantic web layouts with modern CSS
            features including Flexbox, Grid, animations, and transitions.
            Creating accessible, cross-browser compatible websites with
            optimized performance and maintainable code structure.
          </p>
          <div className="sm:block hidden">
            <div className="absolute top-0 transform translate-x-4 right-0 bg-black">
              <p className="text-3xl">
                <FaHtml5 className="text-orange-500" />
              </p>
            </div>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
        {/* JavaScript */}
        <div className="relative sm:border-l py-1 px-5">
          <div className="flex gap-3 items-center">
            <h1 className="text-3xl font-bold">
              JavaScript <span className="text-red-400">(ES6+)</span>
            </h1>
            <p className="flex items-center mb-2 text-3xl text-yellow-400 sm:hidden">
              <FaJs />
            </p>
          </div>
          <p className="text-gray-600 font-light mt-2">
            Modern JavaScript with ES6+ features including arrow functions,
            destructuring, template literals, modules, and async/await.
            Expertise in functional programming, closures, promises, and working
            with APIs. Building interactive web applications with efficient
            algorithms and clean code architecture.
          </p>
          <div className="sm:block hidden">
            <div className="absolute top-0 left-0 transform -translate-x-4  bg-black">
              <p className="flex items-center text-3xl text-yellow-400">
                <FaJs />
              </p>
            </div>
           
          </div>
        </div>

        {/* React */}
        <div className="sm:border-r relative py-1 px-5">
          <div className="flex gap-3 items-center">
            <h1 className="text-3xl font-bold">
              React <span className="text-red-400">JS</span>
            </h1>
            <p className="flex items-center mb-2 text-3xl text-blue-400 sm:hidden">
              <FaReact />
            </p>
          </div>
          <p className="text-gray-600 font-light mt-2">
            Building dynamic user interfaces with hooks, context API, and
            component-based architecture. State management with useState and
            useEffect, custom hooks creation, React Router for navigation, and
            performance optimization techniques. Experience with functional
            components, prop drilling solutions, and modern React patterns.
          </p>
          <div className="sm:block hidden">
            <div className="absolute top-0 right-0 transform translate-x-4 bg-black">
              <p className="text-3xl">
                <FaReact className="text-blue-400" />
                
              </p>
            </div>
          </div>
        </div>
        
        <div></div>
        
        <div></div>

        {/* Node.js */}
        <div className="sm:border-l relative py-1 px-5">
          <div className="flex gap-3 items-center">
            <h1 className="text-3xl font-bold">
              Node.js <span className="text-red-400">(Basic)</span>
            </h1>
            <p className="flex items-center mb-2 text-4xl text-green-500 sm:hidden">
              <FaNode />
            </p>
          </div>
          <p className="text-gray-600 font-light mt-2">
            Server-side development with Express.js and building RESTful APIs.
            Handling middleware, routing, and basic authentication. File system
            operations, environment variables, and package management with npm.
            Understanding of event-driven architecture and non-blocking I/O
            operations.
          </p>
          <div className="sm:block hidden">
            <div className="absolute top-0 left-0 transform -translate-x-4 bg-black">
              <p className="flex items-center text-4xl text-green-500">
                <FaNode />
              </p>
            </div>
            
          </div>
        </div>

        {/* Tailwind CSS */}
        <div className="sm:border-r relative py-1 px-5">
          <div className="flex gap-3 items-center">
            <h1 className="text-3xl font-bold">
              Tailwind <span className="text-red-400">CSS</span>
            </h1>
            <p className="flex items-center mb-2 text-3xl text-blue-500 sm:hidden">
              <RiTailwindCssFill />
            </p>
          </div>
          <p className="text-gray-600 font-light mt-2">
            Utility-first CSS framework for rapid UI development and responsive
            design. Creating custom components, responsive layouts, and dark
            mode implementations. Efficient workflow with purging unused styles,
            custom configuration, and integration with modern build tools for
            optimized production builds.
          </p>
          <div className="sm:block hidden">
            <div className="absolute top-0 right-0 transform translate-x-4 bg-black">
              <p className="flex items-center text-3xl text-blue-500">
                <RiTailwindCssFill />
              </p>
            </div>
            
          </div>
        </div>
        
        <div></div>
        
        <div></div>

        {/* RESTful APIs */}
        <div className="sm:border-l relative py-1 px-5">
          <div className="flex gap-3 items-center">
            <h1 className="text-3xl font-bold">
              RESTful <span className="text-red-400">APIs</span>
            </h1>
            <p className="flex items-center mb-2 text-3xl text-blue-500 sm:hidden">
              <TbApi />
            </p>
          </div>
          <p className="text-gray-600 font-light mt-2">
            Designing and consuming REST APIs with proper HTTP methods and
            status codes. Implementing CRUD operations, authentication with JWT,
            error handling, and data validation. Experience with API testing
            using Postman, handling CORS, and creating well-documented API
            endpoints with proper response formats.
          </p>
          <div className="sm:block hidden">
            <div className="absolute top-0 left-0 transform -translate-x-4 bg-black">
              <p className="flex items-center text-3xl text-blue-500">
                <TbApi />
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
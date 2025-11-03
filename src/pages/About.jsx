import React, { useState } from 'react'
import image from '../assets/Amir1.png'

export default function About() {
    const [activeTab, setActiveTab] = useState("mainSkill")
    
  return (
    <div className='flex flex-wrap sm:flex-row flex-col items-center min-h-screen justify-center w-full   bg-black text-white lg:px-10 lg:pt-15 md:pt-20'>
      <div className='sm:w-[40%] w-full flex h-full  items-center justify-center'>
        <img src={image} alt="Professional portrait" className='bg-gray-950 h-100' />
      </div>
      
      <div className='sm:w-[60%] w-full h-full px-5  flex flex-col justify-center'>
        <h1 className='text-5xl font-extrabold mb-4'>About Me</h1>
        <span className="relative inline-flex h-10 w-10 -top-15">
          <span className="absolute w-full h-full rounded-full bg-red-600 opacity-75 animate-ping"></span>
        </span>
        <p className='font-light'>
          I'm a passionate software developer with expertise in creating dynamic, user-friendly applications. 
          With a strong foundation in modern web technologies, I specialize in building seamless digital experiences 
          that combine aesthetic appeal with functional excellence.
        </p>
        
        <div className='flex flex-wrap mt-5'>
            <ul className='flex flex-wrap gap-5'>
                <li className={`cursor-pointer ${activeTab === "mainSkill" ? "border-b-2 border-red-400" : ""}`} 
                    onClick={() => setActiveTab("mainSkill")}>
                    Expertise
                </li>
                <li className={`cursor-pointer ${activeTab === "award" ? "border-b-2 border-red-400" : ""}`} 
                    onClick={() => setActiveTab("award")}>
                    Achievements
                </li>
                <li className={`cursor-pointer ${activeTab === "experience" ? "border-b-2 border-red-400" : ""}`} 
                    onClick={() => setActiveTab("experience")}>
                    Experience
                </li>
                <li className={`cursor-pointer ${activeTab === "education" ? "border-b-2 border-red-400" : ""}`} 
                    onClick={() => setActiveTab("education")}>
                    Education
                </li>
            </ul>
        </div>
        
        {activeTab === "mainSkill" && (
            <div className="mt-4 space-y-4">
                <div>
                    <h1 className="font-semibold">Frontend Development</h1>
                    <p className="text-gray-300 sm:text-sm text-xs">Creating responsive websites and engaging web experiences with focus on user-centric design</p>
                </div>
                <div>
                    <h1 className="font-semibold">Interactive Design</h1>
                    <p className="text-gray-300 sm:text-sm text-xs">Specializing in smooth animations and dynamic user interactions</p>
                </div>
                <div>
                    <h1 className="font-semibold">Backend Development</h1>
                    <p className="text-gray-300 sm:text-sm text-xs">Proficient in Node.js with solid understanding of server-side technologies</p>
                </div>
            </div>
        )}
        
        {activeTab === "award" && (
            <div className="mt-4 space-y-4">
                <div>
                    <h1 className="font-semibold">PM Youth Laptop Scheme 2023</h1>
                    <p className="text-gray-300 sm:text-sm text-xs">Awarded a laptop through competitive government scholarship program</p>
                </div>
                <div>
                    <h1 className="font-semibold">Honahaar Scholarship Program</h1>
                    <p className="text-gray-300 sm:text-sm text-xs">Selected for prestigious scholarship based on academic excellence</p>
                </div>
                <div>
                    <h1 className="font-semibold">Among Top 5% of the batch</h1>
                    <p className="text-gray-300 sm:text-sm text-xs">Completed my Degree with 3.85 Cgpa</p>
                </div>
            </div>
        )}
        
        {activeTab === "experience" && (
            <div className="mt-4 space-y-6">
                <div>
                    <h1 className="font-semibold">Frontend Developer - <span className='text-xs text-gray-400'>Lead Concept</span> </h1>
                    <p className="text-gray-300 sm:text-sm text-xs">Leading frontend development initiatives and implementing innovative solutions</p>
                    <p className="text-sm text-gray-400 mt-1">August 2025 - Present</p>
                </div>
                <div>
                    <h1 className="font-semibold">Frontend Developer - <span className='text-xs text-gray-400'>Coding First</span> </h1>
                    <p className="text-gray-300 sm:text-sm text-xs">Developed and maintained client websites with focus on performance and accessibility</p>
                    <p className="text-sm text-gray-400 mt-1">January 2025 - July 2025</p>
                </div>
            </div>
        )}
        
        {activeTab === "education" && (
            <div className="mt-4 space-y-6">
                <div>
                    <h1 className="font-semibold">BS Software Engineering - <span className='text-[9px] text-gray-400'>The Islamia University of Bahawalpur</span> </h1>
                    <p className="text-gray-300 sm:text-sm text-xs">Comprehensive education in software development principles and practices</p>
                    <p className="text-sm text-gray-400 mt-1">2021 - 2025</p>
                </div>
                <div>
                    <h1 className="font-semibold">ICS (Computer Science) - <span className='text-[9px] text-gray-400'>Govt. Rizvia Islamia Degree College</span> </h1>
                    <p className="text-gray-300 sm:text-sm text-xs">Foundation in computer science and programming fundamentals</p>
                    <p className="text-sm text-gray-400 mt-1">2019 - 2021</p>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}
import React from 'react'
import project1 from '../assets/Project1.png'
import project2 from '../assets/Project2.png'
import project3 from '../assets/Project3.png'
import project4 from '../assets/Project4.png'
import project5 from '../assets/Project5.png'
import project6 from '../assets/Project6.png'
import project7 from '../assets/Project7.png'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Cuddle Cradle - Kids Cloth Store",
      image: project1,
      description: "E-commerce platform for kids clothing with modern UI/UX",
      category: "E-commerce",
      link: "https://cuddle-cradle.vercel.app/"
    },
    {
      id: 2,
      name: "E-commerce App",
      image: project2,
      description: "Full-featured online shopping platform with cart & checkout",
      category: "E-commerce",
      link: "https://ecommerce-app-tan-two.vercel.app/"
    },
    {
      id: 3,
      name: "Food Delivery App",
      image: project3,
      description: "Restaurant food ordering and delivery service platform",
      category: "Food Delivery",
      link: "https://food-delivery-nine-azure.vercel.app/"
    },
    {
      id: 4,
      name: "Social Media Platform",
      image: project4,
      description: "Interactive social networking with real-time features",
      category: "Social Media",
      link: "https://social-media-app-plum-eta.vercel.app/"
    },
    {
      id: 5,
      name: "Appointment Booking Website",
      image: project5,
      description: "Online scheduling system for appointments and bookings",
      category: "Booking System",
      link: "https://oppiontmen-booking-website.vercel.app/"
    },
    {
      id: 6,
      name: "Real Estate Website",
      image: project6,
      description: "Property listing and real estate management platform",
      category: "Real Estate",
      link: "https://real-estate-ipl1.vercel.app/"
    },
   {
  id: 7,
  name: "Netflix Clone with Firebase",
  image: project7,
  description: "A full-stack Netflix clone with user authentication, movie browsing, and responsive design using React and Firebase",
  category: "Entertainment",
  link: "https://netflix-clone-nine-nu-59.vercel.app/",
 
}
  ]

  const handleProjectClick = (link) => {
    window.open(link, '_blank');
  }

  return (
     <div className="bg-black h-fit text-white pt-20 pb-10 mx-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="font-extrabold text-5xl mb-4">
          My Latest Projects
        </h1>
        <p className="text-gray-400 text-lg">
          Showcasing innovative web solutions where creativity meets functionality
        </p>
      </div>
      
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        {projects.map((project) => (
          <div 
            key={project.id} 
            className='rounded-lg overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300'
            onClick={() => handleProjectClick(project.link)}
          >
            <div className='relative overflow-hidden'>
              <img 
                src={project.image} 
                alt={project.name}
                className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500'
              />
              {/* Hover Overlay */}
              <div className='absolute inset-0 bg-[#000000d2] bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                <div className='text-center text-white'>
                  <FaExternalLinkAlt className='text-4xl mb-2 mx-auto' />
                  <p className='text-lg font-semibold'>Visit Project</p>
                  <p className='text-sm text-gray-300 mt-1'>Click to view live demo</p>
                </div>
              </div>
            </div>
            <div className='p-4'>
              <h3 className='text-xl font-bold mb-2 group-hover:text-red-400 transition-colors'>
                {project.name}
              </h3>
              <p className='text-gray-400 text-sm mb-2'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
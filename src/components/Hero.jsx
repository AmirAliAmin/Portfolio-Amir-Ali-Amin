import React from 'react'
import amir from '../assets/Amir2.png'

export default function Hero() {
  return (
    <div className='bg-black text-white flex sm:h-screen py-5  sm:flex-row flex-col-reverse  px-5 sm:px-5 items-center justify-center md:px-10  lg:px-30 sm:gap-20 gap-5 pt-20 '>
      <div className='sm:w-[50%] w-full pb-2 '>
        <p className='text-sm font-light mb-4'>Welcome To My World</p>
        <h1 className='lg:text-5xl text-4xl md:text-4xl font-extrabold'>Hi, I'm Amir Ali Amin  <span className='text-red-400'>React Developer.</span> Based in Pakistan</h1>
      </div>
      <div className='overflow-hidden rounded-full lg:w-70 lg:h-70 md:w-50 w-50 h-50 md:h-50  flex items-center justify-center border-3  border-white'>
        <img src={amir} alt="" className='w-full h-full object-cover'/>
      </div>
    </div>
  )
}

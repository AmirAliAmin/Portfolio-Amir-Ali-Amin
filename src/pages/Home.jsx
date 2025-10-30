import React from 'react'
import Hero from '../components/Hero'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

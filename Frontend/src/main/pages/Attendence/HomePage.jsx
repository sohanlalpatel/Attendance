import React from 'react'
import Navbar from '../../component/LandingPage/Navbar'
import HeroSection from '../../component/LandingPage/Herosection'
import Features from '../../component/LandingPage/Features'
import Stats from '../../component/LandingPage/Stats'
import CTA from '../../component/LandingPage/CTA'
import Footer from '../../component/LandingPage/Footer'

function HomePage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <Stats/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default HomePage

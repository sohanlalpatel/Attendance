import React from 'react'
import StackShowcase from '../component/StackShowcase'
import HeroSection from '../component/Herosection'
import Navbar from '../component/Navbar'
import PojaFeatureSection from '../component/PojaFeatureSection'
import PujaProductCards from '../component/PujaProductCards'
import AboutUsSection from '../component/AboutUsSection'
import Footer from '../component/Footer'
import BlogSection from '../component/Blogs'
import AboutJourney from '../component/About'
import AboutUs from '../component/About'
import AboutUsParallax from '../component/About'
import AboutPoojaPathNew from '../component/About'

const UtsavPage = () => {
  return (
    <div> 

<Navbar/>
      {/* <HeroSection/> */}
      <AboutPoojaPathNew/>
      {/* <AboutUsSection/> */}
 <PojaFeatureSection/>
<PujaProductCards/>
<BlogSection/>
<Footer/>
    </div>
  )
}

export default UtsavPage;
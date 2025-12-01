import React from 'react'
import Hero from '../Components/Hero'
import Servicies from '../Components/Servicies'
import GrowBuisness from '../Components/GrowBuisness'
import Testimonials from '../Components/Testimonials'
import SpecialServicies from '../Components/SpecialServicies'
import NewsLetter from '../Components/NewsLetter'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Servicies/>
        <GrowBuisness/>
        <Testimonials/>
        <SpecialServicies/>
        <NewsLetter/>
    </div>
  )
}

export default Home
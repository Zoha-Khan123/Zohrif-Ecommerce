import React from 'react'
import HeroSlider from './components/hero/hero'
import Today from './components/today/today'
import Categories from './components/categories/categories'
import ThisMonth from './components/thisMonth/thisMonth'
import MusicExperience from './components/musicExperience/musicExperience'
import Featured from './components/featured/featured'
import Services from './components/services/services'
import ExploreProduct from './components/exploreProduct/exploreProduct'


const page = () => {
  return (
    <>
      <HeroSlider/>
      <Today/>
      <Categories/>
      <ThisMonth/>
      <MusicExperience/>
      <ExploreProduct/>
      <Featured/>
      <Services/>
    </>
  )
}

export default page
"use client"
import React, { useRef } from 'react'
import Headings from '../headings/headings'
import SliderArrows from '../product/sliderArrow'
import { KeenSliderInstance } from 'keen-slider';
import TodaySlider from '../product/todaySlider';
import Button from '../button/button';

const ExploreProduct = () => {
  const instanceRef = useRef<KeenSliderInstance | null>(null);
  return (
    <div className="space-y-16 p-5 mt-10 lg:p-0">
    <div className='flex justify-between items-end'>
      <div>
       <Headings heading="Our Products" paragraph="Explore Our Products" />
      </div>
       <SliderArrows instanceRef={instanceRef} />
    </div>
     <TodaySlider instanceRef={instanceRef} />
       <div className="flex justify-center items-center">
           <Button customStyle="text-white px-8 py-3 bg-red m-4">
             View All Products
           </Button>
           </div>
    </div>
  )
}

export default ExploreProduct
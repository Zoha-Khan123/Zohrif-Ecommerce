"use client";
import React, { useRef } from "react";
import Headings from "../headings/headings";
import { KeenSliderInstance } from "keen-slider";
import SliderArrows from "../product/sliderArrow";
import CategorySlider from "../product/categorySlider";

const Categories = () => {
  const instanceRef = useRef<KeenSliderInstance | null>(null);

  return (
    <div className="space-y-16 p-5 mt-10 lg:p-0">
      <div className="flex justify-between">
        <Headings heading="Categories" paragraph="Browse By Category" />
        <SliderArrows instanceRef={instanceRef} />
      </div>
      <CategorySlider instanceRef={instanceRef} />
      <div className="w-full h-[1px] rounded-sm bg-gray-400"></div>
    </div>
  );
};

export default Categories;

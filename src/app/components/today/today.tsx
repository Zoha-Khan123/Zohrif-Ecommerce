"use client";
import React, { useRef } from "react";
import Headings from "../headings/headings";
import Timer from "../timer/timer";
import "keen-slider/keen-slider.min.css";
import { KeenSliderInstance } from "keen-slider";
import Button from "../button/button";
import SliderArrows from "../product/sliderArrow";
import TodaySlider from "../product/todaySlider";
const Today = () => {
  const instanceRef = useRef<KeenSliderInstance | null>(null);

  return (
    <div className="space-y-16 p-5 mt-10 lg:p-0">
      <div className="flex justify-between items-center sm:items-end ">
        <div className="flex justify-start flex-col md:flex-row md:items-end gap-8 md:gap-20">
          <Headings heading="Todays" paragraph="Flash Sales" />
          <Timer />
        </div>

        <SliderArrows instanceRef={instanceRef} />
      </div>

        <TodaySlider instanceRef={instanceRef} />

      <div className="flex justify-center items-center">
      <Button customStyle="text-white px-8 py-3 bg-red m-4">
        View All Products
      </Button>
      </div>
      <div className="w-full h-[1px] rounded-sm bg-gray-400"></div>
    </div>
  );
};

export default Today;

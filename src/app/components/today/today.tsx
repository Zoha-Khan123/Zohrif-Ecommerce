"use client"
import React, { useRef } from "react";
import Headings from "../headings/headings";
import ProductSlider from "../product/productSlider";
import Timer from "../timer/timer";
import SliderArrow from "../product/sliderArrow";
import "keen-slider/keen-slider.min.css";
import { KeenSliderInstance } from "keen-slider";
const Today = () => {
  const instanceRef = useRef<KeenSliderInstance | null>(null);

  return (
    <div className="flex flex-col gap-10">

      <div className="flex justify-between items-center sm:items-end ">

        <div className="flex justify-start flex-col sm:flex-row sm:items-end gap-2 sm:gap-20">

        <div>
          <Headings heading="Todays" paragraph="Flash Sales" />
        </div>

        <div>
          <Timer />
        </div>

        </div>

        <div className="flex gap-2">
          <SliderArrow direction="left" onClick={() => instanceRef.current?.prev()} />
          <SliderArrow direction="right" onClick={() => instanceRef.current?.next()} />
        </div>

      </div>

      <div>
        <ProductSlider instanceRef={instanceRef} />
      </div>
    </div>
  );
};


export default Today;

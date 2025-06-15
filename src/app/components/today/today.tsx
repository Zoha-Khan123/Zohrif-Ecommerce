"use client";
import React, { useRef } from "react";
import Headings from "../headings/headings";
import ProductSlider from "../product/productSlider";
import Timer from "../timer/timer";
import SliderArrow from "../product/sliderArrow";
import "keen-slider/keen-slider.min.css";
import { KeenSliderInstance } from "keen-slider";
import Button from "../button/button";
const Today = () => {
  const instanceRef = useRef<KeenSliderInstance | null>(null);

  return (
    <div className="flex flex-col gap-10 p-[20px]">
      <div className="flex justify-between items-center sm:items-end ">
        <div className="flex justify-start flex-col md:flex-row md:items-end gap-8 md:gap-20">
          <div>
            <Headings heading="Todays" paragraph="Flash Sales" />
          </div>

          <div>
            <Timer />
          </div>
        </div>

        <div className="space-x-2 hidden sm:block">
          <SliderArrow
            direction="left"
            onClick={() => instanceRef.current?.prev()}
          />
          <SliderArrow
            direction="right"
            onClick={() => instanceRef.current?.next()}
          />
        </div>
      </div>

      <div>
        <ProductSlider instanceRef={instanceRef} />
      </div>

      <Button customStyle="sm:px-8 sm:py-3 bg-red m-4" >View All Products</Button>
    </div>
  );
};

export default Today;

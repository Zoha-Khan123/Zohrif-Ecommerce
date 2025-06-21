"use client";

import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { categoriesProducts } from "@/app/data/categoriesProduct";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function CategorySlider({
  instanceRef,
}: {
  instanceRef: React.RefObject<KeenSliderInstance | null>;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number>(3); 

  const [sliderRef, keenInstanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      "(min-width: 450px)": {
        slides: { perView: 3, spacing: 12 },
      },
      "(min-width: 700px)": {
        slides: { perView: 4, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 6, spacing: 16 },
      },
    },
    slides: { perView: 2, spacing: 8 },
  });

  useEffect(() => {
    if (keenInstanceRef.current) {
      instanceRef.current = keenInstanceRef.current;
    }
  }, [instanceRef, keenInstanceRef]);

  return (
    <div ref={sliderRef} className="keen-slider mt-4">
      {categoriesProducts.map((item, index) => (
        <div
          key={index}
          className={`group keen-slider__slide flex flex-col items-center px-4 py-7 gap-2 border rounded-sm border-gray-400
            ${
              selectedIndex === index
                ? "bg-red text-white"
                : "hover:bg-red hover:text-white transition-colors duration-300"
            }`}
          onClick={() => setSelectedIndex(index)}
        >
          <Image
            src={item.image}
            alt="Category"
            width={60}
            height={60}
            className={`transition duration-300 ${
              selectedIndex === index ? "invert" : "group-hover:invert"
            }`}
          />
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
}

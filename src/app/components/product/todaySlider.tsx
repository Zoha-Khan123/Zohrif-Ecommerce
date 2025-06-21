"use client";

import { useEffect } from "react";
import { KeenSliderInstance, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { todayProducts } from "@/app/data/todayProduct";
import TodayCard from "./todayCard";

export default function TodaySlider({
  instanceRef,
}: {
  instanceRef: React.RefObject<KeenSliderInstance | null>;
}) {
  const [sliderRef, keenInstanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      "(min-width: 450px)": {
        slides: { perView: 2, spacing: 12 },
      },
      "(min-width: 700px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 16 },
      },
    },
    slides: {
      perView: 2,
      spacing: 12,
    },
  });

  // Pass the Keen slider instance back to the parent
  useEffect(() => {
    if (keenInstanceRef.current) {
      instanceRef.current = keenInstanceRef.current;
    }
  }, [instanceRef, keenInstanceRef]);

  return (
    <div ref={sliderRef} className="keen-slider mt-4">
      {todayProducts.map((product, index) => (
        <div key={index} className="keen-slider__slide">
          <TodayCard {...product} />
        </div>
      ))}
    </div>
  );
}

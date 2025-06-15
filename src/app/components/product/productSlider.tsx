"use client";

import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { products } from "@/app/data/product";
import ProductCard from "./productCard";

export default function ProductSlider({
  instanceRef,
}: {
  instanceRef: React.RefObject<any>;
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
    instanceRef.current = keenInstanceRef.current;
  }, [keenInstanceRef, instanceRef]);

  return (
    <div ref={sliderRef} className="keen-slider mt-4">
      {products.map((product, index) => (
        <div key={index} className="keen-slider__slide">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}

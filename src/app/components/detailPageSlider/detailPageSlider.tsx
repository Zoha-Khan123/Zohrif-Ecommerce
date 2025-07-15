"use client";
import React from "react";
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

// Array of image paths (repeated images)
const imagePaths = [
  "/detailImage-01.png",
  "/detailImage-02.png",
  "/detailImage-03.png",
  "/detailImage-04.png",
  "/detailImage-05.png",
];

// Thumbnail plugin
export function DetailPageSlider(
  mainRef: React.RefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

// Main component
export default function App() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [DetailPageSlider(instanceRef)]
  );

  return (
    <>
      {/* Main Slider */}
      <div ref={sliderRef} className="keen-slider w-full h-[300px] sm:h-[500px]">
        {imagePaths.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide number-slide1 flex justify-center items-center w-full h-auto bg-gray-100"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={400}
              height={400}
              className="object-contain w-[300px] sm:w-[500px]"
            />
          </div>
        ))}
      </div>

      {/* Thumbnail Slider */}
      <div
        ref={thumbnailRef}
        className="keen-slider thumbnail w-full flex justify-between"
      >
        {imagePaths.map((src, index) => (
          <div key={index} className="keen-slider__slide">
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              width={120}
              height={120}
              className="w-[150px] bg-gray-100 h-[80px] sm:h-[100px] p-2 object-contain cursor-pointer"
            />
          </div>
        ))}
      </div>
    </>
  );
}

"use client"
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import Image from "next/image"
import { aboutSpecialist } from "@/app/data/aboutProduct"
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function AboutSpecialistSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 850px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 650px)": {
        slides: { perView: 1 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {aboutSpecialist.map((item, index) => (
          <div className="keen-slider__slide" key={index}>
            <div className="space-y-2 flex flex-col items-center">
              <div className="w-[350px] h-[400px] bg-[#F5F5F5] flex justify-center items-end rounded-sm">
                <Image
                  src={item.image}
                  width={200}
                  height={200}
                  alt="Image"
                  className="w-[300px] h-[350px] object-contain"
                />
              </div>
              <p className="font-bold text-2xl text-center">{item.name}</p>
              <p className="text-center">{item.profession}</p>
              <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Pagination */}
      {loaded && instanceRef.current && (
        <div className="flex justify-center gap-2 mt-4">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "bg-black scale-110" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      )}
    </>
  )
}

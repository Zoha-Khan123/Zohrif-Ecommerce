"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full h-[400px]"
    >
      <SwiperSlide>
        <img
          src="/hero-image-01.jpg"
          alt="Image 1"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/hero-image-02.jpg"
          alt="Image 2"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <video
          src="https://cdn.shopify.com/videos/c/o/v/922fb00c4d1e45b88b168809abe5319a.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </SwiperSlide>
    </Swiper>
  )
}

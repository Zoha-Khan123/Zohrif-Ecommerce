"use client";
import { TodayProduct } from "@/app/types/types";
import { Star } from "lucide-react";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function TodayCard({
  image,
  name,
  price,
  oldPrice,
  discount,
  rating,
  reviews,
  isLiked,
}: TodayProduct) {
  const [liked, setLiked] = useState(isLiked);

  return (
    <>
      <div className="group bg-light relative w-full h-[200px] flex justify-center items-center">
        {/* Image */}
        <div className="flex justify-center items-center w-[80%] h-[80%] rounded-md overflow-hidden">
          <Image
            src={image}
            alt="Image"
            width={100}
            height={150}
            className="w-[200] h-full object-contain"
          />

          {/* Discount */}
          <div className="absolute top-2 left-2">
            <div className="bg-red text-white rounded-sm py-1 px-2 flex justify-center items-center">
              <p>{discount}%</p>
            </div>
          </div>

          {/* Icons */}
          <div className="flex flex-col gap-2 top-2 right-2 absolute">
            <button
              onClick={() => setLiked(!liked)}
              className="bg-white flex justify-center items-center p-2 rounded-full shadow hover:text-red-500 transition"
              aria-label="Like product"
            >
              <Heart
                className={`w-4 h-4 transition cursor-pointer ${liked ? "fill-red-500 text-red-500" : "text-black"}`}
              />
            </button>

            <button
              className="bg-white flex justify-center items-center p-2 rounded-full shadow hover:text-blue-500 transition"
              aria-label="View product"
            >
              <Eye className="w-4 h-4 cursor-pointer" />
            </button>
          </div>
        </div>

      <div className="absolute bottom-0 left-0 w-full bg-black cursor-pointer text-white text-center py-2 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Add to Cart
      </div>
      </div>

      {/* Product Name */}
      <div>
        <h1 className="text-[10px] sm:text-sm">{name}</h1>
        <div className="flex gap-2">
          <p className="text-red text-[10px] sm:text-sm">{price}</p>
          <p className="text-gray-500 line-through text-[10px] sm:text-sm">
            {oldPrice}
          </p>
        </div>
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.round(rating) ? "fill-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-xs text-gray-500">({reviews})</span>
        </div>
      </div>
    </>
  );
}

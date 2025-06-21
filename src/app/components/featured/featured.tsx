import React from "react";
import Image from "next/image";
import Headings from "../headings/headings";

const Featured = () => {
  return (
    <div className="space-y-16 p-5 mt-10 lg:p-0">
      <Headings heading="Featured" paragraph="New Arrival" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Large Card */}
        <div className="relative h-[400px] overflow-hidden rounded-lg bg-black">
          <Image
            src="/featured-01.png"
            alt="PlayStation 5"
            fill
            className="object-contain"
          />
          <div className="absolute bottom-6 left-6 text-white space-y-2">
            <h1 className="text-xl font-bold">PlayStation 5</h1>
            <p className="text-sm">
              Black and White version of the PS5 coming out on scale
            </p>
            <button className="border-b border-gray-400 cursor-pointer">Shop Now</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-rows-2 gap-6">
          {/* Top Full Width */}
          <div className="relative h-[190px] overflow-hidden rounded-lg bg-[#0d0d0d]">
            <Image
              src="/featured-02.png"
              alt="Women's Collection"
              fill
              className="object-contain"
            />
            <div className="absolute bottom-4 left-4 text-white space-y-1">
              <h1 className="text-lg font-bold">Women&aposs Collections</h1>
              <p className="text-sm">
                Featured woman collections that give you another vibe.
              </p>
              <button className="border-b border-gray-400 cursor-pointer">Shop Now</button>
            </div>
          </div>

          {/* Bottom 2 Columns */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative h-[190px] overflow-hidden rounded-lg bg-[#272727]">
              <Image
                src="/featured-03.png"
                alt="Speakers"
                fill
                className="object-contain"
              />
              <div className="absolute bottom-4 left-4 text-white space-y-1">
                <h1 className="text-lg font-bold">Speakers</h1>
                <p className="text-sm">Amazon wireless speakers</p>
                <button className="border-b border-gray-400 cursor-pointer">Shop Now</button>
              </div>
            </div>

            <div className="relative h-[190px] overflow-hidden rounded-lg bg-[#272727]">
              <Image
                src="/featured-04.png"
                alt="Perfume"
                fill
                className="object-contain"
              />
              <div className="absolute bottom-4 left-4 text-white space-y-1">
                <h1 className="text-lg font-bold">Perfume</h1>
                <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                <button className="border-b border-gray-400 cursor-pointer">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

import React from "react";
import Button from "../button/button";
import Image from "next/image";

const MusicExperience = () => {
  return (
    <div className="bg-black flex flex-col lg:flex-row justify-around items-center px-4 sm:px-6 py-16 mt-10 ">
      {/* Text */}
      <div className="space-y-5 md:space-y-7 text-center lg:text-left mb-8 lg:mb-0">
        <div className="space-y-2">
          <p className="text-[#00FF66]">Categories</p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white leading-tight sm:leading-16">
            Enhance Your <br /> Music Experience
          </h1>
        </div>

        <div className="flex gap-3 sm:gap-5 justify-center lg:justify-start">
          <div className="bg-white flex flex-col h-14 w-14 sm:h-18 sm:w-18 justify-center items-center rounded-full">
            <p className="font-bold">23</p>
            <p className="text-[10px] sm:text-[12px]">Hours</p>
          </div>
          <div className="bg-white flex flex-col h-14 w-14 sm:h-18 sm:w-18 justify-center items-center rounded-full">
            <p className="font-bold">5</p>
            <p className="text-[10px] sm:text-[12px]">Days</p>
          </div>
          <div className="bg-white flex flex-col h-14 w-14 sm:h-18 sm:w-18 justify-center items-center rounded-full">
            <p className="font-bold">59</p>
            <p className="text-[10px] sm:text-[12px]">Minutes</p>
          </div>
          <div className="bg-white flex flex-col h-14 w-14 sm:h-18 sm:w-18 justify-center items-center rounded-full">
            <p className="font-bold">35</p>
            <p className="text-[10px] sm:text-[12px]">Seconds</p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start">
          <Button customStyle="px-6 sm:px-8 py-2 sm:py-3 bg-[#00FF66] font-bold">
            Buy Now!
          </Button>
        </div>
      </div>
      {/* Image */}
      <div className="relative w-fit mt-6 lg:mt-0">
        <Image
          src="/jumbo-speaker.png"
          alt="Image"
          width={500}
          height={500}
          className="drop-shadow-[0_30px_80px_gray] w-[300px] sm:w-[400px] md:w-[500px]"
        />
      </div>
    </div>
  );
};
export default MusicExperience;

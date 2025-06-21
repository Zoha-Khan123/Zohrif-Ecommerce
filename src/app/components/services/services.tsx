import { services } from "@/app/data/service";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-5 px-6 py-14 sm:py-30">
      {services.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-4">
          {/* Icon Circle */}
          <div className="w-20 h-20 bg-[#c1c0c1] rounded-full flex items-center justify-center">
            <div className="bg-black p-4 rounded-full">
              <Image src={item.image} alt="Image" width={24} height={24} />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h1 className="font-semibold text-sm md:text-base">{item.heading}</h1>
            <p className="text-sm text-gray-600 mt-1">{item.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;

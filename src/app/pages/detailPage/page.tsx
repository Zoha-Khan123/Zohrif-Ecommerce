'use client'
import React , {useState} from 'react'
import Stars from "../../components/stars/stars";
import { FaRegHeart } from 'react-icons/fa';
import { GrDeliver } from 'react-icons/gr';
import { RefreshCcw } from 'lucide-react';
import DetailPageSlider from '@/app/components/detailPageSlider/detailPageSlider';




const DetailPage = () => {
   const [count, setCount] = useState(2); // Default value

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));
  return (
    <div className='my-4 sm:my-10'>

    {/* Links */}
    <div className='p-4 m-auto max-w-[500px] sm:max-w-[800px] lg:m-0 lg:p-0 flex gap-2 sm:gap-4 space-y-0 sm:space-y-10 text-gray-400'>
        <p className='cursor-pointer text-[10px] md:text-sm'>Account</p>
        <p>/</p>
        <p className='cursor-pointer text-[10px] md:text-sm'>Gaming</p>
        <p>/</p>
        <p className='text-black cursor-pointer text-[10px] md:text-sm'>Havic HV G-92 Gamepad</p>
    </div>

    {/* Down Page */}
    <div className='p-4 lg:p-0 flex-col lg:flex lg:flex-row justify-between m-auto  max-w-[500px] sm:max-w-[800px] lg:max-w-[1200px] space-y-10 gap-10'>

    {/* Right Side */}
    <div className='flex flex-col gap-5 w-full lg:w-[50%] md:text-sm'>
    <DetailPageSlider/>
    
    </div>

    {/* Left Side */}
    <div className='w-full lg:w-[50%] space-y-[10px]'>
      <h1 className='text-2xl font-bold'>Havic HV G-92 Gamepad</h1>
      <div className='flex gap-3'>
        <Stars rating={120} reviews={50}/>
        <span>|</span>
        <p className='text-green-500'>In Stock</p>
      </div>
      <p>$192.00</p>
      <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
      <div className="w-full h-[2px] rounded-sm bg-gray-400"></div>
      {/* Colours */}
      <div>
      <p>Colours:</p>
      </div>
      {/* Size */}
      <div className='flex gap-3'>
        <p className='text-xl'>Size:</p>
        <div className='flex items-center justify-center w-10 h-8 border-[1px] rounded-sm border-gray-300 hover:text-white cursor-pointer hover:bg-red-500 transition'>XS</div>
        <div className='flex items-center justify-center w-10 h-8 border-[1px] rounded-sm border-gray-300 hover:text-white cursor-pointer hover:bg-red-500 transition'>S</div>
        <div className='flex items-center justify-center w-10 h-8 border-[1px] rounded-sm border-gray-300 hover:text-white cursor-pointer hover:bg-red-500 transition'>M</div>
        <div className='flex items-center justify-center w-10 h-8 border-[1px] rounded-sm border-gray-300 hover:text-white cursor-pointer hover:bg-red-500 transition'>L</div>
        <div className='flex items-center justify-center w-10 h-8 border-[1px] rounded-sm border-gray-300 hover:text-white cursor-pointer hover:bg-red-500 transition'>XL</div>
      </div>

      <div className='flex gap-4'>
      {/* Button Quantity */}
      <div className="flex items-center w-fit rounded overflow-hidden border border-gray-300">
      <button onClick={decrement} className="w-10 h-11 flex justify-center items-center text-xl border-r border-gray-300 hover:text-white cursor-pointer hover:bg-red-500  transition">-</button>
      <div className="w-24 h-11 flex justify-center items-center text-lg font-medium border-r border-gray-300">{count}</div>
      <button onClick={increment} className="w-10 h-11 flex justify-center items-center text-xl hover:text-white cursor-pointer hover:bg-red-500 transition">+</button>
     </div>
     {/* Button */}
     <button className="w-44 h-11 border rounded-sm border-gray-300 flex justify-center items-center hover:text-white cursor-pointer hover:bg-red-500 transition">Buy Now</button>
      {/* Heart */}
      <div className='w-10 h-11 border border-gray-300 flex justify-center items-center rounded-sm text-xl'><FaRegHeart /></div>
    </div>

    {/* Delievery */}
    <div className='border-gray-300 border w-full'>
    <div className='border-b border-gray-300 flex pl-2 items-center gap-4 p-4'><GrDeliver className='w-6 h-6'/><span className='space-y-1'><p>Free Delievery</p><p className='text-sm'>Enter your postal code for Delivery Availability</p></span></div>
    <div className='border-b border-gray-300 flex items-center gap-4 p-4'><RefreshCcw className='w-6 h-6'/><span className='space-y-1'><p>Return Delivery</p><p className='text-sm'>Free 30 Days Delivery Returns. Details</p></span></div>
    </div>


    </div>

    </div>

    </div>

  )
}

export default DetailPage




    
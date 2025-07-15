import React from 'react'
import Image from "next/image"
import { aboutProduct } from '@/app/data/aboutProduct'
import AboutSpecialistSlider from '@/app/components/aboutSpecialistSlider/aboutSpecialistSlider'
import Services from '@/app/components/services/services'
import Link from 'next/link'


const About = () => {
  return (
    <div>

  
    <div className='p-5 space-y-20'>
      {/* Breadcrumb Links */}
      <div className="pt-10 flex gap-2 text-gray-400 mb-6 text-sm">
        <Link href="/"><p className="cursor-pointer hover:text-black">Home</p></Link>
        <p>/</p>
        <Link href="/pages/about"><p className="text-black cursor-pointer">About</p></Link>
      </div>

      {/* About Page */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-10 py-5'>
      <div className='w-full md:w-[50%] space-y-5'>
        <h1 className='font-bold text-3xl'>Our Story</h1>
        <p className='leading-6'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
        <p className='leading-6'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
      </div>
      <div className='w-full md:w-[50%] flex justify-end'>
        <Image src="/about-image.png" width={400} height={400} alt="Image" className='w-full md:w-[500px] md:h-[500px] object-contain'/>
      </div>
      </div>

    {/* Products */}
    <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-4'>
        {
            aboutProduct.map((product,index)=>{
                return(
                    <div key={index} className='flex flex-col justify-center items-center border-gray-200 border-2 p-8 space-y-3'>
                        <Image src={product.image} width={60} height={60} alt="Image" className='bg-black p-1 border-[10px] border-gray-300 rounded-full'/>
                        <p className='font-bold text-2xl'>{product.num}k</p>
                        <p>{product.name}</p>
                    </div>
                )
            })
        }
    </div>

    {/* Specialiest */}
    <AboutSpecialistSlider/>

  </div>
    {/* Services */}
    <Services/>
    </div>
  )
}

export default About
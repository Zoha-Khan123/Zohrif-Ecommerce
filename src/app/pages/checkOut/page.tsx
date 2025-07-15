import React from 'react'
import Image from "next/image"
import Button from '@/app/components/button/button'
import Link from 'next/link'

const CheckOut = () => {
  return (
    <div className="p-8 sm:my-5 flex flex-col gap-10">
      {/* Breadcrumb Links */}
      <div className="flex flex-wrap gap-2 text-gray-400 mb-6 text-sm">
        <Link href="/pages/account"><p className="cursor-pointer hover:text-black">Account</p></Link>
        <p>/</p>
        <Link href="/pages/account"><p className="cursor-pointer hover:text-black">My Account</p></Link>
        <p>/</p>
        <Link href="/"><p className="cursor-pointer hover:text-black">Product</p></Link>
        <p>/</p>
        <Link href="/pages/cart"><p className="cursor-pointer hover:text-black">View Cart</p></Link>
        <p>/</p>
        <Link href="/pages/checkOut"><p className="text-black cursor-pointer">CheckOut</p></Link>
      </div>

      {/* Heading */}
      <div><h1 className='text-2xl font-bold'>Billing Details</h1></div>
      
<div className='flex flex-col md:flex-row justify-between gap-10'>


      {/* Form */}
      <div className='w-full md:w-[50%]'>
      <form className="md:max-w-[400px] lg:max-w-[500px]  space-y-8">
      {/* First Name */}
      <div>
        <label htmlFor="firstName" className="block font-medium text-gray-400">First Name</label>
        <input type="text" id="firstName" name="firstName" className="mt-1 block w-full bg-light rounded-md px-3 py-2" />
      </div>

      {/* Company Name */}
      <div>
        <label htmlFor="companyName" className="block font-medium text-gray-400">Company Name</label>
        <input type="text" id="companyName" name="companyName" className="mt-1 block w-full bg-light rounded-md px-3 py-2" />
      </div>

      {/* Street Address */}
      <div>
        <label htmlFor="streetAddress" className="block font-medium text-gray-400">Street Address</label>
        <input type="text" id="streetAddress" name="streetAddress" className="mt-1 block w-full bg-light rounded-md px-3 py-2" />
      </div>

      {/* Apartment / Floor (Optional) */}
      <div>
        <label htmlFor="apartment" className="block font-medium text-gray-400">Apartment, Floor, etc. (Optional)</label>
        <input type="text" id="apartment" name="apartment" className="mt-1 block w-full bg-light rounded-md px-3 py-2" />
      </div>

      {/* Town / City */}
      <div>
        <label htmlFor="city" className="block font-medium text-gray-400">Town / City</label>
        <input type="text" id="city" name="city" className="mt-1 block w-full bg-light rounded-md px-3 py-2" />
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="block font-medium text-gray-400">Phone Number</label>
        <input type="tel" id="phone" name="phone" className="mt-1 block w-full bg-light px-3 py-2" />
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="email" className="block font-medium text-gray-400">Email Address</label>
        <input type="email" id="email" name="email" className="mt-1 block w-full bg-light px-3 py-2" />
      </div>

      {/* Save Info Checkbox */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="saveInfo"
          name="saveInfo"
          className="h-4 w-4 border-gray-100 rounded accent-red"
        />
        <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-400">
          Save this information for faster check-out next time
        </label>
      </div>
    </form>
      </div>

    {/* Place Order */}
    <div className='md:w-[50%] w-full md:max-w-[400px] text-sm my-5 md:my-0 space-y-5'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'> <Image src="/Gamepad.png" alt="Image" width={50} height={50} />
        <p>LCD Monitor</p></div>
        <p>$650</p>
      </div>

      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'> <Image src="/led.png" alt="Image" width={50} height={50} />
        <p>LCD Monitor</p></div>
        <p>$650</p>
      </div>

      <div className='space-y-2'>
        <div className='flex justify-between'>
        <p>Subtotal</p>
        <p>$1750</p>
        </div>
        <div className="h-px bg-gray-400 w-full"></div>
      </div>

      <div className='space-y-2'>
        <div className='flex justify-between'>
        <p>Shipping</p>
        <p>Free</p>
        </div>
        <div className="h-px bg-gray-400 w-full"></div>
        </div>

      <div className='flex justify-between space-y-2'>
        <p>Total</p>
        <p>$1750</p>
      </div>

      <div className='flex justify-between items-center'>
         <div className="flex items-center gap-3">
        <input type="radio" id="female" name="gender" value="female" className="h-4 w-4 accent-black" />
        <label htmlFor="female">Bank</label>
      </div>
        <Image src="/bank-cards.png" alt="Image" width={200} height={200} className='object-contain'/>
      </div>

        <div className='flex items-center gap-3'>
        <input type="radio" id="female" name="gender" value="female" className="h-4 w-4 accent-black" />
        <label htmlFor="female">Cash on delievery</label>
      </div>

       {/* Bottom Section */}
      <div className="flex justify-between gap-6">
        {/* Coupon */}
          <div className="flex flex-row sm:items-center gap-2 w-full">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-gray-300 rounded-sm px-4 py-2 w-full sm:w-[250px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <Button customStyle="text-white py-3 px-4 lg:px-6 bg-red hover:bg-red-500 whitespace-nowrap">
              Apply Coupon
            </Button>
          </div>
          </div>
        <div>
          <Link href="/">
          <Button customStyle="text-white py-3 px-8  bg-red hover:bg-red-500">
            Place Order
          </Button>
          </Link>
          </div>
    </div>
      </div>
</div>
  )
}

export default CheckOut
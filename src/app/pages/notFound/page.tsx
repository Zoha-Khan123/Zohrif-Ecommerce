import Button from '@/app/components/button/button'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="h-screen p-8 flex flex-col">
      
      {/* Breadcrumb - top-left */}
      <div className="flex gap-2 text-gray-400 text-sm mb-6">
        <p className="cursor-pointer hover:text-black">Home</p>
        <p>/</p>
        <p className="text-black cursor-pointer">404 Error</p>
      </div>

      {/* Centered 404 Content */}
      <div className="flex-grow flex flex-col justify-center items-center text-center gap-8">
        <h1 className="font-bold text-3xl sm:text-5xl  md:text-7xl">404 Not Found</h1>
        <p className="text-gray-600">Your visited page not found. You may go home page.</p>
        <Link href="/">
        <Button customStyle="text-white bg-red hover:bg-red-500 py-3 px-8">
          Back to homepage
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound

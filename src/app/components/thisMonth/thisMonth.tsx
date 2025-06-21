import React from 'react'
import Headings from '../headings/headings'
import Button from '../button/button'
import TodayCard from '../product/todayCard'
import { thisMonth } from '@/app/data/thisMonthProduct'

const ThisMonth = () => {
  return (
    <div className="space-y-16 p-5 mt-10 lg:p-0">
    <div className='flex justify-between items-center'>
        <Headings heading="This Month" paragraph="Best Selling Products" />
        <Button customStyle="text-white px-12 py-4 bg-red m-4 hidden sm:block">
        View All
      </Button>
    </div>
    
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
      {thisMonth.map((product, index) => (
        <div key={index}><TodayCard {...product} /></div>
      ))}
    </div>

      <div className='flex justify-center items-center'>
     <Button customStyle="px-14 py-3 text-white bg-red m-4 block sm:hidden">
        View All
      </Button>
      </div>
    </div>
  )
}

export default ThisMonth
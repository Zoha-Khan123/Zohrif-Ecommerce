import React from 'react'

interface MyTextProps  {
    heading : string ;
    paragraph : string ;
}

const Headings : React.FC<MyTextProps> = ({heading,paragraph}) => {
  return (
    <div className='flex flex-col gap-1 sm:gap-6'>
        <div className='flex items-center gap-2'>
        <div className='h-6 w-3 sm:h-10 sm:w-5 rounded-sm bg-red'></div>
        <h1 className='font-bold text-red'>{heading}</h1>
        </div>
        <div>
        <p className='text-xl sm:text-3xl font-bold'>{paragraph}</p>
        </div>
    </div>
  )
}

export default Headings
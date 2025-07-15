import React from 'react'

interface MyTextProps  {
    heading : string ;
    paragraph? : string ;
}

const Headings : React.FC<MyTextProps> = ({heading,paragraph}) => {
  return (
    <div className='flex flex-col gap-2 md:gap-6'>
        <div className='flex items-center gap-2'>
        <div className='h-6 w-3 md:h-10 md:w-5 rounded-sm bg-red'></div>
        <h1 className='font-bold text-red'>{heading}</h1>
        </div>
        <div>
        <p className='text-xl md:text-2xl font-bold'>{paragraph}</p>
        </div>
    </div>
  )
}

export default Headings
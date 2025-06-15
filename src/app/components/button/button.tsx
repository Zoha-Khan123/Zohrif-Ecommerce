import { ButtonProps } from '@/app/types/product'
import React from 'react'



const Button: React.FC<ButtonProps> = ({ customStyle, children }) => {
  return (
        <div className='flex justify-center items-center'>
            <button className={`${customStyle} text-white rounded-sm text-sm px-5 py-2`}>{children}</button>
        </div>
   
  )
}

export default Button


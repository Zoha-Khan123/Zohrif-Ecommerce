import { ButtonProps } from '@/app/types/types'
import React from 'react'



const Button: React.FC<ButtonProps> = ({ customStyle, children }) => {
  return (
    <button className={`${customStyle} rounded-sm text-sm cursor-pointer hover:scale-105 transition-transform duration-300`}>{children}</button>
  )
}

export default Button


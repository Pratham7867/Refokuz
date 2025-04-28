import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";


export default function Button({title="Get Started"}) {
  return (
    <div className='w-35 px-3 py-1.5 bg-zinc-100 text-black flex items-center justify-between rounded-full'>
      <span className='text-sm font-medium'> {title} </span>
      <BsArrowReturnRight />
    </div>
  )
}

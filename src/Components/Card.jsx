import React from 'react'
import { PiArrowRightThin } from "react-icons/pi";

function Card({width,start,para,hover}) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} flex flex-col justify-between  `}>
      <div className='w-full flex justify-between items-center'>
        <h1>Get In Touch</h1>
        <PiArrowRightThin />
      </div>
      <h1 className='text-3xl font-medium'>Whatever Heading </h1>
      <div className='w-full '>
    {
      start===true&&(
      <>
      <h1 className='text-5xl font-semibold mt-50 '> Start a Project </h1>
      <button className='rounded-full py-2 px-3 border-[1px] border-zinc'>Contact US </button>
      </>
      )
    }
{
  para==true&&<p className='text-sm text-zinc-500 font-medium'>Explore what drives our team.</p>
}
      </div>
    </div>
  )
}

export default Card



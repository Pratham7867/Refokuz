import React from 'react'
import Button from './Button'

function Product({ val,mover,count }) {
  return (
    <div className='w-full h-[23rem] py-20  bg-zinc-900 '>
      <div onMouseEnter={()=>{mover(count)}} className='flex items-center justify-between  max-w-screen-xl mx-auto'>
        <h1 className='font-semibold text-6xl'>{val.title}</h1>
        <div className='det w-1/3  '>
          <p className='mb-10'>{val.description}</p>
          <div className='flex gap-5'>
            <Button className='' />
            {val.case && <Button className='' title='Case Study' />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

import React from 'react'

function Strip({val}) {
   
  return (
    <div className='min-w-63 p-4 py-5 border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-700 flex justify-between items-center '>
        <img src={val.url} alt="" />
        <span>{val.number}</span>
    </div>
  )
}

export default Strip

import React from 'react'
import Card from './Card'

function Cards() {
  return (
<div className='w-full bg-zinc-900'>
    <div className='max-w-screen-xl mx-auto flex  gap-3 py-20 '>
      <Card  width={'basis-1/3'}  start={false} para={true}/>
      <Card  width={'basis-2/3'}  start={true} para={false} hover={'bg-purple-500'}/>
    </div>
</div>
  )
}

export default Cards

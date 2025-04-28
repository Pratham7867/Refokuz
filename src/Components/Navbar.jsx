import React from 'react'
import Button from './Button'

export default function Navbar() {
    return (
        <div className='max-w-screen-xl mx-auto py-4 flex items-center  border-b-1 border-zinc-700'>
            <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" srcset="" />
            <div className="link flex items-center justify-between gap-14 w-full ml-30">
               <div className='flex items-center gap-14 justify-between'>
               {['Home', 'Work', 'Culture', '', 'News'].map((elem, index) => (
                    elem.length === 0 ? <span className='w-[1px] h-10 bg-zinc-600 '></span> :
                        <a href='# ' className=''>
                            {index === 1 && <span style={{ boxShadow: "0 0 0.25em #00FF19" }} className='inline-block w-2 h-2 rounded-full bg-green-500'></span>}
                            {elem}</a>))}
                </div> 
                <Button className="" />
            </div>
        </div>
    )
}

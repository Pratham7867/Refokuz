import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "motion/react"

export default function Work() {
    const{scrollYProgress}=useScroll()

    const[images,setImages ]=useState( [
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png', top: '50%', left: '50%', isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png', top: '56%', left: '44%', isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png', top: '44%', left: '56%', isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png', top: '60%', left: '44%', isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png', top: '52%', left: '53%', isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png', top: '60%', left: '60%', isActive: false }
    ])


    scrollYProgress.on('change',(data)=>{

        function imgesshow(arr){
            setImages((perv)=>
            perv.map((item,index)=>
            arr.indexOf(index)===-1
        ?{...item,isActive:false}:{...item,isActive:true})
            )
        }

        switch (Math.floor(data*100)) {
            case 0:
                imgesshow([]);
                break;
            case 1:
                imgesshow([0]);
                break;
            case 2:
                imgesshow([0,1]);
                break;
            case 3:
                imgesshow([0,1,2]);
                break;
            case 4:
                imgesshow([0,1,2,3]);
                break;
            case 5:
                imgesshow([0,1,2,3,4]);
                break;
            case 6:
                imgesshow([0,1,2,3,4,5]);
                break;
        }
    })
    return (
        <div className='w-full  '>
            <div className='max-w-screen-xl text-center relative  mx-auto '>
                <h1 className='text-[26vw] font-medium select-none tracking-tight '>WORK</h1>
                <div className=' absolute top-0 w-full h-full '>
                    {images.map((elem, index) => (elem.isActive && <img className="w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%] " style={{ top: elem.top, left: elem.left }} src={elem.url} alt="" />
                    ))}
                </div>
            </div>
        </div>
    )
}

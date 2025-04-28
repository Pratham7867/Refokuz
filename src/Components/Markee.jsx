import React from 'react'
import { motion } from "framer-motion";

function Markee({imagesUrl,direction}) {
  return (
    <div className='flex w-full overflow-hidden '>
    <motion.div className='flex gap-15 flex-shrink-0  py-1 mt-10 my-10'
      initial={{ x: direction === "left" ? "0" : "-100%" }}
      animate={{ x: direction === "left" ? "-100%" : "0" }}
      transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
       >
      
      {imagesUrl.map(url=>{
        return <img src={url} alt=""/>
      })}
       {imagesUrl.map(url=>{
         return <img src={url} alt=""/>
        })}
    </motion.div>
    <motion.div className='flex gap-15 py-1 flex-shrink-0  mt-10 my-10'   initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
      {imagesUrl.map(url=>{
        return <img src={url} alt=""/>
      })}
       {imagesUrl.map(url=>{
         return <img src={url} alt=""/>
        })}
    </motion.div>
</div>
  )
}

export default Markee

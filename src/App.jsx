import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Strips from './Components/Strips'
import Products from './Components/Products'
import Markees from './Components/Markees'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



export default function App() {
const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen bg-zinc-900 text-white font-'>
      <Navbar></Navbar>
      <Work/>
      <Strips/>
      <Products/>
      <Markees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

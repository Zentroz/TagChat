import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from './Navigation'

const Navbar = () => {
  return (
    <div className='h-screen w-[15vw] border-r-[1px] grid grid-rows-3'>
      <div className='logo h-28 flex items-center justify-center'>
        <h1 className='text-4xl italic font-[cursive] font-bold'><span className='text-orange-400 font-[cursive] font-bold'>Tag</span>Chat</h1>
      </div>
      <div className='navlinks flex justify-center items-center'>
        <ul className='flex flex-col gap-5'>
          <Navigation to={"/"} content={"Home"} elementL={<img className='w-6 h-6' src="/src/img/home.png" alt="home" />} />
          <Navigation to={"/search"} content={"Search"} />
          <Navigation to={"/inbox"} content={"Messages"} />
        </ul>
      </div>
      <div className='options'>
      </div>
    </div >
  )
}

export default Navbar

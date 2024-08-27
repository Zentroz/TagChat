import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from './Navigation'

const Navbar = () => {
  const onClick = () => {
    console.log("Clicked")
  }
  return (
    <div className='h-screen w-[15vw] min-w-44 max-w-96 border-r-[1px] grid grid-rows-3'>
      <div className='logo h-28 flex items-center justify-center'>
        <h1 className='text-4xl italic font-[cursive] font-bold'><span className='text-orange-400 font-[cursive] font-bold'>Tag</span>Chat</h1>
      </div>
      <div className='navlinks flex justify-center items-center'>
        <ul className='flex flex-col gap-5'>
          <NavLink to={"/"}><Navigation content={"Home"} elementL={<img className='w-5 h-5' src="/src/img/home.png" alt="home" />} /></NavLink>
          <NavLink to={"/search"}><Navigation content={"Search"} elementL={<img className='w-5 h-5' src="/src/img/search.png" alt="home" />} /></NavLink>
          <NavLink to={"/inbox"}><Navigation content={"Messages"} elementL={<img className='w-5 h-5' src="/src/img/chat.png" alt="home" />} /></NavLink>
        </ul>
      </div>
      <div className='options flex items-end justify-center py-5'>
        <Navigation content={"Settings"} elementL={<img className='w-5 h-5' src="/src/img/gear.png" alt="home" />} onClick={onClick} />
      </div>
    </div >
  )
}

export default Navbar

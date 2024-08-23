import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Suggestion from '../components/Suggestion/Suggestion'

const Layout = () => {
  return (
    <div className='flex'>
      <Navbar />
      <Outlet />
      <Suggestion />
    </div>
  )
}

export default Layout

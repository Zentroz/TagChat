import React from 'react'
import { Link } from 'react-router-dom'

const LogInButton = () => {
  return (
    <Link to="/login"><button className='login-btn bg-[#f79429] w-24 h-10 rounded-2xl text-center hover:bg-[#e7770d]'>Log In</button></Link>
  )
}

export default LogInButton

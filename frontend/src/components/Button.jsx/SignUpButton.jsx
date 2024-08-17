import React from 'react'
import { Link } from 'react-router-dom'

const SignUpButton = () => {
  return (
    <Link to="/signup"><button className='button bg-[#f79429] w-24 h-10 rounded-2xl text-center hover:bg-[#e7770d]'>Sign Up</button></Link>
  )
}

export default SignUpButton

import React from 'react'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <span>
      <Link to="/"><img className='w-24' src={logo} alt="tagchat_logo" /></Link>
    </span>
  )
}

export default Logo

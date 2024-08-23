import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = ({ content, to, elementL, elementR }) => {
  return (
    <NavLink to={to} className='transition-colors duration-350 hover:bg-gray-200 w-[13vw] px-6 h-10 rounded-md flex items-center'>{elementL} <li className='flex'>{content}</li> {elementR}</NavLink>
  )
}

export default Navigation

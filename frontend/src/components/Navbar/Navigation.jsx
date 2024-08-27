import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = ({ content, to, elementL, elementR, onClick }) => {
  return (
    <button className='transition-colors duration-350 hover:bg-gray-200 w-[13vw] px-6 h-10 rounded-md flex items-center gap-2' onClick={onClick}>{elementL} <li className='flex'>{content}</li> {elementR}</button>
  )
}

export default Navigation

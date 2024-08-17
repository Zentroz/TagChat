import React, { useContext } from 'react'
import Logo from './Logo'
import LogOutButton from '../Button.jsx/LogOutButton'
import UserContext from '../../context/User/UserContext'
import MessageButton from './MessageButton'
import LogInButton from '../Button.jsx/LogInButton'
import SignUpButton from '../Button.jsx/SignUpButton'

const Navbar = () => {
  const { logged } = useContext(UserContext)
  return (
    <div className='navbar grid grid-cols-3 border-b-[1.5px] rounded-lg px-4'>
      <Logo />
      < span >
        <ul>
          <li>Icon</li>
          <li>Username</li>
          <li>Tags</li>
          <li>Sign In/Out</li>
        </ul>
      </span >
      <span className='navbtn flex justify-end items-center gap-3'>
        {logged && (
          <>
            <MessageButton counter={5} />
            <LogOutButton />
          </>
        )}
        {!logged && (
          <>
            <SignUpButton />
            <LogInButton />
          </>
        )}
      </span>
    </div>
  )
}

export default Navbar
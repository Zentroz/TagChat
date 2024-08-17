import React, { useContext, UseContext } from 'react'
import UserContext from '../context/User/UserContext.js'

const Home = () => {

  const { logged } = useContext(UserContext)
  return (
    <div className=''>
      Home
    </div>
  )
}

export default Home

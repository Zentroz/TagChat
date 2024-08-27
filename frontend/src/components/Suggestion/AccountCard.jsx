import React from 'react'

const AccountCard = ({ username, btnText }) => {
  return (
    <div className='grid grid-cols-3 gap-4 items-center w-56 max-w-[18vw] px-3'>
      <div className='w-12 h-12 rounded-3xl bg-gray-400'></div>
      <p>{username}</p>
      <button className='text-orange-500 float-right'>{btnText}</button>
    </div>
  )
}

export default AccountCard

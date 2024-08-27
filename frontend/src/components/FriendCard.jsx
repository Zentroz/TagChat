import React from 'react'

const FriendCard = ({ name, online }) => {
  const status = {
    true: "Active",
    false: "Offline"
  }
  return (
    <div className=' h-20 flex items-center gap-4'>
      <div className='img w-16 h-16 bg-gray-400 rounded-[2.5rem]'></div>
      <div className='flex flex-col gap-1'>
        <p className='text-lg'>{name}</p>
        <p className={`text-sm ${online ? "text-orange-400" : "text-gray-400"}`}>{status[online]}</p>
      </div>
    </div>
  )
}

export default FriendCard

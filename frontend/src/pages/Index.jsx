import React from 'react'
import FriendCard from '../components/FriendCard'
import TopScroller from '../components/TopScroller/TopScroller';

const Index = () => {
  const arr = ['A', 'B', 'C', 'D', 'E', , 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];

  return (
    <div className='h-screen w-[52rem] p-3 flex flex-col gap-4'>
      <TopScroller array={arr} />
      <div>
        <h1 className='text-xl'>Your Friends</h1>
        <div className='py-5 flex flex-col gap-2'>
          <FriendCard name={"Name"} online={true} />
          <FriendCard name={"Name"} online={true} />
          <FriendCard name={"Name"} online={false} />
          <FriendCard name={"Name"} online={false} />
        </div>
      </div>
    </div>
  )
}

export default Index

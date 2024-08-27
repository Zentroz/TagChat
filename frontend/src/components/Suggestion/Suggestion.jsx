import React from 'react'
import AccountCard from './AccountCard'

const Suggestion = () => {
  return (
    <div className='border-l-2 w-[20vw] h-screen absolute right-0 flex flex-col items-center py-5 gap-3'>
      <div className='flex items-center w-56 max-w-[18vw] h-20'>
        <AccountCard username={"Name"} btnText={"Switch"} />
      </div>
      <div className='flex flex-col gap-4 py-4 w-56 max-w-[18vw] h-72'>
        <h1 className='px-4'>Suggested for you</h1>
        <AccountCard username={"Name"} btnText={"Add"} />
        <AccountCard username={"Name"} btnText={"Add"} />
        <AccountCard username={"Name"} btnText={"Add"} />
        <AccountCard username={"Name"} btnText={"Add"} />
      </div>
      <div className='p-2 w-56 max-w-[18vw] h-32 absolute bottom-5'>
        <p className='text-sm text-gray-500'>About
          Help
          Press
          API
          Jobs
          Privacy
          Terms
          Locations
          Language
          XXXXXX Verified
          <br />© 2024 TagChat from XXXXXX</p>
      </div>
    </div>
  )
}

export default Suggestion

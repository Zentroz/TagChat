import React, { useState, useEffect } from 'react'
import TopScroller from '../components/TopScroller/TopScroller'
import MsgBox from '../components/MsgBox'
import EmojiContainer from '../components/EmojiContainer'

const Message = () => {
  const user = "Ashish"

  const messages = [
    {
      id: "2", //Date.now()
      sender: "Shin Chan", // sender Username
      content: "Hi"
    },
    {
      id: "1", //Date.now()
      sender: "Ashish", // sender Username
      content: "Hi"
    },
    {
      id: "3", //Date.now()
      sender: "Shin Chan", // sender Username
      content: "Ok"
    }
  ]
  return (
    <div className='h-screen w-[52rem] p-3 flex flex-col gap-2 overflow-y-hidden'>
      <TopScroller array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      <div className='h-[50rem]'>
        <div className='msg-container min-h-[25.5rem] max-h-[25.5rem] overflow-y-scroll'>
          {
            messages.map((msg) => msg.sender == user ?
              <MsgBox key={msg.id} content={msg.content} yourMsg={true} /> :
              <MsgBox key={msg.id} content={msg.content} yourMsg={false} />)
          }
        </div>
        <div className='msg-input  w-[50rem] rounded-3xl h-10 border-[1.5px] flex items-center px-3'>
          <button><img className='min-w-6 min-h-6 max-w-6 max-h-6' src="/src/img/emoji.png" alt="emoji" /></button>
          <input className='w-[45rem] h-9 px-2 focus:outline-none' type="text" />
          <input className='hidden' type="file" id="file-upload-btn" />
          <label htmlFor="file-upload-btn"><img className='min-w-6 min-h-6 max-w-6 max-h-6 cursor-pointer' src="src/img/upload.png" alt="" /></label>
        </div>
        <EmojiContainer />
      </div>
    </div>
  )
}

export default Message

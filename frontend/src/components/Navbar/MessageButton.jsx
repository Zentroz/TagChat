import React from 'react'
import chatIcon from '../../img/chat-icon.png'

const MessageButton = ({ counter }) => {
  return (
    <button>
      {counter > 0 && <div className='counter relative left-5 top-1 bg-red-400 rounded-3xl w-5 h-5 text-xs text-center pt-[2px] text-white z-10'>{counter}</div>}
      <img className={`w-10 relative ${counter > 0 && "bottom-[10px]"}`} src={chatIcon} alt="inbox-icon" />
    </button>
  )
}

export default MessageButton

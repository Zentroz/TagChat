import React from 'react'

const TagBtn = ({ content, ButtonFunc }) => {

  if (ButtonFunc != undefined) {
    return (
      <div onClick={() => ButtonFunc(content)} className='bg-orange-400 transition-colors duration-300 w-36 h-9 rounded-3xl'>
        {content}
      </div>
    )
  } else {
    return (
      <div className='bg-orange-400 transition-colors duration-300 w-36 h-9 rounded-3xl'>
        {content}
      </div>
    )
  }
}

export default TagBtn

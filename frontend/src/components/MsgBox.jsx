import React from 'react'

const MsgBox = ({ content, yourMsg }) => {
  if (content.length > 50) {
    return (
      <>
        {
          yourMsg ? <span className='bg-orange-400 my-1 clear-both text-white float-right rounded-lg pl-2 py-1 pr-4 text-wrap text-left min-w-[28rem] max-w-[28rem] break-words'>
            {content}
          </span >
            :
            <span className='bg-gray-400 my-1 clear-both text-white float-left rounded-lg pl-2 py-1 pr-4 text-wrap text-left min-w-[28rem] max-w-[28rem] break-words'>
              {content}
            </span>
        }
      </>
    )
  } else {
    return (
      <>
        {
          yourMsg ? <span className='bg-orange-400 my-1 clear-both text-white float-right rounded-lg pl-2 py-1 pr-4 text-left'>
            {content}
          </span >
            :
            <span className='bg-gray-400 my-1 clear-both text-white float-left rounded-lg pl-2 py-1 pr-4 text-left'>
              {content}
            </span>
        }
      </>
    )
  }
}

export default MsgBox

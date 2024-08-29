import React from 'react'

const Tag = ({ content }) => {
  return (
    <div>
      <button className='bg-orange-400 w-36 h-9 rounded-3xl'>
        {content}
      </button>
    </div>
  )
}

export default Tag

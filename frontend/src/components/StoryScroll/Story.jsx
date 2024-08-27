import React from 'react'

const Story = ({ name }) => {
  return (
    <div className={`story min-w-20 min-h-20 rounded-[4rem] bg-gray-300`}>
      {name}
    </div>
  )
}

export default Story

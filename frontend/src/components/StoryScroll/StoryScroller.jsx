import React, { useEffect, useRef, useState } from 'react'
import Story from './Story'

const StoryScroller = ({ array }) => {
  //Scroll elements
  const scrollCont = useRef(null)
  const scroll = useRef(null)

  // Show button if length > 8
  const scrollable = array.length > 8

  // Scroll values
  let currentScroll = 0;
  let maxScroll;
  const scrollAmount = 400;

  useEffect(() => {
    // Get max scroll by subtracting scroll-container and scroll div
    maxScroll = -(scroll.current.offsetWidth - scrollCont.current.offsetWidth);
  }, [])

  // Function for left button
  const onLeft = () => {
    if (currentScroll >= 0 || (currentScroll + scrollAmount) >= 0) {
      currentScroll = 0;
    } else {
      currentScroll += scrollAmount;
    }
    scroll.current.style.left = currentScroll + "px";
  }

  // Function for right button
  const onRight = () => {
    if (currentScroll <= maxScroll || (currentScroll - scrollAmount) <= maxScroll) {
      currentScroll = maxScroll
    } else {
      currentScroll -= scrollAmount;
    }
    scroll.current.style.left = currentScroll + "px";
  }
  return (
    <div>
      <div className='story-container flex items-center overflow-hidden' ref={scrollCont}>
        <div className='story-scroller transition-all ease-in-out min-h-20 relative flex gap-6' ref={scroll}>
          {
            array.map((e) => <Story key={e} name={e} />)
          }
        </div>
      </div>

      {scrollable ? (<><button className='bg-orange-400 relative left-1 bottom-[3.2rem] z-20 rounded-3xl min-w-6 min-h-6 max-w-6 max-h-6 text-center' onClick={onLeft}>{"<"}</button>
        <button className='bg-orange-400 relative left-[47rem] bottom-[3.2rem] z-20 rounded-3xl min-w-6 min-h-6 max-w-6 max-h-6 text-center' onClick={onRight}>{">"}</button></>) : ""}

    </div >
  )
}

export default StoryScroller

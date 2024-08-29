import React, { useId, useRef, useState } from 'react'
import TagBtn from '../components/Navbar/TagBtn'

const Search = () => {
  const tags = ["Gaming", "Dancing", "Piano", "Guitar", "Gambling", "Trading", "E-Sports", "Sports", "Cricket", "Anime", "Racing", "Driving", "Drinkn'Driving", "Programming"]
  const searchField = useRef(null)
  const tagSearchField = useRef(null)

  const AddToSearch = (content) => {
    searchField.current.value += content.target.innerHTML + " "
    content.target.style.backgroundColor = "gray"
    console.log(searchField.current.value.split(" "))
  }
  return (
    <div className='h-screen w-[52rem] flex flex-col gap-2 items-center'>
      Search
      <input className='search-tag-container w-[95%] h-10 px-2 border-[1.5px] overflow-y-auto' type="text" ref={searchField} placeholder='Click on tags to add here' />
      <div className='h-[.5px] rounded-lg w-[95%] border-[1px]'></div>
      <div className='w-[95%] h-52'>
        <label htmlFor="search-tag">Search Tag</label>
        <input className='rounded-3xl focus:outline-none mx-2 px-4 w-56 h-10 border-[1.5px]' type="text" id='search-tag' ref={tagSearchField} />
        <div className='tag-container mt-5 flex flex-wrap gap-4'>
          {tags.map((tag) => <button key={useId()} onClick={AddToSearch}><TagBtn content={tag} /></button>)}
        </div>
      </div>
    </div>
  )
}

export default Search

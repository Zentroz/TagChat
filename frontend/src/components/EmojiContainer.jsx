import React, { useState, useEffect } from 'react'

const EmojiContainer = () => {
  const [Emoji, setEmoji] = useState([])
  // useEffect(() => {
  //   fetch("https://emoji-api.com/emojis?search=people&access_key=52adf652de2d7b041c37678d5b979abb1a52392b").
  //     then((res) => res.json()).
  //     then((data) => { setEmoji(data); console.log(data) })
  // }, [])



  if (Emoji != 0) {
    return (
      <div className='bg-blue-300 w-72 h-80 relative bottom-[23rem] left-2 rounded-lg z-10 flex flex-wrap'>{Emoji.map((e) => <button className='h-6 w-6' key={e["codePoint"]}>{e?.["character"]}</button>)}</div>
    )
  }
}

export default EmojiContainer

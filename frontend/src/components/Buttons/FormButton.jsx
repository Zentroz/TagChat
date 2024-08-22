import React from 'react'

const FormButton = ({ content, imgBefore, imgAfter, extraClass }) => {
  return (
    <button className={`flex items-center justify-center w-72 h-8 rounded-lg font-semibold text-sm bg-orange-400 ${extraClass}`}>{imgBefore} {content} {imgAfter}</button>
  )
}

export default FormButton

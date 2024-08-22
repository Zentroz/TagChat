import React from 'react'

const FormInput = ({ type, regName, register, placeholder }) => {
  return (
    <input className='border-[1px] rounded-sm text-xs w-72 h-10 p-2' type={type || "text"} placeholder={placeholder} {...register(regName)} />
  )
}

export default FormInput

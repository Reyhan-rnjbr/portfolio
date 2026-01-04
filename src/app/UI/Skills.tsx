import React from 'react'
type skillProps ={
    label: string
}

const Skills=({ label }:skillProps)=> {
  return (
    <div className='rounded-full border border-gray-300 px-[12px] py-[4px] text-gray-700 font-medium'>
        {label}
    </div>
  )
}

export default Skills
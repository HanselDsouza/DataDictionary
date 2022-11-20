import React from 'react'

const ElementDisplay = ({data}) => {
  return (
    <div onClick={()=>console.log(data)} className='text-xl p-4 font-sans capitalize text-gray-100 hover:bg-gray-400 hover:cursor-pointer hover:rounded-sm hover:text-2xl hover:text-yellow-200 hover:font-semibold'>{data}</div>
  )
}

export default ElementDisplay
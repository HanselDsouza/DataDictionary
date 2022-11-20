import React from 'react'
import ElementDisplay from './ElementDisplay'

const Display = ({data}) => {
  return (
    <div className='divide-y divide-solid divide-slate-500 bg-slate-700 border-2 border-slate-600 rounded-md px-4 pr-10 overflow-auto scrollbar scrollbar-thumb-gray-600 scrollbar-track-slate-500 overflow-x-hidden w-1/2 max-h-96'>
        {data.map((data)=><div key={data.word}>
            <ElementDisplay data={data.word}/>
        </div>)}
    </div>
  )
}

export default Display
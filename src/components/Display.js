import React from 'react'
import ElementDisplay from './ElementDisplay'

const Display = ({data,type,search}) => {
  return (
      <div className={data && search ? 'divide-y divide-solid divide-slate-500 bg-slate-700 border-2 border-slate-600 rounded-md px-4 pr-10 overflow-auto scrollbar scrollbar-thumb-gray-600 scrollbar-track-slate-500 overflow-x-hidden w-1/2 max-h-96':""}>
          {data && data.map((data)=><div key={data.word}>
              <ElementDisplay data={data.word} type={type} search={search}/>
          </div>)}
          {data.length < 1 && search.length > 1 && <p className='flex justify-center text-white text-xl p-4'>No response ... </p>}
      </div>
  )
}

export default Display
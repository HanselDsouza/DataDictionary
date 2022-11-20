import React from 'react'

const Logo = () => {
  return (
    <div onClick={()=>window.location.reload()} className="hover:cursor-pointer p-10 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">DataDictionary</div>
  )
}

export default Logo
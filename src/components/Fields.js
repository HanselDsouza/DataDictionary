import React from 'react'
import {useState} from 'react'
import Display from './Display'
const Fields = () => {
    const [word,setWord] = useState('')
    const [wordList,setWordList] = useState([])
    const handleSubmit = async (e) =>{
        e.preventDefault()
        await fetch(`https://api.datamuse.com/words?rel_syn=${word}`).then(res => res.json()).then((data)=>setWordList(data))
    }
  return (
    <div className='flex flex-col justify-center items-center w-full'>
        <form onSubmit={handleSubmit} className='flex justify-center items-center'>
            <label className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300 px-5'>Enter the word</label>
            <input value={word} onChange={(e)=>setWord(e.target.value)} className='bg-gray-600 rounded-md border-2 border-slate-500 text-white font-bold'></input>
            <button onClick={handleSubmit} className='bg-slate-500 p-2 m-3 rounded-md hover:shadow-2xl font-bold text-white hover:bg-slate-300 hover:text-slate-700'>Submit</button>
        </form>
        {wordList.length > 0 && <Display data={wordList}/>}
    </div>
  )
}

export default Fields
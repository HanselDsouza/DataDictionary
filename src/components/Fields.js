import React from 'react'
import {useState} from 'react'
import Display from './Display'
const Fields = () => {
    const types = ['Synonyms','Adjectives','Nouns','Antonyms','Rhymes','Homophones']
    const [word,setWord] = useState('')
    const [wordList,setWordList] = useState([])
    const [val,setVal] = useState(types[0])
    const types_ref = {'Synonyms':'syn','Adjectives':'jjb','Nouns':'jja','Antonyms':'ant','Rhymes':'rhy','Homophones':'hom'}
    const handleSubmit = async (e) =>{
        e.preventDefault()
        await fetch(`https://api.datamuse.com/words?rel_${types_ref[val]}=${word}`).then(res => res.json()).then((data)=>setWordList(data))
    }

  return (
    <div className='w-full flex justify-center items-center flex-col'>
        <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col mb-10'>
          <div className='flex justify-center items-center flex-row'>
            <label className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300 px-2'>Enter the word</label>
            <input value={word} onChange={(e)=>setWord(e.target.value)} className='bg-gray-600 rounded-md border-2 border-slate-500 text-white font-bold p-2'></input>      
            <div className='px-3'>
              <select value={val} onChange={(e)=>setVal(e.target.value)} class="bg-gray-50  outline-none border-sm border-2 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                {types.map((data)=>(
                <option value={data} className="capitalize">{data}</option>
                ))}
              </select>
            </div>
           <button onClick={handleSubmit} className='bg-slate-500 p-2 rounded-md hover:shadow-2xl font-bold text-white hover:bg-slate-300 hover:text-slate-700'>Submit</button>
            </div>
        </form>
        {wordList.length > 0 && <Display data={wordList} type={val} search={word}/>}
    </div>
  )
}

export default Fields
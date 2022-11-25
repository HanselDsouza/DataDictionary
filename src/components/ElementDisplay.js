import React,{useState} from 'react'
import Modal from './Modal'

const ElementDisplay = ({data}) => {
  const [modalview,setModalView] = useState(false)
  
  return (
    <>
    <div onClick={()=>setModalView(!modalview)} className='text-xl font-bold p-4 font-sans capitalize text-gray-100 hover:bg-gray-400 hover:cursor-pointer hover:rounded-sm  hover:text-yellow-200'>{data}</div>
    {modalview ? <Modal data={data} modalview={modalview} setModalView={setModalView}/> : <></>}
    </>
    )
}

export default ElementDisplay
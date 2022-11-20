import React,{useState} from 'react'
import Modal from './Modal'

const ElementDisplay = ({data}) => {
  const [modalview,setModalView] = useState(false)
  
  return (
    <>
    <div onClick={()=>setModalView(!modalview)} className='text-xl p-4 font-sans capitalize text-gray-100 hover:bg-gray-400 hover:cursor-pointer hover:rounded-sm hover:text-2xl hover:text-yellow-200 hover:font-semibold'>{data}</div>
    {modalview ? <Modal data={data} modalview={modalview} setModalView={setModalView}/> : <></>}
    </>
    )
}

export default ElementDisplay
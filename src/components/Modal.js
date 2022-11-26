import React,{useEffect, useState} from "react";
import "./Modal.css";
import {IoIosCloseCircleOutline} from 'react-icons/io'

export default function Modal({data,modalview,setModalView,type,search}) {

  const [desc,setDesc] = useState()

  const toggleModal = () => {
    setModalView(!modalview)
  };

  if(modalview) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  useEffect(()=>{
    fetch(`https://api.datamuse.com/words?rel_syn=${data}`).then(res => res.json()).then((data)=>setDesc(data))
  },[data])


  return (
    <>
        <div className="modal ">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="divide-y-2 space-y-4 divide-slate-400">
            <h2 className="text-white font-bold text-xl capitalize">{data}
              <span className="text-xs px-1 text-slate-400">{type.slice(0,-1)} of {search}</span>
            </h2>
            <p className="p-20 text-white">
                COMING SOON ...
            {/* {console.log(desc[0]?.meanings[0]?.definitions[0]?.definition)} */}
            </p></div>
            <button className="close-modal text-white text-2xl font-bold hover:text-red-500" onClick={toggleModal}>
                <IoIosCloseCircleOutline/>
            </button>
          </div>
        </div>
    </>
  );
}
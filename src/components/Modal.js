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
  const [status,setStatus] = useState(0)


  useEffect(()=>{
    async function fetchData(){ 
      let response = await fetch(`https://api.wordnik.com/v4/word.json/${data}/definitions?limit=5&includeRelated=false&sourceDictionaries=wordnet&useCanonical=false&includeTags=false&api_key=rz9rc080ze9uunrp64bruqb87a520bws95xsbonnhp8vr9q5p`)
      setStatus(response.status)
      if(response.status !== 404){
        response = await response.json()
        setDesc(response)
      }
    }
    fetchData()
    console.log(desc,status)
  },[])

  return (
    <>
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="divide-y-2 space-y-4 divide-slate-400">
            <h2 className="text-white font-bold text-xl capitalize">{data}
              <span className="text-xs px-1 text-slate-400">{type.slice(0,-1)} of {search}</span>
            </h2>
            {/* <p className="py-5 text-white">
              {!desc && status !== 400 ? <div>Loading...</div>: 
              <>
              <ul>
                {desc?.map((data)=>(
                <li className="capitalize">- {data?.text}</li>
                ))}
              </ul>
              </>}
              
            </p> */}
            </div>
            <button className="close-modal text-white text-2xl font-bold hover:text-red-500" onClick={toggleModal}>
                <IoIosCloseCircleOutline/>
            </button>
          </div>
        </div>
    </>
  );
}
import React from 'react'
import './Updates.css'
import { ImNotification,ImCross } from "react-icons/im";


const updatesArray = [
  //an object with id, text, link as keys
  {id:1,updateRegarrding : "UDYAM",text:' : Radianite Points System is live. For more information, ',link:"https://www.instagram.com/p/CmJLSrnjOSl/",},
  {id:2,updateRegarrding : "UDYAM",text:' : Workshop Phase 1  starting from 17th Dec',link:"",},
  {id:3,updateRegarrding : "UDYAM",text:' : Unstop PR Insternships is live, ',link:"https://unstop.com/p/public-relations-internship-indian-institute-of-technology-iit-bhu-varanasi-550718",},  
  {id:4,updateRegarrding : "UDYAM",text:' : Trailer launch soon',link:"",},  
  {id:5,updateRegarrding : "UDGAM",text:' : Campusinpixels, Ridham and Ignite are live. To send your entries ',link:"https://linktr.ee/UDGAM_2023",},
  {id:6,updateRegarrding : "MASHAL",text:' : Chess Clash is live. To register, ',link:"https://docs.google.com/forms/d/e/1FAIpQLSf7m0oJo7SCBTkHmU0aCcXrClotG7FdLBswknxI7tOwm6sNaA/viewform",},  
  {id:7,updateRegarrding : "MASHAL",text:' : Valorant event is going to be launched soon',link:"",},  ];

const Updates = () => {


  const stop =()=>{
    const marId = document.getElementById("marId");
    marId.stop();
  }
  const start =()=>{
    const marId = document.getElementById("marId");
    marId.start();
  }

  const showUpdates = () => {
    let updateContainer = document.getElementById("update-container")
  let x = document.getElementById("update-btn-x")
  let i = document.getElementById("update-btn-i")
      // updateContainer.style.display = "block"
      updateContainer.classList.toggle("container-active")
      x.style.display="block"
      i.style.display = "none"
  }

  const closeUpdates = () => {
    let updateContainer = document.getElementById("update-container")
  let x = document.getElementById("update-btn-x")
  let i = document.getElementById("update-btn-i")
    // updateContainer.style.display = "none"
    updateContainer.classList.toggle("container-active")
    x.style.display="none"
    i.style.display = "block"
}

  return (
    <>

    <div id="update-container" className='container'>
    <h3 className='update-header'>
        IMPORTANT UPDATES
    </h3>
    {updatesArray.length===0?<div className='update-in-list'>No Updates To Show</div>:<marquee id="marId" behaviour="scroll" direction="up" loop="infinite" height="100%" onMouseOver={stop} onMouseLeave={start}>
    <div className='updateList'>
      {updatesArray.map((update)=>(<div key={update.id} className='update-in-list'><b>{update.updateRegarrding}</b>{update.text} {!update.link ? "" : <a className='updateLink' href={update.link} rel="noreferrer" target="_blank">click here</a>}</div>))}
      </div>
    </marquee>}
    </div>

    <div className="update-btn">
        <div id='update-btn-i' onClick={showUpdates}>
          <ImNotification id='updates-icon-i' size={30}></ImNotification>
        </div>
        <div id='update-btn-x' onClick={closeUpdates}>
        <ImCross id='updates-icon-x' size={25}></ImCross>
        </div>
    </div>
    </>
  )
}

export default Updates
import React from 'react'
import "./footer.css"
import cr from "./copyright-svgrepo-com.svg"

function Footer() {
  return (
    <div className='footer'>
        <div className='content'>
            <img className='cr' src={cr}></img> EES IIT BHU
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import './ValoBtn.css'

const ValoBtn = () => {
  return (
    <div>
       {/* Valo Button */}
       <div className="valo-btn">
          <button class="btn">
            <span class="btn__inner">
              <span class="btn__slide"></span>
              <span class="btn__content">Register</span>
            </span>
          </button>
        </div>
    </div>
  )
}

export default ValoBtn

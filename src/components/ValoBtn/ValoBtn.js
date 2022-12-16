import React from 'react'
import './ValoBtn.css'
import valo from './images/valorant.png'

const ValoBtn = () => {
    return (
        <div>
            {/* Valo Button */}

            <div className="valo-btn">
                <button class="btn btn--light">
                    <span class="btn__inner">
                        <span class="btn__slide"></span>
                        <span class="btn__content">
                            <img src={valo} className="img-valo" alt="valo" />
                            Registration Opens
                        </span>

                    </span>
                </button>
            </div>
        </div>
    )
}

export default ValoBtn

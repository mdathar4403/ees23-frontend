import React from 'react'
import './ValoBtn.css'
import valo from './images/valorant.png'

const ValoBtn = () => {
    return (
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdxNETlYX_gUFUy172bkC8rx6Qsn_gvfC70wa2JTKsdRIYhGA/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="valo-btn">
          <button class="btn btn--light">
            <span class="btn__inner">
              <span class="btn__slide"></span>
              <span class="btn__content">
                <img src={valo} className="img-valo" alt="valo" />
                &nbsp; Registration Open
              </span>
            </span>
          </button>
        </div>
      </a>
    );
}

export default ValoBtn

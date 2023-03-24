import React, { useEffect } from 'react';
import './Sponsor.css';
import codechef from './images/Codechef.jpg';
import nvidia from './images/Nvidia.png';
import mentor from './images/Mentor.jpg';
import silence from './images/Silence.png';
import coins from './images/Coins.jpg';
import cisco from './images/Cisco.png';
import Mashnav from '../Mashnav/mashnav';

const Sponsors = () => {
  useEffect(() => {
    document.getElementById('msponser1').classList.add('scale');
  }, []);

  const func = () => {
    const ele1 = document.getElementById('msponser1');
    var val1 = ele1.getBoundingClientRect().top;
    if (val1 > 200) {
      ele1.classList.add('scale');
    } else {
      ele1.classList.remove('scale');
    }
    const ele2 = document.getElementById('msponser2');
    var val2 = ele2.getBoundingClientRect().top;
    if (val2 < 350 && val2 > 200) {
      ele2.classList.add('scale');
    } else {
      ele2.classList.remove('scale');
    }
    const ele3 = document.getElementById('msponser3');
    var val3 = ele3.getBoundingClientRect().top;
    if (val3 < 350 && val3 > 200) {
      ele3.classList.add('scale');
    } else {
      ele3.classList.remove('scale');
    }
    const ele4 = document.getElementById('msponser4');
    var val4 = ele4.getBoundingClientRect().top;
    if (val4 < 350 && val4 > 200) {
      ele4.classList.add('scale');
    } else {
      ele4.classList.remove('scale');
    }
    const ele5 = document.getElementById('msponser5');
    var val5 = ele5.getBoundingClientRect().top;
    if (val5 < 350 && val5 > 200) {
      ele5.classList.add('scale');
    } else {
      ele5.classList.remove('scale');
    }
    const ele6 = document.getElementById('msponser6');
    var val6 = ele6.getBoundingClientRect().top;
    if (val6 < 430) {
      ele6.classList.add('scale');
    } else {
      ele6.classList.remove('scale');
    }
  };
  return (
    <>
      <div className="mashnavxxx">
        <Mashnav></Mashnav>
      </div>
      <div className="msponsers">
        <h1>PREVIOUS SPONSORS</h1>
        <div className="msponsorBox" id="sponserbox" onScroll={func}>
          <div className="msponser" id="msponser1">
            <div style={{ height: '0' }}>
              <img className="img" src={cisco} alt="" style={{ width: '100%' }} />
              <div className="mcontent">
                <div className="mdetails">
                  <h3>CISCO</h3>
                  <p>Safeguard the people and devices that connect your network. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="msponser" id="msponser2">
            <div style={{ height: '0' }}>
              <img src={coins} alt="" style={{ width: '100%' }} />
              <div className="mcontent">
                <div className="mdetails">
                  <h3>COINSWITCH</h3>
                  <p>Your crypto journey starts here!.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="msponser" id="msponser3">
            <div style={{ height: '0' }}>
              <img src={mentor} alt="" style={{ width: '100%' }} />
              <div className="mcontent">
                <div className="mdetails">
                  <h3>MENTOR</h3>
                  <p>Engineer a smarter future faster with Siemens.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="msponser " id="msponser4">
            <div style={{ height: '0' }}>
              <img src={codechef} alt="" style={{ width: '100%' }} />
              <div className="mcontent">
                <div className="mdetails">
                  <h3>CODECHEF</h3>
                  <p>Fastrack your journey to becoming an Ace Programmer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="msponser " id="msponser5">
            <div style={{ height: '0' }}>
              <img src={nvidia} alt="" style={{ width: '100%' }} />
              <div className="mcontent">
                <div className="mdetails">
                  <h3>NVIDIA</h3>
                  <p>Take your client onboard seamlessly.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="msponser " id="msponser6">
            <div style={{ height: '0' }}>
              <img src={silence} alt="" style={{ width: '100%' }} />
              <div className="mcontent">
                <div className="mdetails">
                  <h3>SILENCE</h3>
                  <p>Reimagining Seamless Authentication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;

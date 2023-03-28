import React from 'react';
import './HomePage.css';
import globe from './globe.mp4';

function HomePage() {
  return (
    <div className="main-container">
      {/* <img className="globegif" src={globe} /> */}
      <video src={globe} type="video/mp4" autoPlay muted loop className="globegif"></video>
      <h1 className="heading">
        Udyam
        <h5 className="tag-line">Connecting techies around the globe ...</h5>
      </h1>
      {/* <Globe /> */}
    </div>
  );
}

export default HomePage;

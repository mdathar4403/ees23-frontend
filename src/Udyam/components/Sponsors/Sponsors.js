import React from 'react';
import './Sponsor.css';
import { FaChevronCircleRight } from 'react-icons/fa';
import codechef from './images/Codechef.jpg';
import devfolio from './images/Devfolio.png';
import zeeve from './images/Zeeve.webp';
import filecoin from './images/Filecoin.png';
import polygon from './images/Polygon.png';
import replit from './images/Replit.png';
import solana from './images/Solana.png';
// import coins from './images/Coins.jpg';
// import cisco from './images/Cisco.png';

const Sponsors = () => {
  return (
    <div className="sponsers">
      <h1>SPONSORS</h1>
      <div className="sponsBox">
        <div className="sponser sponser1">
          <img className="sponsorImage" src={codechef} alt="" style={{ width: '100%' }} />
          <a href="https://www.codechef.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>Codechef</h4> <FaChevronCircleRight className="spicon" />
          </a>
        </div>
        <div className="sponser sponser2">
          <img className="sponsorImage" src={devfolio} alt="" style={{ width: '100%' }} />
          <a href="https://devfolio.co" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>Devfolio</h4>
            <FaChevronCircleRight className="spicon" />{' '}
          </a>
        </div>
        <div className="sponser sponser3">
          <img className="sponsorImage" src={zeeve} alt="" style={{ width: '100%', background: 'white' }} />
          <a href="https://www.zeeve.io/" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>Zeeve</h4>
            <FaChevronCircleRight className="spicon" />{' '}
          </a>
        </div>
        <div className="sponser sponser4">
          <img className="sponsorImage" src={filecoin} alt="" style={{ width: '100%', background: 'white' }} />
          <a href="https://filecoin.io/" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            {' '}
            <h4>Filecoin</h4>
            <FaChevronCircleRight className="spicon" />{' '}
          </a>
        </div>
        <div className="sponser sponser5">
          <img className="sponsorImage" src={polygon} alt="" style={{ width: '100%', background: 'white' }} />
          <a href="https://polygon.technology/" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            <h4>Polygon</h4>
            <FaChevronCircleRight className="spicon" />{' '}
          </a>
        </div>
        <div className="sponser sponser6">
          <img className="sponsorImage" src={replit} alt="" style={{ width: '100%', background: 'white' }} />
          <a href="https://replit.com/" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            <h4>Replit</h4>
            <FaChevronCircleRight className="spicon" />
          </a>
        </div>
        <div className="sponser sponser7">
          <img className="sponsorImage" src={solana} alt="" style={{ width: '100%', background: 'white' }} />
          <a href="https://solana.com/" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
            <h4>Solana</h4>
            <FaChevronCircleRight className="spicon" />
          </a>
        </div>
        {/* <div className="sponser sponser8"> */}
        {/* <img className="sponsorImage" src={rapid} alt="" style={{ width: '100%' }} />
        <a href="https://www.rapidai.com" target="_blank" rel="noreferrer" className="sp" style={{ textDecoration: 'none' }}>
          {' '}
          <h4>RapidAI</h4>
          <FaChevronCircleRight className="spicon" />
        </a> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Sponsors;

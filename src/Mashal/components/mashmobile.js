/* eslint-disable prettier/prettier */
import React from 'react';
import './mashmobile.css';
import mmologo from './image/EES-LOGO-phone.svg';
import mmoimg from './image/image 55.svg';
import mmobmash from './image/MASHAL ‘23.svg';
// import Mashnav from './Mashnav/mashnav';

export default function Mashmobile() {
  return (
    <>
      <div className="mmobbg">
        <div className="mmobtext">
          <img src={mmobmash} alt="" />
        </div>
        <div className="mmoblogo">
          <img src={mmologo} alt="" />
        </div>
        <div className="mmobnav">
          <p className="mmobt">Sponsors ↗</p>
          <p className="mmobt">Follow us ↗</p>
        </div>
        <div className="mmobimg">
          <img src={mmoimg} alt="" />
        </div>
      </div>
    </>
  );
}

/* eslint-disable prettier/prettier */
import React from 'react';
import './mashmobile.css';
import mmologo from './image/EES-LOGO-phone.svg';
import mmoimg from './image/image 55.svg';
import mmobmash from './image/MASHAL ‘23.svg';
import { Link } from 'react-router-dom';
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
          <Link to="/mashal/events" className="xxxx">
            <p className="mmobt">Events ↗</p>
          </Link>
          <Link to="/mashal/sponsors" className="xxxx">
            <p className="mmobt">Sponsors ↗</p>
          </Link>
        </div>
        <div className="mmobimg">
          <img src={mmoimg} alt="" />
        </div>
      </div>
    </>
  );
}

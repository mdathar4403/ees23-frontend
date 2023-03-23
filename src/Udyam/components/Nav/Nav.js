/* eslint-disable prettier/prettier */
import React from 'react';
import './Nav.css';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';
import { BiDollarCircle } from 'react-icons/bi';
import { FaAward } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { BiQrScan } from 'react-icons/bi';
import ees from '../Nav/ees.svg';
import udyam from '../Nav/udyam.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { TfiMenu } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';
import { GoogleLoginBTN } from '../../../EES/Navbar/googleauth';

const Nav = (props) => {
  const [slideNav, setNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [udyamName, setUdyamName] = useState(true);

  function menuNav() {
    setUdyamName(false);
    setNav(true);
    document.querySelector('.udyam-nav').style.display = 'block';
  }

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function events() {
    helloNav();
  }
  function names() {
    helloNav();
  }
  function abouts() {
    helloNav();
  }
  function sponsors() {
    helloNav();
  }

  function helloNav() {
    setNav(false);
    setUdyamName(true);
  }
  useEffect(() => {
    document.addEventListener('click', (e) => {
      console.log(e.target.className);
      if (e.target.className == 'main-container' || e.target.className == 'background' || e.target.className == 'bag' || e.target.className == 'star-field' || e.target.className == 'layer' || e.target.className == 'heading' || e.target.className == 'tag-line' || e.target.className == 'globe' || e.target.className == 'emma') helloNav();
    });
  }, []);

  return (
    <>
      {' '}
      <div className="background">
        <div className="bag"></div>
        <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
      </div>
      {(udyamName || true) && width < 800 && <Profile />}
      {(slideNav || width > 800) && (
        <div className="udyam-nav udyam_side_nav">
          <div className="udyam-img">
            <Link to="/udyam" style={{ textDecoration: 'none' }}>
              <img className="udyam-logo" src={udyam} alt="hero" />
            </Link>
          </div>
          <div className="udyam-icon udyam_side_nav">
            <div
              className="name hovered"
              // ind="#name"
              onClick={names}
              id={props.active === '#name' ? 'active' : ''}
            >
              {window.sessionStorage.getItem('registered_email') == null ? (
                <GoogleLoginBTN>
                  <Link to="#" className="game-changer" style={{ textDecoration: 'none' }}>
                    <BiQrScan className="info" />
                    <p>SignIn</p>
                  </Link>
                </GoogleLoginBTN>
              ) : (
                <Link to="/dashboard" className="game-changer" style={{ textDecoration: 'none' }}>
                  <BiQrScan className="info" />
                  <p>Dashboard</p>
                </Link>
              )}
              ;
            </div>
            <div
              className="about hovered"
              // ind="#about"
              onClick={abouts}
              id={props.active === '#about' ? 'active' : ''}
            >
              <Link to="/udyam/about" className="game-changer" style={{ textDecoration: 'none' }}>
                {' '}
                <AiOutlineInfoCircle className="info" />
                <p>About Us</p>
              </Link>
            </div>
            <div className="events hovered" id={props.active === '#event' ? 'active' : ''} onClick={events}>
              <Link to="/udyam/events" className="game-changer" style={{ textDecoration: 'none' }}>
                <BiNews className="info" />
                <p>Events</p>
              </Link>
            </div>
            <div
              className="sposors hovered"
              // ind="#sponsors"
              onClick={sponsors}
              id={props.active === '#sponsors' ? 'active' : ''}
            >
              <Link to="/udyam/sponsors" className="game-changer" style={{ textDecoration: 'none' }}>
                <BiDollarCircle className="info" />
                <p>Sponsors</p>
              </Link>
            </div>
            <div className="leaderboard hovered" id={props.active === '#leaderboard' ? 'active' : ''}>
              <Link to="/udyam/leaderboard" className="game-changer" style={{ textDecoration: 'none' }}>
                <FaAward className="info" />
                <p>Leaderboard</p>
              </Link>
            </div>
          </div>

          <div className="expanded_btn">
            <div className="hovered ees-div-img">
              <Link to="/" className="game-changer">
                <img className="eesimg" src={ees} alt="hreo" />
              </Link>
            </div>
            <div className="close" onClick={helloNav}>
              <IoIosArrowBack />
            </div>
          </div>
        </div>
      )}
      <div className="menu-icon" onClick={menuNav}>
        <TfiMenu />
      </div>
      {false && (
        <div className="token">
          <div className="back">
            <IoIosArrowBack />
          </div>
          <div className="token-event">
            <div className="digisim event-name active">
              <a href="#"> DIGISIM</a>
            </div>
            <div className="ichip event-name">
              <a href="#">I-CHIP</a>
            </div>
            <div className="devbits event-name">
              <a href="#">DEVBITS</a>
            </div>
            <div className="commnet event-name">
              <a href="#">COMMNET</a>
            </div>
            <div className="xiota event-name">
              <a href="#">X-IoT-A</a>
            </div>
            <div className="cassandra event-name">
              <a href="#">CASSANDRA</a>
            </div>
            <div className="mosaic event-name">
              <a href="#">MOSAIC</a>
            </div>
            <div className="funckit event-name">
              <a href="#">FUNCKIT</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;

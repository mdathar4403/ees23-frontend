import './UdgamLeaderboard.css';
import './UdgamLB_MobileView.css';
import React from 'react';
import { teamName, teamScore } from './UdgamLB_data';
import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdArrowForwardIos } from 'react-icons/md';
const UdgamLeaderboard = () => {
  const [eventtable, setEventtable] = useState(true);
  const [contentIndex, setContentIndex] = useState(0);
  // const [slideEvent, setEvent] = useState('false');
  // const [slideLeader, setLeader] = useState(true);
  // const [slideNav, setNav] = useState('false');
  const [width, setWidth] = useState(window.innerWidth);
  //   console.log(teamName);
  // const [activeNav, setActiveNav] = useState('#');
  // const [udgamName, setUdgamName] = useState(true);
  // const [udyevents,setudyevents]=useState('Digism');
  // let ind=0;

  // const Token = document.getElementsByClassName('.token')
  // const UdgamNav = document.getElementsByClassName('.udgam-nav');

  const eventName = (event) => {
    var element = event.target;
    if (element.innerText === 'Campus in Pixels') setContentIndex(0);
    if (element.innerText === 'Life in Kashi') setContentIndex(1);
    if (element.innerText === 'Ignite') setContentIndex(2);
    if (element.innerText === 'India in 2050') setContentIndex(3);
    if (element.innerText === 'Face Painting') setContentIndex(4);
    if (element.innerText === 'Character Designing') setContentIndex(5);
    if (element.innerText === 'Ridham') setContentIndex(6);
    if (element.innerText === 'Open Mic Stand') setContentIndex(7);
    if (element.innerText === 'Creative Writing') setContentIndex(8);
    if (element.innerText === 'Treasure Hunt') setContentIndex(9);
    document.getElementById('eventName').innerText = element.innerText;
    setEventtable(false);
  };

  function checkNav() {
    // props.eventTitleFunc=e;
    // eventTitleFunc(e);
    // setUdgamName(true);
    if (width > 800) {
      return;
    } else {
      // document.querySelector('.udg-leader').style.display = 'none';
      setEventtable(false);
      // if (document.querySelector('.udyam-nav') != null) {
      //   document.querySelector('.udyam-nav').style.display = 'none';
      // }
    }
    // props.eventTitleFunc();
  }
  // function menuNav() {
  //   setNav(false);
  //   setUdgamName(false);
  //   if (slideLeader === false) {
  //     document.querySelector('.leader').style.display = 'block';
  //   } else {
  //     document.querySelector('.token').style.display = 'block';
  //   }
  //   // document.querySelector('.token').style.display = 'block';
  //   // document.querySelector('.leader').style.display = 'block';

  //   document.querySelector('.udgam-nav').style.display = 'block';
  //   // setNav(!slideNav);
  // }

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  // function slideIn(e) {
  //   setEvent(true);
  //   setLeader(true);
  //   const aevent = e.currentTarget.getAttribute('ind');
  //   setActiveNav(aevent);
  // }

  // function slideEvents() {
  //   setEvent(!slideEvent);
  //   setLeader(true);
  //   setActiveNav('#event');
  //   // Events.style.backgroundColor = 'yellow'
  // }
  // function slideLeaderboard() {
  //   setLeader(!slideLeader);
  //   setEvent(true);
  //   setActiveNav('#leaderboard');
  // }
  // function names() {
  //   setActiveNav('#name');
  //   slideIn();
  // }
  // function abouts() {
  //   setActiveNav('#about');
  //   slideIn();
  // }
  // function sponsors() {
  //   setActiveNav('#sponsors');
  //   slideIn();
  // }
  // function showNav() {
  //   setNav(!slideNav);
  //   setEvent(true);
  //   setLeader(true);
  // }
  // function slidemobile() {
  //   // setEvent(true);
  //   if (width < 800) {
  //     document.querySelector('.udg-leader').style.display = 'none';
  //   }
  // }
  function sliding() {
    // setEvent(true);
    setEventtable(true);
    document.querySelector('.udg-leader').style.display = 'block';
  }
  function slidemobile() {
    // setEvent(true);
    if (width < 800) {
      // document.querySelector('.leader').style.display = 'none';
      setEventtable(false);
    }
  }

  function showEvents() {
    setEventtable(true);
  }
  // function helloNav() {
  //   setNav(true);
  //   setUdgamName(true);
  // }

  // const contentIndex = props.contentIndex;
  return (
    <>
      {/* <div className="background">
        <div className="bg"></div>
        <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div> 
      </div> */}

      {(eventtable || width > 800) && (
        <div className="leader" id="events-name-list">
          {width < 800 && (
            <div className="back" onClick={checkNav}>
              <IoIosArrowBack />
            </div>
          )}
          <div className="token-event" onClick={eventName}>
            <div className="udg-leaderboard-event-name" onClick={checkNav}>
              <div className="udg-event-name-item">Campus in Pixels</div>
            </div>
            <div className="udg-leaderboard-event-name" onClick={checkNav}>
              <div className="udg-event-name-item">Life in Kashi</div>
            </div>
            <div className="udg-leaderboard-event-name" onClick={checkNav}>
              <div className="udg-event-name-item">Ignite</div>
            </div>
            <div className="udg-leaderboard-event-name" onClick={checkNav}>
              <div className="udg-event-name-item">India in 2050</div>
            </div>
            <div className="udg-leaderboard-event-name" onClick={checkNav}>
              <div className="udg-event-name-item">Face Painting</div>
            </div>
            <div className="udg-leaderboard-event-name" onClick={checkNav}>
              <div className="udg-event-name-item">Character Designing</div>
            </div>
            <div className="udg-leaderboard-event-name" onClick={checkNav}>
              <div className="udg-event-name-item">Ridham</div>
            </div>
            <div className="udg-leaderboard-event-name" onClick={checkNav}>
              <div className="udg-event-name-item">Open Mic Stand</div>
            </div>
            <div className="udg-leaderboard-event-name" onClick={checkNav}>
              <div className="udg-event-name-item">Creative Writing</div>
            </div>
            <div className="udg-leaderboard-event-name" onClick={checkNav}>
              <div className="udg-event-name-item">Treasure Hunt</div>
            </div>
          </div>
        </div>
      )}

      <div className="udg-getback" onClick={sliding}>
        <MdArrowForwardIos />
      </div>
      {/* <div className="udg-lb-coming-soon">COMING SOON</div> */}
      <div className="udg-leaderboards-main-container" onClick={slidemobile}>
        <h1>LEADERBOARDS</h1>
        <h2 id="eventName">Campus in Pixels</h2>
        {teamName[contentIndex].first === 'Not Released' ? (
          <h1 style={{ color: 'GrayText' }}>&#9888; Not Released</h1>
        ) : (
          <div className="udg-lb-container">
            <div className="udg-podium-main-container">
              <div className="udg-mobile-first-position">
                <div className="udg-img-and-score">
                  <img src="/assets/medals/gold.png" alt="" />
                  <div className="udg-team-score" style={{ height: '10vh' }}>
                    {teamScore[contentIndex].first}
                  </div>
                </div>
                <div className="udg-team-name">{teamName[contentIndex].first}</div>
              </div>
              <div className="udg-second-position">
                <div className="udg-img-and-score">
                  <img src="/assets/medals/silver.png" alt="" />
                  <div className="udg-team-score" style={{ height: '11vh' }}>
                    {teamScore[contentIndex].second}
                  </div>
                </div>
                {/* <div className="udg-middle-glow"></div> */}
                <div className="udg-team-name">{teamName[contentIndex].second}</div>
              </div>
              <div className="udg-first-position">
                <div className="udg-img-and-score">
                  <img src="/assets/medals/gold.png" alt="" />
                  <div className="udg-team-score" style={{ height: '11vh' }}>
                    {teamScore[contentIndex].first}
                  </div>
                </div>
                {/* <div className="udg-middle-glow"></div> */}
                <div className="udg-team-name">{teamName[contentIndex].first}</div>
              </div>
              <div className="udg-third-position">
                <div className="udg-img-and-score">
                  <img src="/assets/medals/bronze.png" alt="" />
                  <div className="udg-team-score" style={{ height: '11vh' }}>
                    {teamScore[contentIndex].third}
                  </div>
                </div>
                {/* <div className="udg-middle-glow"></div> */}
                <div className="udg-team-name">{teamName[contentIndex].third}</div>
              </div>
            </div>
            {/* <div className="udg-remaining-leaderboard">
            <div className="udg-leaderboard-box">
              <div className="udg-leaderboard-position" style={{ width: '15%' }}>
                4th
              </div>
              <div className="udg-team-name-non-podium" style={{ width: '65%' }}>
                {teamName[contentIndex].fourth}
              </div>
              <div className="udg-team-score-non-podium" style={{ width: '20%' }}>
                {teamScore[contentIndex].fourth}
              </div>
            </div>
            <div className="udg-leaderboard-box">
              <div className="udg-leaderboard-position" style={{ width: '15%' }}>
                4th
              </div>
              <div className="udg-team-name-non-podium" style={{ width: '65%' }}>
                {teamName[contentIndex].fifth}
              </div>
              <div className="udg-team-score-non-podium" style={{ width: '20%' }}>
                {teamScore[contentIndex].fifth}
              </div>
            </div>
          </div> */}
          </div>
        )}
      </div>
      <div className="open-nav" onClick={showEvents}>
        <IoIosArrowForward />
      </div>
    </>
  );
};

export default UdgamLeaderboard;

import './Teams.css';
import Navbar from '../Navbar/Navbar';
import TeamMemberCard from './TeamMemberCard';
import { TeamMemberName, TeamDomain, Designation, TeamMemberDetails, ContactInstagram, ContactMail, ContactLinkedIn, MemberImage } from './TeamData';
import { useState } from 'react';

const Teams = () => {
  const [TeamNumber, setTeamNumber] = useState(0);
  const changeTeam = (num) => {
    document.querySelector('.circle-active').classList.remove('circle-active');
    document.getElementsByClassName('circle-box')[num].classList.add('circle-active');
    setTimeout(function () {
      document.getElementsByClassName('ct-main')[0].scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 50);
    setTeamNumber(num);
  };
  let TeamArr = [];
  let ArrLen = Object.keys(TeamMemberName[TeamNumber]).length;
  for (let i = 0; i < ArrLen; i++) {
    TeamArr.push(<TeamMemberCard name={TeamMemberName[TeamNumber][i]} Img={MemberImage[TeamNumber][i]} des={Designation[TeamNumber][i]} hover={TeamMemberDetails[TeamNumber][i]} Email={ContactMail[TeamNumber][i]} Instalink={ContactInstagram[TeamNumber][i]} LinkedIn={ContactLinkedIn[TeamNumber][i]} />);
  }
  return (
    <>
      <div className="Teams-Navbar">
        <Navbar />
      </div>
      <div className="Teams-main-container">
        <div className="team-members-main">
          <div className="ct-main">
            <h1 className="biggest-heading">{TeamDomain[TeamNumber]}</h1>
            <div className="Team-cards-container">{TeamArr}</div>
          </div>
          <div className="scrollable-side">
            <div
              className="circle-box circle-active"
              onClick={() => {
                changeTeam(0);
              }}>
              <div className="circle-content">CORE TEAM</div>
            </div>
            <div
              className="circle-box"
              onClick={() => {
                changeTeam(1);
              }}>
              <div className="circle-content">SENIOR ADVISORS</div>
            </div>
            <div
              className="circle-box"
              onClick={() => {
                changeTeam(2);
              }}>
              <div className="circle-content">DEVELOPERS</div>
            </div>
            <div
              className="circle-box"
              onClick={() => {
                changeTeam(3);
              }}>
              <div className="circle-content">DESIGNERS</div>
            </div>
            <div
              className="circle-box"
              onClick={() => {
                changeTeam(4);
              }}>
              <div className="circle-content">CONTENT & CREATIVE</div>
            </div>
            <div
              className="circle-box"
              onClick={() => {
                changeTeam(5);
              }}>
              <div className="circle-content">MARKETING</div>
            </div>
            <div
              className="circle-box"
              onClick={() => {
                changeTeam(6);
              }}>
              <div className="circle-content">EXTERNAL AFFAIRS</div>
            </div>
            <div
              className="circle-box"
              onClick={() => {
                changeTeam(7);
              }}>
              <div className="circle-content">PUBLIC RELATIONS</div>
            </div>
            <div
              className="circle-box"
              onClick={() => {
                changeTeam(8);
              }}>
              <div className="circle-content">EVENT CO-ORDINATORS</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Teams;

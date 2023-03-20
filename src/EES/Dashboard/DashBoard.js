import './DashBoard.css';
import React from 'react';
import { useEffect } from 'react';
import QRCode from 'react-qr-code';
import Register from '../Register/Register';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
const DashBoard = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [user, setUser] = useState({
    name: 'Default',
    email: 'default@gmail.com',
    college: 'null',
    year: 'Part II',
    phone: '1234567890',
    referral: 'default#EES-10000',
    radianite_points: 0
  });
  const [eventsData, setEventsData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [showForm, setShowForm] = useState(0);
  const [token, setToken] = useState('');
  useEffect(() => {
    var newUser = JSON.parse(window.sessionStorage.getItem('profileData'));
    setUser(newUser);
    setToken(newUser.token);
    axios
      .get('https://udyam.pythonanywhere.com/api/events/')
      .then((res) => {
        console.log(res);
        setEventsData(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get('https://udyam.pythonanywhere.com/api/teams/user/', { headers: { Authorization: `Token ${newUser.token}` } })
      .then((res) => {
        console.log(res);
        setTeamData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [event, setEvent] = useState('Mosaic');
  const registerHandler = (i) => {
    setEvent(i);
    console.log(event);
    setShowForm(1);
    setTimeout(() => {
      document.getElementById('team-register-form').scrollIntoView();
    }, 500);
  };
  const [data, setData] = useState({
    teamname: 'teamName',
    event: event,
    leader: user.email,
    member1: '',
    member2: ''
  });

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };
  const postData = (e) => {
    e.preventDefault();
    let senddata = {
      teamname: data.teamname,
      event: event,
      leader: user.email,
      member1: data.member1,
      member2: data.member2
    };
    axios
      .post('https://udyam.pythonanywhere.com/api/team/create/', senddata, {
        // headers: {
        //   Authorization: `Basic ${token}`
        // }
        headers: { Authorization: `Token ${token}` }
      })
      .then((res) => {
        console.log(res.data);
        setShowForm(0);
        setTimeout(() => {
          toast.success('Registered Successfully', {
            theme: 'dark',
            position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1200
          });
        }, 1000);
      })
      .catch((err) => {
        console.log(err.response.data);
        Object.keys(err.response.data).forEach(function (key) {
          toast.error(key.charAt(0).toUpperCase() + key.slice(1) + ' : ' + err.response.data[key], {
            theme: 'dark',
            position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
            autoClose: 2000
          });
        });
      });
  };
  return (
    <>
      {user.college == null ? (
        <Register />
      ) : (
        <div className="dashboard-main">
          <div className="db-main-container">
            <div className="db-user-details">
              <div className="qr-and-name">
                <div className="qr">
                  <QRCode size={256} style={{ height: 'auto', maxWidth: '100%', width: '100%' }} value={user.email} viewBox={`0 0 256 256`} />
                </div>
                <div className="userName">
                  <h1>{user.name.split(' ').slice(0, 2).join(' ')}</h1>
                </div>
              </div>
              <div className="userDetails">
                <div className="userEmail padding-between">
                  <div className="textSmall">Email</div>
                  <div className="textLarge">{user.email}</div>
                </div>
                <div className="userCollege padding-between">
                  <div className="textSmall">College</div>
                  <div className="textLarge">{user.college}</div>
                </div>
                <div className="userBranch-year padding-between">
                  <div className="textSmall">year of study</div>
                  <div className="textLarge">{user.year} YEAR</div>
                </div>
                <div className="userPhone padding-between">
                  <div className="textSmall">Mobile Number</div>
                  <div className="textLarge">{user.phone}</div>
                </div>
                <div className="userRefferal padding-between">
                  <div className="textSmall">Referral Code</div>
                  <div className="textLarge">{user.referral}</div>
                </div>
              </div>
            </div>
            <div className="db-radianite">
              <div className="rImage-Score">
                <img className="radianiteImage" src="/assets/radianite.png" alt="" />
                <div className="rPoints" style={{}}>
                  <div className="scoreMain">{user.radianite_points}</div>
                </div>
              </div>
              <div className="radianiteHeading" style={{}}>
                Radianite
              </div>
            </div>
          </div>
          {/* teams section */}
          <div className="Teams">
            <h1 className="team-heading">Teams</h1>
            <div className="teams-row">
              {teamData.map((e) => (
                <div key={e.id} className="teams-column">
                  <div className="teamcard" key={e.id}>
                    <div className="logo-event">
                      <img src={'/assets/events/' + e.event.toUpperCase() + '.png'} alt="img" />
                    </div>
                    <div className="team-info">
                      <h2>{e.event}</h2>
                      <h2>{e.teamname}</h2>
                      <h2>{user.name.split(' ').slice(0, 2).join(' ')}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="name-Event">
              <div className="logo-event">
                <img src="https://images.unsplash.com/photo-1673669024894-4b56f413c8dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80" alt="img" />
                <h2>Devbits</h2>
              </div>
              <div className="text-event">
                <h2>UserName</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nisi, sed nemo dolor temporibus rerum, voluptate accusantium ducimus corporis et in voluptatibus repellendus ullam consequuntur?</p>
              </div>
            </div> */}
          </div>
          {/* add team */}
          <h2 className="add-Teams">+ Add Teams</h2>
          <div className="row">
            {eventsData.map((e) => (
              // <div key={e.id} className="column">
              //   <div className="card">
              //     <h3>{e.event}</h3>
              //     <button className="register-btn" onClick={() => registerHandler(e.event)}>
              //       Register
              //     </button>
              //   </div>
              // </div>
              <div key={e.id} className="column">
                <div className="register-card">
                  <div className="logo-event">
                    <img src={'/assets/events/' + e.event.toUpperCase() + '.png'}></img>
                  </div>
                  <h3>{e.event}</h3>
                  <button className="register-btn" onClick={() => registerHandler(e.event)}>
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>

          {showForm && (
            <div id="team-register-form" className="form-dashboard-container">
              <h1 className="form-heading">Team Registeration</h1>
              <form onSubmit={(e) => postData(e)}>
                <input id="teamname" type="text" onChange={(e) => handle(e)} placeholder="Enter Team Name" required></input>
                <input id="event" type="text" value={event} readOnly></input>
                {event === 'Funckit' && user.year !== 'FIRST' ? (
                  <>
                    <input id="leader" type="text" value="You're not eligible" placeholder="Team Leader" readOnly></input>
                  </>
                ) : (
                  <>
                    <input id="leader" type="text" value={user.email} placeholder="Team Leader" readOnly></input>
                    <input id="member1" type="text" onChange={(e) => handle(e)} placeholder="Team Member"></input>
                    <input id="member2" type="text" onChange={(e) => handle(e)} placeholder="Team Member"></input>
                  </>
                )}
                <button type="submit" className="form-dashboard-submit">
                  <span>Register</span>
                </button>
                {event === 'Devbits' && <div className="apply-button" data-hackathon-slug="YOUR-HACKATHON-SLUG" data-button-theme="light" style={{ height: '44px', width: '312px', zIndex: '100', position: 'relative' }}></div>}
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DashBoard;

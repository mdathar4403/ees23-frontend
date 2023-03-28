import React from 'react';
import { useState, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { IoMdLogOut } from 'react-icons/io';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
import { GoogleLoginBTN, GoogleLogoutBTN } from './googleauth';

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [eventLink, setEventLink] = useState(false);
  const [updatesLink, setUpdatesLink] = useState(false);
  const [click, setclick] = useState(true);
  const [slideUdyam, setSlideUdyam] = useState(false);
  const [slideUpdates, setSlideUpdates] = useState(false);
  function expand() {
    if (click) {
      document.querySelector('.nav-links').style.display = 'flex';
      document.querySelector('.menu-text').style.display = 'none';
    } else {
      document.querySelector('.nav-links').style.display = 'none';
      document.querySelector('.menu-text').style.display = 'flex';
    }
    setclick(!click);
    setEventLink(false);
  }
  function showEvents() {
    setEventLink(!eventLink);
  }
  function showEventUpdates() {
    setUpdatesLink(!updatesLink);
  }
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function open() {
    document.querySelector('.header').classList.toggle('menu-opened');
  }
  function nameOfEvents() {
    setSlideUdyam(!slideUdyam);
  }
  function nameOfUpdates() {
    setSlideUpdates(!slideUpdates);
  }

  return (
    <>
      {width < 800 && (
        <div className="window">
          <div className="header">
            <div className="burger-container" onClick={open}>
              <div id="burger">
                <div className="bar topBar"></div>
                <div className="bar btmBar"></div>
              </div>
            </div>

            <ul className="menu">
              <li className="menu-item">
                {window.sessionStorage.getItem('registered_email') && (
                  <GoogleLogoutBTN>
                    <div className="logout-btn">
                      <IoMdLogOut></IoMdLogOut>
                    </div>
                  </GoogleLogoutBTN>
                )}
              </li>
              <li className="menu-item">
                <Link to="/" onClick={open}>
                  Home
                </Link>
              </li>
              <li className="menu-item">
                {window.sessionStorage.getItem('registered_email') == null ? (
                  // <GoogleLogin
                  //   theme="dark"
                  //   accessType="online"
                  //   disabled={false}
                  //   client_id={clientId} // your Google app client ID
                  //   buttonText="Sign in with Google"
                  //   onSuccess={onGoogleLoginSuccess} // perform your user logic here
                  //   onFailure={onGoogleLoginFailure} // handle errors here
                  //   cookiePolicy={'single-host-origin'}
                  //   scope={scope}
                  //   render={(renderProps) => (
                  //     <Link to="#" onClick={renderProps.onClick}>
                  //       <a href="#">SignIn</a>
                  //     </Link>
                  //   )}
                  // />
                  <GoogleLoginBTN>
                    <Link to="#">
                      <a href="#">SignIn</a>
                    </Link>
                  </GoogleLoginBTN>
                ) : (
                  <Link to="/dashboard">
                    <a href="#">Dashboard</a>
                  </Link>
                )}
              </li>
              <li className="menu-item" onClick={nameOfEvents}>
                <div className="mobnavevents">Events</div>
              </li>
              {slideUdyam && (
                <div className="event-names">
                  <li>
                    <Link to="/udyam">
                      <a href="#">Udyam</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/udgam">
                      <a href="#">Udgam</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/mashal">
                      <a href="#">Mashal</a>
                    </Link>
                  </li>
                </div>
              )}
              <li className="menu-item" onClick={nameOfUpdates}>
                <div className="mobnavupdates">Updates</div>
              </li>
              {slideUpdates && (
                <div className="event-names">
                  <li>
                    <HashLink to="/#UdyamUpdates">
                      <a onClick={open}>Udyam</a>
                    </HashLink>
                  </li>
                  <li>
                    <HashLink to="/#udgamUpdates">
                      <a onClick={open}>Udgam</a>
                    </HashLink>
                  </li>
                  <li>
                    <HashLink to="/#mashalUpdates">
                      <a onClick={open}>Mashal</a>
                    </HashLink>
                  </li>
                </div>
              )}
              <li className="menu-item">
                <HashLink to="/#sponsors">
                  <a onClick={open}>Sponsors</a>
                </HashLink>
              </li>
              <li className="menu-item">
                {/*speakers*/}
                <HashLink to="/#speakers">
                  <a onClick={open}>Speakers</a>
                </HashLink>
              </li>
              <li className="menu-item">
                <Link to="/gallery">
                  <a href="#">Gallery</a>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/team">
                  <a>Team</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {eventLink && (
        <div className="dropmenu">
          <Link to="/udyam">
            <a href="#">Udyam</a>
          </Link>
          <Link to="/udgam">
            <a href="#">Udgam</a>
          </Link>
          <Link to="/mashal">
            <a href="#">Mashal</a>
          </Link>
        </div>
      )}
      {updatesLink && (
        <div className="updatesdropmenu">
          <HashLink to="/#UdyamUpdates">
            <a href="#">Udyam</a>
          </HashLink>
          <HashLink to="/#udgamUpdates">
            <a href="#">Udgam</a>
          </HashLink>
          <HashLink to="/#mashalUpdates">
            <a href="#">Mashal</a>
          </HashLink>
        </div>
      )}
      {width > 800 && (
        <div className="container">
          <nav>
            <ul className="nav-links" style={{ display: 'none' }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                {window.sessionStorage.getItem('registered_email') == null ? (
                  // <GoogleLogin
                  //   theme="dark"
                  //   accessType="online"
                  //   disabled={false}
                  //   client_id={clientId} // your Google app client ID
                  //   buttonText="Sign in with Google"
                  //   onSuccess={onGoogleLoginSuccess} // perform your user logic here
                  //   onFailure={onGoogleLoginFailure} // handle errors here
                  //   cookiePolicy={'single-host-origin'}
                  //   scope={scope}
                  //   render={(renderProps) => (
                  //     <Link to="#" onClick={renderProps.onClick}>
                  //       <a href="#">SignIn</a>
                  //     </Link>
                  //   )}
                  // />
                  <GoogleLoginBTN>
                    <Link to="#">
                      <a href="#">SignIn</a>
                    </Link>
                  </GoogleLoginBTN>
                ) : (
                  <Link to="/dashboard">
                    <a href="#">Dashboard</a>
                  </Link>
                )}
              </li>
              <li>
                <div className="navevents" onClick={showEvents}>
                  Events
                  <BiChevronDown style={{ color: '#fff' }} />
                </div>
              </li>
              <li>
                <div className="navupdates" onClick={showEventUpdates}>
                  Updates
                  <BiChevronDown style={{ color: '#fff' }} />
                </div>
              </li>
              <li>
                <HashLink to="/#sponsors">
                  <a onClick={open}>Sponsors</a>
                </HashLink>
              </li>
              <li>
                <HashLink to="/#speakers">
                  <a onClick={open}>Speakers</a>
                </HashLink>
              </li>
              <li>
                <Link to="/gallery">
                  <a href="#">Gallery</a>
                </Link>
              </li>
              <li>
                <Link to="/team">
                  <a href="#">Team</a>
                </Link>
              </li>
            </ul>
            {window.sessionStorage.getItem('registered_email') == null ? (
              <GoogleLoginBTN>
                <div className="menu-text" style={{ display: 'flex' }}>
                  <span>SignIn</span>
                </div>
              </GoogleLoginBTN>
            ) : (
              <GoogleLogoutBTN>
                <div className="menu-text" style={{ display: 'flex' }}>
                  <span>Logout</span>
                </div>
              </GoogleLogoutBTN>
            )}
            ;
            <button className="menu-bar" onClick={expand}>
              <i className={click ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'}></i>
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;

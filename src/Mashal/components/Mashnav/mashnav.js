/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from 'react';
// import { BiChevronDown } from 'react-icons/bi';
import { IoMdLogOut } from 'react-icons/io';
import './mashnav.css';
import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
const scope = 'https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.addresses.read https://www.googleapis.com/auth/user.organization.read';
const clientId = process.env.REACT_APP_CLIENT_ID;

const Navbar = () => {
  const navigate = useNavigate();
  const onGoogleLoginSuccess = (res) => {
    console.log('SUCCESS!!! Current User: ', res);
    window.sessionStorage.setItem('profileData', JSON.stringify(res.profileObj));
    window.sessionStorage.setItem('tokenId', res.tokenId);
    window.sessionStorage.setItem('imageUrl', res.profileObj.imageUrl);
    // console.log('res.profileObj: ', res);
    axios({
      url: 'https://udyam.pythonanywhere.com/auth/google-login/',
      method: 'post',
      headers: { Authorization: res.tokenId },
      data: {
        email: res.profileObj.email
      }
    })
      .then((res) => {
        console.log('res: ', res);
        if (res.status === 200) {
          window.sessionStorage.setItem('registered_email', res.data.email);
          window.sessionStorage.setItem('profileData', JSON.stringify(res.data));
          toast.success('Login was successfull!', {
            theme: 'dark',
            position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1200
          });
          console.log('stored Data', JSON.parse(window.sessionStorage.getItem('profileData')));
          navigate('/dashboard');
        }
      })
      .catch((err) => {
        console.log(err);
        toast.warning('Your registeration is incomplete.', {
          theme: 'dark',
          position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000
        });
        navigate('/dashboard');
      });
  };

  const onGoogleLoginFailure = (res) => {
    console.log('FAILURE!!! res: ', res);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const [eventLink] = useState(false);
  const [click, setclick] = useState(true);
  const [slideUdyam, setSlideUdyam] = useState(false);
  console.log('client_id: ', clientId);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function open() {
    document.querySelector('.header').classList.toggle('menu-opened');
    setTimeout(function () {
      document.getElementsByClassName('logout-btn')[0].classList.toggle('show-now');
    }, 500);
  }
  function nameOfEvents() {
    setSlideUdyam(!slideUdyam);
  }

  const logout = () => {
    window.sessionStorage.removeItem('registered_email');
    toast.success('Logout was successfull!', {
      theme: 'dark',
      position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1200
    });
    navigate('/mashal');
  };

  return (
    <>
      {width < 500 && (
        <div className="window">
          <div className="header headerx">
            <div className="burger-container xxburger" onClick={open}>
              <div id="burger">
                <div className="bar topBar"></div>
                <div className="bar btmBar"></div>
              </div>
            </div>

            {/* <GoogleLogout
              clientId={clientId}
              theme="dark"
              render={(renderProps) => (
                <div className="logout-btn" onClick={renderProps.onClick}>
                  <IoMdLogOut></IoMdLogOut>
                </div>
              )}
              onLogoutSuccess={logout}
            /> */}

            <ul className="menu">
              <li className="menu-item">
                <Link to="/mashal" onClick={open}>
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/mashal/leaderboard">
                  <a href="#">Leaderboard</a>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/mashal/sponsors">
                  <a href="#" onClick={open}>
                    Sponsors
                  </a>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/mashal/aboutus">
                  <a href="#">About Us</a>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/mashal/events">
                  <a href="#">Events</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

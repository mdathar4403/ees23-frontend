import React from 'react';
import './Navbar.css';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const GoogleLoginBTN = (props) => {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (res) => {
      // console.log('SUCCESS!!! Current User: ', res);
      axios({
        url: 'https://ees23.pythonanywhere.com/auth/google-login/',
        method: 'post',
        headers: { Authorization: res.code }
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
          console.log('err', err);
          window.sessionStorage.setItem('profileData', JSON.stringify(err.response.data.data));
          window.sessionStorage.setItem('tokenId', err.response.data.data.code);
          toast.warning('Your registeration is incomplete.', {
            theme: 'dark',
            position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000
          });
          navigate('/dashboard');
        });
    },
    onError: (res) => console.log('FAILURE!!! res: ', res),
    isSignedIn: true,
    accessType: 'offline',
    scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
    // prompt: 'consent',
    responseType: 'code',
    flow: 'auth-code'
  });
  return <>{React.cloneElement(props.children, { onClick: login })}</>;
};

const GoogleLogoutBTN = (props) => {
  const navigate = useNavigate();
  const logout = () => {
    googleLogout();
    window.sessionStorage.removeItem('registered_email');
    window.sessionStorage.removeItem('profileData');
    toast.success('Logout was successfull!', {
      theme: 'dark',
      position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1200
    });
    navigate('/');
  };
  return <>{React.cloneElement(props.children, { onClick: logout })}</>;
};

export { GoogleLoginBTN, GoogleLogoutBTN };

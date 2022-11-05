import "./style.css";
import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import {useNavigate} from "react-router-dom"
import { GoogleLogin } from 'react-google-login';
// import GoogleLoginPage from "./GoogleLoginPage";
// import EventFAB from "./EventFAB";
import './Fab.css';

const clientId = process.env.REACT_APP_CLIENT_ID
const scope='https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.addresses.read https://www.googleapis.com/auth/user.organization.read'


function Event() {
  const navigate = useNavigate()
  const [active, setActive] = useState(false);
  const [choosed, setChoosed] = useState(0);
  const [isinittial, setIsinittial] = useState(false);
  const [regActive, setRegActive] = useState(false);
  
  const onGoogleLoginSuccess = (res) => {
    console.log("SUCCESS!!! Current User: ", res);
    window.sessionStorage.setItem("profileData", JSON.stringify(res.profileObj));
    window.sessionStorage.setItem("tokenId", res.tokenId);
    navigate("/register", {state: { profileData: res.profileObj, token: res.tokenId}})
}

const onGoogleLoginFailure = (res) => {
    console.log("FAILURE!!! res: ", res);
}

  
  const toggle = () => {
    document
      .getElementsByClassName("event-detais-card")[0]
      .classList.toggle("event-detais-card-active");
    console.log("Single G clicked");
  };


  const [content, setContent] = useState(-1);
  function ani(e) {

    console.log(e);
    document
      .getElementsByClassName("fab-button")[0]
      .classList.toggle("fab-button-active");
    document
      .getElementsByClassName("fab-container")[0]
      .classList.toggle("fab-container-active");

  }

  useEffect(() => {
    if(isinittial){
    toggle();
    }else{
      setIsinittial(true);
    }
    if(active){
      setRegActive(false);
    }else{
      setTimeout(() => {
        setRegActive(true);
      }, 1000);
    }


  }, [active]);
  const handleClose = () => {
    if (active) {
              setActive(false);
              setChoosed(0);
              setContent(-1);
            }
  }

  return (
    <>
      <div className="events">
        <table className="table">
          <thead>
            <th>EVENTS</th>
          </thead>
          <tbody>
            <div className="table-body">
              <a
                href="#"
                onClick={() => {
                  if (active && content === 0) {
                    setActive(false);
                    setContent(-1);
                  } else {
                    setContent(0);
                    setActive(true);
                  }
                }}
              >
                UDYAM
              </a>
              <a
                href="#"
                onClick={() => {
                  if (active && content === 1) {
                    setActive(false);
                    setContent(-1);
                  } else {
                    setContent(1);
                    setActive(true);
                  }
                }}
                id="event-dark"
              >
                UDGAM
              </a>
              <a
                href="#"
                onClick={() => {
                  if (active && content === 2) {
                    setActive(false);
                    setContent(-1);
                  } else {
                    setContent(2);
                    setActive(true);
                  }
                }}
                id="event-dark2"
              >
                MASHAL
              </a>
            </div>
          </tbody>
        </table>
      </div>
      <EventCard data={content} close={handleClose} />

      <div className="fab-main-container">
        <div className="fab-container">
          <div className="fab-button-container">
            <div
              className="fab-button"
              onClick={(e) => {
                if (active) {
                  setActive(false);
                  setContent(-1);
                }
                setChoosed(!choosed);
                ani(e);
                console.log("clicked");
              }}
            >
              <h2
                className="fab-button-text"
                style={{
                  position: "relative",
                  fontSize: "18px",
                  textAlign: "center",
                  margin: "auto 0",
                  rotate: "180deg",
                  display: "block",
                }}
              >
                EVENTS
              </h2>
              <h2
                className="fab-button-textX"
                style={{
                  position: "relative",
                  // fontSize: "px",
                  textAlign: "center",
                  marginTop:"0px",
                  marginBottom:"40px",
                  display: "block",
                }}
              >
                X
              </h2>
            </div>
          </div>
          <div
            className="fab-item1"
            onClick={() => {
              if (active && content === 2) {
                setActive(false);
                setContent(-1);
              } else {
                setContent(2);

                setActive(true);
              }

              console.log("clicked UDYAM");
            }}
          >
            <h2
              style={{
                position: "relative",
                fontSize: "18px",
                textAlign: "center",
                margin: "auto 0",
                pointerEvents: "none",
              }}
            >
              MASHAL
            </h2>
          </div>
          <div
            className="fab-item2"
            onClick={() => {
              if (active && content === 0) {
                setActive(false);
                setContent(-1);
              } else {
                setContent(0);

                setActive(true);
              }

              console.log("clicked UDYAM");
            }}
          >
            <h2
              style={{
                position: "relative",
                fontSize: "18px",
                textAlign: "center",
                margin: "auto 0",
                pointerEvents: "none",
              }}
            >
              UDYAM
            </h2>
          </div>
          <div
            className="fab-item3"
            onClick={() => {
              if (active && content === 1) {
                setActive(false);
                setContent(-1);
              } else {
                setContent(1);

                setActive(true);
              }

              console.log("clicked UDYAM");
            }}
          >
            <h2
              style={{
                position: "relative",
                fontSize: "18px",
                textAlign: "center",
                margin: "auto 0",
                pointerEvents: "none",
              }}
            >
              UDGAM
            </h2>
          </div>
          <div className="fab-circular-ring"></div>
        </div>
      </div>
      <div className="register-button" style={{display:(!regActive)?"none":"unset"}}>
        {/* <Link to="/register">Register</Link>
         */}
         <GoogleLogin
              accessType="online"
              disabled={false}
              client_id={clientId}  // your Google app client ID
              buttonText="Sign in"
              onSuccess={onGoogleLoginSuccess} // perform your user logic here
              onFailure={onGoogleLoginFailure} // handle errors here
              cookiePolicy={"single-host-origin"}
              isSignedIn={true}
              scope={scope}
          />
      </div>
    </>
  );
}
export default Event;

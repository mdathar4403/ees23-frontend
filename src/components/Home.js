
import "../App.css";
import Header from "./header/Header";
import Event from "./events/event";
import logo1 from "./images/eeslogo.svg";
import logo2 from "./images/eeslogored.png";
import "./home.css";
import Footer from "./footer/Footer";
import { ToastContainer } from "react-toastify";
import Updates from "./Updates/Updates";
import ValoBtn from "./ValoBtn/ValoBtn";
import React, { useEffect } from 'react'

function Home() {
  let countDown = new Date('april 7, 2023 00:00:00').getTime();
  let now = new Date().getTime();
  let distance = countDown - now;
  let text = [Math.ceil(distance / (24 * 60 * 60 * 1000)) + " DAYS LEFT", "COMING SOON"];
  useEffect(() => {
    const interval = setInterval(function () {
      if (document.getElementById('come').innerText === text[0])
        document.getElementById('come').innerText = text[1];
      else document.getElementById('come').innerText = text[0];
    }, 4000)
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ToastContainer className="toast-container" />
      <Header />


      <div className="background">



        <div class="bg"></div>
        <div class="star-field">
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div className="logo">
            <div className="logos">
              <img
                src={logo1}
                height="310px"
                alt=""
                id="eeslogo"
              />
              <img
                src={logo2}
                height="310px"
                alt=""
                id="eeslogored"
              />
            </div>


            <div id="come" className="coming-soon">COMING SOON</div>
          </div>
          <ValoBtn />
          <Updates />

        </div>
        <Event />
      </div>
      <div className="event-list-main"></div>
      <Footer />
    </>
  );
}

export default Home;

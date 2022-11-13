
import "../App.css";
import Header from "./header/Header";
import Title from "./title";
import Event from "./event";
import logo1 from "./images/eeslogo.svg";
import logo2 from "./images/eeslogored.png";
import coming from "./images/coming.svg"
import "./home.css";
import Footer from "./footer/Footer";

function Home() {
  return (
    <>
      <Header/>
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
        </div>
         <Event/>
      </div>
      <div className="event-list-main"></div>
      <Footer/>
    </>
  );
}

export default Home;

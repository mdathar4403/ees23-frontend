import "../App.css";
import Title from "./title";
import Event from "./event";
import logo from "./images/eeslogo.svg";
import coming from "./images/coming.svg"
import "./home.css";
import Footer from "./footer/Footer";

function Home() {
  return (
    <>
      <div className="background">
        <div class="bg"></div>
        <div class="star-field">
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div className="logo">
            <img
              src={logo}
              height="310px"
              alt=""
            />
            <img id="come" height="23px" src={coming} alt="" />

          </div>
        </div>
      </div>
      <div className="event-list-main"></div>
      <Footer/>
    </>
  );
}

export default Home;

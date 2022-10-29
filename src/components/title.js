import React from 'react';
import "./style.css";
import LineStyle from './linestyle'
function Title() {
    return (
      <div className="title">
        <img src="./assets/1.png" className="title-image1" />
        <div className="title-container">
          <div className="upperline"></div>
          <h1 className="main-title">ELECTRONICS ENGINEERING SOCIETY</h1>
          <span className="underline"></span>
          <LineStyle deg="60" left="64" />
          <LineStyle deg="-60" left="65" />
          <LineStyle deg="-60" left="69" />
          <LineStyle deg="60" left="70" />
          <LineStyle deg="60" left="74" />
          <LineStyle deg="-60" left="75" />
        </div>
      </div>
    );
}
export default Title;
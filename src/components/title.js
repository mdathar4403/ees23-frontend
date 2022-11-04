import React from "react";
import "./style.css";
import LineStyle from "./linestyle";
function Title() {
  return (
    <div className="title">
      <img src="./assets/1.png" className="title-image1" />
      <div className="title-container">
        
        <h1 className="main-title">ELECTRONICS ENGINEERING SOCIETY</h1>
        
        <div className="line-mobile-view">
          <LineStyle top="8" deg="60" left="11" width="4" />
          <LineStyle top="8" deg="-60" left="12" width="4" />
          <LineStyle top="8" deg="-60" left="17" width="21" />
          <LineStyle top="8" deg="60" left="63" width="20"></LineStyle>
          <LineStyle top="8" deg="60" left="84" width="4" />
          <LineStyle top="8" deg="-60" left="85" width="4" />
          <LineStyle top="14" deg="60" left="38" width="4" />
          <LineStyle top="14" deg="-60" left="39" width="4" />
          <LineStyle top="14" deg="-60" left="44" width="8" />
          <LineStyle top="14" deg="60" left="50" width="6" />
          <LineStyle top="14" deg="60" left="57" width="4" />
          <LineStyle top="14" deg="-60" left="58" width="4" />
        </div>
        <div className="line-desktop-view">
          <LineStyle top="1" deg="60" left="23" width="14" />
          <LineStyle top="6" deg="60" left="23" width="40" />
          <LineStyle top="6" deg="60" left="64" width="3" />
          <LineStyle top="6" deg="-60" left="65" width="3" />
          <LineStyle top="6" deg="-60" left="69" width="3" />
          <LineStyle top="6" deg="60" left="70" width="3" />
          <LineStyle top="6" deg="60" left="74" width="3" />
          <LineStyle top="6" deg="-60" left="75" width="3" />
        </div>
      </div>
    </div>
  );
}
export default Title;

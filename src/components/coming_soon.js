import React from 'react'
import ProgressBar from "react-animated-progress-bar";



const ComingSoonComp = () => {
  return (
    <div>
      <div className="comingsoon">
        <div className="coming-soon-text"></div>

        <div className="loading">
          <div className="lines">
            <div
              style={{
                height: "2px",
                backgroundColor: "red",
                top: "120px",
                position: "relative",
                width: "140px",
                left: "150px",
              }}
            ></div>
            <div
              style={{
                height: "2px",
                backgroundColor: "#0CF400",
                top: "122px",
                position: "relative",
                width: "200px",
                left: "-15px",
                // zIndex: "",
              }}
            ></div>
            <div
              style={{
                height: "2px",
                backgroundColor: "#0CF400",
                top: "120px",
                position: "relative",
                width: "200px",
                left: "100px",
                // zIndex: "",
              }}
            ></div>
            <div
              style={{
                height: "2px",
                backgroundColor: "red",
                top: "124px",
                position: "relative",
                width: "120px",
                left: "120px",
                zIndex: "1",
              }}
            ></div>
            <div
              style={{
                height: "2px",
                backgroundColor: "red",
                top: "142px",
                position: "relative",
                width: "170px",
                left: "20px",
                zIndex: "1",
              }}
            ></div>
            <div
              style={{
                height: "2px",
                backgroundColor: "red",
                top: "128px",
                position: "relative",
                width: "150px",
                left: "20px",
                zIndex: "1",
              }}
            ></div>
          </div>

          <h1> COMING SOON..</h1>
          <ProgressBar
            width="400px"
            height="30px"
            defColor={{
              fair: "white",
              good: "white",
              excellent: "white",
              poor: "white",
            }}
            rect
            fontColor="transparent"
            percentage="70"
            rectPadding="4px"
            rectBorderRadius="0"
            trackPathColor="transparent"
            bgColor="#333333"
            trackBorderColor="white"
            showPercentageSymbol="false"
          />
        </div>
      </div>
    </div>
  );
}

export default ComingSoonComp;

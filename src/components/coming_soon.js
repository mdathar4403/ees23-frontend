import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import "./coming_soon.css";
const ComingSoonComp = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 80) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 80);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="comingsoon">
      <div
        className="comingsoon__text_lines"
        style={{
          height: "2px",
          backgroundColor: "#fd4556",
          top: "84%",
          position: "relative",
          width: "140px",
          left: "55%",
          zIndex: "1",
        }}
      ></div>
      <div
        className="comingsoon__text_lines"
        style={{
          height: "3px",
          backgroundColor: "#43c8a3",
          top: "82%",
          position: "relative",
          width: "180px",
          left: "-5%",
          // zIndex: "",
        }}
      ></div>
      <div
        className="comingsoon__text_lines"
        style={{
          height: "2px",
          backgroundColor: "#fd4556",
          top: "88%",
          position: "relative",
          width: "22%",
          left: "12%",
          zIndex: "-1",
        }}
      ></div>
      <div
        className="comingsoon__text_lines"
        style={{
          height: "2px",
          backgroundColor: "#43c8a3",
          top: "98%",
          position: "relative",
          width: "30%",
          left: "25%",
          zIndex: "-1",
        }}
      ></div>
      <div
        className="comingsoon__text_lines"
        style={{
          height: "2px",
          backgroundColor: "#fd4556",
          top: "96%",
          position: "relative",
          width: "10%",
          left: "",
          zIndex: "1",
        }}
      ></div>
      <div
        className="comingsoon__text_lines"
        style={{
          height: "2px",
          backgroundColor: "#43c8a3",
          top: "68%",
          position: "relative",
          width: "150px",
          left: "40%",
          zIndex: "-1",
        }}
      ></div>
      <div
        className="comingsoon__text_lines"
        style={{
          height: "3px",
          backgroundColor: "#43c8a3",
          top: "82%",
          position: "relative",
          width: "100px",
          left: "80%",
          zIndex: "-1",
        }}
      ></div>
      <div
        className="comingsoon__text_lines"
        style={{
          height: "4px",
          backgroundColor: "#fd4556",
          top: "106%",
          position: "relative",
          width: "170px",
          left: "0%",
          zIndex: "1",
        }}
      ></div>
      <h1> COMING SOON..</h1>
      {/* <div
            style={{ width: `${200}px`, top: "60px", position: "relative" }}
            className="progress"
          /> */}
      <div
        className="progress-bar-container"
        style={{
          position: "relative",
          color: "white",
        }}
      >
        <Box
          sx={{
            width: "100%",
            boxShadow: "3px 3px #fd4556",
          }}
        >
          <LinearProgress
            className="progress-linear"
            color="inherit"
            variant="determinate"
            value={progress}
            sx={{
              height: "20px",
              border: "2px solid white",
            }}
          />
        </Box>
      </div>

      {/* <ProgressBar
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
          /> */}
    </div>
  );
};

export default ComingSoonComp;

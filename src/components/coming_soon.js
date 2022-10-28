import React from "react";
import ProgressBar from "react-animated-progress-bar";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { height } from "@mui/system";
// import LinearProgress, {
//   linearProgressClasses,
// } from "@mui/material/LinearProgress";

const ComingSoonComp = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="comingsoon">
      <div
        style={{
          height: "2px",
          backgroundColor: "red",
          top: "74%",
          position: "relative",
          width: "140px",
          left: "5%",
        }}
      ></div>
      <div
        style={{
          height: "2px",
          backgroundColor: "red",
          top: "48%",
          position: "relative",
          width: "72%",
          left: "2%",
          // zIndex: "",
        }}
      ></div>
      <div
        style={{
          height: "3px",
          backgroundColor: "#0CF400",
          top: "52%",
          position: "relative",
          width: "180px",
          left: "40%",
          // zIndex: "",
        }}
      ></div>
      <div
        style={{
          height: "2px",
          backgroundColor: "red",
          top: "58%",
          position: "relative",
          width: "70%",
          left: "120px",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          height: "2px",
          backgroundColor: "red",
          top: "76%",
          position: "relative",
          width: "170px",
          left: "5%",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          height: "2px",
          backgroundColor: "#0CF400",
          top: "68%",
          position: "relative",
          width: "150px",
          left: "40%",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          height: "2px",
          backgroundColor: "#0CF400",
          top: "52%",
          position: "relative",
          width: "70px",
          left: "00%",
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
          // boxShadow: "3px 3px red",
          position: "relative",
          color: "white",
        }}
      >
        <Box
          sx={{
            width: "100%",
            boxShadow: "3px 3px red",
          }}
        >
          <LinearProgress
            color="inherit"
            variant="determinate"
            value={progress}
            sx={{
              height: "20px",
              border: "2px solid white",
              backgroundColor: "black",
            }}
            style={{
              backgroundColor: "#1C242F",
            }}
          />
        </Box>
      </div>
      //
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

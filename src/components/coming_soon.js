import React from "react";
import ProgressBar from "react-animated-progress-bar";

import Box from "@mui/material/Box";
// import LinearProgress from "@mui/material/LinearProgress";
import { height } from "@mui/system";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

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
          {/* <div
            style={{ width: `${200}px`, top: "60px", position: "relative" }}
            className="progress"
          /> */}
          <div
            className="progress-bar-container"
            style={{
              boxShadow: "2px 2px 2px 2px #282727",
              top: "60px",
              position: "relative",
              color: "white",
              backgroundColor: "black",
            }}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              <LinearProgress
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
      </div>
    </div>
  );
};

export default ComingSoonComp;

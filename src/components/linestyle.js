import "./style.css";
import React from "react";
function LinkStyle(props) {
  const styles = {
    height: " 0.6vw",
    width: `${props.width}vw`,
    top: `${props.top}vw`,

    transform: ` skewX(${props.deg}deg)`,
    position: " absolute",
    /* text-align: center; */
    /* margin: 0 auto; */
    left: `${props.left}vw`,
    backgroundColor: " white",
  };
  return <div className="line" style={styles}></div>;
}
export default LinkStyle;

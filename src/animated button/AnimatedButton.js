import React from 'react'
import './AnimatedButton.css'
const AnimatedButton = (props) => {
    const {text} = props;
  return (
    <button className="animated-button1" >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </button>
  );
}

export default AnimatedButton
import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import globe from './antenna.svg';
import satellite1 from './satellite1.svg';
import satellite2 from './satellite2.svg';

// function useHover() {
//   const [value, setValue] = useState(false);
//   // const value = useRef(false);
//   const ref = useRef(null);

//   const handleMouseOver = () => {
//     setValue(true);
//     // console.log(e);
//   };
//   const handleMouseOut = () => {
//     setValue(false);
//     // console.log(e);
//   };

//   useEffect(
//     () => {
//       const node = ref.current;
//       if (node) {
//         node.addEventListener('mouseover', handleMouseOver);
//         node.addEventListener('mouseout', handleMouseOut);

//         return () => {
//           node.removeEventListener('mouseover', handleMouseOver);
//           node.removeEventListener('mouseout', handleMouseOut);
//         };
//       }
//     },
//     [ref.current] // Recall only if ref changes
//   );

//   return [ref, value];
// }

function HomePage() {
  // const [orbit1, isOrbit1] = useHover();
  // const [orbit2, isOrbit2] = useHover();
  const [div, setDiv] = useState(null);
  // const div = useRef(null);
  const orbit1 = useRef(null);
  const orbit2 = useRef(null);
  function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  }
  const secondaryCursor = useRef(null);
  // const mainCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
    div: null
  });
  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      // console.log(event);
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const anchor = document.getElementById('dish');
      const rekt = anchor.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;
      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
      // console.log([mouseX, mouseY]);
      if (-60 + angleDeg >= -60 && -60 + angleDeg <= 10) {
        const eyes = document.querySelectorAll('.globegif');
        eyes.forEach((eye) => {
          eye.style.transform = `rotate(${-55 + angleDeg}deg)`;
        });
      }
    });
    return () => {};
  }, []);
  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;

      const mouseXc = clientX - 130;
      const mouseYc = clientY - 390;
      positionRef.current.mouseX = mouseXc + secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY = mouseYc + secondaryCursor.current.clientHeight / 2;
      // mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth / 2}px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
      // console.log([positionRef.current.mouseX, positionRef.current.mouseY]);
    });
    return () => {};
  });
  useEffect(() => {
    const followMouse = () => {
      if (positionRef.current.div === 'orbits-container-2') {
        positionRef.current.key = requestAnimationFrame(followMouse);
      }
      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.5;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.5;
        if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.5) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      const sat = document.querySelector('.satellite');
      sat.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      // console.log(positionRef.current.div);
      // console.log(orbit1.current.onmouseover);
      // console.log(positionRef.current);
      // console.log(secondaryCursor.current);
    };
    followMouse();
  }, [div]);
  return (
    <div
      className="main-container-udyam-home"
      onMouseOver={(e) => {
        positionRef.current.div = e.target.className;
        // console.log(e);
        // console.log(positionRef.current.div);
        // div.current = positionRef.current.div;
        setDiv(e.target.className);
      }}>
      <h1 className="heading">UDYAM</h1>
      <div
        className="orbits-container-1"
        ref={orbit1}
        onMouseOver={(e) => {
          positionRef.current.div = e.target.className;
          // console.log(e);
          // div.current = positionRef.current.div;
          setDiv(e.target.className);
        }}></div>
      <img className="satellite" src={satellite2} ref={secondaryCursor} />
      <div
        className="orbits-container-2"
        ref={orbit2}
        onMouseOver={(e) => {
          positionRef.current.div = e.target.className;
          // console.log(e);
          // div.current = positionRef.current.div;
          setDiv(e.target.className);
        }}></div>
      <div className="reciever-wrapper">
        <div className="reciever">
          <img className="globegif" id="dish" src={globe} />
          <img className="tower-stand" src={satellite1} />
        </div>
      </div>
      {/* <div className="satellite" ref={secondaryCursor}></div> */}
    </div>
  );
}

export default HomePage;

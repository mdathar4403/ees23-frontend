import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import muskangupta from './landing-images/muskangupta.jpg';
import amansingh from './landing-images/amansingh.jpg';
import yogyatasingh from './landing-images/yogyatasingh.jpg';
import raghavagarwal from './landing-images/raghavagarwal.jpg';
import khushikapoor from './landing-images/khushikapoor.jpg';
import kuldeep from './landing-images/kuldeep.jpg';
import priyanshu from './landing-images/priyanshu.jpeg';
import sudarshanyadav from './landing-images/sudarshanyadav.jpg';
import vaibhavsinha from './landing-images/vaibhavsinha.jpg';

import './main-page.css';
function UDGmain() {
  const arrimg = [muskangupta, amansingh, yogyatasingh, raghavagarwal, khushikapoor, kuldeep, priyanshu, sudarshanyadav, vaibhavsinha];
  const names = ['Muskan Gupta', 'Aman Singh', 'Yogyata Singh', 'Raghav Agrawal', 'Khushi Kapoor', 'Kuldeep', 'Priyanshu', 'Sudarshan Yadav', 'Vaibhav Sinha'];
  const [counter, setCounter] = useState(0);
  // const arr = ['100vw', '0vw', '0vw', '0vw', '0vw', '0vw'];
  let interval = 0;
  useEffect(() => {
    interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
      // setCounter(prevCounter);

      console.log(counter);
    }, 7000);

    return () => clearInterval(interval);
  }, [counter]);
  function clicked() {
    setCounter(counter + 1);
    clearInterval(interval);
  }

  return (
    <div id="main-udgam" onClick={clicked}>
      <div className="title-udgam">UDGAM</div>
      <motion.div className="moving" key={counter} initial={{ x: '100vw', opacity: 0.5, filter: 'grayscale(50%)' }} animate={{ x: '0vw', opacity: 1, filter: 'grayscale(0%)' }} transition={{ duration: 3, ease: 'easeInOut' }} style={{ backgroundImage: `url(${arrimg[(counter + 1) % arrimg.length]})` }}>
        {/* <img src={arrimg[(counter + 1) % arrimg.length]} /> */}
      </motion.div>
      <motion.div className="namesdiv" key={counter} initial={{ x: '50vw', opacity: 0 }} animate={{ x: '30vw', opacity: 1 }} transition={{ duration: 3 }}>
        {/* <p> */}
        Captured by - {names[(counter + 1) % names.length]}
        {/* </p> */}
      </motion.div>
      <div className="moving " style={{ backgroundImage: `url(${arrimg[counter % arrimg.length]})`, zIndex: '0' }}></div>
    </div>
  );
}

export default UDGmain;

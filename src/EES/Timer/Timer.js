import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const target = 'April, 07, 2023';
  const getTime = () => {
    const time = Date.parse(target) - Date.now();
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(target), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="TimerMainDiv">
      <h1>TIME REMAINING</h1>
      <ul className="TimeDisplay">
        <li className="TimerItem">
          <span id="days">{days < 10 ? '0' + days : days}</span>days
        </li>
        <li className="TimerItem">
          <span id="hours">{hours < 10 ? '0' + hours : hours}</span>Hours
        </li>
        <li className="TimerItem">
          <span id="minutes">{minutes < 10 ? '0' + minutes : minutes}</span>Minutes
        </li>
        <li className="TimerItem">
          <span id="seconds">{seconds < 10 ? '0' + seconds : seconds}</span>Seconds
        </li>
      </ul>
    </div>
  );
}

export default Timer;

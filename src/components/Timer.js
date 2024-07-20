// src/components/Timer.js
import React, { useState, useEffect } from 'react';
import Plant from './Plant';
/* import useSound from 'use-sound'; */
/* import alarmSound from '../assets/alarm.mp3'; */

const Timer = ({ initialMinutes, initialSeconds = 0 }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);
  /* const [playAlarm] = useSound(alarmSound); */

  useEffect(() => {
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  }, [initialMinutes, initialSeconds]);

  useEffect(() => {
    let interval = null;
    let totalSeconds = initialMinutes * 60 + initialSeconds;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            /* playAlarm(); */
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
        let elapsedSeconds = totalSeconds - (minutes * 60 + seconds);
        setProgress((elapsedSeconds / totalSeconds) * 100);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, initialMinutes, initialSeconds, /* playAlarm */]);

  return (
    <div>
      <div>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <Plant progress={progress} />
    </div>
  );
};

export default Timer;

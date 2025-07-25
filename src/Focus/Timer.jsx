import React, { useState, useEffect } from "react";

const Timer = ({timeLeft, setTimeLeft,isRunning, setIsRunning}) => {

  useEffect(() => {
    let interval;

    if(isRunning){
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="idsf divTm"> <div className="timer-circle">
    <h1>{formatTime(timeLeft)}</h1>
  </div></div>
   
  );
};

export default Timer;


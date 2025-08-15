import React, { useEffect, useRef } from "react";

const Timer = ({timeLeft, setTimeLeft,isRunning}) => {

  //VVI
  const interval = useRef(null);

  useEffect(() => {

    if(isRunning){
      interval.current=setInterval(() => {
        setTimeLeft((prev)=>{
          if(prev <= 1){
            clearInterval(interval.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval.current);
  }, [isRunning]);

  

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    // return seconds;
  };

  return (
    <div className="idsf divTm"> <div className={`timer-circle ${isRunning ?  'runn' : ''}`}>
    <h1>{formatTime(timeLeft)}</h1>
  </div></div>
   
  );
};

export default Timer;


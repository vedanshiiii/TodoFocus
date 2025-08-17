import React, { useEffect, useState } from 'react';
import './Focus.css'
import '../Pages/Home.css'
import Timings from './Timings';
import Pauseplay from './Pauseplay';
import Timer from './Timer';


const Focus = ({focuson}) => {

  const [timeLeft, setTimeLeft] = useState(30*60); 
    const [isRunning, setIsRunning] = useState(false); 
  
    
    useEffect(()=>{
        setTimeLeft(30*60)
        setIsRunning(false)
    },[focuson])


 
  return (
    <div className={`focus ${focuson.id==-1 ? 'inact' :''}`}>
      <div className='idsf focuscont wd90'>
      <h2 className='h2t'>📝 Focus Timer
      </h2>
      <h3 className={`focusonn ${focuson.id==-1 ? '' : 'start'} `}>{focuson.id==-1 ? focuson.val : `Currently focusing on:  ${focuson.val}` }</h3>
    
      </div>
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} isRunning={isRunning}/>   
     <Pauseplay isRunning={isRunning} setIsRunning={setIsRunning} setTimeLeft={setTimeLeft}/>
     <Timings setTimeLeft={setTimeLeft}/>
   

    </div>
  )
}

export default React.memo(Focus)
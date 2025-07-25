import React, { use, useEffect, useState } from 'react';
import './Focus.css'
import '../Home.css'
import Timings from './Timings';
import Pauseplay from './Pauseplay';
import Timer from './Timer';


const Focus = ({task,setTask,focuson}) => {

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
      <h3 className='focusonn'>{focuson.id==-1 ? focuson.val : `Currently focusing on:  ${focuson.val}` }</h3>
    
      </div>
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} isRunning={isRunning} setIsRunning={setIsRunning}/>   
     <Pauseplay isRunning={isRunning} setIsRunning={setIsRunning} timeLeft={timeLeft} setTimeLeft={setTimeLeft}/>
     <Timings setTimeLeft={setTimeLeft}/>
   

    </div>
  )
}

export default React.memo(Focus)
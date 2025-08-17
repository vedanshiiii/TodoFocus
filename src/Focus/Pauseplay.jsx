import React from 'react';
import './Focus.css'
import '../Pages/Home.css'

const Pauseplay = ({isRunning,setIsRunning,setTimeLeft}) => {


    const pauseplay=(val)=>{
       if(val=='st' && !isRunning){
        setIsRunning(true)
       }
       else if(val=='ps' && isRunning){
        setIsRunning(false)
       }
       else if(val=='rst'){
        setTimeLeft(30*60)
        setIsRunning(false)
       }

     }
    

 
  return (
    <div className='active idsf'>
        <button className='statusacti st' onClick={()=>{pauseplay('st')}}> Start</button>
        <button className='statusacti ps' onClick={()=>{pauseplay('ps')}}>Pause</button>
        <button className='statusacti rst' onClick={()=>{pauseplay('rst')}}>Reset</button>
    </div>
  )
}

export default React.memo(Pauseplay)
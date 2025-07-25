import React, { useState } from 'react';
import './Focus.css'
import '../Home.css'

const Focus = ({task,setTask}) => {

    const [focuson,setFocuson] = useState('Select a task and start your focus session')

 
  return (
    <div className='todo'>
      <div className='idsf focuscont wd90'>
      <h2 className='h2t'>📝 Focus Timer
      </h2>
      <h3 className='focusonn'>{focuson}</h3>
    
      </div>
     
     
   

    </div>
  )
}

export default React.memo(Focus)
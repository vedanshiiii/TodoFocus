import React, { useState } from 'react'
import Todo from './List/Todo'
import Focus from './Focus/Focus'

export default function Home() {

  const [task,setTask] = useState([])
  const [focuson,setFocuson] = useState({id:-1,val:'Select a task and click "Focus" to start a productivity session'})
  
  return (
    <div className='mainb idsf'> 
    <Todo task={task} setTask={setTask} setFocuson={setFocuson}/>
    <Focus task={task} setTask={setTask} focuson={focuson}/>
    
    </div>
   
  )
}

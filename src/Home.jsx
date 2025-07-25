import React, { useState } from 'react'
import Todo from './List/Todo'
import Focus from './Focus/Focus'

export default function Home() {

  const [task,setTask] = useState([])
  
  return (
    <div className='mainb idsf'> 
    <Todo task={task} setTask={setTask}/>
    <Focus task={task} setTask={setTask}/>
    
    </div>
   
  )
}

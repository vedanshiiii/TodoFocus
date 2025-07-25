import React, { useEffect, useRef, useState } from 'react';
import Listings from './Listings';

const Todo = () => {

  const [task,setTask] = useState([])
  const inputref = useRef();

  const adding = ()=>{
    let val = inputref.current.value;
    if(val){
      setTask((prevstate)=>[...prevstate,val]);
      inputref.current.value='';
      inputref.current.focus()
    }
   
  }

  useEffect(()=>{
    inputref.current.focus()
  },[])

  return (
    <div className='todo'>
      <div className='idsf contin'>
      <h2 className='h2t'>📝 Your Tasks
      </h2>
      {task.length==0 ? 

      <div></div> : <div className='blT'>{task.length>1 ? ` ${task.length} Tasks `: ` ${task.length} Task` }</div>}
      </div>
     
      <div className='idsf contin'>  
        <input type='text' className='inptTd' placeholder='Add a new task...' ref={inputref} onKeyDown={(e)=>{
          if(e.key=='Enter'){
            adding()
          }

        }}></input>
        <button className='plus' onClick={adding}>+ Add</button>
       
      </div>

      {task.length==0 ? 
      <div className='notask'>
          
          <h2>No tasks yet
          </h2>
          <div style={{marginTop:'8px'}}>Add your first task to get started with focused productivity!</div>

        </div> : 
        <div className='tasks'>
          <Listings task={task}/>
      </div> }

    </div>
  )
}

export default React.memo(Todo)
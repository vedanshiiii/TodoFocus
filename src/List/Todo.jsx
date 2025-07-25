import React, { useEffect, useRef } from 'react';
import Listings from './Listings';

const Todo = ({task,setTask,setFocuson}) => {

  const inputref = useRef();

  const adding = ()=>{
    let val = inputref.current.value;
    if(val){
      setTask((prevstate)=>[...prevstate,{id:Date.now(),val:val,checked:false}]);
      inputref.current.value='';
      inputref.current.focus()
    }
  }

  const focuss=(id,val)=>{
    setFocuson({
      id:id,
      val:val
    })
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
          <Listings task={task} setTask={setTask} focuss={focuss}/>
      </div> }

    </div>
  )
}

export default React.memo(Todo)
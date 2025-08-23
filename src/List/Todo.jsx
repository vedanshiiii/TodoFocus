import React, { useEffect, useRef, useState } from 'react';
import Listings from './Listings';
import { useDebounce } from '../Helpers/Custom';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../Features/taskSlice';



const Todo = ({setFocuson,focuson}) => {

  const inputref = useRef();
  const [inp,setInp] = useState('');
  const debouncedInp = useDebounce(inp,1000);
  const tasks = useSelector(state=>state.tasks.tasks);
  const dispatch = useDispatch()

  const adding = ()=>{
    let val = inputref.current.value;
    if(val){
      dispatch(addTask(val));
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
    if(debouncedInp)
     console.log(debouncedInp)
  },[debouncedInp])



  useEffect(()=>{
    inputref.current.focus()
  },[])

  return (
    <div className='todo'>
      <div className='idsf contin'>
      <h2 className='h2t'>📝 Your Tasks
      </h2>
      {!tasks || tasks.length==0 ? 

      <div></div> : <div className='blT'>{tasks.length>1 ? ` ${tasks.length} Tasks `: ` ${tasks.length} Task` }</div>}
      </div>
     
      <div className='idsf contin'>  
        <input type='text' onChange={(e)=>{setInp(e.target.value)}} className='inptTd' placeholder='Add a new task...' ref={inputref} onKeyDown={(e)=>{
          if(e.key=='Enter'){
            adding()
          }

        }}></input>
        <button className='plus' onClick={adding}>+ Add</button>
       
      </div>

      {!tasks || tasks.length==0 ? 
      <div className='notask'>
          
          <h2>No tasks yet
          </h2>
          <div style={{marginTop:'8px'}}>Add your first task to get started with focused productivity!</div>

        </div> : 
        <div className='tasks'>
          <Listings focuss={focuss} focuson={focuson}/>
      </div> }

    </div>
  )
}

export default React.memo(Todo)
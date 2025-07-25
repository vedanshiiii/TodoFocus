import React from 'react'

function Listings({task,setTask}) {


    const checkUncheck=(id)=>{
        setTask((tasks)=>{
            return tasks.map((task)=> {
               return task.id!=id ? task : {...task, checked: !task.checked}
            }) 
          })   
    }


const deleteit=(id)=>{
    setTask((tasks)=>{
        return tasks.filter((task)=>{
           return  task.id!=id
        })
    })
}


  return (
    <>
    {/* <div>Listings</div> */}
    {task.map((t)=>{
       return  <div className={`idsf newtask ${t.checked ? 'done' : ''}`}>
        <input id={t.id} className='chkbx' type="checkbox" onChange={()=>{checkUncheck(t.id)}} checked={t.checked}/>
        <label className={`Tsk`}>{t.val}</label>
        <button className="status" disabled={t.checked ? true : false}> {t.checked ? 'Done' : 'Focus'}</button>
        <button className='delt' onClick={()=>{deleteit(t.id)}}>
            <i data-fa-i2svg=""><svg class="svg-inline--fa fa-trash-can" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-can" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"></path></svg></i>
        </button>
        </div>
    })}
    
    </>
    
 

  )
}

export default Listings




import React, { useContext, useState } from 'react'
import Todo from '../List/Todo'
import Focus from '../Focus/Focus'
import { ThemeContext } from '../Helpers/Context'

export default function Home() {

    const {theme} = useContext(ThemeContext);

  const [focuson,setFocuson] = useState({id:-1,val:'Select a task and click "Focus" to start a productivity session'})
  
  return (
    <div className={`mainb idsf ${theme==2 ? 'dark' : 'light'}`}> 
    <Todo focuson={focuson} setFocuson={setFocuson}/>
    <Focus focuson={focuson}/>
    
    </div>
   
  )
}

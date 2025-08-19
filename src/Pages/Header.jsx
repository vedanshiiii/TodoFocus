import React,{useContext} from 'react'
import { ThemeContext } from '../Helpers/Context';


function Header() {

  const {theme,setTheme} = useContext(ThemeContext)

  const chng=()=>{
     setTheme(prev=>{ return prev==1 ? 2 : 1});
  }



      
  return (
    <div className={`hdr idsf ${theme==2 ? 'dark' : 'light'}`}> <h1 className='wd90'> 🧠 Smart To-Do List
</h1>
<div className='idsf  switch'><div className={`lt ${theme==2 ? 'sel' : ''}`} onClick={chng}>Dark</div><div  onClick={chng} className={`drk ${theme==2 ? '' : 'sel'}`}>Light</div></div></div>
   
  )
}

export default Header
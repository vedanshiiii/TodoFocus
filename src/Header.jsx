import React,{useContext} from 'react'
import { ThemeContext } from './Context';


function Header() {

  const {theme,setTheme} = useContext(ThemeContext)

  const chng=()=>{
    try{
      sessionStorage.removeItem('theme');
      if(theme){
        sessionStorage.setItem('theme','dark')
      }
      else{
        sessionStorage.setItem('theme','light')
      }
     }catch{
      console.log('error');
     }
     setTheme(prev=>{ return prev==1 ? 0 : 1});
  }



      
  return (
    <div className={`hdr idsf ${theme ? 'light' : 'dark'}`}> <h1 className='wd90'> 🧠 Smart To-Do List
</h1>
<div className='idsf  switch'><div className={`drk ${theme ? '' : 'sel'}`} onClick={chng}>Dark</div><div  onClick={chng} className={`lt ${theme ? 'sel' : ''}`}>Light</div></div></div>
   
  )
}

export default Header
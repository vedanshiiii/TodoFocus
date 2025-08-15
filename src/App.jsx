import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'
import Home from './Home'
import Header from './Header'
import './Home.css'
import { ThemeContext } from './Context'

function App() {

const [theme,setTheme] = useState(1);

useEffect(()=>{
  let val;
    try{
      val=sessionStorage.getItem('theme');
      if(val=='dark'){
       setTheme(0)
      }
      else{
        setTheme(1);
      }
     }catch{
      console.log('error');
     }
},[])

  return (
    <>
      <div>
        <ThemeContext.Provider value={{theme,setTheme}}>
          <Header/>
          <Home />
        </ThemeContext.Provider>
        
      </div>
    </>
  )
}

export default App

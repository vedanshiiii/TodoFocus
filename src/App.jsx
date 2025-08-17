import React from 'react'
import './App.css'
import './Pages/Home.css'
import './Pages/Top.css'
import { ThemeContext } from './Helpers/Context'
import { useSessionStorage } from './Helpers/Custom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Notfound from './Pages/Notfound'
import NavBar from './Pages/NavBar'
import Intro from './Intro'
import ProtectHome from './Helpers/ProtectHome'
import Header from './Pages/Header'
import Home from './Pages/Home'


function App() {

const [theme,setTheme] = useSessionStorage('theme',1);

  const router = createBrowserRouter([
    {
      path: '/tasks',
      element:  
      <ThemeContext.Provider value={{theme,setTheme}}>
        <ProtectHome>
        <Header/>
        <NavBar/>
        <Home/>
        </ProtectHome>
    </ThemeContext.Provider>
    },
    {
      path: '/',
      element:  <ThemeContext.Provider value={{theme,setTheme}}>
      <Header/>
      <NavBar/>
      <Intro/>
    </ThemeContext.Provider>
    },
    {
      path: '*',
      element:  <ThemeContext.Provider value={{theme,setTheme}}>
      <Header/>
      <NavBar/>
      <Notfound/>

    </ThemeContext.Provider>
    },

  ])


  return (
    <>
      <div>
        <RouterProvider router={router}/>
      
      </div>
    </>
  )
}

export default App

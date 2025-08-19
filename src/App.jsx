import React, { lazy, Suspense } from 'react'
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
// import Home from './Pages/Home'
// import Login from './Pages/Login'
const Home = lazy(()=>import('./Pages/Home'));
const Login = lazy(()=>import('./Pages/Login'));

//lazy loading


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
      path: '/login',
      element:  
      <ThemeContext.Provider value={{theme,setTheme}}>
        <Header/>
        <NavBar/>
        <Login/>
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
        <Suspense fallback={<div> LOADINGGGGGG </div>}>
        <RouterProvider router={router}/>
        </Suspense>
        
      
      </div>
    </>
  )
}

export default App

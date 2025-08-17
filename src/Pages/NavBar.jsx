import React, { useContext } from 'react'
import { ThemeContext } from '../Helpers/Context';
import { NavLink } from 'react-router-dom';
import './Home.css';
import '../App.css'

function NavBar() {

    const { theme } = useContext(ThemeContext)


    return (
        <div className={`hdr idsf navv ${theme ? 'light' : 'dark'}`}>

            <div className='idsf '>

                <NavLink
                    to="/tasks"
                    className={({ isActive }) => "navss " + (isActive ? "Navactive" : "")}
                >
                    ToDos
                </NavLink>

                <NavLink
                    to="/progress"
                    className={({ isActive }) => "navss " + (isActive ? "Navactive" : "")}
                >
                    Progress
                </NavLink>

                <NavLink
                    to="/login"
                    className={({ isActive }) => "navss " + (isActive ? "Navactive" : "")}
                >
                    Login
                </NavLink>
                <NavLink
                    to="/"
                    className={({ isActive }) => "navss " + (isActive ? "Navactive" : "")}
                >
                    Home
                </NavLink>



            </div></div>

    )
}

export default NavBar
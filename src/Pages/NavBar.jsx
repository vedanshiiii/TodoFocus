import React, { useContext } from 'react'
import { ThemeContext } from '../Helpers/Context';
import { NavLink } from 'react-router-dom';
import './Home.css';
import '../App.css'

function NavBar() {

    const { theme } = useContext(ThemeContext)


    return (
        <div className={`hdr idsf navv ${theme==2 ? 'dark' : 'light'}`}>

            <div className='idsf '>

                <NavLink
                    to="/todo-focus/tasks"
                    className={({ isActive }) => "navss " + (isActive ? "Navactive" : "")}
                >
                    ToDos
                </NavLink>

                <NavLink
                    to="/todo-focus/progress"
                    className={({ isActive }) => "navss " + (isActive ? "Navactive" : "")}
                >
                    Progress
                </NavLink>

                <NavLink
                    to="/todo-focus/login"
                    className={({ isActive }) => "navss " + (isActive ? "Navactive" : "")}
                >
                    Account
                </NavLink>
                <NavLink
                    to="/todo-focus/"
                    className={({ isActive }) => "navss " + (isActive ? "Navactive" : "")}
                >
                    Home
                </NavLink>



            </div></div>

    )
}

export default NavBar
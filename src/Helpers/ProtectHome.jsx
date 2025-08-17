import React, { useContext } from 'react'
import { ThemeContext } from './Context'
import { Navigate } from 'react-router-dom';
// import Home from './Home';

function ProtectHome({ children }) {

    const {theme} = useContext(ThemeContext);

    return (
        <> 
        {
            theme == 0 ? <Navigate to='/login' replace></Navigate> : 
            <div>{children}</div>
        }
        </>



    )
}

export default ProtectHome
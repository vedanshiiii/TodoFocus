import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import Home from './Home';

function ProtectHome({ children }) {

     const token = useSelector((state)=>state.login.token)

    return (
        <> 
        {
            !token ? <Navigate to='/login/redirect' replace></Navigate> : 
            <div>{children}</div>
        }
        </>



    )
}

export default ProtectHome
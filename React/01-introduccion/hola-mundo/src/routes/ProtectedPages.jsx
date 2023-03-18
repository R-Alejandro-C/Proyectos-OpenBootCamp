import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const ProtectedPages = ({isAllow, children, redirectTo="/"}) => {
    if (!isAllow) {
        return <Navigate to={redirectTo}></Navigate>
    }
    return  children? (children) : (<Outlet/>)
    
}

export default ProtectedPages;

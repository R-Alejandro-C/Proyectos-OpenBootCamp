import React from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik';
import { useNavigate } from 'react-router-dom'; 

import Button from '@mui/material/Button';

const LoginPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1 style={{textAlign:"center"}}>LoginPage</h1>
            <LoginFormik></LoginFormik>
            <h2 style={{textAlign:"center"}}> ¿No tienes cuenta? </h2>
                   <Button variant="outlined" onClick={()=>navigate("/register")}>registrate</Button>
        </div>
    );
}

export default LoginPage;

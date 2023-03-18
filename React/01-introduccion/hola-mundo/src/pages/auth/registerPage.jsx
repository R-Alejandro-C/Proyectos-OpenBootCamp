import React from 'react';
import RegisterFormik from "../../components/pure/forms/registerFormik"
import { useNavigate } from 'react-router-dom'; 

import Button from '@mui/material/Button';
const RegisterPage = () => {

    const navigate = useNavigate()
    return (
        <div>
            <h1>RegisterPage</h1>
            <div>
            <RegisterFormik></RegisterFormik>
        </div>
        <div style={{justifyContent:"center"}}>
        <h2 style={{textAlign:"center"}}> ¿Tienes cuenta? </h2>
                   <Button variant="outlined" onClick={()=>navigate("/login")}>Logueate</Button>
        </div>
        </div>
    );
}

export default RegisterPage;

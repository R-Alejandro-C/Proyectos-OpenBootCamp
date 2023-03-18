import React from 'react';
import Button from '@mui/material/Button';
import  Copyright  from '../../components/pure/forms/Copyright';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Button variant="outlined" onClick={()=>{navigate("/login")}}>Logout</Button>
            <Copyright></Copyright>
        </div>
    );
}

export default DashBoard;

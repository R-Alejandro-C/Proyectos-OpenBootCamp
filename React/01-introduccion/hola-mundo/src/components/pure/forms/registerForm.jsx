import React, {useState} from 'react';

const LoginForm = () => {
    const DatosIniciales=[{
        user:"",
        nombre:"",
        mail:"",
        password:""
        }
    ]

    const [Datos, setDatos] = useState(DatosIniciales);
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;

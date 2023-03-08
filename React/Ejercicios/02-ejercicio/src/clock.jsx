import React, {useEffect, useState} from 'react';


const Clock = () => {
    const userI = {
        nombre: "Rodrigo",
        apellido: "Colcas",
        edad:0,
        fecha: new Date()
    }
    const [user, setUser] = useState(userI);



    useEffect(() => {
        const interval = setInterval(()=>{
            actualiceUser();
        },1000)
        return () => {
            clearInterval(interval)
        };
    });

    const actualiceUser = ()=>{
        return setUser(
            {
                nombre: user.nombre,
                apellido: user.apellido,
                edad: user.edad+1,
                fecha: new Date()
            }
        )
    }






    return (
        <div>
            <h1>Hora actual : {user.fecha.toLocaleTimeString()}</h1>
            <b/>
            <h1>{user.nombre} {user.apellido }</h1>
            <h2>Edad: {user.edad}</h2>
        </div>
    );
};




export default Clock;

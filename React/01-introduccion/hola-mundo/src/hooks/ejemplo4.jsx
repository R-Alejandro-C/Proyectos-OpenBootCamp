import React from 'react';


const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>
                Nombre = {props.nombre}
            </h1>
            
                {props.children}
            
        </div>
    );
};




export default Ejemplo4;

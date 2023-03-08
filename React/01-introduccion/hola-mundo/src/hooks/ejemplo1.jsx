import React, {useState} from 'react';

const nombreForm = document.querySelector("#Nombre");
const Ejemplo1 = () => {

    const valorI = 0;
    const personaI = {
        nombre: "RODRIGO",
        mail: "RODRIGO.11@gmail.com"
    }


    const [contador, setcontador] = useState(valorI);
    const [persona, setpersona] = useState(personaI);

    function incrementarContador(){
        setcontador (contador+1)
    }

    function actualizarPersona(nombre){
        setpersona(
            {
                nombre: nombreForm,
                mail: "Alejandro.11@gmail.com"
            })
    }



    return (
        <div>
            <h1>contador= {contador}</h1>
            <button onClick={incrementarContador}>Sumar 1</button>
            <h1>persona</h1>
            <h2>Nombre = {persona.nombre}</h2>
            <h2>Mail = {persona.mail}</h2>
            <form>
                
               
            <label> Nombre</label>
            <input name="Nombre" id="Nombre" type="text"/>
            <label> Mail</label>
            <input name="Mail" id="Mail" type="text"/>
            </form>
            <button onClick={actualizarPersona}>Cambiar datos</button>
        </div>
    );
}

export default Ejemplo1;

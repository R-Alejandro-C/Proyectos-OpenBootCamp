import React, {useState, useRef, useEffect}from 'react';

const Ejemplo2 = () => {
    const personaI = {
        nombre: "RODRIGO",
        mail: "RODRIGO.11@gmail.com"
    }
    const [contador1, setcontador1] =useState(0);
    const [contador2, setcontador2] =useState(0);
    const [persona, setpersona] = useState(personaI);
    const mirefNombre = useRef()
    const mirefMail = useRef()
    const miref = useRef()
    function incrementarContador1(){
        setcontador1(contador1+1)

    }

    
    function incrementarContador2(){
setcontador2(contador2+1)
        
    }

    
    function actualizarPersona(nombre){
        setpersona(
            {
                nombre: mirefNombre.current.value,
                mail:   mirefMail.current.value,
            })
    }
//? Caso 1, sin condiciones
/**
    useEffect(() => {
      console.log("Cambio de componente");
      console.log("Elementeo del DOM");
      console.log(miref);
    });
 */
//? caso 2, cuando solo se cambia el contador 1
/**
useEffect(() => {
    console.log("Cambio de componente1");
    console.log("Elementeo del DOM1");
    console.log(miref);
  },[contador1]);
 */
//? caso 2, cuando solo se cambia el contador 2
useEffect(() => {
    console.log("Cambio de componente1y2");
    console.log("Elementeo del DOM1y2");
    console.log(miref);
  },[contador1, contador2]);
    return (
        <div>
            <h1>contador1 = {contador1}</h1>
            <h1>contador2= {contador2}</h1>
            <h2>Nombre = {persona.nombre}</h2>
            <h2>Mail = {persona.mail}</h2>
            <input placeholder= "Nombre" ref={mirefNombre}/>
            <input placeholder= "Email" ref={mirefMail}/>
        <div>
            <button onClick={incrementarContador1}>incrementar Contador 1</button>
            <button onClick={incrementarContador2}>incrementar Contador 2</button>
            <button onClick={actualizarPersona}>Cambiar datos</button>
        </div>
        </div>
    );
}

export default Ejemplo2;

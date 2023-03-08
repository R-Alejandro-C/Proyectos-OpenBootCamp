import React,{useState,useContext} from 'react';

const miContexto = React.createContext(null)

const Componente1 = () => {


    const estado = useContext(miContexto)
    return (
        <div>
            <h1>
                El token es: {estado.token}
            </h1>
            <h2>
                <Componente2></Componente2>
            </h2>
        </div>
    );
}

const Componente2 = () => {


    const estado = useContext(miContexto)
    return (
        <div>
            <h2>
                La sesion es: {estado.sesion}
            </h2>
        </div>
    );
}


const MiComponenteContexto = () => {

    const estadoI={
        token:"123",
        sesion:1

    }

    const [sesion, setsesion] = useState(estadoI);
    function actualizarSesion(){
        setsesion({
            token:"312",
            sesion: sesion.sesion+1
        })
    }
    return (
        <miContexto.Provider value={sesion}>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}> actualizar Sesion</button>
        </miContexto.Provider>
    );
}

export default MiComponenteContexto;

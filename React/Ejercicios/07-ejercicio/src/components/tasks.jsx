import React, { useReducer, useContext, useRef } from 'react'

const CREAR = "CREAR"
const Eliminar = "ELIMINAR"
const Filtrar = "FILTRAR"
const Completar = "Completar"


const myContext = React.createContext(null)


const NombreC = () => {
    const state = useContext(myContext);
    return (
        <thead>
        <tr>
            <th scope='col'>Nombre</th>
            <th scope='col'>Descripcion</th>
            <th scope='col'>completado</th>
        </tr>
    </thead>
    )
}
const Tasks = () => {

    const initialState = []

    const Nombre = useRef()

    const Descripcion = useRef()

    const filtro = useRef()

    const reducer = (state, action) => {
        switch (action.type) {
            case CREAR:
                return [
                    ...state,
                    {
                        Nombre: Nombre.current.value,
                        Descripcion: Descripcion.current.value,
                        completado: false,
                        id:0
                    },
                ]
            case Eliminar:
                return state.filter((state, index) => index !== action.index)

            case Completar:
                return state.filter((state, index) => state.completado = true)

            case Filtrar:
                return state.filter((state) => !state.completado)

            default:
                return state
        }
    }


    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <myContext.Provider value={state}>
        <div>
            <NombreC></NombreC>
            <tbody>


                {state.map((state, index) => {

                    return (
                        <tr key={index}>

                            <th scope="row">
                            <span className="ms-2">{state.Nombre}</span>
                            </th>
                            <td className="aling-middle">
                                <span className="ms-2">{state.Descripcion} </span>
                            </td>
                            <td className="aling-middle">
                                <span className="ms-2">{state.id = index} </span>
                            </td>
                            <td>
                                {state.completado ? (<p onClick={() => dispatch({ type: Completar, index: index })}>terminado</p>) : (<p onClick={() => dispatch({ type: Completar, index: index })}>Por terminar</p>)}

                            </td>
                            <td>
                                <button onClick={() => dispatch({ type: Eliminar, index: index })}>Eliminar</button>
                            </td>
                        </tr>
                    )
                })}




            </tbody>

            <input type='text' id='Nombre' ref={Nombre} placeholder='Nombre' />

            <input type='text' id='Descripcion' ref={Descripcion} placeholder='Descripcion' />
            <button onClick={() => dispatch({ type: CREAR })}>CREAR</button>


            <button onClick={() => dispatch({ type: Filtrar })}>Filtrar Por No terminados</button>


        </div>
        </myContext.Provider>
    )
}


export default Tasks;


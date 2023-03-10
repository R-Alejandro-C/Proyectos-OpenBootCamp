import { tareas } from "../../models/task.class";
import "../../styles/task.scss"
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NIVEL } from "../../models/levels.enum";

const Task = ({ tareas, completado, eliminar }) => {

    useEffect(() => {
        console.log("Creando tareas");
        return () => {
            console.log(`tarea: ${tareas.nombre}`);
        };
    }, [tareas]);

    function tareaNivel(){
        switch (tareas.nivel) {
            case NIVEL.normal: 
                    return(<span className=" mb-0 badge bg-primary">{tareas.nivel}</span>)
                break;
            case NIVEL.bloqueante:
                return(<span className=" mb-0 badge bg-warning">{tareas.nivel}</span>)
                break;
            case NIVEL.urgente:
                return(<span className=" mb-0 badge bg-danger">{tareas.nivel}</span>)
                 break;                
            default:
                break;
        }
    }

    function iconoTarea() {
        if (tareas.completado) {
            return   <img  className="tareas-accion" onClick={()=>completado(tareas)} src="https://images.vexels.com/media/users/3/157932/isolated/lists/951a617272553f49e75548e212ed947f-curved-check-mark-icon.png" alt="logo" style={{width:"30px"}}/>
        } else{
            return  <img className="tareas-accion" onClick={()=>completado(tareas)} src="http://fundacionacorde.com/images/X_roja.png"  alt="logo" style={{width:"30px"}}/>
        }
    }
    return (
            <tr className="fw-normal">
                <th scope="row">
                    <span className="ms-2">{tareas.nombre} </span>
                </th>
                <td className="aling-middle">
                    <span className="ms-2">{tareas.descripcion} </span>
                </td>
                <td className="aling-middle">
                    {tareaNivel()}
                </td>
                <td className="aling-middle">
                   {iconoTarea()}
                </td>
                <img onClick={()=>eliminar(tareas)} className="tareas-accion" src="https://cdn-icons-png.flaticon.com/512/18/18297.png"  alt="logo" style={{width:"50px"}}/>
            </tr>
    );
};


Task.propTypes = {
    tareas: PropTypes.instanceOf(tareas).isRequired,
    completado: PropTypes.func.isRequired,
    eliminar: PropTypes.func.isRequired
};


export default Task;

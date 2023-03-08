import { tareas } from "../../models/task.class";
import "../../styles/task.scss"
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';


const Task = ({tareas}) => {

        useEffect(() => {
            console.log("Creando tareas");
            return () => {
                console.log(`tarea: ${tareas.nombre}`);
            };
        }, [tareas]);
    return (
        <div>
            <h3 className="tareas-nombre">
               Nombre: {tareas.nombre}
            </h3>
            <h4>
                Descripcion: {tareas.descripcion}
            </h4>
            <h4>
                Nivel: { tareas.nivel}
            </h4>
            <h5>
                Esta tarea esta: {tareas.completado?"Completado":"No completado"}
            </h5>
        </div>
    );
};


Task.propTypes = {
tareas: PropTypes.instanceOf(tareas)
};


export default Task;

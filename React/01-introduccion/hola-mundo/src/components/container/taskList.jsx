import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { tareas } from '../../models/task.class';
import { NIVEL } from '../../models/levels.enum';
import Task from '../pure/task';
import "../../styles/task.scss"

const TaskList = () => {

    const tareaDefecto = new tareas("Prueba", "PruebaD",false,NIVEL.normal);

    const [tarea, settarea] = useState(tareaDefecto);

    const [cargando, setcargando] = useState(true);

        useEffect(() => {
            console.log("Estado de tareas");
            setcargando(false)
            return () => {
                console.log("Componente TaskList a desaparecido");
            };
        }, [tareas]);

    const cambiarCompletado = (id) =>{
        console.log("Cambiar estado de tarea");
    }
    /**
    const [completado, setcomplit] = useState(tareaDefecto.completado);

    const completar = ()=>{
        tareaDefecto.completado=true
        setcomplit(completado + tareaDefecto.completado)
    } 
*/

    return (
        <div>
            <div>
                <h1>Tus tareas: </h1> 
            </div>
            <Task tareas={tareaDefecto}></Task>
            
        </div>
    );
};


TaskList.propTypes = {

};


export default TaskList;

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { tareas } from '../../models/task.class';
import { NIVEL } from '../../models/levels.enum';
import Task from '../pure/task';


const TaskList = () => {

    const tareaDefecto = new tareas("Prueba", "PruebaD",false,NIVEL.normal);
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

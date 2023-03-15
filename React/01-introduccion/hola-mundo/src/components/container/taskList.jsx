import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { tareas } from '../../models/task.class';
import { NIVEL } from '../../models/levels.enum';
import Task from '../pure/task';
import TaskForm from '../pure/forms/taskForm';
import AddTasksFormik from '../pure/forms/addTasksFormik';

const TaskList = () => {

    const tareaDefecto = new tareas("Prueba", "PruebaD", false, NIVEL.normal);
    const tareaDefecto1 = new tareas("Prueba1", "PruebaD1", true, NIVEL.bloqueante);
    const tareaDefecto2 = new tareas("Prueba2", "PruebaD2", false, NIVEL.urgente);

    const [tarea, settarea] = useState([tareaDefecto, tareaDefecto1, tareaDefecto2]);

    const [cargando, setcargando] = useState(true);

    useEffect(() => {
        console.log("Estado de tareas");
        setTimeout(() => {
            
        setcargando(false)
        }, 3000);
        return () => {
            console.log("Componente TaskList a desaparecido");
        };
    }, [tareas]);

    const cambiarCompletado = (tare) => {
        console.log("Cambiar estado de tarea", tare);
        const index = tarea.indexOf(tare)
        const tempTareas =[...tarea];
        tempTareas[index].completado = !tempTareas[index].completado
        settarea(tempTareas)
    }
    /**
    const [completado, setcomplit] = useState(tareaDefecto.completado);

    const completar = ()=>{
        tareaDefecto.completado=true
        setcomplit(completado + tareaDefecto.completado)
    } 
*/
function eliminarTarea(tare){
    console.log("Cambiar estado de tarea", tare);
    const index = tarea.indexOf(tare)
    const tempTareas =[...tarea];
    tempTareas.splice(index,1);
    settarea(tempTareas)
}

function agregarTarea(tare){
    console.log("Cambiar estado de tarea", tare);
    const index = tarea.indexOf(tare)
    const tempTareas =[...tarea];
    tempTareas.push(tare)
    settarea(tempTareas)
}

function addTarea(tare) {
    settarea((oldValue)=>[...oldValue, tare])
}

const Tabla = ()=>{
    return(
        <table className='table'>
        <thead>
            <tr>
                <th scope='col'>Titulo</th>
                <th scope='col'>Descripcion</th>
                <th scope='col'>Prioridad</th>
                <th scope='col'>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {tarea.map((tarea, index) => {
                return(
                <Task key={index} tareas={tarea} completado={cambiarCompletado} eliminar={eliminarTarea}></Task>
                )
            })}

        </tbody>
    </table>
    )
}
let tablaComponent;

if (tarea.length>0) {
     tablaComponent = <Tabla></Tabla>
} else {
     tablaComponent = (
        <div>
            <h3>
                Agrega tus tareas
            </h3>
            <h4> AHORA</h4>
        </div>
    )
}
    
    return (
        <div >
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3 text-primary'>
                        <h5>
                            Tus tareas:
                        </h5>
                    </div>
                    <div class="card-body" data-mdb-perfect-scrolbar="true" style={{ position: "relative", height: "400px", color: "black" }}>
                       
                       {cargando? (<h1>Cargando Tabla....</h1>):  tablaComponent}
                      
                    </div>
                </div>
            </div>
            {/**
                                 //?   <TaskForm add={agregarTarea} length={tarea.length}></TaskForm> */}
                                 <AddTasksFormik addTarea={agregarTarea}></AddTasksFormik>
        </div>
    );
};


TaskList.propTypes = {

};


export default TaskList;

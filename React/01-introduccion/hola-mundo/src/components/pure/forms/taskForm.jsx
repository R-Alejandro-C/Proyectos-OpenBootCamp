import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { NIVEL } from "../../../models/levels.enum";
import { tareas } from '../../../models/task.class';

const TaskForm = ({add, length}) => {

    const nameRef= useRef("");
    const descriptionRef= useRef("");
    const levelref= useRef(NIVEL.normal)

    function addTarea(e){
    e.preventDefault();
    const newTarea = new tareas(
        nameRef.current.value,
        descriptionRef.current.value,
        false,
        levelref.current.value
    )
    add(newTarea)
    }
    return (
        <form onSubmit={addTarea} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>

            <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Titulo'/>
            
            <input ref={descriptionRef} id='inputName' type='text' className='form-control form-control-lg' required placeholder='Descripcion'/>
            <select ref={levelref} defaultValue={NIVEL.normal} id='selectLevel' className='form-control form-contro-lg'>
            <option value={NIVEL.normal}>
                Normal
            </option>
            <option value={NIVEL.bloqueante}>
                bloqueante
            </option>
            <option value={NIVEL.urgente}>
                urgente
            </option>
            </select>
            {length<0?   <button type='submit' className='btn btn-primary btn-lg m-2'>Crear tarea</button>:  <button type='submit' className='btn btn-primary btn-lg m-2'>añadir tarea</button>}
            </div>
           
          
        </form>
    );
};


TaskForm.propTypes = {
add: PropTypes.func.isRequired,
length: PropTypes.func.isRequired
};


export default TaskForm;

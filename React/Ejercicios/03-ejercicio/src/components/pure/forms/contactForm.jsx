import React,{ useRef } from 'react';
import PropTypes from 'prop-types';
import { contacto } from '../../../models/contact.class';


const ContactForm = ({agregar}) => {
    
const nameRef = useRef("");
const lastRef = useRef("");
const mailRef = useRef("");

function agregarContactos(e){
    e.preventDefault();
    const newContacto = new contacto(nameRef.current.value,lastRef.current.value,mailRef.current.value,false)
    agregar(newContacto)
}
    return (
        <form onSubmit={agregarContactos} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='d-flex'>
            <input type='text' id='inputName' className='form-control form-control-lg m-2' placeholder='Nombre' ref={nameRef}/>
            <input type='text' id='inputLast'className='form-control form-control-lg m-2' placeholder='Apellido' ref={lastRef}/>
            <input type='text' id='inputMail'className='form-control form-control-lg m-2' placeholder='Email' ref={mailRef}/>
            </div>
            <div>
            <button type='submit' className='btn btn-primary'>Agregar contacto</button>
            </div>
        </form>
    );
};


ContactForm.propTypes = {
agregar: PropTypes.func.isRequired
};


export default ContactForm;

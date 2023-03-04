import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { contacto } from '../../models/contact.class';

const Contact = ({contacto,estado}) => {

    const [conexion, setconexion] = useState(estado);
    const cambiarEstado = ()=>{
        setconexion(!conexion)
    }

    return (
        <div>
            <h3>
                Nombre: {contacto.nombre}
            </h3>
            <h3>
                Apellido: {contacto.apellido}
            </h3>
            <h3>
                Email: {contacto.email}
            </h3>
            <h3>
                Conexion: {conexion===false ? "Conectado":"Desconectado"}
            </h3>
           
            <button onClick={cambiarEstado}>Cambiar estado</button>
        </div>
    );
};


Contact.propTypes = {
    contacto: PropTypes.instanceOf(contacto),
    estado: PropTypes.bool,
};


export default Contact;

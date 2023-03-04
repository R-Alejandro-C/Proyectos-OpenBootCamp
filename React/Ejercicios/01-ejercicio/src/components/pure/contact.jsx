import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { contacto } from '../../models/contact.class';

const Contact = ({contacto}) => {


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
                Conexion: {contacto.conectado?"Contacto En Línea":"Contacto No Disponible"}
            </h3>
           
        </div>
    );
};


Contact.propTypes = {
    contacto: PropTypes.instanceOf(contacto)
};


export default Contact;

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Contact from '../pure/contact';
import { contacto } from '../../models/contact.class';

const ContactList = () => {

    const contactDefect = new contacto("Rodrigo","Colcas","RC@gmail.com",false)

    return (
        <div>
            <h1>
                Contactos
            </h1>
            <Contact contacto={contactDefect}></Contact>
        </div>
    );
};


ContactList.propTypes = {

};


export default ContactList;

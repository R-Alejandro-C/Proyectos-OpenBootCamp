import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Contact from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';
import { contacto } from '../../models/contact.class';
import { NIVEL } from '../../models/level.enum';

const ContactList = () => {

    const contacto1 = new contacto("Rodrigo", "Colcas", "Kailer3000.11", false, NIVEL.amistad)
    const contacto2 = new contacto("Rodrigo1", "Colcas1", "Kailer3000", true, NIVEL.falmilia)
    const contacto3 = new contacto("Rodrigo2", "Colcas2", "Kailer.11", false, NIVEL.amistad)
    const contacto4 = new contacto("Rodrigo3", "Colcas3", "K3000.11", true, NIVEL.trabajo)

    const [contactos, setcontactos] = useState([contacto1,contacto2,contacto3,contacto4]);


    function cambiarConexion(concatc){
        const index = contactos.indexOf(concatc);
        const contactoTemp = [...contactos]
        contactoTemp[index].conectado = !contactoTemp[index].conectado
        setcontactos(contactoTemp)
    }
    function eliminarContacto(concatc){
        const index = contactos.indexOf(concatc);
        const contactoTemp = [...contactos]
        contactoTemp.splice(index,1)
        setcontactos(contactoTemp)
    }
    function agregarContacto(concatc){
        const contactoTemp = [...contactos]
        contactoTemp.push(concatc)
        setcontactos(contactoTemp)
    }
    return (
        <div>
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Nombrse</th>
                            <th scope="col">apellido</th>
                            <th scope="col">Email</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Nivel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactos.map((contacto,index)=>{
                return(   <Contact key={index} contactos={contacto} estado={cambiarConexion} eliminar={eliminarContacto}></Contact>)
                        })}
                  
                    </tbody>
                </table>
                
            </div>
            <ContactForm agregar={agregarContacto}></ContactForm>
        </div>
    );
};


ContactList.propTypes = {

};


export default ContactList;

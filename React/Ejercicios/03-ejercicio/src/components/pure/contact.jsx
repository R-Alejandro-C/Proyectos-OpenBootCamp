import React from 'react';
import PropTypes from 'prop-types';
import { contacto } from '../../models/contact.class';
import { NIVEL } from '../../models/level.enum';
const Contact = ({contactos, estado, eliminar}) => {

    function estadoConexion() {
        if (contactos.conectado) {
            return   <img  onClick={()=>estado(contactos)} className="tareas-accion"  src="https://emojitool.com/img/apple/ios-15.4/large-green-circle-3377.png" alt="logo" style={{width:"20px", cursor:"pint"}}/>
        } else{
            return  <img onClick={()=>estado(contactos)} className="tareas-accion" src="https://cdn.pixabay.com/photo/2016/07/05/15/27/icon-1498825_1280.png"  alt="logo" style={{width:"20px"}}/>
        }
    }
    function contactosNivel(){
        switch (contactos.nivel) {
            case NIVEL.amistad: 
                    return(<span className=" mb-0 badge bg-primary">{contactos.nivel}</span>)
                break;
            case NIVEL.falmilia:
                return(<span className=" mb-0 badge bg-warning">{contactos.nivel}</span>)
                break;
            case NIVEL.trabajo:
                return(<span className=" mb-0 badge bg-danger">{contactos.nivel}</span>)
                 break;                
            default:
                break;
        }
    }


    return (

        <tr className="fw-normal">
      <th scope="row">{contactos.nombre}</th>
      <td className="aling-middle">{contactos.apellido}</td>
      <td className="aling-middle">{contactos.email}</td>
      <td className="aling-middle">{estadoConexion()}</td>
      <td className="aling-middle">{contactosNivel()}</td>
      <img onClick={()=>eliminar(contactos)} className="tareas-accion" src="https://cdn-icons-png.flaticon.com/512/18/18297.png"  alt="logo" style={{width:"40px"}}/>
        </tr>
        
    );
};


Contact.propTypes = {
contactos: PropTypes.instanceOf(contacto).isRequired,
estado:PropTypes.func,
eliminar:  PropTypes.func.isRequired,
};


export default Contact;

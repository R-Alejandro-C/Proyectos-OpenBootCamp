import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Contact from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';
import { contacto } from '../../models/contact.class';
import { NIVEL } from '../../models/level.enum';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Formik1 from "../pure/forms/formik" 
const ContactListFormik = () => {

    function cambiarConexion(concatc){
        const index = contactos.indexOf(concatc);
        const contactoTemp = [...contactos]
        contactoTemp[index].conectado = !contactoTemp[index].conectado
        setcontactos(contactoTemp)
    }

    const [contactos, setcontactos] = useState([]);


    function eliminarContacto(index) {
        setcontactos((oldValue) => oldValue.filter((_, i) => i !== index))
    }
    function agregarContacto(concatc) {
        
        setcontactos( (oldValue) => [...oldValue, concatc])
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
                    {   contactos.length<0 ? (
        <p>Task List is Empty</p>
      ) : (contactos.map((contacto, index) => { return(<Contact eliminar={()=>eliminarContacto(index)} contactos={contacto} estado={cambiarConexion}></Contact>)}
         
        ))}
                  
                    </tbody>
                </table>
                
            </div>
    { /*       <Formik
                initialValues={initialValues}
                validationSchema={ContactSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        agregarContacto(values);
                        actions.resetForm({});
                        actions.setSubmitting(false);
                    }, 500);
                }}
            >
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handBluer }) => (
                    <Form>
                       <div className='d-flex'>
                        <Field id="nombre" type="nombre" name="nombre" placeholder="nombre" className='form-control  m-2'/>
                        {
                            errors.nombre && touched.nombre && (

                                <ErrorMessage name="nombre" component={"p"}></ErrorMessage>
                            )
                        }
                     
                        <Field id="apellido" type="apellido" name="apellido" placeholder="apellido" className='form-control  m-2'/>
                        {
                            errors.apellido && touched.apellido && (

                                <ErrorMessage name="apellido" component={"p"}></ErrorMessage>
                            )
                        }      
                                  
                        <Field id="email" type="email" name="email" placeholder="email" className='form-control  m-2'/>
                        {
                            errors.email && touched.email && (

                                <ErrorMessage name="email" component={"div"}></ErrorMessage>
                            )
                        }
                        </div>
                        <Field as="select" name="level" className='form-control form-control-lg m-2'>
                            <option value={NIVEL.amistad}>Amistad</option>
                            <option value={NIVEL.falmilia}>Falmilia</option>
                            <option value={NIVEL.trabajo}>Trabajo</option>
                        </Field>
                        
                        <button type="submit" className='btn btn-primary'>
                            Agregar Contacto
                        </button>
                                              
                    </Form>
                )}
            </Formik>
        */ }
        <Formik1 agregar={agregarContacto}></Formik1>
        </div>
    );
};


ContactListFormik.propTypes = {

};


export default ContactListFormik;

/*
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Contact from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';
import { contacto } from '../../models/contact.class';
import { NIVEL } from '../../models/level.enum';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useList from '../../hooks/useList';
const ContactListFormik = () => {

    const defaultContact={
        nombre: "Ro",
        apellido: "f",
        email: "sef@gmail.com",
        conectado: false,
        nivel: NIVEL.amistad,
    }

    

    const contactos = useList([defaultContact]);
  



    const initialValues = {
        nombre: "",
        apellido: "",
        email: "",
        conectado: false,
        nivel: NIVEL.amistad,
    }

    const ContactSchema = Yup.object().shape(
        {
            nombre: Yup.string().required("Nombre obligatorio"),
            apellido: Yup.string().required("Nombre obligatorio"),
            email: Yup.string().email("Formato de email incorrecto").required("Correo obligatio")
        }
    )
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={ContactSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        contactos.push(values);
                        actions.resetForm({});
                        actions.setSubmitting(false);
                    }, 500);
                }}
            >
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handBluer }) => (
                    <Form>
                        <label htmlFor='nombre'>nombre</label>
                        <Field id="nombre" type="nombre" name="nombre" placeholder="nombre" />
                        {
                            errors.nombre && touched.nombre && (

                                <ErrorMessage name="nombre" component={"p"}></ErrorMessage>
                            )
                        }
                        <label htmlFor='apellido'>Apellido</label>
                        <Field id="apellido" type="apellido" name="apellido" placeholder="apellido" />
                        {
                            errors.apellido && touched.apellido && (

                                <ErrorMessage name="apellido" component={"p"}></ErrorMessage>
                            )
                        }
                                     <label htmlFor='email'>email</label>
                        <Field id="email" type="email" name="email" placeholder="email" />
                        {
                            errors.nombre && touched.email && (

                                <ErrorMessage name="email" component={"p"}></ErrorMessage>
                            )
                        }
                        <Field as="select" name="level">
                            <option value={NIVEL.amistad}>amistad</option>
                            <option value={NIVEL.falmilia}>falmilia</option>
                            <option value={NIVEL.trabajo}>trabajo</option>
                        </Field>

                        <button type="submit">
                            Agregar Contacto
                        </button>
                                              
                    </Form>
                )}
            </Formik>
            {   contactos.length>0 ? (
        <p>Task List is Empty</p>
      ) : (contactos.value.map((contacto, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" onClick={() => contactos.remove(index)} checked={false} />
            <p style={{ fontWeight: 'bold', marginRight: '5px' }}>{contacto.nombre}</p>
            <p>{contacto.apellido}</p> <p>{contacto.email}</p><p>{contacto.nivel}</p>
          </li>
          
        )))}
        </div>
    );
};


ContactListFormik.propTypes = {

};


export default ContactListFormik;

*/ 
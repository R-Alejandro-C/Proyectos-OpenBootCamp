import React from 'react';
import { NIVEL } from '../../../models/level.enum';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';


const Formik1 = ({agregar}) => {

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
            email: Yup.string().email("Formato de email incorrecto").required("Correo obligatio"),
            nivel: Yup.string(),
        }
    )

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
            setTimeout(() => {
                agregar(values);
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
                <Field as="select" name="nivel" className='form-control form-control-lg m-2'>
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
    );
}

Formik1.propTypes = {
    agregar: PropTypes.func.isRequired
    };
    
export default Formik1;

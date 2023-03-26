import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import PropTypes from 'prop-types';
const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email("Formato de mail invalido").required("Email es requerido"),
        password: Yup.string().required("Contraseña es requirda")
    }
)




const LoginForm = ({loged, onLogin}) => {
    
    const initialCredentials = {
        email: "",
        password: ""
    }
    return (
        <div>
            <h4 style={{textAlign:"center"}}>Login Formikn</h4>
            <Formik initialValues={initialCredentials} 
            validationSchema={loginSchema}
            onSubmit={async (values) => {
               onLogin(values.email, values.password)
            }}>

    {({      values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handBluer})=>(
                        <Form>
                        <label htmlFor='email'>Email</label>
                        <Field id="email" type="email" name="email" placeholder="prueba@gmail.com" />
                        {
                            errors.email && touched.email && (
               
                                <ErrorMessage name="email" component={"div"}></ErrorMessage>
                            )
                        }
                        <label htmlFor='password'>Email</label>
                        <Field id="password" type="password" name="password" placeholder="password" />
                        {
                            errors.password && touched.password && (
                                <div className='error'>
                                    <p>{errors.password}</p>
                                </div>
                            )
                        }
                        <button type="submit">
                            Submit
                        </button>
                        {isSubmitting? (<p>Loguea tus credenciales</p>):null}
                    </Form>
                    
                    )}



            </Formik>
            
          
        </div>
    );
}
LoginForm.propTypes={
    loged: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
}
export default LoginForm;

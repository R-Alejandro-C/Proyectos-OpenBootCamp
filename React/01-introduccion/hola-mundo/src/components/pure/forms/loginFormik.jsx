import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email("Formato de mail invalido").required("Email es requerido"),
        password: Yup.string().required("Contraseña es requirda")
    }
)




const LoginFormik = () => {
    const initialCredentials = {
        email: "",
        password: ""
    }
    return (
        <div>
            <h4>Login Formikn</h4>
            <Formik initialValues={initialCredentials} 
            validationSchema={loginSchema}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 1500));
                alert(JSON.stringify(values, null, 2));
                localStorage.setItem("credentials",values)
            }}>
{/** 
 *             { props =>{
                const{
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handBluer
                } = props
                return(...
*/}
     
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

export default LoginFormik;

import React from 'react';
import { User } from '../../../models/user.class';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"; 
import { ROLES } from '../../../models/roles';
const RegisterFormik = () => {

    let user = new User()
    const submit = (values)=>{
        console.log("registra usuario");
    }

    const initialValues={
        username:"",
        email:"",
        password:"",
        confirm:"",
        role: ROLES.USER
    }
    const registerSchema = Yup.object().shape(
        {
        username: Yup.string()
        .min(6,"Username muy corto")
        .max(30,"Username muy largo")
        .required("Username Obligatorio"),
        email: Yup.string()
        .email("Correo invalido")
        .required("Correo es requerido"),
        password: Yup.string()
        .required("Contraseña es requerida"),
        confirm: Yup.string()
        .oneOf(
                [Yup.ref("password"),null],
                'La contraseña tiene que coincidir'
            )
            
        
        .required("Confirme la contraseña")
    }
    )
    return (
        <div>
            <h4 style={{textAlign:"center"}}>Register Formik</h4>
            <Formik  initialValues={initialValues}
           validationSchema={registerSchema}
           onSubmit={async (values) => {
               await new Promise((r) => setTimeout(r, 1500));
               alert(JSON.stringify(values, null, 2));
               localStorage.setItem("Cuenta",values)
           }}>
             {({    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handBluer})=>(
                        <Form>
                            <div>
                            <label htmlFor='username'>Username</label>
                        <Field id="username" type="username" name="username" placeholder="username" />
                        {
                            errors.username && touched.username && (
               
                                <ErrorMessage name="username" component={"div"}></ErrorMessage>
                            )
                        }
                        <label htmlFor='email'>Email</label>
                        <Field id="email" type="email" name="email" placeholder="prueba@gmail.com" />
                        {
                            errors.password && touched.password && (
                                <div className='error'>
                                    <p>{errors.password}</p>
                                </div>
                            )
                        }

                        <label htmlFor='password'>Confirm</label>
                        <Field id="password" type="password" name="password" placeholder="password" />

                        {
                            errors.password && touched.password && (
               
                                <ErrorMessage name="confirm" component={"p"}></ErrorMessage>
                            )
                        }

                         
                        <label htmlFor='confirm'>Confirm</label>
                        <Field id="confirm" type="password" name="confirm" placeholder="confirm" />

                        {
                            errors.confirm && touched.confirm && (
               
                                <ErrorMessage name="confirm" component={"p"}></ErrorMessage>
                            )
                        }
                        </div>

                         <button type="submit">
                            Registra tu cuenta
                        </button>
                        {isSubmitting? (<p> Registrando cuenta</p>):null}
                        </Form>
                        
                    )}
            </Formik>
            
        </div>
    );
}

export default RegisterFormik;

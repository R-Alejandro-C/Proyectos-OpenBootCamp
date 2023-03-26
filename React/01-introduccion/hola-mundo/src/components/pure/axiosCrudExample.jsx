import React, { useState, useEffect } from 'react';
import { login, getAllUser,getAllPageUser,getAllUserByID,createUser,updateUser,deleteUser } from '../../services/axiosCrudService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email("Formato de mail invalido").required("Email es requerido"),
        password: Yup.string().required("Contraseña es requirda")
    }
)
const AxiosCrudExample = () => {

const authUser = (values)=>{
    login(values.email,values.password)
    .then((response)=>{
        alert(JSON.stringify(response.data))
    })
    .catch((error)=>{
        alert("ocurrio un error", error)
    })
    .finally(()=>{
        console.log("Login completed");
    })
}
const obtainAllUsers =()=>{
    getAllUser()
    .then((response)=>{
        alert(JSON.stringify(response.data.data))
        console.log(response.data);
    })
    .catch((error)=>{
    alert("ocurrio un error", error)
    })
    .finally(()=>{console.log("Fin de AllUsers");})
}

const obtainAllPageUsers =(page)=>{
    getAllPageUser(page)
    .then((response)=>{
        alert(JSON.stringify(response.data.data))
    })
    .catch((error)=>{
    alert("ocurrio un error", error)
    })
    .finally(()=>{console.log("Fin de AllPageUsers");})
}

const obtainAllUsersByID =(id)=>{
    getAllUserByID(id)
    .then((response)=>{
        alert(JSON.stringify(response.data.data))
        console.log(response.data);
    })
    .catch((error)=>{
    alert("ocurrio un error", error)
    })
    .finally(()=>{console.log("Fin de getAllUserByID");})
}


const createNewUser =(name, job)=>{
    createUser(name, job)
    .then((response)=>{
        alert(JSON.stringify(response.data))
        console.log(response.data);
    })
    .catch((error)=>{
    alert("ocurrio un error", error)
    })
    .finally(()=>{console.log("Fin de createUser");})
}


const UpdatingUser =(name, job,id)=>{
    updateUser(name, job, id)
    .then((response)=>{
        alert(JSON.stringify(response.data))
        console.log(response.data);
    })
    .catch((error)=>{
    alert("ocurrio un error", error)
    })
    .finally(()=>{console.log("Fin de updateUser");})
}
const DeleteUser =(id)=>{
    deleteUser(id)
    .then((response)=>{
        alert(JSON.stringify(response.data))
        console.log(response.data);
    })
    .catch((error)=>{
    alert("ocurrio un error", error)
    })
    .finally(()=>{console.log("Fin de deleteUser");})
}







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
            authUser(values)
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
        
                    <div>
                        <button onClick={obtainAllUsers}> Get all users</button>
                        
                        <button onClick={()=>obtainAllPageUsers(2)}> Get all userspage</button>

                        <button onClick={()=>obtainAllUsersByID(2)}> usuario por id</button>

                        <button onClick={()=>createNewUser("morpheus","leader")}> crear usuario</button>

                        <button onClick={()=>UpdatingUser("morpheus","zion resident", 1)}> editar usuario</button>

                        <button onClick={()=>DeleteUser(1)}> eliminar usuario</button>
                    </div>
    </div>
    );
}

export default AxiosCrudExample;

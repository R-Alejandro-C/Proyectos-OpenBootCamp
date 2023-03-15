import React,{useState} from 'react';

const OptionalRender = () => {

    const [access, setaccess] = useState(true);
    const [message, setmessage] = useState(0);
    const updateAccess=()=>{
    setaccess(!access)
    }

    let opbutton;
    const loginAccess=()=>{
        setaccess(true)
    }

    const logoutAccess=()=>{
        setaccess(false)
    }

    const LoginBtn=({loginAccess})=>{
        return( <button onClick={loginAccess} className='btn btn-success'>Login</button>)
    }
    const LogoutBtn=({logoutAccess})=>{
        return( <button onClick={logoutAccess} className='btn btn-danger'>Logout</button>)
    }


    if (access) {
        opbutton = <LogoutBtn logoutAccess={logoutAccess}></LogoutBtn>
    }else{
        opbutton = <LoginBtn loginAccess={loginAccess}></LoginBtn>
    }


    let addMessages =()=>{
        setmessage(message+1)
    }

    return (
        <div>
            <div>
                
            {opbutton}
                {access?        <div>
            <h3> {message>0? <h2>Tienes {message} mensaje sin leer</h2>:<h2>No tienes ningun mensaje</h2>}</h3>
            <button onClick={()=>addMessages()}>añadir mensaje</button>
            </div>: null     }
            </div>
        </div>
    );
}

export default OptionalRender;

import React, { useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

const FIELD = "FIELD";
const LOGIN = "LOGIN";
const SUCCSESS = "SUCCSESS";
const ERROR = "ERORR";
const LOGOUT = "LOGOUT";


const initialState = {
    username:"",
    password:"",
    error:"",
    isloading: false,
    isLoggedIn:false
}


const loginReducer = (state, action) => {
    switch (action.type) {
        case FIELD:
            return {
                ...state,
                [action.fieldName]: action.payload
            }
        case LOGIN:
            return {
                ...state,
                error: "",
                isloading:true,
            }
        case SUCCSESS:
            return {
                ...state,
                error: "",
                isloading:false,
                isLoggedIn: true
            }
            case ERROR:
                return {
                    ...state,
                    error: "Invalid Username or password",
                    isloading:false,
                    isLoggedIn: false,
                    username:"",
                    password:""
                }
                case LOGOUT:
                    return {
                        ...state,
                        isLoggedIn: false
                       
                    }
        default:
            break;
    }
}




const LoginUseReducer = () => {


    const [state, dispatch] = useReducer(loginReducer, initialState)

    const {username,password,error,isLoggedIn,isloading} = state;

    
    const submit = async (e) => {
        e.preventDefault()
       dispatch({type: LOGIN})
        try {
            await function login({ userName, password }) {
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (userName === "admin" && password === "admin") {
                            resolve()
                        } else {
                            reject()
                        }
                    }, 200);
                })

                
            }
            dispatch({type: SUCCSESS})
        } catch (error) {
            dispatch({type:ERROR})
        }

    }


    const logOut = ()=>{
dispatch({type: LOGOUT})
    }
    return (
        <div className='App'>
        <div>
            {
                isLoggedIn ? (<div> <h1>Welcome {username}</h1> <button onClick={logOut}> LogOut</button></div>):
                (<div>
                <form onSubmit={submit}>
                    {error && <p style={{color : "tomato"}}>{error}</p>}
                
                <input type="text" className="form-control mb-2 mr-sm-2" placeholder="UserName" value={username} onChange={(e)=> dispatch({type: FIELD, fieldName:"username", payload: e.currentTarget.value})}/>
                
                <input type="password" className="form-control mb-2 mr-sm-2" placeholder="Password" value={password} onChange={(e)=> dispatch({type: FIELD, fieldName:"password", payload: e.currentTarget.value})}/>

                <button type='submit'>
                    {isloading ? ("Logging..."):("login")}
                </button>
                </form>
                </div>)
            }
        </div>
    </div>
    );
};


LoginUseReducer.propTypes = {

};


export default LoginUseReducer;

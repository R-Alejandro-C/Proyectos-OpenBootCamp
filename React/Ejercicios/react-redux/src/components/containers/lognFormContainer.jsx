import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../pure/loginForm'
import {httpRequest} from "../../store/actions/asyncActions"


const mapStateToProps = (state) => {
    return{
        loged: state.userState.loged
    }
}

const mapDispatchToProps = (dispatch)=> {
    return{
        onLogin:(email, password)=>{
           const data= {
                email:email,
                password: password
            }
         const  url = "https://reqres.in/api/login";

            dispatch(httpRequest("post",url, data))
        }
    }
}

const LognFormContainer =  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
export default LognFormContainer
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const LoginUseState = () => {

    const [userName, setuserName] = useState("");

    const [password, setpassword] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [error, seterror] = useState("");
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const submit = async (e) => {
        e.preventDefault()
        seterror("");
        setLoading(true);
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
            
            setisLoggedIn(true)
            setLoading(false)
        } catch (error) {
seterror(` Invalid Username or password ${error}`)
setLoading(false);
setuserName("")
setpassword("")
        }

    }

    const logOut = ()=>{
        setisLoggedIn(false)
        setLoading(false)
    }
    return (
        <div className='App'>
            <div>
                {
                    isLoggedIn ? (<div> <h1>Welcome {userName}</h1> <button onClick={logOut}> LogOut</button></div>):
                    (<div>
                    <form onSubmit={submit}>
                        {error && <p style={{color : "tomato"}}>{error}</p>}
                    
                    <input type="text" className="form-control mb-2 mr-sm-2" placeholder="UserName" value={userName} onChange={(e)=> setuserName(e.currentTarget.value)}/>
                    
                    <input type="password" className="form-control mb-2 mr-sm-2" placeholder="Password" value={password} onChange={(e)=> setpassword(e.currentTarget.value)}/>

                    <button type='submit'>
                        {isLoading ? ("Logging..."):("login")}
                    </button>
                    </form>
                    </div>)
                }
            </div>
        </div>
    );
};


LoginUseState.propTypes = {

};


export default LoginUseState;

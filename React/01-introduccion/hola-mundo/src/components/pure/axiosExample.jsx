import React, { useState, useEffect } from 'react';
import getRandomUser from "../../services/apiService"

const AxiosExample = () => {

    const [user, setuser] = useState(null);
    useEffect(() => {

        obtainUser();
    }, []);

    const obtainUser = () => {
        getRandomUser()
            .then((response) => {
                if (response.status === 200) {
                    setuser(response.data.results[0])
                }
                console.log(response);
            })
            .catch((error) => {
                alert("ocurrio un error:", error)
            })
    }
    return (
        <div>
            <h1>Axios Example</h1>
            {user != null ? (
                <div>

                    <h2>{user.name.title}{user.name.first}{user.name.last}</h2>
                    <h3> {user.email}</h3>
                </div>
            ) :
                (<div><p>Generate a new user</p></div>)}

            <button onClick={obtainUser}> Genrar usuario random</button>
        </div>
    );
}

export default AxiosExample;

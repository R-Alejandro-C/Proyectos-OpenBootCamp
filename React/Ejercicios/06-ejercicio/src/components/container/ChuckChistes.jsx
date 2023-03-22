import React, {useState, useEffect} from 'react';
import getRandomJoke from '../../services/AxiosService';
import Button from "@mui/material/Button"

const ChuckChistes = () => {

    const [joke, setjoke] = useState(null);

    useEffect(()=>{
        obtainJoke()
    },[])

    const obtainJoke = () => {
         getRandomJoke()
         .then((response)=>{

            setjoke(response.data.value)
            console.log(response);
         })
         .catch((error)=>{alert("ocurrio un error", error)})
    }

    return (
        <div>
            <h1>ChuckChistes</h1>
            {joke != null ? (<div>{joke}</div>):(<div></div>)}

            <Button variant='contained' onClick={obtainJoke} style={{margin:"15px"}}>Nuevo ChuckChiste</Button>
        </div>
    );
}

export default ChuckChistes;

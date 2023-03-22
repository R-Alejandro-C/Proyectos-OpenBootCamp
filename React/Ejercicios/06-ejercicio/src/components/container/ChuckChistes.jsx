import React, {useState, useEffect} from 'react';
import getRandomJoke from '../../services/AxiosService';
import Button from "@mui/material/Button"

const ChuckChistes = () => {

    const [joke, setjoke] = useState(null);
    const [like, setlike] = useState(0);
    const [dislike, setdislike] = useState(0);
    
    const aumentarLikes = ()=>{
        setlike(like+1)
        obtainJoke()
    }
    const aumentarDisLikes = ()=>{
        setdislike(dislike+1)
        obtainJoke()
    }
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

            <div>cantidad de LIKES: {like}</div>
            <div>cantidad de DISLIKES: {dislike}</div>
            <div>
            <Button variant='contained' color='success' style={{margin:"10px"}} onClick={aumentarLikes}>LIKE</Button>
            <Button variant='contained' color='error'style={{margin:"10px"}} onClick={aumentarDisLikes}>DISLIKE</Button>
            </div>
        </div>
    );
}

export default ChuckChistes;

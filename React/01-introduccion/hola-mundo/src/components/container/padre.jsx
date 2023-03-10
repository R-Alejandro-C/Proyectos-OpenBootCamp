import React, {useState} from 'react';
import Hijo from '../pure/hijo';

const Padre = () => {
const [name, setName] = useState("");
    function showMessage(text){
        alert(`text ${text}`)
    }

    function updateName(newName){
    setName(newName)
    }
    return (
        <div>
            <Hijo send={showMessage} name={name} update={updateName}></Hijo>
        </div>
    );
}

export default Padre;

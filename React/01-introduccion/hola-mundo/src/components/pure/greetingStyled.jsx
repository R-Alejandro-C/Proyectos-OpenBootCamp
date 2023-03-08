import React, {useState} from 'react';

const logedStyle={
    color: "blue"
}
const unLogedStyle={
    color: "white",
    fontWeight: "bold"
}

const GreetingStyled = (props) => {

    const [logged, setslogged] = useState(false);


    return (
        <div style={logged ? logedStyle : unLogedStyle}>
            {logged?
            (<p>Hola, {props.name}</p>):(<p>Hola, Logeate</p>)}
            <button onClick={()=>{
                setslogged(!logged)
            }}>
                {logged? "logout":"login" }
            </button>
        </div>
    );
}

export default GreetingStyled;

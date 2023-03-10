import React, { useRef }  from 'react';



const Hijo = ({name, send, update}) => {
    
const mensaje = useRef("")
const nameRef = useRef("")

function pressButton() {
    const texto= mensaje.current.value
    alert(`text ${texto}`)
}

function pressButtonParamas(text) {
    alert(`text ${text}`)

}

function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value)
}

    return (
        <div>
            <p onMouseOver={()=>{console.log("hola");}}> {name}</p>
            <button onClick={()=>pressButton()}> btn1</button>
            <button onClick={()=>pressButtonParamas("hola")}> btn2</button>
            <input placeholder='mensaje a padre' ref={mensaje}/>
            <button onClick={()=> send(mensaje.current.value)}> btn3</button>
            <div>
                <form onSubmit={submitName}>
                <input placeholder='cambiar nombre' ref={nameRef}/>
            <button type='submit'> cambiar</button>
                </form>

            </div>
        </div>
    );
}

export default Hijo;

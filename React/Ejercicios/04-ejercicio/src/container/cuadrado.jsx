import React,{useState} from 'react';

const Cuadrado = () => {

    let rojo= (Math.random()*255)
    console.log("el color es" +rojo);
    let azul=(Math.random()*255)
    let amarillo= (Math.random()*255)
    const color1 ={
        backgroundColor: `rgb(${rojo},${azul},${amarillo})`,
    }
    const color2 ={
        backgroundColor: `rgb(${rojo},${azul},${amarillo})`,
    }
    const [color, setcolor1] = useState(color1);
    const [detener, setdetener] = useState(true);
    const cambioColor =()=>{
       
    setcolor1(color2)
        console.log(color);
    }

    const detenerColor =()=>{
       setdetener(!detener)
    }
    return (
        <div>
        {detener? <div className='cuadrado' style={color} onMouseMove={cambioColor} onDoubleClick={detenerColor}> </div> : <div className='cuadrado' style={color} onDoubleClick={detenerColor}>
            
        </div>}
        </div>
    );
}

export default Cuadrado;



import {ITarea, nivel} from "./Interfaces/ITarea"
import { Programar } from "./programas";
console.log("HOLwAS");



function saludar() {
    let name = "Rodrigo"
    console.log(`Hola mundo ${name}`); 
    
}



saludar();

function saludarPersona(name:string) {
    console.log(`Hola, ${name}`); 

}



saludarPersona("Rodrigo");


function despedirPersona(name:string = "Alejandro") {
    console.log(`adios, ${name}`); 

}
despedirPersona();

function despedirOpcional(name?:string) {
    if (name) {
     
    console.log(`adios, ${name}`); 
   
    } else{
        console.log("Adios");
        
    }
}

despedirOpcional();

function variosParams(name:string, years:number, lastName?:string) {
    if (lastName) {
        console.log(`hola, ${name} ${lastName} tienes ${years}`);
    }else{
    console.log(`hola, ${name} tienes ${years}`);
}
}

variosParams("Rodrigo",12,"awe");


function variosTipoos(variable:string|number) {
    if(typeof(variable)=="number"){
        console.log("es un numero");
        
    } else if(typeof(variable)=="string"){
        console.log("es un string");
        
    } else{
        throw Error("No es nada")
        
    }
}
    variosTipoos(2)
    variosTipoos("q")

    function Ejmreturn(name?:string, lastName:string = "Colcas"):string{
    return  `hola, ${name} ${lastName}`
    }


function guardarEnLocalStorage(){
    localStorage.set("Nombre","Rodrigo")
}


function leer(){

    let nombre = localStorage.get("Nombre")
}





class Temporizador{
    public terminar?: (tiempo:number)=> void

    public empezar(): void {
        setTimeout(() => {
            if (!this.terminar)   return;
            this.terminar(Date.now());
            
        }, 7200);
    }
}



const miTemporizador:Temporizador = new Temporizador();

miTemporizador.terminar= (tiempo:number) =>{
    console.log("Evento terminado", tiempo);
    
}

miTemporizador.empezar()

setInterval(()=> console.log("Tic"),7230);

delete miTemporizador.terminar;


class curso{
    nombre: string
    horas: number
    constructor(nombre:string,horas: number){
        this.nombre= nombre;
        this.horas=horas;
    }
}
class Estudiante {


    nombre:string
    apellidos?: string
    cursos: curso[]
    constructor(nombre:string, curso:curso[], apellido?: string){
        this.nombre = nombre;
        this.apellidos = apellido;
        this.cursos=curso;
    }

}


const cursoTs:curso = new curso("TypeScript",8)

const cursoJs:curso = new curso("JavaScript",8)

const listaCursos: curso[] = [];

listaCursos.push(cursoTs,cursoJs)

const alumnoR:Estudiante= new Estudiante("Rodrigo",listaCursos,"Colcas")



let programar: ITarea = {
    titulo: "TypeScript",
    description:"Practicar Tp",
    completado: false,
    urgencia: nivel.Urgente,
    resumen: function (): string {
       return `${this.titulo}-${this.completado}, Nivel ${this.urgencia}`
    }
}


console.log(programar.resumen());


let programarTS= new Programar("TypeScript",false,"tarda",nivel.Urgente)

programarTS.resumen()
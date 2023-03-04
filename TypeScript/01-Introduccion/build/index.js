"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ITarea_1 = require("./Interfaces/ITarea");
const programas_1 = require("./programas");
console.log("HOLwAS");
function saludar() {
    let name = "Rodrigo";
    console.log(`Hola mundo ${name}`);
}
saludar();
function saludarPersona(name) {
    console.log(`Hola, ${name}`);
}
saludarPersona("Rodrigo");
function despedirPersona(name = "Alejandro") {
    console.log(`adios, ${name}`);
}
despedirPersona();
function despedirOpcional(name) {
    if (name) {
        console.log(`adios, ${name}`);
    }
    else {
        console.log("Adios");
    }
}
despedirOpcional();
function variosParams(name, years, lastName) {
    if (lastName) {
        console.log(`hola, ${name} ${lastName} tienes ${years}`);
    }
    else {
        console.log(`hola, ${name} tienes ${years}`);
    }
}
variosParams("Rodrigo", 12, "awe");
function variosTipoos(variable) {
    if (typeof (variable) == "number") {
        console.log("es un numero");
    }
    else if (typeof (variable) == "string") {
        console.log("es un string");
    }
    else {
        throw Error("No es nada");
    }
}
variosTipoos(2);
variosTipoos("q");
function Ejmreturn(name, lastName = "Colcas") {
    return `hola, ${name} ${lastName}`;
}
function guardarEnLocalStorage() {
    localStorage.set("Nombre", "Rodrigo");
}
function leer() {
    let nombre = localStorage.get("Nombre");
}
class Temporizador {
    empezar() {
        setTimeout(() => {
            if (!this.terminar)
                return;
            this.terminar(Date.now());
        }, 7200);
    }
}
const miTemporizador = new Temporizador();
miTemporizador.terminar = (tiempo) => {
    console.log("Evento terminado", tiempo);
};
miTemporizador.empezar();
setInterval(() => console.log("Tic"), 7230);
delete miTemporizador.terminar;
class curso {
    constructor(nombre, horas) {
        this.nombre = nombre;
        this.horas = horas;
    }
}
class Estudiante {
    constructor(nombre, curso, apellido) {
        this.nombre = nombre;
        this.apellidos = apellido;
        this.cursos = curso;
    }
}
const cursoTs = new curso("TypeScript", 8);
const cursoJs = new curso("JavaScript", 8);
const listaCursos = [];
listaCursos.push(cursoTs, cursoJs);
const alumnoR = new Estudiante("Rodrigo", listaCursos, "Colcas");
let programar = {
    titulo: "TypeScript",
    description: "Practicar Tp",
    completado: false,
    urgencia: ITarea_1.nivel.Urgente,
    resumen: function () {
        return `${this.titulo}-${this.completado}, Nivel ${this.urgencia}`;
    }
};
console.log(programar.resumen());
let programarTS = new programas_1.Programar("TypeScript", false, "tarda", ITarea_1.nivel.Urgente);
programarTS.resumen();

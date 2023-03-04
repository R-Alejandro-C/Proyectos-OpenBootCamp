import { ITarea, nivel } from "./Interfaces/ITarea";

export class Programar implements ITarea {
    titulo: string;
    description?: string | undefined;
    completado: boolean;
    urgencia?: nivel | undefined;
    resumen= ()=>{
        return `tarea de programacion ${this.titulo}${this.completado}`
    }
    constructor(titulo: string,   completado: boolean, description?: string,   urgencia?: nivel) {
    this.titulo=titulo;
    this.description=description;
    this.completado=completado;
    this.urgencia=urgencia;
     }
}
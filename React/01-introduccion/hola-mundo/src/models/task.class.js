import { NIVEL } from "./levels.enum";

export class tareas{
nombre = "";
descripcion = "";
completado = false;
nivel = NIVEL;

constructor(nombre,descripcion,completado,nivel){
this.nombre = nombre;
this.descripcion = descripcion;
this.completado = completado;
this.nivel = nivel;
}

}
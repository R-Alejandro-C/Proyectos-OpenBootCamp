import { NIVEL } from "./level.enum";

export class contacto{
    nombre = "";
    apellido ="";
    email = "";
    conectado = false;
    nivel = NIVEL;
    constructor(nombre,apellido,email,conectado,nivel){
this.nombre=nombre;
this.apellido=apellido;
this.email=email;
this.conectado=conectado;
this.nivel=nivel;
    }
}
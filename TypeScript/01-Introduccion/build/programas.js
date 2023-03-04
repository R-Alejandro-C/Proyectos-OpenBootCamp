"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programar = void 0;
class Programar {
    constructor(titulo, completado, description, urgencia) {
        this.resumen = () => {
            return `tarea de programacion ${this.titulo}${this.completado}`;
        };
        this.titulo = titulo;
        this.description = description;
        this.completado = completado;
        this.urgencia = urgencia;
    }
}
exports.Programar = Programar;

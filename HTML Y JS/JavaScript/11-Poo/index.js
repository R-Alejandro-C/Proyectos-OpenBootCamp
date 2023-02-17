class estudiante{
    #nombre;
    #asignaturas
    constructor(nombre, asignaturas){
        this.nombre = nombre;
        this.asignaturas=["Javascript", " HTML", " CSS"];

    }

    getEstudiantes(){
        return {
              nombre: this.nombre,
              asignaturas: this.asignaturas
    }
    }
}

const estudiante1 = new estudiante("Rodrigo", "asignaturas");

console.log(estudiante1.getEstudiantes());
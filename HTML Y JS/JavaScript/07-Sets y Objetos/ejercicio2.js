const datosPers ={nombre: "Rodrigo", apellido:"Colcas", edad:19,altura:172,eresDesarrollador:true };

console.log(datosPers.edad);

const datosAmigos = [{...datosPers}, {nombre: "Franco", apellido:"Martinez", edad:25,altura:172,eresDesarrollador:false },
{nombre: "Pavel", apellido:"Vasquez", edad:31,altura:182,eresDesarrollador:false } ];



console.log(datosAmigos.sort((a,b) => b.edad-a.edad));

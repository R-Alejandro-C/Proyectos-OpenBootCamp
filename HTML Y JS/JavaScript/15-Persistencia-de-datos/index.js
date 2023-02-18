let nombre = "Rodrigo"
let apellido = "Colcas"
const objeto = {nombre, apellido }

let expirar = new Date().getTime()+12000;
console.log(expirar);

sessionStorage.setItem("persona", JSON.stringify(objeto))
localStorage.setItem("persona", JSON.stringify(objeto))
document.cookie = "persona = " + JSON.stringify(objeto) + "; expires= " + new Date(expirar);


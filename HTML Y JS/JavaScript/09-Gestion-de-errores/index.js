const logger = require("./logger");

function sumar(numero){
    const result=2+numero;
    return result
}
function errores(){

    logger.error("Vaya vaya... Ocurrio un error!!!");
}
const num ="es";
try {
   const sumar = sumar(num)
   
   
    console.log("Todo bien!!");
} catch (e) {
    errores();
    console.log("Un error?, revisa el error.log");
}
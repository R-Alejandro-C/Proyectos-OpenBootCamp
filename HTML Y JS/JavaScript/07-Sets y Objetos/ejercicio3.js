const fechaHoy = new Date();

console.log(fechaHoy);

const fechaNac = new Date(2003,2, 12, 12, 45);

console.log(fechaNac);

const mayor = fechaHoy.getTime() > fechaNac.getTime();

console.log(mayor);

const diaNacNumb = fechaNac.getDate();
const diaNac = fechaNac.getDay();
const mesNac = fechaNac.getMonth();
const añoNac = fechaNac.getFullYear();

console.log(mesNac);
console.log(añoNac);
console.log(diaNac);
console.log(diaNacNumb);




const compra = ["Gaseosa","Arroz", "Jugo","Papel", "Helado"];
console.log(compra);

compra.splice(2,0,"Aceite de Girasol");
console.log(compra);

console.log(compra.splice(2,1));
console.log(compra);

const peliculas = [ {titulo:"Transformers ",director:" Michael Bay", fecha:2007},
{titulo:"kung fu panda ",director:"Mark Osborne", fecha:2008},{titulo:"Los Vengadores ",director:"RUSO BROTHERS", fecha:2012}]

const peliculasFecha=peliculas.filter(fecha => fecha.fecha>2010)
console.log(peliculasFecha);


const peliculasDirector=peliculas.map(director => director.director)
console.log(peliculasDirector);

const peliculasTitulo=peliculas.map(titulo => titulo.titulo)
console.log(peliculasTitulo);

const peliculasConcat = peliculasDirector.concat(peliculasTitulo)
console.log(peliculasConcat);

const peliculasPropag = [...peliculasDirector, ...peliculasTitulo]
console.log(peliculasPropag);
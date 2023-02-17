function fibonachi(num) {
    let x =1;

    let lista = [];
   a= 0;
   b= 1
    while(x<=num){

        c = b
        lista.splice(x,0,c);
        console.log(lista);

        
        b = a+b
        a = c
        x++;
    }

    return lista;
}

console.log(fibonachi(7));

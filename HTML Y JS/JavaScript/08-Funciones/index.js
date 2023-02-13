function verdad(){
    return true;
    }
    console.log(verdad());
    
    /*
    const promes = new Promise((result, ejected) => {
        setTimeout(() => {
            console.log("Hola soy una promesa");
        }, 5000);
    })
    */
    
    
    function* id(){
        let id =0
       
        while(true){
            id +=2

            
            yield id
        }
           
        
    }
    
    const generar = id();
    console.log(generar.next().value);
    
    console.log(generar.next().value);
    
    console.log(generar.next().value);
    
    console.log(generar.next().value);
    
    console.log(generar.next().value);
    
    console.log(generar.next().value);
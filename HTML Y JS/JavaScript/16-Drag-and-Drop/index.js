const parrafos = document.querySelectorAll(".parrafo");
const seccion1 = document.querySelectorAll(".seccion-1") 
const papelera = document.querySelectorAll(".papelera")


parrafos.forEach(parrafo => {
    

parrafo.addEventListener("dragstart", event => {
    event.dataTransfer.setData("id", parrafo.id)
    console.log("hola");

})

parrafo.addEventListener("dragend", ()=>{

    console.log("adio");
})

});


seccion1.forEach(seccion => {
    

    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        console.log("hola");
    
    })
    
    seccion.addEventListener("drop", event=>{
        const idParrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(idParrafo)
        seccion.appendChild(parrafo)
        console.log("adios");
    })
    
    });


papelera.forEach(papelera =>{
    papelera.addEventListener("dragover", event => {
        event.preventDefault()
        console.log("hola");
    
    })
    
    papelera.addEventListener("drop", event=>{
        const idParrafo = event.dataTransfer.getData("id")
        document.getElementById(idParrafo).remove()
        
        console.log("adios");
    })
})
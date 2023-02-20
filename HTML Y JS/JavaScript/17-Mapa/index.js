let map, markers, position;

function initMap(){

     position = {
        lat: -25.363,
        lng: 131.044
    };
    map = new google.maps.Map(document.getElementById("map"),{
        zoom: 8,
        center: position
    })

    
markers = [
    new google.maps.Marker({
    position: position,
    map
}),
new google.maps.Marker({
    position:{
        lat: -25.276947, 


        lng: 131.848617
    },
    map
}),
new google.maps.Marker({
    position:{
        lat: -25.276947, 


        lng: 132.848617
    },
    map
})
]

console.log(position);












}
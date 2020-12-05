
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//create map
const map = L.map("mapid", options).setView([-9.7539926,-36.6595656], 15.3);

//create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



//create and add marker
L.marker([-9.7535093,-36.6610005], {icon})
    .addTo(map)



    // Image gallery

function selectImage(event) {
    const button = event.currentTarget 

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {button.classList.remove("active")})
    
    
    //selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    
    //atualizar o container de images
    imageContainer.src = image.src

    //adicionar a classe .active para este botao clicado
    button.classList.add("active")
}
    
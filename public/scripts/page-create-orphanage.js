//create map
const map = L.map("mapid").setView([-9.7539926, -36.6595656], 15.3);

//create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//create and add marker
map.on("click", (event) => {

    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;

    document.querySelector('[name=latitude]').value = latitude;
    document.querySelector('[name=longitude]').value = longitude;
    //remove icon
    if (marker) {
        map.removeLayer(marker);
    }

    // add icon tileLayer
    marker = L.marker([latitude, longitude], {
        icon
    }).addTo(map);
})


//Add Photo Field

function addPhotoField(){
    // pegar o container de fotos #images
    const container = document.querySelector("#images")
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll(".new-upload")
    // realizar o clona da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificr se o campo está vazio se sim não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    } 

    //limpar o campo antes de adicionar 
    input.value = ""
    // adicionar o clone ao continer de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll(".new-upload")

    if(fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value =""
        return
    }

    //deletar o campo
    span.parentNode.remove()

}


//Selecionar Sim ou Não 

function toggleSelect(event){
    //retirar a class .active (dos botões)
    document.querySelectorAll(".button-select button")
    .forEach(button => button.classList.remove("active"))
    // pegar o botão clicado
    const button = event.currentTarget
    //colocar a class .active no botão clicado
    button.classList.add("active")

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    //verificar se é sim ou não 
   input.value = button.dataset.value 

}
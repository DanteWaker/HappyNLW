
//create map
const map = L.map("mapid").setView([-9.7539926,-36.6595656], 15.3);

//create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, latitude, longitude}) {

    // create popup overlay
    const popup = L.popup({
        closeOnClose: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg" ></a>`)

    //create and add marker
    L.marker([latitude, longitude], {icon})
        .addTo(map)
        .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        latitude: span.dataset.latitude, 
        longitude: span.dataset.longitude
    }
    addMarker(orphanage)
})
    

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

// create popup overlay

const popup = L.popup({
    closeOnClose: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg" ></a>')

//create and add marker
L.marker([-9.7535093,-36.6610005], {icon})
    .addTo(map)
    .bindPopup(popup)
    

L.marker([-9.7566532,-36.6544554], {icon})
    .addTo(map)
    .bindPopup(popup)
    
var map = L.map('map', {
    minZoom: 1.5,
    maxZoom: 10,
});

const OSM_attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
    attribution: OSM_attribution,
    noWrap: false
    
}).addTo(map);

map.setView([27,0],0);
import { location_names } from "./locations.js";

// let location_names = [
//     "BOS",
//     "UTC",
//     "HOU",
//     "KIN",
//     "HYD",
//     "BNE",
//     "SFO",
//     "PDL",
//     "LON",
//     "KSC",
//     "FCO"
// ]
import * as airports from "./airports.js";


const map = L.map('map', {
    minZoom: 1.5,
    maxZoom: 10,
});

const OSM_attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
const Vedant_attribution = '&copy; <a href="http://www.vedantmodi.com">Vedant Modi</a> '

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
    attribution: Vedant_attribution + OSM_attribution,
    noWrap: false
    
}).addTo(map);

map.setView([27,0],0);

let markers = []
let tooltips = []

export function makeMarkers () {
    plotMarkers()
    plotTooltips()
    console.log(`all done!`)
}

setInterval(function() {
    displayTimes()
}, 1000)

function plotMarkers () {
    const time_blocks = document.querySelectorAll(".times div")
    for (let i = 0; i < time_blocks.length; i++) {
        const lat = time_blocks[i].lat
        const lon = time_blocks[i].lon
        const Icon = L.icon({
            iconUrl: 'img/black-dot.png',
            iconSize:     [7,7], // size of the icon
        });
        
        const marker = L.marker([lon, lat], {icon: Icon});

        marker.addTo(map);
        
        markers.push(marker)

    }
}

function plotTooltips () {
    const time_blocks = document.querySelectorAll(".times div")
    for (let i = 0; i < time_blocks.length; i++) {
        const name = time_blocks[i].querySelector("h2").innerHTML
        const lat = time_blocks[i].lat
        const lon = time_blocks[i].lon
        const time_str = time_blocks[i].querySelector("output").innerHTML
        const time = time_str.substring(0, time_str.length - 3)

        const tooltip = L.tooltip({
            permanent: true
        })
            .setLatLng([lon, lat])
            .setContent(`${name}<br/>${time}`)
            .addTo(map);

        console.log(`added ${name} to map`)

        tooltips.push(tooltip)
    }
}

function displayTimes() {
    const time_blocks = document.querySelectorAll(".times div")
    for (let i = 0; i < time_blocks.length; i++) {
        const name = time_blocks[i].querySelector("h2").innerHTML
        const time_str = time_blocks[i].querySelector("output").innerHTML
        const time = time_str.substring(0, time_str.length - 3)

        const tooltip = tooltips[i]

        tooltip.setContent(`${name}<br/>${time}`)
    }
}


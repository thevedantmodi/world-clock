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

// minZoom: 1.5 maxZoom: 10
// Maybe lock movement, you don't really need to move around?
const map = {};

const OSM_attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
const Vedant_attribution = '&copy; <a href="http://www.vedantmodi.com">Vedant Modi</a> '

// no wrap


// Point a little up from the center to show more of land-dense N Hemisphere
// center is lat, lon = 27, 0

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
        // black dot 7px x 7px
        // at [lon, lat]
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

        // tooltip at [lon, lat]
        // permanent tooltip
        // name \n time

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


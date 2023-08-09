import { location_names } from "./locations.js";
import * as airports from "./airports.js";

// TODO: Change to non temp key
const apiKey = "AAPKd5f4ec47348045939bbc7b3325751f2bAJtvnrN1ekzxq--Il1sHOL2c-IrCJ-3c2IPRMUhuh5wa4KxweuzwY5hkI2GyqBDR";
const basemapEnum = "ArcGIS:DarkGray";

// minZoom: 1.5 maxZoom: 10
// Maybe lock movement, you don't really need to move around?


// Point a little up from the center to show more of land-dense N Hemisphere
// center is lat, lon = 27, 0


const map = new maplibregl.Map({
    container: "map", // the id of the div element
    style: `https://basemaps-api.arcgis.com/arcgis/rest/services/styles/${basemapEnum}?type=style&token=${apiKey}`,
    zoom: 1.2,
    maxZoom: 1.2,
    minZoom: 1.2,
    center: [0, 20], // starting location [longitude, latitude]
    attributionControl: false,
    noWrap: false,
    dragPan: false
  })

const OSM_attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
const Vedant_attribution = '&copy; <a href="http://www.vedantmodi.com">Vedant Modi</a> '

map.addControl(
    new maplibregl.AttributionControl({
        
      compact: true,// reduces the copyright attributions view
      customAttribution: Vedant_attribution + OSM_attribution
    })
  );

  map.scrollZoom.disable();

let markers = []

export function makeMarkers (name) {plotMarkers(name)}

setInterval(function() {displayTimes()}, 1000)

function plotMarkers (port_name) {
    const time_blocks = document.querySelectorAll(`.times div`)
    
    for (let i = 0; i < time_blocks.length; i++) {
        const name = time_blocks[i].querySelector("h2").innerHTML
        if (name == port_name) { // Without this gate, all prev points would be updated on each new point added
            const lon = time_blocks[i].lon
            const lat = time_blocks[i].lat
            const time_str = time_blocks[i].querySelector("output").innerHTML
            const time = time_str.substring(0, time_str.length - 9)

            
            const icon = new maplibregl.Marker({
                element: plotPoint(name, time),
            }).setLngLat([lon, lat]) // Replace with the coordinates of the point you want to add
                .addTo(map);
            
            markers.push(icon)
            // black dot 7px x 7px
            // at [lon, lat]
        }
    }
}

function plotPoint(name, time) {
    const group = document.createElement('div')
    group.className = 'map-group'
    const element = document.createElement('div');
    element.className = 'map-point';
    const text = document.createElement('div');
    text.className = 'map-text'
    text.innerHTML = `<br/><b>${name} ${time}</b>`
    
    group
    .appendChild(element)
    .appendChild(text)

    return group;
}

function displayTimes() {
    const time_blocks = document.querySelectorAll(".times div")
    for (let i = 0; i < time_blocks.length; i++) {
        const name = time_blocks[i].querySelector("h2").innerHTML
        const time_str = time_blocks[i].querySelector("output").innerHTML
        const time = time_str.substring(10, time_str.length - 9)

        updateTime(markers[i], name, time)
    }
}

function updateTime(marker, name, time) {
    marker.getElement().querySelector(".map-text").innerHTML = `<br/><b>${name} ${time}</b>`
}


export function deleteMarker(name) {
    for (let i = 0; i < markers.length; i++) {
        if (markers[i]
            .getElement()
            .querySelector(".map-text")
            .innerHTML.includes(name)) {
                markers[i].remove()
        }
    }
}

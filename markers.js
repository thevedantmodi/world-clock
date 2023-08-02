import { location_names } from "./locations.js";

const URL = 'IATAairports.json';
let airports = new Map()

let location_lat = new Map();
let location_lon = new Map();
let location_tz = new Map();

const Icon = L.icon({
    iconUrl: 'img/location-pin.png',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

fetch(URL)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {            
            airports.set(item.iata, item);
        });
        makeMarkers(airports)
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });


function makeMarkers (airports) {
    findCityInfo(airports)
    plotMarker()
}

function findCityInfo (airports) {
    // console.log(location_names)
    location_names.forEach(name => {
        let lat = 0; let lon = 0; let tz = "UTC";
        if (name != "UTC" && name != "GMT") {
            //If UTC, the default should do
            const port = airports.get(name)
            lat = port.lat; lon = port.lon; tz = port.tz;            
        }
        // console.log(name, lat, lon, tz)
        // TODO: Make this a json object instead (one key multiple values)
        setInfo(name, lat, lon, tz)
    })
}

function setInfo(name, lat, lon, tz) {
    location_lon.set(name, lat); 
    location_lat.set(name, lon); 
    location_tz.set(name, tz);
}

function plotMarker() {
    location_names.forEach(name => {


    })
}
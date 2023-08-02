import { location_names } from "./locations.js";

const URL = 'IATAairports.json';
let airports = new Map()

let location_lat = new Map();
let location_lon = new Map();
let location_tz = new Map();

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
}

function findCityInfo (airports) {
    console.log(location_names)
    location_names.forEach(name => {
        let lon = 0; let lat = 0; let tz = "UTC";
        if (name != "UTC" && name != "GMT") {
            //If UTC, the default should do
            const port = airports.get(name)
            lon = port.lon; lat = port.lat; tz = port.tz;            
        }
        console.log(name, lon, lat, tz)
        setInfo(name, lon, lat, tz)
    })
}

function setInfo(name, lon, lat, tz) {
    location_lat.set(name, lon); 
    location_lon.set(name, lat); 
    location_tz.set(name, tz);
}
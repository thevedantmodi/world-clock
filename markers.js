import { location_names } from "./locations.js";
// import { airports } from "./airports.js";

const URL = 'IATAairports.json';
let airports = new Map()

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
    console.log(airports.get("LAX"))
}

// // location_names.forEach(name => {
//     console.log(airports.get('BOS'))
// // })

// airports.forEach(port => {
//     console.log(port)
// })

// console.log(location_names)


import { location_names } from "./search.js";

/* Old method with preset of cities
const section = document.querySelector('.times');
const divs = section.querySelectorAll('div');

for (const div of divs) {
    const h2 = div.querySelector('h2');
    location_names.push(h2.innerHTML);
}
*/
// New method with custom cities added!

const URL = 'IATAairports.json';
let airports = new Map();
let tz; let code;

fetch(URL)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {            
            airports.set(item.iata, item);
        });
        renderCity(airports)
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });

function renderCity (airports) {
    
}



const time_read = `
    <div tz="${tz}">
        <h2 id="loc">${code}</h2>
        <output>00:00:00</output>
    </div>
`


let locs = [
    "BOS",
    "UTC",
    "HOU",
    "KIN",
    "HYD",
    "BNE",
    "SFO",
    "PDL",
    "LON",
    "KSC",
    "FCO"
]

export { locs as location_names }
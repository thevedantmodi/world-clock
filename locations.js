import * as airports from "./airports.js";
import * as maps from "./map.js"

let location_names = new Set()

const inputBox = document.getElementById("input-box")
const confirmButton = document.getElementById("add-button")
const times = document.getElementById("time-box")

/* Old method with preset of cities
const section = document.querySelector('.times');
const divs = section.querySelectorAll('div');

for (const div of divs) {
    const h2 = div.querySelector('h2');
    location_names.push(h2.innerHTML);
}
*/
// New method with custom cities added!

confirmButton.addEventListener("click", () => {
    const name = inputBox.value
    location_names.add(name)
    console.log(location_names)
    renderCity(name)
})


function renderCity (name) {
    const port = airports.port(name)
    const tz = port.tz; const code = port.iata;

    let div = document.createElement("div");
    div.tz = tz

    let h2 = document.createElement("h2");
    h2.id = "loc";
    h2.innerHTML = code;

    let output = document.createElement("output");
    output.innerText = "00:00:00";
    
    div.appendChild(h2);
    div.appendChild(output);

    times.appendChild(div);
    console.log(div)
    maps.makeMarkers()
}




export { location_names }
import * as airports from "./airports.js";
import * as maps from "./map.js"
import updateTimes from "./times.js"

let location_names = new Set()

const inputBox = document.getElementById("input-box")
const confirmButton = document.getElementById("add-button")
const times = document.getElementById("time-box")
const resultsBox = document.querySelector(".result-box")
const alert = document.querySelector(".alert")

confirmButton.addEventListener("click", () => {
    const name = inputBox.value
    if (location_names.has(name)) {
        alert.innerHTML = "Already added!"
    } else {
        alert.innerHTML = ""
        inputBox.placeholder = "Add a city"
        location_names.add(name)
        console.log(location_names)
        inputBox.value = resultsBox.innerHTML = ''
        // TODO: Hide ul if empty
        renderCity(name)
    }
})

inputBox.addEventListener("keypress", () => {
    if (event.code == "Enter") {
        const search_results = document.querySelectorAll("li");
        select(search_results[0]) //Gets the topmost result
        confirmButton.click()
    }
})

function select(list) {
    inputBox.value = list.innerHTML
    resultsBox.innerHTML = '';
}

function renderCity (name) {
    const port = airports.port(name)
    const tz = port.tz; const code = port.iata;
    const lat = port.lat; const lon = port.lon;

    let div = document.createElement("div");
    div.setAttribute("tz", tz)
    div.lat = lat;
    div.lon = lon;

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
    updateTimes()
}




export { location_names }
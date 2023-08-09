import * as airports from "./airports.js";
import * as maps from "./map.js"
import updateTimes from "./times.js"

let location_names = new Set()

const inputBox = document.getElementById("input-box")
const confirmButton = document.getElementById("add-button")
const times = document.getElementById("time-box")
const resultsBox = document.querySelector(".result-box")
const alert = document.querySelector(".alert")

// initLocations()

confirmButton.addEventListener("click", () => {
    const name = inputBox.value
    if (location_names.has(name)) {
        alert.innerHTML = "Already added!"
    } else {
        alert.innerHTML = ""
        inputBox.placeholder = "Add a city"
        updateLocations(name)        
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

function initLocations() {
    const arr = JSON.parse(localStorage.getItem("location_names"))
        arr.forEach(element => {
            renderCity(element)
        });
}

function updateLocations(name) {
    location_names.add(name)
    const arr = JSON.stringify(Array.from(location_names));
    console.log(`storing ${arr}`)
    localStorage.setItem("location_names", arr)
}

function select(list) {
    inputBox.value = list.innerHTML
    resultsBox.innerHTML = '';
}

function renderCity (name) {
    const port = airports.port(name)
    const tz = port.tz; const code = port.iata;
    const lat = port.lat; const lon = port.lon;

    let div = document.createElement("div");
    div.className = "grid-element"
    div.setAttribute("tz", tz)
    div.lat = lat;
    div.lon = lon;

    let h2 = document.createElement("h2");
    h2.id = "loc";
    h2.innerHTML = code;

    let button = document.createElement("button");
    button.setAttribute("id", "delete-button");
    button.innerHTML = "-";

    let output = document.createElement("output");
    output.innerText = "00:00:00";
    
    div.appendChild(button);
    div.appendChild(h2);
    div.appendChild(output);

    times.appendChild(div);

    maps.makeMarkers(name)
    updateTimes()
}




export { location_names }
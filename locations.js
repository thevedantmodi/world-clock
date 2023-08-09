import * as airports from "./airports.js";
import * as maps from "./map.js"
import updateTimes from "./times.js"

let location_names = new Set()

const inputBox = document.getElementById("input-box")
const confirmButton = document.getElementById("add-button")
const times = document.getElementById("time-box")
const resultsBox = document.querySelector(".result-box")
const alert = document.querySelector(".alert")
// const city_toggle = document.querySelector(".btn-container input").checked

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
    const city_name = port.city;

    let div = document.createElement("div");
    div.className = "grid-element"
    div.setAttribute("tz", tz)
    div.setAttribute("code_name", name)
    div.setAttribute("city_name", city_name)
    div.lat = lat;
    div.lon = lon;


    let h2 = document.createElement("h2");
    h2.id = "loc";
    h2.innerHTML = code;

    let button = document.createElement("button");
    button.setAttribute("id", "delete-button");
    button.innerHTML = "-";

    button.addEventListener("click", () => {
        deleteCity(name)
    })

    let output = document.createElement("output");
    output.innerText = "00:00:00";
    
    div.appendChild(button);
    div.appendChild(h2);
    div.appendChild(output);

    times.appendChild(div);

    maps.makeMarkers(name)
    updateTimes()
}


function deleteCity(name) {
    location_names.delete(name)
    const cities_list = times.querySelectorAll("div")
    for (let i = 0; i < cities_list.length; i++) {
        const name_element = cities_list[i].querySelector("h2").innerHTML
        if (name_element == name) {
            cities_list[i].remove()
        }
    }
    maps.deleteMarker(name);
}

export { location_names }
import * as airports from "./airports.js";

let location_names = new Set()

const inputBox = document.getElementById("input-box")
const confirmButton = document.getElementById("add-button")

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

let tz; let code;

function renderCity (name) {
    const port = airports.port(name)
    console.log("port is ", port);
}



const time_read = `
    <div tz="${tz}">
        <h2 id="loc">${code}</h2>
        <output>00:00:00</output>
    </div>
`
export { location_names }
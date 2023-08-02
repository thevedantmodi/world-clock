import { location_names } from "./locations.js";
import { airports } from "./airports.js";

location_names.forEach(name => {
    console.log(airports.get(name))
})

console.log(location_names)


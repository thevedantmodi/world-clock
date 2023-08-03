let cities = ["SEA", "PDX", "SMF", "SFO", "OAK",
"SJC",
"LAX",
"ONT",
"SAN",
"SNA",
"BUR",
"LAS",
"SLC",
"DEN",
"MSP",
"PHX",
"DFW",
"IAH",
"AUS",
"SAT",
"STL",
"CHI",
"DTW",
"BNA",
"ATL",
"IND",
"CLE",
"WAS",
"NYC",
"BOS",
"PHL",
"CLT",
"RDU",
"CHS",
"SAV",
"JAX",
"MSY",
"MCO",
"TPA",
"RSW",
"MIA",
"FLL",
"PBI"]
// TODO: Update a new file with only IATA codes with the cities

let location_names = new Set()
// export { location_names }

const resultsBox = document.querySelector(".result-box")
const inputBox = document.getElementById("input-box")
const confirmButton = document.getElementById("add-button")

inputBox.onkeyup = function(){
    let result = []
    let input = inputBox.value;
    if (input.length){
        result = cities.filter((code)=>{
            return code.toLowerCase().includes(input.toLowerCase())
        });
        // console.log(result)
    }
    display(result);
}

function display(result) {
    const content = result.map((list)=>{
        return `<li>${list}</li>`
    })
    resultsBox.innerHTML = `<ul>${content.join('')}</ul>`

    const search_results = document.querySelectorAll("li");
    for (let i = 0; i < search_results.length; i++) {
        search_results[i].setAttribute("onclick", "select(this)")
    }
}

function select(list) {
    inputBox.value = list.innerHTML
    resultsBox.innerHTML = '';
}

confirmButton.addEventListener("click", () => {
    console.log("here")
    location_names.add(inputBox.value)
    console.log(location_names)
})


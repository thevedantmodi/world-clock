const resultsBox = document.querySelector(".result-box")
const inputBox = document.getElementById("input-box")

inputBox.onkeyup = function(){
    let result = []
    let input = inputBox.value;
    if (input.length){
        result = cities.filter((code)=>{
            return code.toLowerCase().startsWith(input.toLowerCase())
        });
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
const city_toggle = document.querySelector(".btn-container input")
const time_blocks = document.querySelectorAll("section.times div")

city_toggle.addEventListener('change', function() {
    if (this.checked) {
        translatetoCode()
    } else {
        translatetoCity()
    }
  });

function translatetoCity() {
    for (let i = 0; i < time_blocks.length; i++) {
        time_blocks[i].querySelector("h2").innerHTML = 
        time_blocks[i].getAttribute("city_name")
    }
}

function translatetoCode() {
    for (let i = 0; i < time_blocks.length; i++) {
        time_blocks[i].querySelector("h2").innerHTML = 
        time_blocks[i].getAttribute("code_name")
    }
}
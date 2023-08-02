const locations = document.querySelectorAll("section.times div")

const updateTimes = function () {
    locations.forEach(port => {
        const output = port.querySelector("output")
        const tz = port.getAttribute("tz")

        const now = luxon.DateTime.now().setZone(tz)
        
        const hour = parseInt(now.toFormat("H"))

        if (hour >= 8 && hour < 23) {
            port.classList.add("awake")
        }
        output.innerHTML = now.toFormat("HH:mm:ss")
    })
}

updateTimes()

setInterval(function () {
    updateTimes()
}, 1000)
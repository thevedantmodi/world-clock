export default function updateTimes() {
    const locations = document.querySelectorAll("section.times div")
    locations.forEach(port => {
        const output = port.querySelector("output")
        const tz = port.getAttribute("tz")

        const now = luxon.DateTime.now().setZone(tz)
        
        const hour = parseInt(now.toFormat("H"))

        if (hour >= 8 && hour < 23) {
            port.classList.add("awake")
        }
        output.innerHTML = now.toFormat("ccc dd LLL HH:mm:ss ZZZ")
    })
}

setInterval(function () {
    updateTimes()
}, 1000)
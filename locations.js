let location_names = []

const section = document.querySelector('.times');
const divs = section.querySelectorAll('div');

for (const div of divs) {
    const h2 = div.querySelector('h2');
    location_names.push(h2.innerHTML);
}

export { location_names }
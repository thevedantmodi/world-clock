const URL = 'IATAairports.json';

fetch(URL)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {        
                
            localStorage.setItem(item.iata, JSON.stringify(item))
        });
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
});

export function port (name) {
    return JSON.parse(localStorage.getItem(name));
}
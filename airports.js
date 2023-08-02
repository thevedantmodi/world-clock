function importDataIntoMap(jsonData) {
    const dataMap = new Map();

    // Assuming your JSON data is an array of objects with 'key' and 'value' properties
    jsonData.forEach(item => {
        dataMap.set(item.iata, item);
    });

    return dataMap;
}

// URL of the JSON file
const jsonFileURL = 'IATA';

// Fetch JSON data and import it into a map
fetch(jsonFileURL)
    .then(response => response.json())
    .then(jsonData => {
        const dataMap = importDataIntoMap(jsonData);
        console.log('Map:', dataMap);
        // You can now use the 'dataMap' as needed
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });




const airports = new Map()

fetch('./IATAairports.json')
  .then(response => response.json())
  .then(data => {
    console.log(data.size)
    for (let port of data) {
        // console.log(port)
        airports.set("BOS", port)
        // airports.set(port.iata, port) // Sets the airport code with key IATA
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

  console.log(airports.size)

export { airports }
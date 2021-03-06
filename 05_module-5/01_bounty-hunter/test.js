const fetch = require('node-fetch');


fetch('https://swapi.dev/api/planets/1/')
  .then((response) => {
    console.log("response", response.body)
    // return response.json()
    })
  .then(data => console.log(data.name));
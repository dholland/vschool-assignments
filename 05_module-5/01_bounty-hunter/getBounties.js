const axios = require('axios')
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


const createPageRequests = async (nums) => {
  let dataLayer;
  const dataTransport = (data) => {
    dataLayer = data
  }
  console.log("Number of Pages:", nums)
  const baseURL = "https://rickandmortyapi.com/api/character/?page="
  const pages = []
  for (let i = 1; i <= nums; i++) {
    pages.push(axios.get(baseURL + [i]));
  }

  await axios.all(pages).then(axios.spread((...responses) => {
    const people = responses.map(page => page.data.results).flat().map(person => {
      const { name, species, status, gender, type, image, location } = person
      return {
        id: uuidv4(),
        name,
        species,
        status,
        gender,
        type,
        image,
        location,
      }
    })
    return people
  })).then(data => {

    fs.writeFileSync('./data/bounties.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('Bounties Built and Saved');
    })
    dataTransport(data)
  })
    .catch(errors => {
      console.log("There was an Error")
      console.log(errors)
    })
  return dataLayer
}

module.exports = { createPageRequests }
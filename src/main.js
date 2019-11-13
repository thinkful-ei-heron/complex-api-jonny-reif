/* eslint-disable no-console */
//  blah
const apiKey = 'qTIaiaU3kkW2zggcusNtaSrGPOiDsMhKF0INjbTH';
const url = 'https://developer.nps.gov/api/v1/parks';

let results = document.getElementById('results');

function displayPark(data) {
  console.log(data);
  data.forEach(item => results.innerHTML += `<div> 
    <span><h2>${item.fullName}</h2> </span>
    <span><h3>${item.description}</h3> </span>
    <span><h3>${item.url}</h3> </span>
  </div>`);
}
function getParks() {

  const parks = [];
  const limit = document.getElementById('js-max-results').value;
  const stateCodes = document.getElementById('js-search-term').value;
  results.innerHTML = '';

  fetch(`${url}?api_key=${apiKey}${(stateCodes) ? '&stateCode=' + stateCodes : ''}${(limit > 0 && limit <= 50) ? '&limit=' + limit : '&limit=10'}`)
    .then(response => response.json())
    .then(responseJson => responseJson.data.forEach(post => parks.push(post)))
    .then(responseJson => console.log(responseJson))
    .then(() => displayPark(parks));
}


function watchForm() {
  document.getElementById('js-form').addEventListener('submit', (event => {
    event.preventDefault();
    getParks();
  }));
}


console.log('App loaded! Waiting for submit!');
watchForm();
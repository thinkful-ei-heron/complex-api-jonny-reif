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
 </div>`)
}
function getParks() {

    const parks = [];
    const limit = document.getElementById('js-max-results').value;
    const stateCodes = document.getElementById('js-search-term').value;
    results.innerHTML = '';

    fetch(`${url}?api_key=${apiKey}${(stateCodes) ? '&stateCode='+stateCodes : ''}${(limit > 0 && limit <= 50) ? '&limit=' + limit : '&limit=10'}`)
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
// watchBreedForm();
//
// function watchBreedForm() {
// document.getElementById('doggo-breed-form').addEventListener('submit', (event => {
//     event.preventDefault();
//     getDogBreed();
// }));
// }
//
// function validateCount(count) {
//     if(count <= 0 || count > 50) {
//         throw new Error('Not in bounds: only accepts 1-50');
//     }
//     return count;
//
// }
// function renderBreed(image) {
//     doggoBreedImage.innerHTML = image;
// }
// function renderImages(images) {
//     images.forEach(image => doggoPics.innerHTML += image)
// }
// function displayImage(src) {
//     return `<span> <img width='auto' height='100px' src="${src}"/> </span>`
// }


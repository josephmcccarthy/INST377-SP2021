const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const cities = [];

fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data))

function findMatches(wordToMatch, cities){
    return cities.filter(place => { 
        const regex = new RegExp(wordToMatch,'gi');
        return place.name.match(regex) || place.category.match(regex)
    })};
    
function displayMatches() {
    const matchArray = findMatches(this.value,cities);
    let html = matchArray.map(place => {
        const regex = new RegExp(this.value,'gi');
        return `
        <li>
        <span class="name">${place.name} </span>
        <address>
        <span class="address_line_1">${place.address_line_1}</span>
        </address>
        <span class="category">${place.category}</span>
        </li>
        `;
    }).join('');
    if (this.value.length == 0) {
        html = [];}
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.text');
const suggestions = document.querySelector('.results');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

// async function windowActions(){
//     const form = document.querySelector('.userform');
//     const search = document.querySelector('#name');
//     const targetList = document.querySelector('.target-list');
      
//     const request = await fetch('/api');
//     const data = await request.json();   
  
//     form.addEventListener('submit', async(event) => {
//       event.preventDefault();
//       console.log('submit fired', search.value);
//       const filtered = data.filter((record) => record.city.toUpperCase() === search.value.toUpperCase());
//       filtered.forEach((item) =>{
//         const appendItem = document.createElement("li");
//         appenditem.classList += `${appendBox.classList} box`;
//         appendItem.innerText = item.city;
//         //appendItem.innerText = item.category
//         //appendItem.innerText = item.name
//         targetList.append(appendItem); 
//         });
//       });
  
//     search.addEventListener('input', (event) =>{
//       console.log('input', event.target.value);
//       });
//   } 
//   window.onload = windowActions;
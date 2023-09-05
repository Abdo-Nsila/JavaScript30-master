
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = [];

fetch(endpoint)
.then(res => res.json())
.then(data => cities.push(data));

const input = document.querySelector(".search")

input.addEventListener('input',(e)=>{
    const search_input = e.target.value
    const regx = new RegExp(search_input,'gi')
    const new_cities = cities[0].filter(obj => obj.city.match(regx) || obj.state.match(regx))
    // console.log(new_cities)
    addData(new_cities,search_input)
})

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
}


function addData(cities,search_input){
    const ul = document.getElementById('list');
    ul.innerHTML = "";
    const html = cities.map(citie => {
        const regx = new RegExp(search_input,'gi')
        const new_city = citie.city.replace(regx, `<span class="hl">${search_input}</span>`)
        const new_state = citie.state.replace(regx, `<span class="hl">${search_input}</span>`)
        return`
            <li>
                <span class="name">${new_city}, ${new_state}</span>
                <span class="population">${numberWithCommas(citie.population)}</span>
            </li>
        `
    }).join('')
    ul.innerHTML = html;
};

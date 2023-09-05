const { createElement } = require("react");

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = [];
fetch(endpoint)
.then(res => res.json())
.then(data => cities.push(data));

console.log(cities);

const ul = document.getElementById('list');
const btn = document.getElementById('btn');

btn.addEventListener('click',addData);

function addData(){
    ul.innerHTML = "";
    cities[0].forEach(e => {
        var li =  ul.createElement('li');
        li.innerHTML = e.city;
    });

};

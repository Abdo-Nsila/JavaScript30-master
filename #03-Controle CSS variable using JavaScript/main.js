const img = document.getElementById('img');
const box = document.getElementById('box');


function update(input){
    const inputType = input.attributes[1].value ;
    const inputValue = input.value ;
    inputType == "spacing" ? img.style.transform = `translateX(${+inputValue}px) translateY(${+inputValue}px)` : false ;
    inputType == "blur" ? img.style.filter = `blur(${+inputValue}px)` : false ;
    inputType == "color" ? box.style.backgroundColor = inputValue : false ;
};

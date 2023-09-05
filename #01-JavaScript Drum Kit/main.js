const all_key = document.getElementsByClassName('key');
const data_keys = [...all_key].map(i=>i.attributes[1].value);

document.addEventListener('keypress', (event) => {
    var name = event.key;
    [...all_key].map(async i=>{
        if(i.attributes[1].value===name){
            i.childNodes[1].currentTime = 0;
            await i.childNodes[1].play();
            i.classList.add('playing')
            setTimeout(function() {
                i.classList.remove("playing");
              }, 80);
        }
    });
}, false);

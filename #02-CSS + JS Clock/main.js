const flesh1 = document.getElementById('flesh1');
const flesh2 = document.getElementById('flesh2');
const flesh3 = document.getElementById('flesh3');
const numClock = document.getElementById('num-clock');

const date = new Date();


time = {
    'seconds': date.getSeconds(),
    'minutes': date.getMinutes(),
    'hours': date.getHours(),
}
posDeg = {
    'degS': time.seconds*6,
    'degM': time.minutes*6,
    'degH': (time.hours*30)+((time.minutes*30)/60),
}

// 5 part => 60 min => 30 deg 
// deg => (min * 30) 60


//! SET Time to current time
flesh1.style.transform = `translateY(-50%) rotate(${posDeg.degS.toString()}deg)`;
flesh2.style.transform = `translateY(-50%) rotate(${posDeg.degM.toString()}deg)`;
flesh3.style.transform = `translateY(-50%) rotate(${posDeg.degH.toString()}deg)`;


function move(){
    // console.log(time.seconds,time.minutes,time.hours)
    time.seconds += 1 ;
    posDeg.degS += 6;
    flesh1.style.transform = `translateY(-50%) rotate(${posDeg.degS.toString()}deg)`;

    if(time.seconds == 60){
        time.minutes += 1;
        time.seconds = 0;
        posDeg.degM += 6;
        posDeg.degH = (time.hours*30)+((time.minutes*30)/60);
        flesh2.style.transform = `translateY(-50%) rotate(${posDeg.degM.toString()}deg)`;
        flesh3.style.transform = `translateY(-50%) rotate(${posDeg.degH.toString()}deg)`;
    }
    if(time.minutes == 60){
        time.hours += 1;
        time.minutes= 0;
    }
    if(time.hours == 24){
        time.hours = 0;
    }
    numClock.innerText = time.hours+":"+time.minutes+":"+time.seconds ;
};
setInterval(move,1000)


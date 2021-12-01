var seconds = 0;
var interval;
let timer = document.getElementById("timer");
let cycles = document.getElementById("cycles");

function nextInterval() {
    countdown(25);
}

function countdown(mins) {
   seconds = mins*60 || 0;     
   interval = setInterval(function() {
        seconds--;
        timer.innerText = `${Math.floor(seconds / 60)}:${seconds % 60}`;
        if(!seconds){
             clearInterval(interval);
        }
   },1000)
}

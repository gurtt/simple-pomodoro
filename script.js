var seconds = 0;
var cyclesDone = 0;
const POMODORO_LENGTH = 4;
var interval;
let timer = document.getElementById("timer");
let cycles = document.getElementById("cycles");

function nextInterval() {
    if (cyclesDone == POMODORO_LENGTH) {
        countdown(5);
    } else {
        countdown(25);
    }
}

function countdown(mins) {
   seconds = mins*60 || 0;     
   interval = setInterval(function() {
        seconds--;
        timer.innerText = `${Math.floor(seconds / 60)}:${seconds % 60}`;
        if(!seconds){
             clearInterval(interval);
             if (cyclesDone == POMODORO_LENGTH) {
                cyclesDone = 0;
            } else {
                cyclesDone++;
            }
            cycles.innerText = cyclesDone;
        }
   },1000)
}

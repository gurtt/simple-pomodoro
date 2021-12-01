var seconds = 0;
var interval;

function countdown(mins) {
   seconds = mins*60 || 0;     
   interval = setInterval(function() {
        seconds--;
        if(!seconds){
             clearInterval(interval); 

        }
   },1000)
}

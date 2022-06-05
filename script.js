let seconds = 00
let minutes = 00
let hours = 00

let getSeconds = document.querySelector('.seconds')
let getMinutes = document.querySelector('.minutes')
let getHours = document.querySelector('.hours')

let btnStart = document.querySelector('.start')

let btnStop = document.querySelector('.stop')

let btnReset = document.querySelector('.reset')

let interval;

btnStart.addEventListener('click',()=>{
   interval = setInterval(startTimer, 1000)
})

btnStop.addEventListener('click',()=>{
    clearInterval( interval)
})

btnReset.addEventListener('click',()=>{
    clearInterval( interval)
    seconds = '00';
    minutes = '00';
    hours = '00';
    getSeconds.innerHTML = seconds
    getMinutes.innerHTML = minutes
    getHours.innerHTML = hours
})

function startTimer(){
    seconds++;
    if(seconds <=9){
        getSeconds.innerHTML = '0' + seconds
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds
    }
    if(seconds > 99){
        minutes++;
        getMinutes.innerHTML = '0' + minutes;
        seconds = 0
        getSeconds.innerHTML = '0' + 0
    }
    if(minutes > 9){
        getMinutes.innerHTML = minutes
    }
    if(minutes > 99){
        hours++;
        getHours.innerHTML = '0' + hours
        minutes = 0
        getMinutes.innerHTML = '0' + 0
    }
    if(hours > 9){
        getHours.innerHTML = hours
    }
}
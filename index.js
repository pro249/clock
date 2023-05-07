let clock = document.querySelector('#clock');

let liveClock = () => {
let date = new Date();
let hour = date.getHours();
let minite= date.getMinutes();
let second = date.getSeconds();
let milisecond = date.getMilliseconds();
clock.innerText = hour + ' : ' + minite + ' : ' + second + ' : ' + milisecond; 
}
setInterval(liveClock, 1);

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const sekunda = document.querySelector('.sekunda');
const minuta = document.querySelector('.minuta');
const godzina = document.querySelector('.godzina');
var seconds2 = 0;
var mins2 = 0;
var hours2 = 0;

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();

  if(seconds2 == 0)
  {
    seconds2 = seconds;
  }
  seconds2 = seconds2 + 1;
  const secondsDegrees = ((seconds2 / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  if(seconds == 59) {
    sekunda.innerHTML = `00`;
  }
  else if(seconds < 9){
    sekunda.innerHTML = `0${seconds + 1}`
  }
  else {
    sekunda.innerHTML = `${seconds + 1}`;
  }

  const mins = now.getMinutes();
  if(mins2 == 0)
  {
    mins2 = mins + (seconds / 60);
  }
  mins2 = mins2 + (1/60);
  const minsDegrees = ((mins2 / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  if(mins == 60) {
    minuta.innerHTML = `00:`;
  }
  else if(mins < 10){
    minuta.innerHTML = `0${mins}:`
  }
  else {
    minuta.innerHTML = `${mins}:`;
  }

  const hours = now.getHours();
  if(hours2 == 0)
  {
    hours2 = hours + (mins / 60) + (seconds / 3600);
  }
  hours2 = hours2 + (1/3600);
  const hoursDegrees = ((hours2 / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  if(hours == 24) {
    godzina.innerHTML = `00:`;
  }
  else if(hours < 10){
    godzina.innerHTML = `0${hours}:`
  }
  else {
    godzina.innerHTML = `${hours}:`;
  }
}

setInterval(setDate, 1000);

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const futureDate = new Date(2026, 0, 20, 23, 12, 30);
console.log(futureDate.getDate());
console.log(futureDate.getHours());
console.log(futureDate.getMinutes());
console.log(futureDate.getSeconds());

let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

setInterval(() => {
  const currentDate = new Date();
  days = parseInt(futureDate.getDate() - currentDate.getDate());
  hours = parseInt(futureDate.getHours() - currentDate.getHours());

  minutes = parseInt(futureDate.getMinutes() - currentDate.getMinutes());
  seconds = parseInt(futureDate.getSeconds() - currentDate.getSeconds());

  if (seconds < 0) {
    seconds += 60;
    minutes--;
    secondsEl.textContent = seconds;
  } else {
    secondsEl.textContent = seconds;
  }

  if (minutes < 0) {
    minutes += 60;
    hours--;
    minutesEl.textContent = minutes;
  } else {
    minutesEl.textContent = minutes;
  }

  if (hours < 0) {
    hours += 60;
    days--;
    hoursEl.textContent = hours;
  } else {
    hoursEl.textContent = hours;
  }

  daysEl.textContent = days;
}, 1000);

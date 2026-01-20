const circle = document.querySelector("circle");
const progress = document.getElementById("progress-value");

let counter = 0;

setInterval(() => {
  if (counter < 65) {
    counter++;
    progress.innerHTML = counter + "%";
  } else {
    clearInterval();
  }
}, 30);

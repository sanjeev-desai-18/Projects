const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

const hourSpan = document.getElementById("hour");
const minuteSpan = document.getElementById("minute");
const secondSpan = document.getElementById("second");

let hour = 0;
let minute = 0;
let second = 0;
let isTimerOn = false;

startBtn.addEventListener("click", () => {
  if (!isTimerOn) {
    isTimerOn = true;
  }
});
pauseBtn.addEventListener("click", () => {
  if (isTimerOn) {
    isTimerOn = false;
  }
});

resetBtn.addEventListener("click", () => {
  hour = 0;
  minute = 0;
  second = 0;
  isTimerOn = false;
  updateDisplay();
});

setInterval(() => {
  if (isTimerOn) {
    second++;
    if (second > 60) {
      second = 0;
      minute++;
    }
    if (minute > 60) {
      minute = 0;
      hour++;
    }

    updateDisplay();
  }
}, 1000);

function updateDisplay() {
  secondSpan.textContent = second < 10 ? `0${second}` : second;
  minuteSpan.textContent = minute < 10 ? `0${minute}` : minute;
  hourSpan.textContent = hour < 10 ? `0${hour}` : hour;
}

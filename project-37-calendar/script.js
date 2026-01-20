const dateEl = document.getElementById("date");
const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");

window.addEventListener("DOMContentLoaded", () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = new Date();
  console.log(currentDate);
  let day = currentDate.getDay();
  let date = currentDate.getDate();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();

  console.table(day, date, month, year);

  dayEl.textContent = days[day];
  dateEl.textContent = date;
  monthEl.textContent = months[month];
  yearEl.textContent = year;
});

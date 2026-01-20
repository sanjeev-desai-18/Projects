const dateElement = document.getElementById("dob");
const calculateBtn = document.getElementById("calculate-btn");
const year = document.getElementById("year");
const month = document.getElementById("month");
const days = document.getElementById("days");
const resultContainer = document.querySelector(".result-container");

calculateBtn.addEventListener("click", calculateAge);

function calculateAge() {
  const dateOfBirth = new Date(dateElement.value);
  let dobYear = dateOfBirth.getFullYear();
  let dobMonth = dateOfBirth.getMonth();
  let dobDay = dateOfBirth.getDate();
  console.log(dobYear, dobMonth, dobDay);

  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();
  console.log(currentDate);

  let ageYear = currentYear - dobYear;
  let ageMonth = currentMonth - dobMonth;
  let ageDay = currentDay - dobDay;

  if (ageMonth <= 0) {
    ageYear--;
    ageMonth += 12;
  }

  if (ageDay <= 0) {
    ageMonth--;
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    ageDay += previousMonth.getDate();
  }
  updateResult(ageYear, ageMonth, ageDay);
  console.log(ageYear, ageMonth, ageDay);
}

function updateResult(ageYear, ageMonth, ageDay) {
  resultContainer.classList.remove("hidden");
  year.textContent = ageYear;
  month.textContent = ageMonth;
  days.textContent = ageDay;
}

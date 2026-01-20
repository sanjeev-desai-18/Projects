const submitBtn = document.getElementById("submit-btn");
const okBtn = document.getElementById("ok-btn");
const popUpContainer = document.querySelector(".pop-up-container");

submitBtn.addEventListener("click", showPopUp);
okBtn.addEventListener("click", hidePopUp);

function showPopUp() {
  popUpContainer.classList.remove("hidden");
  submitBtn.classList.add("hidden");
}

function hidePopUp() {
  popUpContainer.classList.add("hidden");
  submitBtn.classList.remove("hidden");
}

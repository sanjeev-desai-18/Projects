const scriptUrl =
  "https://script.google.com/macros/s/AKfycbzUCSE4KrdHEK2B2OrTxLJfgAug1g0yiQJ1SNHDlcNDbHutpg-vrqwTk8GLFnkqftw/exec";

const form = document.forms["submit-to-google-sheet"];
const successMsg = document.getElementById("success-msg");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  successMsg.classList.remove("hidden");

  fetch(scriptUrl, {
    method: "POST",
    mode: "no-cors",
    body: new FormData(form),
  })
    .then((response) => {
      console.log("success !", response);
    })
    .catch((error) => {
      console.error("Error !", error.message);
    });

  setTimeout(() => {
    successMsg.classList.add("hidden");
    emailInput.value = "";
  }, 5000);
});

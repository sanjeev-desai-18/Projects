const password = document.getElementById("password");
const passwdLength = document.getElementById("password-length");
const passwdLengthValue = document.getElementById("password-length-value");
const inlcudeUppercase = document.getElementById("uppercase");
const includeLowercase = document.getElementById("lowercase");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const passwdStrength = document.getElementById("password-strength");
const passwdStrengthBar = document.getElementById("password-strength-bar");
const copyBtn = document.getElementById("copy-btn");
const copySucess = document.getElementById("copy-success");

const uppercaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseAlpha = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

//

generateBtn.addEventListener("click", generatePasswd);
copyBtn.addEventListener("click", copyPasswd);
passwdLength.addEventListener("input", () => {
  passwdLengthValue.textContent = passwdLength.value;
});

let passwdStrengthValue = 0;

function generatePasswd() {
  let passwdSourceStr = "";
  let passwdStr = "";

  const length = parseInt(passwdLength.value);
  const checkUppercase = inlcudeUppercase.checked;
  const checkLowercase = includeLowercase.checked;
  const checkNumbers = includeNumbers.checked;
  const checkSymbols = includeSymbols.checked;

  if (length < 8) {
    passwdStrengthValue += 7;
  } else if (length < 11) {
    passwdStrengthValue += 14;
  } else {
    passwdStrengthValue += 20;
  }

  if (checkUppercase) {
    passwdSourceStr += uppercaseAlpha;
    passwdStrengthValue += 20;
  }
  if (checkLowercase) {
    passwdSourceStr += lowercaseAlpha;
    passwdStrengthValue += 20;
  }
  if (checkNumbers) {
    passwdSourceStr += numbers;
    passwdStrengthValue += 20;
  }
  if (checkSymbols) {
    passwdSourceStr += symbols;
    passwdStrengthValue += 20;
  }

  for (let i = 0; i <= length; i++) {
    let index = randomIndexGenerator(passwdSourceStr.length);
    passwdStr += passwdSourceStr[index];
  }
  password.value = passwdStr;
  updateStrengthBar(passwdStrengthValue);
  passwdStrengthValue = 0;
}

function randomIndexGenerator(sourceLength) {
  return Math.floor(Math.random() * sourceLength);
}

function updateStrengthBar(strengthValue) {
  let strengthText = "";
  let width = 0;
  let bgcolor = "";
  if (strengthValue < 20) {
    strengthText = "Very Poor";
    width = 20;
    bgcolor = "--WEAK-COLOR";
  } else if (strengthValue < 40) {
    strengthText = "Poor";
    width = 40;
    bgcolor = "--MEDIUM-COLOR";
  } else if (strengthValue < 60) {
    strengthText = "Moderate";
    width = 60;
    bgcolor = "--MEDIUM-COLOR";
  } else if (strengthValue < 80) {
    strengthText = "Strong";
    width = 80;
    bgcolor = "--STRONG-COLOR";
  } else {
    strengthText = "Very Strong";
    width = 100;
    bgcolor = "--STRONG-COLOR";
  }

  passwdStrength.textContent = strengthText;
  passwdStrengthBar.style.height = "100%";
  passwdStrengthBar.style.borderRadius = "5px";
  passwdStrengthBar.style.width = width + "%";
  passwdStrengthBar.style.backgroundColor = `var(${bgcolor})`;
}

function copyPasswd() {
  if (!password.value) return;
  navigator.clipboard
    .writeText(password.value)
    .then(() => {
      copyBtn.classList.add("hidden");
      copySucess.classList.remove("hidden");
      setTimeout(() => {
        copyBtn.classList.remove("hidden");
        copySucess.classList.add("hidden");
      }, 1500);
    })
    .catch((error) => {
      console.log(error, "Could not copy text");
    });
}

window.addEventListener("DOMContentLoaded", generatePasswd);

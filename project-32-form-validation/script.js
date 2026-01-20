const form = document.querySelector("form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

const hideShowIcon = document.querySelectorAll("i");

form.addEventListener("submit", submitForm);

hideShowIcon.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    console.log(e.target);
    icon.classList.toggle("fa-eye-slash");
    icon.classList.toggle("fa-eye");
    if (icon.classList.contains("fa-eye")) {
      icon.parentElement.querySelector("input").type = "text";
    } else {
      icon.parentElement.querySelector("input").type = "password";
    }
  });
});

console.log(hideShowIcon);

function submitForm(e) {
  e.preventDefault();
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  const inputArray = Array.of(
    firstNameInput,
    lastNameInput,
    emailInput,
    passwordInput,
    confirmPasswordInput
  );

  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      const p = input.parentElement.querySelector("p");
      if (input.id === "first-name") {
        p.textContent = "Enter first name";
        p.classList.remove("hidden");
      } else if (input.id === "last-name" && firstNameInput.value) {
        console.log("last name condition true");

        p.textContent = "Enter last name";
        p.classList.remove("hidden");
      } else if (input.id !== "first-name" && input.id !== "last-name") {
        p.classList.remove("hidden");
      }
    } else {
      const p = input.parentElement.querySelector("p");
      p.classList.add("hidden");
      if (input.type === "email") {
        let isEmailValid = validateEmail(email);
        if (!isEmailValid) {
          p.textContent = "Enter a valid Email";
          p.classList.remove("hidden");
        } else {
          p.classList.add("hidden");
        }
      }

      let isPasswdValid = validatePasswd(password);
      if (input.id === "password") {
        if (isPasswdValid !== "OK") {
          p.textContent = isPasswdValid;
          p.classList.remove("hidden");
        } else {
          p.classList.add("hidden");
        }
      }

      if (input.id === "confirm-password") {
        if (password !== confirmPassword) {
          p.textContent = "Password don't match";
          p.classList.remove("hidden");
        } else {
          p.classList.add("hidden");
        }
      }
    }
  });
}

function validateEmail(email) {
  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  return regex.test(email);
}

function validatePasswd(password) {
  const capitalAlphaRegex = /[A-Z]+/;
  const smallAlphaRegex = /[a-z]+/;
  const numberRegex = /[0-9]+/;
  const symbolRegex = /[~`!@#$%^&*()_\-+=\[\]{}|\\:;"'<>,.?/]+/;

  if (password.length <= 8 && password !== "") {
    return "Password must be of atleast 8 char";
  } else if (!capitalAlphaRegex.test(password)) {
    return "Password must contain atleast one capital alphabet";
  } else if (!smallAlphaRegex.test(password)) {
    return "Password must contain atleast one small alphabet";
  } else if (!numberRegex.test(password)) {
    return "Password must contain atleast one numeric value";
  } else if (!symbolRegex.test(password)) {
    return "Password must contain atleast one symbol";
  } else {
    return "OK";
  }
}

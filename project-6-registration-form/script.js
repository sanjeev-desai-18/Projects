const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isRequiredValid = checkRequired([
    username,
    email,
    password,
    confirmPassword,
  ]);

  let isFormValid = isRequiredValid;
  if (isRequiredValid) {
    const isUserNameValid = checkLength(username, 3, 15);
    const isEmailValid = checkEmail(email);
    const isPasswordValid = checkLength(password, 6, 25);
    const isPasswordSimilar = checkSimilarPassword(password, confirmPassword);

    isFormValid =
      isUserNameValid && isEmailValid && isPasswordValid && isPasswordSimilar;
  }

  if (isFormValid) {
    alert("Registration successfull");
    form.reset();

    document
      .querySelectorAll(".form-group")
      .forEach((group) => (group.className = "form-group"));
  }
});

function checkSimilarPassword(input1, input2) {
  if (input1.value.trim() === input2.value.trim()) {
    showSucess(input2);
    return true;
  }
  showError(input2, "Password did not match");
  return false;
}

function checkEmail(input) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(input.value.trim())) {
    showSucess(input);
    return true;
  }
  showError(input, `Email is not valid`);
  return false;
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${formatFieldName(input)} must be atleast ${min} characters`
    );
    return false;
  } else if (input.value.length > max) {
    showError(
      input,
      `${formatFieldName(input)} must be less than ${max} characters`
    );
    return false;
  } else {
    showSucess(input);
    return true;
  }
}

function checkRequired(inputArray) {
  let isValid = true;
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${formatFieldName(input)} is required`);
      isValid = false;
    } else {
      showSucess(input);
    }
  });
  return isValid;
}

function formatFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  const small = formGroup.querySelector("small");
  small.textContent = message;
}

function showSucess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

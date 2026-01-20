const buttonContainer = document.querySelector(".button-container");
const toastIcon = document.querySelector("i");
const toastText = document.getElementById("toast-text");

const toastContainer = document.querySelector(".toast-container");
const toastTimer = document.querySelector(".toast-timer");

const buttons = Array.from(buttonContainer.children);
buttons.forEach((button) => {
  button.addEventListener("click", generateToastCard);
});

function generateToastCard(e) {
  let text = "";

  let toastIconClassList = "";
  let id = e.target.id.replace("-btn", "");
  if (e.target.id === "success-btn") {
    text = "Successfully submitted";
    toastIconClassList = "fa-solid fa-circle-check success";
  } else if (e.target.id === "error-btn") {
    text = "Please fix the error";
    toastIconClassList = "fa-solid fa-circle-xmark error";
  } else {
    text = "Invalid input, check again";
    toastIconClassList = "fa-solid fa-circle-exclamation invalid";
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<div class="toast-content">
          <i class="${toastIconClassList}" ></i>
          <p id="toast-text">${text}</p>
        </div>
        <div class="toast-timer ${id}"></div>
      </div>`;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.parentNode.removeChild(toast);
  }, 3000);
}

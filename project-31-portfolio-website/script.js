const nightModeIcon = document.getElementById("icon");
const body = document.querySelector("body");

nightModeIcon.addEventListener("click", changeTheme);

function changeTheme() {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    nightModeIcon.classList.remove("fa-sun");
    nightModeIcon.classList.add("fa-moon");
  } else {
    nightModeIcon.classList.remove("fa-moon");
    nightModeIcon.classList.add("fa-sun");
  }
}

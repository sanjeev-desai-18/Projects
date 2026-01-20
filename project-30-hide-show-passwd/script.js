const passwdInput = document.getElementById("passwd");
const hideShowIcon = document.querySelector("i");

let hidePasswd = true;
let passwd = "";
passwdInput.addEventListener("input", (e) => {
  passwd = passwdInput.value;
  console.log(passwd);
});

hideShowIcon.addEventListener("click", hideShowPasswd);

function hideShowPasswd() {
  if (hidePasswd) {
    hidePasswd = false;
    passwdInput.type = "text";
    hideShowIcon.classList.remove("fa-eye-slash");
    hideShowIcon.classList.add("fa-eye");
  } else {
    hidePasswd = true;
    passwdInput.type = "password";
    hideShowIcon.classList.remove("fa-eye");
    hideShowIcon.classList.add("fa-eye-slash");
  }
}

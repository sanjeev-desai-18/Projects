const textInput = document.getElementById("qr-text");
const generateBtn = document.getElementById("generate-btn");
const resultContainer = document.querySelector(".result-container");

const requestUrl = `https://quickchart.io/qr?text=`;

generateBtn.addEventListener("click", generateQR);

function generateQR() {
  if (!textInput.value.trim()) return;

  let textValue = textInput.value.trim();

  fetch(requestUrl + textValue)
    .then((response) => response.blob())
    .then((blob) => {
      resultContainer.innerHTML = "";
      const imgURL = URL.createObjectURL(blob);
      console.log(imgURL);
      const img = document.createElement("img");
      img.src = imgURL;
      img.className = "qr-image";
      resultContainer.appendChild(img);
    })
    .catch((error) => {
      console.log(error);
    });
}

const buttonContainer = document.querySelector(".button-container");

console.log(buttonContainer);
const image = document.querySelector("img");

const buttons = Array.from(buttonContainer.children);
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    image.src = `images/${button.id}.png`;
  });
});

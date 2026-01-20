const main = document.querySelector("main");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");

backBtn.addEventListener("click", () => {
  main.scrollLeft -= 900;
});

nextBtn.addEventListener("click", () => {
  main.scrollLeft += 900;
});

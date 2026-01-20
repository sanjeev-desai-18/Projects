const API_KEY = "iuE-BstXVZK9_X9uPv8CisO3t0xHoOgxosR_RFQy5J0";
const requestUrl = "https://api.unsplash.com/search/photos?";

let page = 1;
let per_page = 12;
const searchBox = document.getElementById("search-box");
// const searchBtn = document.getElementById("search-btn");
const formEL = document.querySelector("form");
const mainEl = document.querySelector("main");

const showMoreBtn = document.querySelector("#show-more-btn");

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImage();
});

formEL.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

async function searchImage() {
  const searchQuery = searchBox.value.trim();
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=${page}&per_page=${per_page}&query=${searchQuery}&orientation=landscape`,
    );

    const data = await response.json();

    let images = data.results;
    console.log(images);

    if (page === 1) {
      mainEl.innerHTML = "";
    }

    displayImages(images);

    console.log(data);
  } catch (error) {}
}

function displayImages(images) {
  images.forEach((image) => {
    const div = document.createElement("div");
    const a = document.createElement("a");
    const img = document.createElement("img");
    div.className = "image";
    a.href = image.links.html;
    img.src = image.urls.small_s3;

    a.appendChild(img);
    div.appendChild(a);

    mainEl.appendChild(div);
  });
}

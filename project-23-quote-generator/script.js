const quoteText = document.querySelector("blockquote");
const quoteAuthor = document.getElementById("quote-author");
const generateQuoteBtn = document.getElementById("generate-btn");
const shareQuoteBtn = document.getElementById("share-btn");
const quoteContainer = document.querySelector(".quote-container");

const url = `https://api.api-ninjas.com/v2/quotes?categories=success,wisdom&rand=${Date.now()}`;
const API_KEY = "+ExJ5O0lcZM4OpUUDDJ81g==fijjkkLjbm5HBIsq";

generateQuoteBtn.addEventListener("click", generateQuote);

function generateQuote() {
  fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("response : ", data);
      updateQuote(data[0]);
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateQuote(data) {
  quoteText.textContent = '"' + data.quote + '"';
  quoteAuthor.textContent = data.author;
}

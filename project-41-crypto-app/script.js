const requestUrl =
  "https://api.freecryptoapi.com/v1/getData?symbol=BTC+ETH+DOGE";

const bitcoinValue = document.getElementById("bitcoin-value");
const ethereumValue = document.getElementById("ethereum-value");
const dogecoinValue = document.getElementById("dogecoin-value");

fetch(requestUrl, {
  method: "GET",
  headers: {
    Authorization: "Bearer gk9og1pr1rjgv2dga6nz",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const symbols = data.symbols;
    console.log(symbols);

    bitcoinValue.textContent = "$" + parseInt(symbols[0].last).toFixed(2);

    ethereumValue.textContent = "$" + parseInt(symbols[1].last).toFixed(2);

    dogecoinValue.textContent = "$" + parseFloat(symbols[2].last).toFixed(2);
  });

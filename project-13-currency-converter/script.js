const converterForm = document.getElementById("converter-form");
const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");

const result = document.getElementById("result");

window.addEventListener("load", fetchCurrencies);
converterForm.addEventListener("submit", convertAmount);

async function fetchCurrencies() {
  // https://api.exchangerate-api.com/v4/latest/USD

  const response = await fetch(
    "https://api.exchangerate-api.com/v4/latest/USD"
  );
  const data = await response.json();

  //   console.log(data);
  const currencyOptions = Object.keys(data.rates);
  //   console.log(currencyOptions);

  currencyOptions.forEach((currency) => {
    const option1 = document.createElement("option");
    option1.value = currency;
    option1.textContent = currency;
    fromCurrency.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = currency;
    option2.textContent = currency;
    toCurrency.appendChild(option2);
  });
}

async function convertAmount(e) {
  e.preventDefault();

  const amount = parseFloat(amountInput.value.trim());
  const fromCurrencyValue = fromCurrency.value;
  const toCurrencyValue = toCurrency.value;

  if (amount < 0) {
    alert("Enter the correct amount!");
    return;
  }

  const response = await fetch(
    `https://api.exchangerate-api.com/v4/latest/${fromCurrencyValue}`
  );

  const data = await response.json();

  const rate = data.rates[toCurrencyValue];

  const convertedAmount = (amount * rate).toFixed(2);
  console.log(convertedAmount);

  result.textContent = `${amount} ${fromCurrencyValue} = ${convertedAmount} ${toCurrencyValue}`;
}

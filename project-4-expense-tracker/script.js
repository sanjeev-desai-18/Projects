const balanceEl = document.getElementById("balance");
const incomeAmountEl = document.getElementById("income-amount");
const expenseAmountEl = document.getElementById("expense-amount");
const transactionListEl = document.getElementById("transaction-list");
const transactionFormEl = document.getElementById("transaction-form");
const descriptionEl = document.getElementById("description");
const amountEl = document.getElementById("amount");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

transactionFormEl.addEventListener("submit", addTransaction);

function addTransaction(e) {
  e.preventDefault();

  //   get form values

  const description = descriptionEl.value.trim();
  const amount = parseFloat(amountEl.value);

  //   console.log(`description : ${description} \namount : ${amount}`);

  transactions.push({
    id: Date.now(),
    description: description,
    amount: amount,
  });

  localStorage.setItem("transactions", JSON.stringify(transactions));

  updateTransactionList();
  updateSummary();
}

function updateTransactionList() {
  transactionListEl.innerHTML = "";

  const sortedTransactions = [...transactions].reverse();

  sortedTransactions.forEach((transaction) => {
    const transactionEl = createTrasactionElement(transaction);
    transactionListEl.appendChild(transactionEl);
  });
}

function createTrasactionElement(transaction) {
  const li = document.createElement("li");
  li.classList.add("transaction");
  li.classList.add(transaction.amount > 0 ? "income" : "expenses");

  li.innerHTML = `
    <span>${transaction.description}</span>
    <span>${formatCurrency(transaction.amount)}
      <button class="delete-btn" onclick="removeTransaction(${
        transaction.id
      })">x</button>
    </span>
  `;

  return li;
}

function updateSummary() {
  const balance = transactions.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
  console.log(balance);

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  balanceEl.textContent = formatCurrency(balance);
  incomeAmountEl.textContent = formatCurrency(income);
  expenseAmountEl.textContent = formatCurrency(expenses);
}

function formatCurrency(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}

function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id != id);

  localStorage.setItem("transactions", JSON.stringify(transactions));

  updateSummary();
  updateTransactionList();
}

updateSummary();
updateTransactionList();

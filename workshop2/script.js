const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("transaction-list");
const form = document.getElementById("form");
const amount = document.getElementById("transaction-amount");
const name = document.getElementById("transaction-name");

const dataTransactions = [
  { id: 1, name: "รายรับ", amount: 5000 },
  { id: 2, name: "กับข้าว", amount: -200 },
  { id: 3, name: "ค่าบ้าน", amount: -1500 },
  { id: 4, name: "เงินเดือน", amount: 30000 },
  { id: 5, name: "ค่าไฟ", amount: -800 },
  { id: 6, name: "ค่ากิน", amount: -1000 },
];

const transactions = dataTransactions;

function init() {
  transactions.forEach(addDataToList);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name.value.trim() === "" || amount.value.trim() === "") {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    return;
  }

  const newTransaction = {
    id: transactions.length + 1,
    name: name.value,
    amount: parseFloat(amount.value),
  };

  transactions.push(newTransaction);
  addDataToList(newTransaction);
  updateValues();

  name.value = "";
  amount.value = "";
});

function deleteTransaction(id) {
  const transactionIndex = transactions.findIndex(
    (transaction) => transaction.id === id
  );
  if (transactionIndex !== -1) {
    transactions.splice(transactionIndex, 1);
    list.innerHTML = ""; // Clear the list
    transactions.forEach(addDataToList); // Re-populate the list
    updateValues(); // Update the values
  }
}

function addDataToList(transactions) {
  const symbol = transactions.amount < 0 ? "-" : "+";
  const item = document.createElement("li");
  item.innerHTML = `
    ${
      transactions.name
    } <span id="transaction-amount"> ${symbol} ฿${formatNumber(
    Math.abs(transactions.amount).toFixed(2)
  )}</span>
    <button id="delete-btn" class="delete-btn" onclick="deleteTransaction(${
      transactions.id
    })">ลบ</button>
  `;
  item.classList.add(transactions.amount < 0 ? "minus" : "plus");
  list.appendChild(item);
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateValues() {
  const amounts = transactions.map((e) => e.amount);
  const total = amounts
    .reduce((result, item) => (result += item), 0)
    .toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerText = `฿${formatNumber(total)}`;
  money_plus.innerText = `฿${formatNumber(income)}`;
  money_minus.innerText = `฿${formatNumber(expense)}`;
}

init();
updateValues();

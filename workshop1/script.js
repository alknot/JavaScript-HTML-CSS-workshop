const currency1 = document.getElementById("currency1");
const currency2 = document.getElementById("currency2");
const amount1 = document.getElementById("amount1");
const amount2 = document.getElementById("amount2");
const rateText = document.getElementById("rate");
const swapButton = document.getElementById("btn");

currency1.addEventListener("change", calculateMoney);
currency2.addEventListener("change", calculateMoney);
amount1.addEventListener("input", calculateMoney);
amount2.addEventListener("input", calculateMoney);

function calculateMoney() {
  const currency1Value = currency1.value;
  const currency2Value = currency2.value;
  let url1 = "https://api.exchangerate-api.com/v4/latest/" + currency1Value;
  console.log(url1);
  let url2 = `https://api.exchangerate-api.com/v4/latest/${currency2Value}`;
  console.log(url2);
  fetch(url1)
    .then((response) => response.json())
    .then((data) => data.rates[currency2Value])
    .then((rate) => {
      rateText.innerText = `1 ${currency1Value} = ${rate} ${currency2Value}`;
      amount2.value = (amount1.value * rate).toFixed(2);
    });
}

swapButton.addEventListener("click", () => {
  const temp = currency1.value;
  currency1.value = currency2.value;
  currency2.value = temp;
  calculateMoney();
});

calculateMoney();

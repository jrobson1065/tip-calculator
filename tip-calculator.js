const checkAmountInput = document.querySelector("#check-amount");
const resultSpan = document.querySelector(".tip-amount");
const tipPercentageInput = document.querySelector(".tip-percentage");

checkAmountInput.addEventListener("focus", function () {
  this.value = "";
});

checkAmountInput.addEventListener("change", function () {
  this.value = "$" + this.value;
  let checkAmount = checkAmountInput.value.slice(1);
  let tipPercentInputValue = tipPercentageInput.value;
  if (tipPercentInputValue === "") return false;
  let tipPercent = parseInt(tipPercentInputValue) / 100;
  calculateTip(parseInt(checkAmount), tipPercent);
});

tipPercentageInput.addEventListener("change", () => {
  let checkAmount = parseInt(checkAmountInput.value.slice(1));
  let tipPercent = parseInt(tipPercentageInput.value) / 100;
  if (checkAmount === 0) return false;
  calculateTip(checkAmount, tipPercent);
});

function calculateTip(checkAmount, tipPercent) {
  let tipAmount = checkAmount * tipPercent;
  resultSpan.innerText = "$" + tipAmount;
}

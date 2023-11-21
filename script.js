const currencyExchanged = document.querySelector(".currency-answ");
const currencyValue = document.querySelector(".currency-value");
const selectFrom = document.querySelector(".currency-from select");
const selectTo = document.querySelector(".currency-to select");

let value = null;
let fromCurrency = null;
let toCurrency = null;

const handleInputValue = (e) => {
  value = e.target.value;
  console.log(value);
};

const handleChangeFrom = (e) => {
  fromCurrency = e.target.value;
};

const handleChangeTo = (e) => {
  toCurrency = e.target.value;
};

currencyValue.addEventListener("input", handleInputValue);
selectFrom.addEventListener("change", handleChangeFrom);
selectTo.addEventListener("change", handleChangeTo);

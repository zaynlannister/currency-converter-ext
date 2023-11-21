const currencyExchanged = document.querySelector(".currency-answ input");
const currencyValue = document.querySelector(".currency-value");
const selectFrom = document.querySelector(".currency-from select");
const selectTo = document.querySelector(".currency-to select");

let value = null;
let fromCurrency = "";
let toCurrency = "";
let currentCurrency = null;

const setInputValue = async () => {
  const API = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}/${toCurrency}.json`;
  if (fromCurrency && toCurrency && !isNaN(parseInt(currencyValue.value))) {
    await fetch(API)
      .then((res) => res.json())
      .then(async (res) => {
        currentCurrency = res[toCurrency];
      });
    currencyExchanged.value = exchange(
      currencyValue.value,
      currentCurrency
    ).toFixed(2);
  } else {
    currencyExchanged.value = "Choose currency!";
  }
};

const exchange = (value, to) => {
  return parseInt(value) * to;
};

const handleInputValue = (e) => {
  value = e.target.value;
  setInputValue();
};

const handleChangeFrom = (e) => {
  fromCurrency = e.target.value;
  setInputValue();
};

const handleChangeTo = (e) => {
  toCurrency = e.target.value;
  setInputValue();
};

currencyValue.addEventListener("input", handleInputValue);
selectFrom.addEventListener("change", handleChangeFrom);
selectTo.addEventListener("change", handleChangeTo);

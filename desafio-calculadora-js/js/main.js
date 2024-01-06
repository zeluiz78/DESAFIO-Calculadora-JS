const inputNumber1 = document.forms.calculator.number1;
inputNumber1.addEventListener("change", handleInputChange);
inputNumber1.addEventListener("input", handleInputTyping);

const inputNumber2 = document.forms.calculator.number2;
inputNumber2.addEventListener("change", handleInputChange);
inputNumber2.addEventListener("input", handleInputTyping);

const btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", handleBtnClearClick);

const btnPlus = document.querySelector("#btn-plus");
btnPlus.addEventListener("click", handleBtnPlusClick);

const btnTimes = document.querySelector("#btn-times");
btnTimes.addEventListener("click", handleBtnTimesClick);

const resultBox = document.querySelector("#result-box");

function handleBtnTimesClick(event) {
  event.preventDefault();
  const prod = Number(inputNumber1.value.replace(",", ".")) * Number(inputNumber2.value.replace(",", "."));
  handleResultChange(prod);
}

function handleBtnPlusClick(event) {
  event.preventDefault();
  const sum = Number(inputNumber1.value.replace(",", ".")) + Number(inputNumber2.value.replace(",", "."));
  handleResultChange(sum);
}

function handleBtnClearClick(event) {
  event.preventDefault();
  const inputs = document.querySelectorAll("input");
  inputs.forEach((item) => {
    item.value = "";
    item.classList.remove("input-error");
  });
  handleResultChange(0);
}

function handleInputTyping(event) {
  event.target.value = event.target.value.replace(/([^0-9])(,{0})([^0-9])|[a-z]/gi, "");
}

function handleInputChange(event) {
  if (isNumber(event.target.value.replace(",", "."))) {
    event.target.classList.remove("input-error");
  } else {
    event.target.classList.add("input-error");
  }
}

function handleResultChange(value) {
    if (isNumber(value)) {
        resultBox.innerHTML = value;
    } else {
        resultBox.innerHTML = "Erro";
    }
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

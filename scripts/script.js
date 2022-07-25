// Takes input 0-9
// Add event listeners to numbers
// Stores input num 1
// Shows num 1. - template literal
// Takes operator
// Stores operator - boolean for which function?
// Shows operator/screen?/highlight? - template literal
// Takes input num 2
// Stores input num 2
// Shows sum on equals

// let textOutput = "";
let numbers = "";
let num2 = "";
let operator;
let sum = null;
let equal;

const outputScreen = document.querySelector("p.output");
const numberButtons = document.querySelectorAll("button.numbers");
const operators = document.querySelectorAll("button.operators");
const clearButton = document.querySelector(".top-row.clear");
const equals = document.querySelector("button.equals");

numberButtons.forEach((element) => {
  element.addEventListener("click", () => {
    numbers += element.value;
    console.log(element);
    showPressButtons(numbers);
  });
});

operators.forEach((element) => {
  element.addEventListener("click", () => {
    operator = element.className;
    console.log(operator);
    getSum(operator);
  });
});

equals.addEventListener("click", () => {
  equal = operator;
  getSum(equal);
});

clearButton.addEventListener("click", () => {
  numbers = "";
  num2 = "";
  operator = null;
  sum = null;
  equal = null;
  outputScreen.textContent = "";
});

function showPressButtons(numbers) {
  outputScreen.textContent = numbers;
}

function getSum(operator) {
  console.log(operator);
  if (sum === null) {
    sum = numbers;
    numbers = "";
    return;
  }
  if (operator === "operators add") {
    sum = +sum + +numbers;
    numbers = "";
    outputScreen.textContent = sum;
  }
  if (operator === "operators subtract") {
    sum = +sum - +numbers;
    numbers = "";
    outputScreen.textContent = sum;
  }
  if (operator === "operators multiply") {
    sum = +sum * +numbers;
    numbers = "";
  }
  if (operator === "operators divide") {
    sum = Number.parseFloat(sum / numbers).toFixed(4);
  }
  return (outputScreen.textContent = sum);
}

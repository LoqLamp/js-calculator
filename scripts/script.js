"use strict";

// let textOutput = "";
let currentNumber = "";
let previousNumber = "";
let operator = [];
let previousOperator = [];
let result = null;
let equalBtn = [];

const outputScreen = document.querySelector("p.output");
const numberButtons = document.querySelectorAll("button.numbers");
const decimalPlace = document.querySelector("button.dot");
const operators = document.querySelectorAll("button.operators");
const clearButton = document.querySelector(".top-row.clear");
const equalButton = document.querySelector("button.equals");

const addNumbers = function (previousNumber, currentNumber) {
  return +previousNumber + +currentNumber;
};

const subtractNumbers = function (previousNumber, currentNumber) {
  return previousNumber - currentNumber;
};

const multiplyNumbers = function (previousNumber, currentNumber) {
  return previousNumber * currentNumber;
};

const divideNumbers = function (previousNumber, currentNumber) {
  if (previousNumber || currentNumber === 0) {
    return (outputScreen.textContent = "Nice Try!");
  }
  if (previousNumber % currentNumber === 0) {
    return previousNumber / currentNumber;
  }
  return Number.parseFloat(previousNumber / currentNumber).toFixed(4);
};

numberButtons.forEach((numButton) => {
  numButton.addEventListener("click", () => {
    console.log(numButton);
    showPressButtons(numButton.value);
    getNumbers(numButton.value);
  });
});

decimalPlace.addEventListener("click", () => {
  showPressButtons(decimalPlace.value);
  getNumbers(decimalPlace.value);
  decimalPlace.disabled = true;
});

function getNumbers(numButton) {
  let num1 = "";
  let num2 = "";
  if (equalBtn[1] === "reset") {
    outputScreen.textContent = numButton;
    equalBtn[1] = "noReset";
  }
  if (operator.length === 0) {
    num1 += numButton;
  } else if (operator.length === 1) {
    num2 += numButton;
  }

  previousNumber += num1;
  currentNumber += num2;
  console.log(currentNumber, previousNumber, num1, num2);
}
console.log(currentNumber);

operators.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    getOperator(operatorButton.value);
    decimalPlace.disabled = false;
    console.log(operator);
  });
});

function getOperator(operatorValue) {
  operator.unshift(operatorValue);
  if (operator.length >= 2) {
    previousOperator = operator.pop();
    operate(previousNumber, currentNumber);
  }
  // outputScreen.textContent = "";
  console.log(operator);
}

equalButton.addEventListener("click", () => {
  equalBtn.splice(0, 2, true, "noReset");
  previousOperator = operator.pop();
  operate(previousNumber, currentNumber);
});

clearButton.addEventListener("click", () => {
  currentNumber = "";
  previousNumber = "";
  operator = [];
  previousOperator = [];
  result = null;
  equalBtn = [];
  outputScreen.textContent = "";
});

function showPressButtons(numButton) {
  outputScreen.textContent += numButton;
}

function operate() {
  if (previousOperator === "+") {
    result = addNumbers(previousNumber, currentNumber);
  } else if (previousOperator === "-") {
    result = subtractNumbers(previousNumber, currentNumber);
  } else if (previousOperator === "x") {
    result = multiplyNumbers(previousNumber, currentNumber);
  } else if (previousOperator === "/") {
    result = divideNumbers(previousNumber, currentNumber);
  }
  currentNumber = "";
  decimalPlace.disabled = false;
  previousNumber = result;
  outputScreen.textContent = result;
  console.log(result);
  if (equalBtn[0] === true) {
    previousNumber = "";
    equalBtn.splice(0, 2, false, "reset");
  }
}

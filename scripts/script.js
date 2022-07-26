"use strict";

// let textOutput = "";
let currentNumber = "";
let previousNumber = "";
let operator = [];
let previousOperator = [];
let result = null;
let equalBtn = null;

const outputScreen = document.querySelector("p.output");
const numberButtons = document.querySelectorAll("button.numbers");
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

function getNumbers(numButton) {
  let num1 = "";
  let num2 = "";
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
    console.log(operator);
  });
});

function getOperator(operatorValue) {
  operator.unshift(operatorValue);
  if (operator.length >= 2) {
    previousOperator = operator.pop();
    operate(previousNumber, currentNumber);
  }
  console.log(operator);
}

equalButton.addEventListener("click", () => {
  equalBtn = true;
  previousOperator = operator.pop();
  operate(previousNumber, currentNumber);
});

clearButton.addEventListener("click", () => {
  currentNumber = "";
  previousNumber = "";
  operator = [];
  previousOperator = [];
  result = null;
  equalBtn = null;
  outputScreen.textContent = "";
});

function showPressButtons(numButton) {
  outputScreen.textContent = numButton;
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
  previousNumber = result;
  outputScreen.textContent = result;
  console.log(result);
  if (equalBtn === true) {
    previousNumber = "";
    equalBtn = false;
  }
}

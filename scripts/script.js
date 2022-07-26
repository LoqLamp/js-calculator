"use strict";
// Takes input 0-9
// Add event listeners to currentNumber
// Stores input num 1
// Shows num 1. - template literal
// Takes operator
// Stores operator - boolean for which function?
// Shows operator/screen?/highlight? - template literal
// Takes input num 2
// Stores input num 2
// Shows result on equals

// let textOutput = "";
let currentNumber = "";
let previousNumber = "";
let operator = [];
let previousOperator = [];
let result = null;
let equal;

const outputScreen = document.querySelector("p.output");
const numberButtons = document.querySelectorAll("button.numbers");
const operators = document.querySelectorAll("button.operators");
const clearButton = document.querySelector(".top-row.clear");
const equals = document.querySelector("button.equals");

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
  if (operator.length < 1) {
    num1 += numButton;
  } else if (operator.length === 1) {
    num2 += numButton;
  } else if (operator.length >= 2) {
    operate(currentNumber, previousNumber, operator);
  }
  currentNumber += num1;
  previousNumber += num2;
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
  operator.push(operatorValue);
}
console.log(operator, previousOperator);

equals.addEventListener("click", () => {
  equal = operator;
  getSum(equal);
});

clearButton.addEventListener("click", () => {
  currentNumber = "";
  previousNumber = "";
  operator = null;
  result = null;
  equal = null;
  outputScreen.textContent = "";
});

function showPressButtons(numButton) {
  outputScreen.textContent = numButton;
}

function operate(currentNumber, previousNumber, operator) {}

const addNumbers = function (previousNumber, currentNumber) {
  return (result = +previousNumber + +currentNumber);
};

const subtractNumbers = function (previousNumber, currentNumber) {
  return previousNumber - currentNumber;
};

const multiplyNumbers = function (previousNumber, currentNumber) {
  return previousNumber * currentNumber;
};

const divideNumbers = function (previousNumber, currentNumber) {
  return Number.parseFloat(previousNumber / currentNumber).toFixed(4);
};

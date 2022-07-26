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
let operator;
let result = null;
let equal;

const outputScreen = document.querySelector("p.output");
const numberButtons = document.querySelectorAll("button.numbers");
const operators = document.querySelectorAll("button.operators");
const clearButton = document.querySelector(".top-row.clear");
const equals = document.querySelector("button.equals");

numberButtons.forEach((element) => {
  element.addEventListener("click", () => {
    currentNumber += element.value;
    console.log(element);
    showPressButtons(currentNumber);
  });
});

operators.forEach((element) => {
  element.addEventListener("click", () => {
    operator = element.value;
    console.log(operator);
    getSum(operator);
  });
});

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

function showPressButtons(currentNumber) {
  outputScreen.textContent = currentNumber;
}

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

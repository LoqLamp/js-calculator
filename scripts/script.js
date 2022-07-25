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

let num1 = "";
let num2;
let operator;
let sum;
const outputScreen = document.querySelector("p.output");

const numbers = document.querySelectorAll("button.numbers");
const operators = document.querySelectorAll("button.operators");

numbers.forEach((element) => {
  element.addEventListener("click", () => {
    num1 += element.value;
    console.log(element);
    showOutput(num1);
  });
});

function showOutput(num1) {
  outputScreen.textContent = num1;
}

operators.forEach((currentItem) => {
  currentItem.addEventListener("click", (e) => {
    num2 = num1;
    output.textContent = sum;
    console.log(e, currentItem);
  });
});

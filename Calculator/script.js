let previousOperand = "";
let currentOperand = "";
let operator = undefined;
let operators = ["+", "-", "/", "*"];

const display = document.querySelector("#calcExp");
const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e) => {
  filterDisplay(e);
});

const operate = function (operator, operand1, operand2) {
  let result;
  operand1 = parseFloat(operand1);
  operand2 = parseFloat(operand2);
  if (isNaN(operand1) || isNaN(operand2)) return;
  switch (operator) {
    case "+":
      result = add(operand1, operand2);
      break;
    case "-":
      result = substract(operand1, operand2);
      break
    case "*":
      result = multiply(operand1, operand2);
      break
    case "/":
      result = divide(operand1, operand2);
      break
    default:
      return
  }
  updateDisplay(result);
};

const add = function (a, b) {
  return a + b;
};

const substract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const appendNumber = function (number) {
  currentOperand += number;
};

const updateDisplay = function (text) {
  if (text != null) {
    display.value = text
  } else {
    display.value = currentOperand;
  }
  if (operator != null) {
    display.value = currentOperand;
  }
  // if(text != null){
  //   display.value = text;
  // }

};

const filterDisplay = function (e) {
  if (!isNaN(e.target.textContent)) {
    appendNumber(e.target.textContent);
    updateDisplay(e.target.textContent)
  } else if (operators.includes(e.target.textContent)) {
    alert(e.target.textContent);
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      updateDisplay(operate(operator, currentOperand, previousOperand));
    }
    operator = e.target.textContent;
    previousOperand = currentOperand;
    currentOperand = "";
    // alert(`The current operand is ${currentOperand} 
    //         and the previous operand is ${previousOperand}`);
  } else if (e.target.textContent === "=") {
    alert(`current operand is ${currentOperand}, previous operand is ${previousOperand}, operator is ${operator}`);
    updateDisplay(operate(operator, currentOperand, previousOperand));
  }
};

const clearDisplay = function () {
  const display = document.querySelector("#calcExp");
  display.value = "";
};
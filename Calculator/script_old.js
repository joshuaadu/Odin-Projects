const operands = {};
const operators = [];
const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e) => {
  filterDisplay(e);
});
const calcValues = { nextValue: false };
const operate = function (operator, operand1, operand2) {
  switch (operator) {
    case "+":
      return add(operand1, operand2);
    case "-":
      return substract(operand1, operand2);
    case "*":
      return multiply(operand1, operand2);

    case "/":
      return divide(operand1, operand2);
    default:
      return 0;
  }
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

const popDisplay = function (e, operatorPressed) {
  const display = document.querySelector("#calcExp");
  //   if (calcValues.nextValue) {
  //     clearDisplay(display);
  //     calcValues.nextValue = false;
  //   }
  //   if (!operatorPressed) {
  //     display.value += e.target.textContent;
  //   }
  display.value += e.target.textContent;
  return display.value;
};

const filterDisplay = function (e) {
  if (isNaN(e.target.textContent)) {
    //   if(e.target.)
    if (operands.previousNum) {
      //   calcValues.nextValue = true;
      operands["currentNum"] = popDisplay(e, true);
      alert(operands.currentNum);
    } else {
      operands["previousNum"] = popDisplay(e, true);
      alert(operands.previousNum);
    }
  } else {
    popDisplay(e);
  }
};

const clearDisplay = function () {
  const display = document.querySelector("#calcExp");
  display.value = "";
};

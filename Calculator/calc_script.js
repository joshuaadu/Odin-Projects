/* Calculator Project
        Concepts to use:
            functions
            loops
            array/array methods
            objects

*/
/*
let user_input = {
    current_num,
    previous_num,
    operator: "",
}
*/
let user_input = {}



/* 
Operator functions:
    add
    substract
    multiply
    divide: Display a snarky error message if the user tries to divide by 0
*/
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
    (b == 0)? "Invalid operation": a / b;
  };

// Operate function
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

/*
Update Display function:
    Click of the number buttons
    store display value in a variable
    Let users input decimals but typed only once

*/
function update_Display(element, button) {
    if (button.textContent == "." && [...element.value].includes(".")) {
        return
    }
    element.value += button.textContent;
}

// Clear function: clear all existing data/fresh start
const clear = function(element) {
  user_input = {};
  element.value = "";
}

// Store first number input when operator pressed
const press_operator = function(element, operator_btn) {
    // (user_input.current_num) ? 
    // user_input.previous_num = user_input.current_num :
    // user_input.current_num = element.value;
    user_input.operator = operator_btn.textContent;

    if (user_input.current_num) {
      user_input.previous_num = user_input.current_num ;
    }
    user_input.current_num = element.value; 

    console.log(user_input.current_num);
    console.log(user_input.previous_num);

}

// Save operation choose

// Call operate function when "=" presseed

// Update display with solution


/*
    Users should be able to string together several operations and get the right answer, 
    with each pair of numbers being evaluated at a time. 
    For example, 12 + 7 - 5 * 3 = should yield 42
    Note Your calculator should not evaluate more than a single pair of numbers at a time. 
    If you enter a number then an operator and another number that 
    calculation should be displayed if your next input is an operator. 
    The result of the calculation should be used as the first number in your new calculation.
*/


// Round answers with long decimals so that they don’t overflow the screen



// Implementation
const input = document.querySelector("#calcExp");
const operatorBtns = document.querySelectorAll(".operator");
const numberBtns = document.querySelectorAll(".numKeys");


numberBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(btn);
    update_Display(input, btn);
  })
});

  operatorBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      press_operator(input, btn);
    })
  })




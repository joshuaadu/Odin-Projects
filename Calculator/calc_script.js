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
  function add(a, b) {
    return a + b;
  };
  
  function substract(a, b) {
    return a - b;
  };
  
  function multiply(a, b) {
    return a * b;
  };
  
  function divide(a, b) {
    (b == 0)? "Invalid operation": a / b;
  };

// Operate function
function operate(operator, operand1, operand2) {
    if (!operand1){
      return
    }
    switch (operator) {
      case "+":
        console.log(operator)
        return add(operand1, operand2);
      case "-":
        console.log(operator)
        return substract(operand1, operand2);
      case "*":
        console.log(operator)
        return multiply(operand1, operand2);
  
      case "/":
        console.log(operator)
        return divide(operand1, operand2);
      default:
        return 1;
    }
  };

/*
Update Display function:
    Click of the number buttons
    store display value in a variable
    Let users input decimals but typed only once

*/
function update_Display(element, button, operator_pressed) {
    if (button.textContent == ".") {
      if (![...element.textContent].includes(".")) element.textContent += button.textContent;
      else return;
    }else if(element.textContent == "0" || operator_pressed == true){
      user_input.previous_num = user_input.current_num;
      element.textContent = button.textContent;
    }else{
      element.textContent += button.textContent;
    }
    
}

// Clear function: clear all existing data/fresh start
function clear(element) {
  user_input = {};
  element.textContent = "0";
}

// Delete last character
function del(element){
  element.textContent = element.textContent.slice(0, -1);
  if (element.textContent == "") element.textContent = "0";
}

// Store first number input when operator pressed
function press_operator(element, operator_btn) {
    user_input.current_num = parseFloat(element.textContent); 
    console.log("Current input: ", user_input.current_num);
    console.log("Previous input: ", user_input.previous_num);
    console.log("Operator pressed: ", user_input.operator);

    if (user_input.operator){
      element.textContent = operate(user_input.operator, user_input.previous_num, user_input.current_num);
    }else{
      user_input.operator = operator_btn.textContent; 
    }

    // Equal to function
  function equals(element){
    element.textContent = operate(user_input.operator, user_input.previous_num, user_input.current_num);
  }


   


}

function is_pressed(elements){
  let pressed;
  elements.forEach(btn => {
     if(btn.getAttribute("class").match("is_pressed")) pressed = true;
    //  else pressed = false;
  })
  return pressed;
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
const display = document.querySelector(".display");
const operatorBtns = document.querySelectorAll(".operator");
const numberBtns = document.querySelectorAll(".numKeys");
const clrbtn = document.querySelector("#btnClr");
const delbtn = document.querySelector("#btnDel");
const eql = document.querySelector("#btnEql");

// btnkeys.addEventListener("click", () => {
//   console.log("it qworks");
//   // (e.target.id == "btnClr")?
//   //  clear(display):
//   //  (e.target.id == "btnDel")?
//   //  del():
//   //  null
// })

clrbtn.addEventListener("click", ()=> {
  clear(display);
})

delbtn.addEventListener("click", ()=> {
  del(display);
})

numberBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(display);
    console.log(is_pressed(operatorBtns))
    update_Display(display, btn, is_pressed(operatorBtns));
    operatorBtns.forEach(btn => {
      btn.classList.remove("is_pressed");
    })
  })
});

  operatorBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btn.classList.add("is_pressed");
      press_operator(display, btn);
    })
  })

  eql.addEventListener("click", () => {
    equals(display);
  })




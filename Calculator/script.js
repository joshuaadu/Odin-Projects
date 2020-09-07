const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e)=>{
    popDisplay(e);
});

const operate = function(operator, operand1, operand2){
    switch (operator){
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
}

const add = function(a, b){
    return a + b;
}

const substract = function(a, b){
    return a - b;
}

const multiply = function(a, b){
    return a * b;
}

const divide = function(a, b){
    return a / b;
}

const popDisplay = function(e){
    const display = document.querySelector("#calcExp");
    display.value = e.target.textContent;
}

const operate = function(operator, operand1, operand2){
    switch (operator){
        case "+": 
            add(operand1, operand2);
            break;
        case "-":
            substract(operand1, operand2);
            break;
        case "*":
            multiply(operand1, operand2);
            break;
        case "/":
            divide(operand1, operand2);
            break;
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

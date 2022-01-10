//DOM elements
const showResult = document.querySelector('.result');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const equalBtn = document.querySelector('.equalKey');
const prevOperand = document.querySelector('.previous_operand');
const currOperand = document.querySelector('.current_operand');
prevOperand.textContent = ' ';
currOperand.textContent = ' ';
// Operators Functions
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
};
//display variables
let storedNumber = '';
let clickedOperator = '';
let firstNumber = '';
let result = '';
currOperand.textContent = 0;

numberBtn.forEach((number) => {
    number.addEventListener('click', function () {
        storedNumber += number.value;
        currOperand.textContent = storedNumber;
        if (storedNumber.includes('..')) {
            alert('Wrong Number Syntax');
            currOperand.textContent = 0;
        }
    })
});
operatorBtn.forEach((operator => {
    operator.addEventListener('click', function () {

        // save the first number
        firstNumber = storedNumber;

        // get the operator that was clicked
        clickedOperator = operator.textContent;
        prevOperand.textContent = storedNumber + clickedOperator;
        storedNumber = '';
    })
}));
equalBtn.addEventListener('click', function () {
    // when equals key is clicked call operate() function
    result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
    // update content of current operation with result and previous operand with the calculation, make storedNumber = result
    currOperand.textContent = parseFloat(result).toFixed(2);
    prevOperand.textContent = firstNumber + ' ' + clickedOperator + ' ' + storedNumber;
    storedNumber = result;
});
clearBtn.addEventListener('click', function () {
    prevOperand.textContent = '';
    currOperand.textContent = 0;
    storedNumber = '';
    clickedOperator = '';
    firstNumber = '';
    result = '';
});
deleteBtn.addEventListener('click', function () {
    if (storedNumber.length == 1) {
        storedNumber = '';
        currOperand.textContent = storedNumber;
    } else {
        storedNumber = storedNumber.substring(0, storedNumber.length - 1);
        currOperand.textContent = storedNumber;
    }


});
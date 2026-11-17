const display = document.getElementById("display");
const numBtn = document.querySelectorAll(".numBtn");
const opsBtn = document.querySelectorAll(".opsBtn");
const equalBtn = document.getElementById("equalBtn");
const prevAnswer = document.getElementById("prevAnswer");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const decimalBtn = document.getElementById("decimalBtn");

let firstOperand = 0;
let operator = "";
let secondOperand = 0;

function operate(operator, a, b) {
    if (operator === "+") {
        const sum = a + b;
        display.textContent = sum
    }
    else if (operator === "-") {
        const sum = a - b;
        display.textContent = sum
    }
    else if (operator === "*") {
        const sum = a * b;
        display.textContent = sum
    }
    else if (operator === "/") {
        const sum = Math.floor(a / b);
        display.textContent = sum
    }
}


let displayValue = "0";

numBtn.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent += button.innerHTML;
    })
});

opsBtn.forEach((button) => {
    button.addEventListener("click", () => {
        firstOperand = Number(display.textContent);
        display.textContent += button.innerHTML;
        operator = button.innerHTML;
        display.textContent = "";
    })
});

equalBtn.addEventListener("click", () => {
    if(operator !== "") {
        secondOperand = Number(display.textContent);
    }
    operate(operator, firstOperand, secondOperand);
})

clearBtn.addEventListener("click", () => {
    display.textContent = ""
});

prevAnswer.addEventListener("click", () => {
    if (firstOperand !== 0 && operator !== "" && secondOperand !== 0) {
        operate(operator, firstOperand, secondOperand);
    }
});
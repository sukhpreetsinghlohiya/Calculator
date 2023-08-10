let currentInput = "";
let currentOperator = "";
let currentResult = 0;

function appendToDisplay(value) {
  currentInput += value;
  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.getElementById("display");
  if (currentOperator !== "") {
    displayElement.textContent = `${currentResult} ${currentOperator} ${currentInput}`;
  } else {
    displayElement.textContent = currentInput || "0";
  }
}

function clearDisplay() {
  currentInput = "";
  currentOperator = "";
  currentResult = 0;
  updateDisplay();
}

function performOperation(operator) {
  currentOperator = operator;
  if (currentInput !== "") {
    currentResult = parseFloat(currentInput);
    currentInput = "";
  }
}

function performCalculation() {
  if (currentOperator !== "" && currentInput !== "") {
    const inputNumber = parseFloat(currentInput);
    switch (currentOperator) {
      case "+":
        currentResult += inputNumber;
        break;
      case "-":
        currentResult -= inputNumber;
        break;
      case "*":
        currentResult *= inputNumber;
        break;
      case "/":
        if (inputNumber !== 0) {
          currentResult /= inputNumber;
        } else {
          alert("Cannot divide by zero!");
          clearDisplay();
          return;
        }
        break;
    }
    currentInput = currentResult.toString();
    currentOperator = "";
    updateDisplay();
  }
}

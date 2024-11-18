let display = document.querySelector(".display");
let currentValue = "";
let previousValue = null;
let operation = null;

function appendNumber(number) {
  if (currentValue.length === 0 && number === "0") return;
  currentValue += number;
  updateDisplay();
}

function setOperation(op) {
  previousValue = parseFloat(currentValue);
  currentValue = "";
  operation = op;
  console.log(previousValue, operation); 
}

function calculateResult() {
  let result;
  const currentNum = parseFloat(currentValue);

  switch (operation) {
    case "+":
      result = previousValue + currentNum;
      break;
    case "-":
      result = previousValue - currentNum;
      break;
    case "*":
      result = previousValue * currentNum;
      break;
    case "/":
      if (currentNum !== 0) {
        result = previousValue / currentNum;
      } else {
        alert("Error!");
        clearAll(); 
        return; 
      }
      break;
    default:
      result = currentNum;
  }

  currentValue = String(result); 
  previousValue = result;
  updateDisplay(); 
}

function clearAll() {
  currentValue = "";
  previousValue = null;
  operation = null;
  display.value = ""; 
}

function updateDisplay() {
  display.value = currentValue;
}

function appendDot(dot) {
  if (!currentValue.includes(".")) {
    currentValue += dot;
    updateDisplay();
  }
}

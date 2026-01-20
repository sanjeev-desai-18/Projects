const resultContainer = document.getElementById("result");
const calculatorButtons = document.querySelector(".calc-btn-container");

let operationString = "";

const binaryOperators = ["*", "/", "+", "-"];

let specialOperators = ["AC", "DE", "="];
const buttons = Array.from(calculatorButtons.children);

buttons.forEach((button) => {
  button.addEventListener("click", calculateResult);
});

function calculateResult(e) {
  if (!specialOperators.includes(e.target.dataset["value"])) {
    operationString += e.target.dataset["value"];
    console.log(operationString);
    resultContainer.value = operationString;
  } else if (e.target.dataset.value === "=") {
    const operator = [];
    const operand = [];
    const arr1 = [...operationString.matchAll(/(0|[1-9]\d*)(\.\d+)?/g)];
    const arr2 = [...operationString.matchAll(/[+\-*/]/g)];
    arr1.forEach((item) => {
      operand.push(item[0]);
    });
    arr2.forEach((item) => {
      operator.push(item[0]);
    });
    let result = 1;
    const indexOfMultiplier = [];

    operator.forEach((symbol, index) => {
      if (symbol === "*" || symbol === "/") {
        indexOfMultiplier.push(index);
      }
    });
    console.log(indexOfMultiplier);
    indexOfMultiplier.forEach((numIndex) => {
      if (operator[numIndex] === "*") {
        result =
          parseFloat(operand[numIndex]) * parseFloat(operand[numIndex + 1]);
        operand[numIndex] = result;
      } else {
        result =
          parseFloat(operand[numIndex]) / parseFloat(operand[numIndex + 1]);
        operand[numIndex] = result;
      }
    });

    operand.forEach((value, index) => {
      if (typeof value === "number") {
        operand.splice(index + 1, 1);
      }
    });

    operator.forEach((value, index) => {
      if (value === "*" || value === "/") {
        operator.splice(index, 1);
      }
    });

    if (operand.length === operator.length + 1) {
      result = parseFloat(operand[0]);

      operator.forEach((symbol, index) => {
        if (symbol === "+") {
          result = result + parseFloat(operand[index + 1]);
        } else {
          result = result - parseFloat(operand[index + 1]);
        }
      });
    }

    resultContainer.value = result.toFixed(2).toString();

    console.log(operand);
    console.log(operator);
    console.log(result);
  } else if (e.target.dataset.value === "DE") {
    operationString = operationString.slice(0, -1);
    resultContainer.value = operationString;
  } else if (e.target.dataset.value === "AC") {
    operationString = "";
    resultContainer.value = operationString;
  }
}


//Defines basic operator functions
const add = function (num1, num2) {
  return +num1 + +num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};

let operate = function (operator, num1, num2) {
  switch (operator) {
    case "+": return add(num1, num2);
    case "-": return subtract(num1, num2);
    case "*": return multiply(num1, num2);
    case "/": return divide(num1, num2);
    default: return "error";
  }
};

//Produces solution for equation(s) entered into display
let calculate = function () {
  let solution = display.textContent;

  //Loop repeats as long as a valid equation is present 
  while (/[0-9|\.]+[\+|\-|\*|\/][0-9|\.]+/.test(solution)) {
    let firstEquation = solution.match(/[0-9|\.]+[\+|\-|\*|\/][0-9|\.]+/)[0];
    let operatorPosition = firstEquation.search(/[\+|\-|\*|\/]/);
    let num1 = firstEquation.slice(0, (operatorPosition));
    let operator = firstEquation.slice(operatorPosition, (operatorPosition + 1));
    let num2 = firstEquation.slice((operatorPosition + 1));
    let tempSolution = operate(operator, num1, num2);
    let remaining = solution.slice((firstEquation.length));
    solution = tempSolution + remaining;
  }
  return solution;
};

//Updates display content
const display = document.querySelector('#display p');
//Store digits user enters before hitting "="
let displayEntry = "";
display.textContent = displayEntry;
//Defines additional variable to track last solution returned  
let displaySolution = "placeholder";

//Tracks when decimals and operators may be added to display
let decimalAllowed = true;
let operatorAllowed = false;

const calcButtons = document.querySelectorAll('.calculatorButton');

calcButtons.forEach(calcButton => calcButton.addEventListener('click', () => {

  if (calcButton.id === "clear") {
    displayEntry = "";
    display.textContent = displayEntry;
  }

  //Clear out the old solution instead of adding onto it. Follows similar logic to Google calculator.
  //TODO - Find a better way to deal with large solutions containing exponenets
  else if (((/e/.test(display.textContent) && (calcButton.classList[1] === "number"))) ||
    ((display.textContent === displaySolution) && ((calcButton.classList[1] === "number") || (calcButton.classList[1] === "decimal" && decimalAllowed === true)))
  ) {
    displayEntry = `${calcButton.id}`;
    display.textContent = displayEntry;
    operatorAllowed = true;

    if (calcButton.id === ".") {
      decimalAllowed = false;
      operatorAllowed = false;
    }
  }

  else if (calcButton.id === "=") {
    //Executes only if display contains an equation
    if (/[0-9]+[\+|\-|\*|\/][0-9]+/.test(display.textContent)) {
      displaySolution = calculate();
      displayEntry = displaySolution;
      display.textContent = displaySolution;
    }
  }

  //Adds any other digit or operator. For decimals or operators, does not execute if that value is not allowed. 
  else if ((calcButton.id !== "." || decimalAllowed === true) && (calcButton.classList[1] !== "operator" || operatorAllowed === true)) {

    displayEntry += `${calcButton.id}`;
    display.textContent = displayEntry;
    operatorAllowed = true;

    if (calcButton.id === ".") {
      decimalAllowed = false;
    }

    if (calcButton.classList[1] === "operator") {
      decimalAllowed = true;
      operatorAllowed = false;
    }

  }
}
));


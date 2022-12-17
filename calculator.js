//Define basic opeartor functions

const add = function(num1, num2) {
  //fix to use numbers but return string
    return +num1 + +num2;
      
  };
  
  const subtract = function(num1, num2) {
    return num1 - num2;
  };
  
  const multiply = function(num1, num2) {
    return num1 * num2;
  };

  const divide = function(num1, num2) {
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
  }

  //Update display content

  const display = document.querySelector('#display p');
  let displayEntry = "";
  let displaySolution = "";
  let decimalAvailable = true;
  display.textContent = displayEntry;

  const calcButtons = document.querySelectorAll('.calculatorButton');
  calcButtons.forEach(calcButton => calcButton.addEventListener('click', () => {

    if (calcButton.id === "clear"){
      displayEntry = "";
      display.textContent = displayEntry;
    }

    else if (calcButton.id === "="){
      //Executes only if display contains an equation
      if  (/[0-9]+[\+|\-|\*|\/][0-9]+/.test(display.textContent)){
      displaySolution = calculate();
      displayEntry = displaySolution;
      display.textContent = displaySolution;
      }
    }

  //Starting over with new number after solution: Only execute if the key is not decimal, or if the last entered number does not contain a decimal
    else if (display.textContent === displaySolution && (calcButton.classList[1] === "number" || (calcButton.classList[1] === "decimal" && decimalAvailable === true))) {
        displayEntry = `${calcButton.id}`;
        display.textContent = displayEntry;

        if (calcButton.id === "."){
          decimalAvailable = false;
        }
      }

  //Adding any other digit or operator: Only execute if the key is not decimal, or if the last entered number does not contain a decimal
  else if (calcButton.id !== "." || decimalAvailable === true) {
      displayEntry += `${calcButton.id}`;
      display.textContent = displayEntry;

      if (calcButton.id === "."){
        decimalAvailable = false;
      }
      if (calcButton.classList[1] === "operator"){
        decimalAvailable = true;
      }


       }
    }
  )) 

  //Execute calculations 

let calculate = function (){
  let solution = display.textContent;

  while (/[0-9]+[\+|\-|\*|\/][0-9]+/.test(solution)){
    let firstEquation = solution.match(/[0-9]+[\+|\-|\*|\/][0-9]+/)[0];
    let operatorPosition = firstEquation.search(/[\+|\-|\*|\/]/);
    let num1 = firstEquation.slice(0,(operatorPosition));
    let opeartor = firstEquation.slice(operatorPosition, (operatorPosition+1));
    let num2 = firstEquation.slice((operatorPosition+1))
    let tempSolution = operate (opeartor, num1, num2);
console.log(tempSolution);
    let remaining = solution.slice((firstEquation.length))
    solution = tempSolution + remaining;
}
return solution;
}


//Extra credit
//Add keyboard support
//Check for bugs
//Clean up code
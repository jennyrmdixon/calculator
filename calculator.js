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
  display.textContent = displayEntry;

  const calcButtons = document.querySelectorAll('.calculatorButton');
  calcButtons.forEach(calcButton => calcButton.addEventListener('click', () => {
   
    if (calcButton.id === "clear"){
      displayEntry = "";
      display.textContent = displayEntry;
    }

    else if (calcButton.id === "="){
      //There is an equation - solve it
      if  (/[0-9]+[\+|\-|\*|\/][0-9]+/.test(display.textContent)){
      displaySolution = calculate();
      displayEntry = displaySolution;
      display.textContent = displaySolution;
      }
    }
    
    else {
      displayEntry+= `${calcButton.id}`;
      display.textContent = displayEntry;
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
//Center the calculator, make it look nice
//Add decimal button but limit to 1 per number
//Add backspace button
//Add keyboard support
//Clear after entering a new number
//Check for bugs
//Clean up
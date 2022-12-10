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

  //Populate display value
  //After a solution, replace content with a different variable and clear display text content
  //On next click, replace again with display content
  const display = document.querySelector('#display p');
  display.textContent = "";

  const calcButtons = document.querySelectorAll('.calculatorButton');
  calcButtons.forEach(calcButton => calcButton.addEventListener('click', () => {
    if (calcButton.id === "clear"){
      display.textContent = "";
    }

    else if (calcButton.id === "="){
      display.textContent = calculate();

      calcButtons.forEach(calcButton => calcButton.addEventListener('click', () => {
        if (calcButton.id === "clear"){
          display.textContent = "";
        }      
        else {
          display.textContent += `${calcButton.id}`;
        }
      }
  ))
    }
    
    else {
      display.textContent += `${calcButton.id}`;
    }
  } 

  ))  

//edit for above logic:
//if clear, reset textConent
//if equals, equate function to calculate, then displays answer ("solution" string)
//otherwise, update display text content

let calculate = function (){
  let solution = display.textContent;
  while (/[0-9]+[\+|\-|\*|\/][0-9]+/.test(solution)){
    let firstEquation = solution.match(/[0-9]+[\+|\-|\*|\/][0-9]+/)[0];
    let operatorPosition = firstEquation.search(/[\+|\-|\*|\/]/);
    let num1 = firstEquation.slice(0,(operatorPosition));
    let opeartor = firstEquation.slice(operatorPosition, (operatorPosition+1));
    let num2 = firstEquation.slice((operatorPosition+1))
    let tempSolution = operate (opeartor, num1, num2);

    //finding part of display remaining
    let remaining = solution.slice((firstEquation.length))
    solution = tempSolution + remaining;
}
return solution;
}




//Next steps
//Find a way to make the buttons start over on next use
  //Fix the display size




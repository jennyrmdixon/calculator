//Define basic opeartor functions

const add = function(num1, num2) {
    return num1 + num2;
      
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
  const display = document.querySelector('#display p');
  display.textContent = "";

  const calcButtons = document.querySelectorAll('.calculatorButton');
  calcButtons.forEach(calcButton => calcButton.addEventListener('click', () => {
    if (calcButton.id === "clear" || calcButton.id === "="){
      display.textContent = "";
    }
    else {
      display.textContent += `${calcButton.id}`;
    }
  } 
  ))

  //Work in progress
//Regex variable
//const operators = value.match(+*-/);

//Calculate answers
// let calcAnswer = "";

// function runningTotoal (){
//   if (hasNumber(display.textContent)){
//     if ()
//   }
//   else{
//     console.log("Reached else")
//   }
// }

//write a regular expression to match number plus operator plus another number plus equals

//if there's a number, go to next step
//if there's an operator, go to next step
//if there's another number, go to next step
//if there's an equal sign, use findsolution to find new number, and restart (should go past #1)

//Run function upon page load

//findsolution
//search string for operator
//identify the operator as a variable, and where it is in string
//pull out everything before string as num 1
//pull out everything after string as num 2


//check if display text content has number, operator, another number
//check what the operator is
//use that to execute the operation


  //Fix the display size




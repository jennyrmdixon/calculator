//Define basic functions

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


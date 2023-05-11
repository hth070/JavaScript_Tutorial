/*
•Factorial Division
Write a function that receives two integer numbers. Calculate the factorial of each number.
 Divide the first result by the second and print the division formatted to the second decimal point.

Examples
Input: 5, 2
Output: 60.00

Examples
Input: 6, 2
Output: 360.00

Hints
·Read more about factorial here: https://en.wikipedia.org/wiki/Factorial
You can use recursion
*/

function factorialDivision(num1, num2) {
    const factorial1 = calculateFactorial(num1);
    const factorial2 = calculateFactorial(num2);
    const division = factorial1 / factorial2;
    const formattedResult = division.toFixed(2);
  
    console.log(formattedResult);
  }
  
  function calculateFactorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * calculateFactorial(num - 1);
    }
  }
  
  // Test cases
  factorialDivision(5, 2);
  // Output:
  // 60.00
  
  factorialDivision(6, 2);
  // Output:
  // 360.00
  
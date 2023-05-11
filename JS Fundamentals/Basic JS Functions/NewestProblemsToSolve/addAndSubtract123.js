/*
•Add and Subtract
You will receive three integer numbers. 
Write a function sum() to calculate the sum of the first two integers and a function subtract(), 
which subtracts the result of the function the sum() and the third integer.

Input: 23, 6, 10
Output: 19
Input: 1, 17, 30
Output: -12
Input: 42, 58, 100
Output: 0
*/

function sum(a, b) {
    return a + b;
  }
  
  function subtract(result, c) {
    return result - c;
  }
  
  let result = sum(23, 6);
  console.log(subtract(result, 10));    // Output: 19
  
  result = sum(1, 17);
  console.log(subtract(result, 30));    // Output: -12
  
  result = sum(42, 58);
  console.log(subtract(result, 100));   // Output: 0
  
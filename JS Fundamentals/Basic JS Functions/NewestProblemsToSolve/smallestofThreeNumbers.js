/*|
JS Functions

•Smallest of Three Numbers
Write a function that receives three integers and prints the smallest number. 
Use an appropriate name for the function.
Example:

Input - 2, 5, 3
Output - 2
Input - 600, 342, 123
Output - 123
Input - 25, 21, 4
Output - 4
Input - 2, 2, 2
Output - 2
*/
function findSmallestNumber(num1, num2, num3) {
    return Math.min(num1, num2, num3);
  }
  
  console.log(findSmallestNumber(2, 5, 3));      // Output: 2
  console.log(findSmallestNumber(600, 342, 123));   // Output: 123
  console.log(findSmallestNumber(25, 21, 4));     // Output: 4
  console.log(findSmallestNumber(2, 2, 2));       // Output: 2
  
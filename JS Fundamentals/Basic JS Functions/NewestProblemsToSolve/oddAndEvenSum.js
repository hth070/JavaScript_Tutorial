/*
•Odd and Even Sum
You will receive a single number. You have to write a function, 
that returns the sum of all even and all odd digits from that number.

Examples
Input: 1000435
Output:  Odd sum = 9, Even sum = 4
Input: 3495892137259234
Output:  Odd sum = 54, Even sum = 22
*/

function oddAndEvenSum(number) {
    // Convert the number to a string
    const numString = number.toString();
  
    // Initialize variables to store the sum of odd and even digits
    let oddSum = 0;
    let evenSum = 0;
  
    // Iterate over each character in the string
    for (let i = 0; i < numString.length; i++) {
      const digit = parseInt(numString[i]);
  
      // Check if the digit is odd or even
      if (digit % 2 === 0) {
        evenSum += digit;
      } else {
        oddSum += digit;
      }
    }
  
    // Return the sums as an object
    return {
      oddSum: oddSum,
      evenSum: evenSum
    };
  }
  
  // Test cases
  console.log(oddAndEvenSum(1000435)); // { oddSum: 9, evenSum: 4 }
  console.log(oddAndEvenSum(3495892137259234)); // { oddSum: 54, evenSum: 22 }
  
function isPalindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i].toString();
      const reversedNum = num.split('').reverse().join('');
      const isPalindrome = num === reversedNum;
  
      console.log(isPalindrome);
    }
  }
  
  // Test case
  isPalindromeIntegers([123, 323, 421, 121]);
  // Output:
  // false
  // true
  // false
  // true
  
  isPalindromeIntegers([32, 2, 232, 1010]);
  // Output:
  // false
  // true
  // true
  // false
  

/*
•Palindrome Integers
A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. 
Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.
Output
·If the current integer is a palindrome, print: "true"
·Otherwise, print: "false"

Examples
Input: [123,323,421,121]
Output: 
false
true
false
true

Input: [32,2,232,1010]
Output: 
false
true
true
false
*/


function modifyArray(arr) {
    let modifiedArr = arr.map((num, index) => {
      if (num % 2 === 0) {
        // If the number is even, add its index position to its value
        return num + index;
      } else {
        // If the number is odd, subtract its index position from its value
        return num - index;
      }
    });
  
    // Calculate the sum of the original array and the modified array
    let originalSum = arr.reduce((sum, num) => sum + num, 0);
    let modifiedSum = modifiedArr.reduce((sum, num) => sum + num, 0);
  
    // Print the modified array, the sum of the original array, and the sum of the modified array
    console.log(modifiedArr);
    console.log(originalSum);
    console.log(modifiedSum);
  }
  
  // Example usage:
  modifyArray([5, 15, 23, 56, 35]);
  

/*
(5) [ 5, 14, 21, 59, 31 ]    - the "(5)" represents the length of the array
134
130
*/
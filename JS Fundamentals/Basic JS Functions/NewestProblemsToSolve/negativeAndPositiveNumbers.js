// Given array of elements holding numbers
let inputArray = [-5, 2, -10, 7, 0, -3];

// Initialize empty arrays to hold negative and positive (or 0) numbers
let negativeNumbers = [];
let positiveNumbers = [];

// Loop through each element of inputArray
for (let i = 0; i < inputArray.length; i++) {
  let element = inputArray[i];

  // Check if element is negative
  if (element < 0) {
    // Prepend negative element to the front of the negativeNumbers array
    negativeNumbers.unshift(element);
  } else {
    // Append positive (or 0) element to the end of the positiveNumbers array
    positiveNumbers.push(element);
  }
}

// Combine the negativeNumbers and positiveNumbers arrays to form the result array
let result = negativeNumbers.concat(positiveNumbers);

// Print each element of the result array on a separate line
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}

-5
-10
-3
2
7
0


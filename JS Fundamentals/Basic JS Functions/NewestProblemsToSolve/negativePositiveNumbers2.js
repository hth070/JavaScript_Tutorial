// Given array of elements holding strings
let inputArray = ["one", "two", "three", "four", "five", "six"];

// Initialize an empty array to hold 4-character strings
let result = [];

// Loop through each element of inputArray
for (let i = 0; i < inputArray.length; i++) {
  let element = inputArray[i];

  // Check if element has exactly 4 characters
  if (element.length === 4) {
    // Add 4-character element to the result array
    result.push(element);
  }
}

// Print the result array on a single line separated by whitespace
console.log(result.join(" "));

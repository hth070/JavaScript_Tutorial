function findTopIntegers(arr) {
    let topIntegers = [];
    let maxSoFar = -Infinity;
  
    // Loop through the array from right to left
    for (let i = arr.length - 1; i >= 0; i--) {
      // If the current element is greater than the maxSoFar, add it to the topIntegers array and update maxSoFar
      if (arr[i] > maxSoFar) {
        topIntegers.push(arr[i]);
        maxSoFar = arr[i];
      }
    }
  
    // Reverse the topIntegers array to get the results in the correct order, and print them separated by a single space
    console.log(topIntegers.reverse().join(" "));
  }
  
  // Example usage:
  findTopIntegers([14, 24, 3, 19, 15, 17]);

  /*
  Output should be: 
  24 19 17
  */
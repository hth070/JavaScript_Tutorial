function findLongestSequence(arr) {
    let currentSeqStart = 0;
    let currentSeqLength = 1;
    let longestSeqStart = 0;
    let longestSeqLength = 1;
  
    // Loop through the array from left to right
    for (let i = 1; i < arr.length; i++) {
      // If the current element is equal to the previous element, increment the current sequence length
      if (arr[i] === arr[i - 1]) {
        currentSeqLength++;
      } else {
        // If the current element is not equal to the previous element, check if the current sequence is longer than the longest sequence seen so far
        if (currentSeqLength > longestSeqLength) {
          longestSeqLength = currentSeqLength;
          longestSeqStart = currentSeqStart;
        }
        // Reset the current sequence start and length for the next sequence
        currentSeqStart = i;
        currentSeqLength = 1;
      }
    }
  
    // Check if the last sequence is longer than the longest sequence seen so far
    if (currentSeqLength > longestSeqLength) {
      longestSeqLength = currentSeqLength;
      longestSeqStart = currentSeqStart;
    }
  
    // Extract the longest sequence from the original array using slice, and print it to the console
    console.log(arr.slice(longestSeqStart, longestSeqStart + longestSeqLength).join(" "));
  }
  
  // Example usage:
  findLongestSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

/*
Output should be:
2 2 2
*/
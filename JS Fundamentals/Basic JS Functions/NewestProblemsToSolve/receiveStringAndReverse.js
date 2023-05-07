function reverseArrayInPlace(arr) {
    // Calculate the midpoint of the array
    const mid = Math.floor(arr.length / 2);
  
    // Loop through the first half of the array
    for (let i = 0; i < mid; i++) {
      // Swap the current element with the corresponding element at the end of the array
      const temp = arr[i];
      arr[i] = arr[arr.length - i - 1];
      arr[arr.length - i - 1] = temp;
    }
  
    // Print the reversed array elements on the same line
    console.log(arr.join(" "));
  }
  
  // Example usage:
  reverseArrayInPlace(["a", "b", "c", "d", "e", "e", "d", "c", "b", "a"]);
  
  /*
  Should output: 
  a b c d e e d c b a
*/
function rotateArray(arr, rotations) {
    // Calculate the effective number of rotations (i.e. reduce rotations modulo arr.length)
    const effectiveRotations = rotations % arr.length;
  
    // Use the slice method to extract the elements from index effectiveRotations to the end of the array, and concatenate them with the elements from the beginning of the array up to index effectiveRotations
    const rotatedArr = arr.slice(effectiveRotations).concat(arr.slice(0, effectiveRotations));
  
    // Print the rotated array elements separated by a single space
    console.log(rotatedArr.join(" "));
  }
  
  // Example usage:
  rotateArray([51, 47, 32, 61, 21], 2);

/*
Output should be:
32 61 21 51 47
*/
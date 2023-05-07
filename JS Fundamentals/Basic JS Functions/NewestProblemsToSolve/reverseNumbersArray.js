function reverseArray(n, arr) {
    // Create a new array with n elements
    let newArr = new Array(n);
  
    // Copy the last n elements of arr into newArr
    for (let i = 0; i < n; i++) {
      newArr[i] = arr[arr.length - i - 1];
    }
  
    // Print each element of newArr on a new line
    newArr.forEach(elem => console.log(elem));
  }
  
  // Example usage:
  reverseArray(3, [10, 20, 30, 40]);


/* This should output:
30
20
10
*/

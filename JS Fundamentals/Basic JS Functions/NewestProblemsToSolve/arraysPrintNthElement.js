function printNthElement(arr) {
    // Parse the step value from the last element of the array
    const step = parseInt(arr.pop());
  
    // Collect every N-th element using a loop and the step value
    const collected = [];
    for (let i = 0; i < arr.length; i += step) {
      collected.push(arr[i]);
    }
  
    // Print the collected elements separated by a single space
    console.log(collected.join(" "));
  }
  
  // Example usage:
  printNthElement(["5", "20", "31", "4", "20", "2"]);

  /*
  OUTPUT SHOULD BE:
  */